#!/usr/bin/env python3
"""
Fixes the two problems left by the CSV bulk-import into vocabpal.atlassian.net (SCRUM):
  1. ~170 subtask-level issues have no `parent` set.
  2. ~185 issues have no `description`.

How the mapping works
----------------------
The CSV import assigned brand-new sequential keys (SCRUM-1, SCRUM-2, ...) in the exact
order the 200 rows appeared in the CSV, which was itself sorted ascending by the
*original* (pre-deletion) ticket number. So:

    live issues sorted by numeric key  <-->  reconstruction rows sorted by numeric key

This was verified 1:1 against all 200 rows (see tickets2.json, built from
katie-learning-notes' synced Jira comments + VocabPal-Learning/docs/SESSION_LOG.md) —
zero positional mismatches. That positional mapping is what this script uses to figure
out each live issue's *correct* parent and description.

Usage
-----
    cd "VocabPal-Learning"
    python3 scripts/fix-jira-import.py            # dry run — prints the plan, writes nothing
    python3 scripts/fix-jira-import.py --apply     # actually performs the writes

Requires JIRA_EMAIL / JIRA_API_TOKEN in .env (same as scripts/sync-jira.js).
Requires: pip install requests   (or edit to use urllib if you don't have requests)
"""

import os
import sys
import json
import base64
import time
import argparse
from pathlib import Path

try:
    import requests
except ImportError:
    print("This script needs the `requests` package: pip install requests")
    sys.exit(1)

HERE = Path(__file__).resolve().parent
PROJECT_ROOT = HERE.parent
SITE = "https://vocabpal.atlassian.net"
PROJECT_KEY = "SCRUM"

RECON_JSON_PATH = HERE / "jira-reconstruction.json"  # see note at bottom of file


def load_env():
    env_path = PROJECT_ROOT / ".env"
    env = {}
    for line in env_path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        v = v.strip()
        if len(v) >= 2 and v[0] == v[-1] and v[0] in ('"', "'"):
            v = v[1:-1]
        env[k.strip()] = v
    return env


def auth_header(email, token):
    b64 = base64.b64encode(f"{email}:{token}".encode()).decode()
    return {"Authorization": f"Basic {b64}", "Accept": "application/json", "Content-Type": "application/json"}


def get_subtask_type_id(headers):
    r = requests.get(f"{SITE}/rest/api/3/project/{PROJECT_KEY}", headers=headers)
    r.raise_for_status()
    for it in r.json()["issueTypes"]:
        if it["name"] == "Subtask":
            return it["id"]
    raise RuntimeError("No 'Subtask' issue type found on this project")


def fetch_all_issues(headers):
    issues = []
    next_token = None
    while True:
        params = {
            "jql": f"project = {PROJECT_KEY} ORDER BY key ASC",
            "maxResults": 100,
            "fields": "summary,description,issuetype,parent,status",
        }
        if next_token:
            params["nextPageToken"] = next_token
        r = requests.get(f"{SITE}/rest/api/3/search/jql", headers=headers, params=params)
        if r.status_code >= 300:
            print(f"  HTTP {r.status_code} from Jira: {r.text[:400]}")
        r.raise_for_status()
        data = r.json()
        issues.extend(data["issues"])
        if data.get("isLast", True) or not data.get("nextPageToken"):
            break
        next_token = data["nextPageToken"]
    return issues


def key_num(key):
    return int(key.split("-")[1])


def to_adf(text):
    """Plain text -> minimal Atlassian Document Format for the description field."""
    paras = [p for p in text.split("\n\n") if p.strip()] or [text]
    return {
        "type": "doc",
        "version": 1,
        "content": [
            {"type": "paragraph", "content": [{"type": "text", "text": p.strip()}]}
            for p in paras
        ],
    }


