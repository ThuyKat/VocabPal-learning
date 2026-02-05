# CLAUDE.md — VocabPal Learning Project

> This file is read at the start of every Claude Code session.

---

## CRITICAL REMINDER

**After EVERY significant action, update `docs/SESSION_LOG.md`:**
- Code review completed? → Update session log
- Jira ticket transitioned? → Update session log
- Fixed a bug or answered a question? → Update session log
- Created/modified files? → Update session log

**Do NOT wait until the end of the session. Log as you go.**

---

## Project Context

**What:** Rebuilding VocabPal from scratch as a learning exercise.

**Who:**
- **Katie** - Junior engineer learning to build this project
- **Claude** - Tech lead and scrum master guiding the process

**Why:** Katie wants to learn how to build a full-stack project properly, not just have it built for her.

**Original VocabPal:** Lives at `/Users/katiem/Desktop/VocabPal` - DO NOT MODIFY (in active use)

**This Learning Project:** `/Users/katiem/Desktop/VocabPal-Learning` - Build from scratch here

---

## Katie's Skill Profile

| Skill | Level |
|-------|-------|
| React | Some experience (1-2 small projects) |
| TypeScript | Basic (knows types, used a bit) |
| Firebase | Never used |
| Chrome Extensions | Built one simple one before |

**Teaching approach:** Break tasks into small subtasks with learning materials (videos/docs) before coding tasks.

---

## External Tools Connected

### Jira
- **Site:** https://katienguyen1293.atlassian.net
- **Project:** VocalPal (key: SCRUM)
- **Credentials:** In `.env` file

### Confluence
- **Space:** VocabPal Learning Project (key: VP)
- **URL:** https://katienguyen1293.atlassian.net/wiki/spaces/VP

---

## Jira Structure

```
Epic: SCRUM-5 (VocabPal - Vocabulary Learning App)
│
├── Story: SCRUM-6 (Set up monorepo project structure)
│   ├── Subtask: SCRUM-11 (Learn: What is a monorepo?)
│   ├── Subtask: SCRUM-12 (Create root package.json)
│   ├── Subtask: SCRUM-13 (Create folder structure)
│   ├── Subtask: SCRUM-14 (Learn: What is TypeScript?)
│   ├── Subtask: SCRUM-15 (Set up TypeScript config)
│   ├── Subtask: SCRUM-16 (Set up ESLint/Prettier)
│   └── Subtask: SCRUM-17 (Verify and commit)
│
├── Story: SCRUM-7 (Define TypeScript interfaces)
├── Story: SCRUM-8 (Create Firebase project)
├── Story: SCRUM-9 (Implement Dictionary API adapter)
└── Story: SCRUM-10 (Create Firebase service utilities)
```

**Sprint 1 - Foundation:** Jan 17-24, 2026 (ACTIVE)

---

## 4-Sprint Teaching Plan

| Sprint | Focus | Key Learnings |
|--------|-------|---------------|
| Sprint 1 | Foundation | Monorepo, TypeScript, Firebase basics, API adapters |
| Sprint 2 | Chrome Extension | Manifest V3, content scripts, service workers, popup UI |
| Sprint 3 | Web App | React routing, Firestore real-time sync, state management |
| Sprint 4 | Polish & Deploy | Testing, CI/CD, deployment, Chrome Web Store |

---

## What VocabPal Does

A vocabulary learning tool:
- **Chrome Extension** - Highlight words while browsing to save them
- **Web App** - Full word management, flashcards, categories
- **Firebase Backend** - Auth (Google) + Firestore for sync
- **Dictionary API** - Free Dictionary API for definitions

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Extension | Chrome Manifest V3, React, TypeScript |
| Web App | React, TypeScript, Tailwind CSS |
| Backend | Firebase (Auth + Firestore) |
| Dictionary | Free Dictionary API |
| Build | Vite |

---

## Commands

```bash
# API Authentication (credentials in .env)
# Use base64 encoded header (more reliable than -u flag):
source .env && TOKEN_B64=$(echo -n "$JIRA_EMAIL:$JIRA_API_TOKEN" | base64)
curl -H "Authorization: Basic $TOKEN_B64" "URL_HERE"

# Jira API base: https://katienguyen1293.atlassian.net/rest/api/3/
# Confluence API base: https://katienguyen1293.atlassian.net/wiki/rest/api/

# Project commands (once set up)
npm install        # Install all workspace dependencies
npm run build      # Build all packages
npm run lint       # Run ESLint
```

---

## Session Workflow

**At session start:**
1. Read this file first
2. **Read `docs/SESSION_LOG.md`** to know where we left off in previous sessions
3. Check Jira for current sprint/tickets
4. Continue from where we left off

**During session:**
- **UPDATE SESSION LOG IMMEDIATELY** after completing any task (don't batch updates!)
- Log ALL activities: code reviews, Jira transitions, fixes, questions answered, files created/renamed
- When Katie asks Claude to do something, add it to the session log right after doing it
- **All work must have a Jira ticket** — before starting any new task (fix, feature, refactor), check if a ticket exists. If not, create one first. This ensures all work is tracked and pre-defined.

**At session end (or when Katie asks):**
1. Update `docs/SESSION_LOG.md` locally with everything done
2. Update Confluence session log page (same content)
3. Note current status and next steps

**IMPORTANT:** Always update BOTH local and Confluence session logs together

---

## Code Review Workflow

When reviewing Katie's completed tickets:

1. **Check the code** - Verify the implementation works correctly
2. **Comment on each subtask** - Add Jira comment with feedback:
   - Use `[Code Review Feedback]` for approved work
   - Use `[Code Review - Changes Needed]` if fixes required
   - Be specific about what's good and what needs fixing
3. **If changes needed** - Document what to fix:
   - List specific issues (typos, bugs, missing exports, etc.)
   - Explain WHY the change is needed (learning opportunity)
4. **Comment on parent story** - After all subtasks reviewed:
   - Add overall feedback with `[Code Review - APPROVED]` or `[Code Review - Changes Needed]`
   - Include "What went well" and "Tips for next time"
5. **Answer questions** - If Katie left questions in comments, reply on the same ticket
6. **Update session log** - After code review is complete:
   - Update `docs/SESSION_LOG.md` locally
   - Update Confluence session log page
   - Include: tickets reviewed, issues found, fixes applied

---

## Confluence Pages

| Page | Purpose |
|------|---------|
| VocabPal Learning Project Home | Space homepage |
| Project Overview | What VocabPal does |
| Teaching Plan - 4 Sprint Structure | Sprint breakdown |
| VocabPal Project Plan | Full project plan with status |
| How the Jira Project Was Set Up | Jira setup documentation |
| **Session Logs/** | Folder for all session logs |
| └─ Session 1 - Jan 17, 2026 | Project setup, Jira, Confluence |
| └─ Session 2 - Jan 18, 2026 | SCRUM-11 to SCRUM-15, ESLint fix |
| └─ Session 3 - Jan 18, 2026 | SCRUM-6 closed |
| └─ Session 4 - Feb 2, 2026 | SCRUM-7 review session |
| └─ Session 5 - Feb 3, 2026 | SCRUM-8 review and completion |
| └─ Session 6 - Feb 5, 2026 | SCRUM-9 review and completion |

**Naming convention for session logs:** `Session N - Mon DD, YYYY`
