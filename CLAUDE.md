# CLAUDE.md — VocabPal Learning Project

> This file is read at the start of every Claude Code session.

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
# Jira API (credentials in .env)
# Use curl with: -u "$JIRA_EMAIL:$JIRA_API_TOKEN"

# Confluence API
# Same credentials, base URL: https://katienguyen1293.atlassian.net/wiki/rest/api/

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

**At session end (or after significant work):**
1. Update `docs/SESSION_LOG.md` with what was done
2. Note current status and next steps

---

## Code Review Workflow

When reviewing Katie's completed tickets:

1. **Check the code** - Verify the implementation works correctly
2. **If changes needed** - Make the fix, then document it:
   - Add a Jira comment with `[Code Review - Changes Made]` header
   - List all files modified/created/deleted
   - Explain WHY the change was needed
   - Include a learning note for future reference
3. **Answer questions** - If Katie left questions in comments, reply on the same ticket
4. **Update descriptions** - If original instructions were wrong/outdated, update the ticket description
5. **Give feedback** - After review, provide overall feedback and save to `docs/FEEDBACK_TO_KATIE.md`:
   - What was done well
   - Areas for improvement
   - Tips for next time