def synth_description(recon_row, parent_summary):
    """Build an honest, non-fabricated description for rows with no real synced content."""
    detail = recon_row["detail"]
    kind = recon_row["type"]
    summary = recon_row["summary"]
    if kind == "Story":
        return (
            f"{summary}\n\n"
            f"Sprint: {recon_row['sprint']}. Status per the session log: {recon_row['status']}.\n\n"
            f"Reconstructed from {recon_row['source']} after the original Jira project was deleted "
            f"for inactivity — this description did not survive, only the story title and its subtasks."
        )
    # Task
    if detail.startswith("Title only"):
        return (
            f"{summary}\n\n"
            f"Part of: {parent_summary}\n\n"
            f"Reconstructed from VocabPal-Learning/docs/SESSION_LOG.md after the original Jira project "
            f"was deleted for inactivity. The subtask title survived in the session log; the original "
            f"ticket description did not."
        )
    # generic "Subtask of X" fallback rows — title itself wasn't individually recorded
    return (
        f"One of the subtasks grouped under: {parent_summary}\n\n"
        f"Reconstructed from VocabPal-Learning/docs/SESSION_LOG.md, which recorded this subtask's "
        f"existence and parent story but not its individual title or description before the original "
        f"Jira project was deleted for inactivity."
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true", help="actually write changes (default is dry-run)")
    ap.add_argument("--sleep", type=float, default=0.25, help="seconds between write calls")
    args = ap.parse_args()

    if not RECON_JSON_PATH.exists():
        print(f"Missing {RECON_JSON_PATH}.")
        print("Copy tickets2.json from the reconstruction (Claude's scratchpad) to that path first.")
        sys.exit(1)

    env = load_env()
    headers = auth_header(env["JIRA_EMAIL"], env["JIRA_API_TOKEN"])

    me = requests.get(f"{SITE}/rest/api/3/myself", headers=headers)
    if me.status_code != 200:
        print(f"Auth check failed ({me.status_code}): {me.text[:300]}")
        print("Check JIRA_EMAIL / JIRA_API_TOKEN in .env.")
        sys.exit(1)
    print(f"Authenticated as: {me.json().get('emailAddress')}")

    print("Fetching live issues from", SITE, "...")
    live = fetch_all_issues(headers)
    print(f"  {len(live)} issues fetched")

    recon = json.loads(RECON_JSON_PATH.read_text())

    live_sorted = sorted(live, key=lambda x: key_num(x["key"]))
    recon_sorted = sorted(recon, key=lambda x: key_num(x["key"]))

    if len(live_sorted) != len(recon_sorted):
        print(f"WARNING: live has {len(live_sorted)} issues, reconstruction has {len(recon_sorted)} — "
              f"positional mapping may be wrong. Aborting.")
        sys.exit(1)

    # sanity-check the positional mapping before trusting it
    mismatches = sum(1 for l, r in zip(live_sorted, recon_sorted) if l["fields"]["summary"] != r["summary"])
    print(f"Positional mapping check: {mismatches} summary mismatches out of {len(live_sorted)}")
    if mismatches:
        print("Mapping does not look 1:1 anymore (issues added/deleted/reordered since the reconstruction).")
        print("Aborting rather than risk writing wrong parents.")
        sys.exit(1)

    live_by_recon_key = {r["key"]: l for l, r in zip(live_sorted, recon_sorted)}
    recon_by_key = {r["key"]: r for r in recon_sorted}
    live_by_key = {x["key"]: x for x in live_sorted}

    parent_updates = []   # (live_key, correct_live_parent_key, needs_subtask_conversion, recon_row)
    desc_updates = []     # (live_key, adf_description, recon_row)

    for live_issue, recon_row in zip(live_sorted, recon_sorted):
        live_key = live_issue["key"]
        fields = live_issue["fields"]

        # ---- parent ----
        recon_parent_key = recon_row.get("parent") or ""
        if recon_parent_key and recon_parent_key in live_by_recon_key:
            correct_parent_live_key = live_by_recon_key[recon_parent_key]["key"]
            current_parent = (fields.get("parent") or {}).get("key")
            if current_parent != correct_parent_live_key:
                # A Task-type issue can only be parented to an Epic in this project's
                # hierarchy; a Story-level parent requires the child to be a Subtask.
                parent_type_name = live_by_key[correct_parent_live_key]["fields"]["issuetype"]["name"]
                current_type_name = fields["issuetype"]["name"]
                needs_conversion = parent_type_name != "Epic" and current_type_name != "Subtask"
                parent_updates.append((live_key, correct_parent_live_key, needs_conversion, recon_row))

        # ---- description ----
        if not fields.get("description"):
            if recon_row.get("description"):
                text = recon_row["description"]
            elif recon_row["type"] in ("Story", "Task"):
                parent_summary = recon_by_key.get(recon_parent_key, {}).get("summary", recon_parent_key)
                text = synth_description(recon_row, parent_summary)
            else:
                text = None
            if text:
                desc_updates.append((live_key, text, recon_row))

    print(f"\nPlan:")
    print(f"  parent fixes needed:      {len(parent_updates)}")
    print(f"  description fills needed: {len(desc_updates)}")

    conversions_needed = sum(1 for *_, needs_conv, _r in parent_updates if needs_conv)
    print(f"  of which need Task -> Subtask conversion: {conversions_needed}")

    print("\nSample parent fixes:")
    for live_key, parent_key, needs_conv, r in parent_updates[:5]:
        tag = " (+ convert to Subtask)" if needs_conv else ""
        print(f"  {live_key} ({r['summary'][:45]!r}) -> parent {parent_key}{tag}")

    print("\nSample description fills:")
    for live_key, text, r in desc_updates[:3]:
        print(f"  {live_key}: {text[:90]!r}...")

    if not args.apply:
        print("\nDry run only — no writes performed. Re-run with --apply to execute.")
        return

    subtask_type_id = get_subtask_type_id(headers) if conversions_needed else None
    if conversions_needed:
        print(f"Subtask issue type id: {subtask_type_id}")

    print("\nApplying changes...")
    errors = []

    for live_key, parent_key, needs_conv, r in parent_updates:
        fields = {"parent": {"key": parent_key}}
        if needs_conv:
            fields["issuetype"] = {"id": subtask_type_id}
        resp = requests.put(
            f"{SITE}/rest/api/3/issue/{live_key}",
            headers=headers,
            json={"fields": fields},
        )
        if resp.status_code >= 300:
            errors.append((live_key, "parent", resp.status_code, resp.text[:300]))
            print(f"  FAILED parent {live_key} -> {parent_key}: {resp.status_code} {resp.text[:150]}")
        else:
            print(f"  OK parent {live_key} -> {parent_key}" + (" (converted to Subtask)" if needs_conv else ""))
        time.sleep(args.sleep)

    for live_key, text, r in desc_updates:
        resp = requests.put(
            f"{SITE}/rest/api/3/issue/{live_key}",
            headers=headers,
            json={"fields": {"description": to_adf(text)}},
        )
        if resp.status_code >= 300:
            errors.append((live_key, "description", resp.status_code, resp.text[:300]))
            print(f"  FAILED description {live_key}: {resp.status_code} {resp.text[:150]}")
        else:
            print(f"  OK description {live_key}")
        time.sleep(args.sleep)

    print(f"\nDone. {len(errors)} errors out of {len(parent_updates) + len(desc_updates)} writes.")
    if errors:
        print("\nFirst 10 errors:")
        for e in errors[:10]:
            print(" ", e)


if __name__ == "__main__":
    main()
