# Session Log

---

## Session 1 — January 17, 2026

### What We Did

1. **Chose project management tool**
   - Considered Rally vs Jira
   - Decided on Jira (more widely used, free tier, better for learning)

2. **Set up Jira**
   - Katie created Atlassian account and project (key: SCRUM)
   - Connected Claude to Jira API via API token
   - Created Epic SCRUM-5: VocabPal - Vocabulary Learning App
   - Created 5 Stories for Sprint 1 (SCRUM-6 to SCRUM-10)
   - Created Sprint 1 - Foundation (Jan 17-24)
   - Started the sprint

3. **Assessed Katie's skills**
   - React: Some experience
   - TypeScript: Basic
   - Firebase: Never used
   - Chrome Extensions: Built one before

4. **Broke down SCRUM-6 into subtasks**
   - Katie requested smaller steps with learning materials
   - Created 7 subtasks (SCRUM-11 to SCRUM-17)
   - Each includes: Goal, Steps, Learning resources, Done criteria

5. **Set up Confluence**
   - Katie added Confluence product to Atlassian site
   - Created space: VocabPal Learning Project (key: VP)
   - Created 4 documentation pages

6. **Created project folder**
   - Path: `/Users/katiem/Desktop/VocabPal-Learning`
   - Kept existing VocabPal intact (in active use by someone)
   - Initialized git repo
   - Created .gitignore and .env

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **Current Ticket:** SCRUM-11 (Learn: What is a monorepo?) - NOT STARTED
- **Blocked:** Nothing

### Next Steps

1. Katie assigns SCRUM-11 to herself, moves to In Progress
2. Katie reads the monorepo articles (~10 mins)
3. Katie explains monorepo concept to Claude (verification)
4. Move to SCRUM-12 (Create root package.json)

---

## Session 2 — January 18, 2026

### What We Did

1. **Katie completed SCRUM-11 to SCRUM-15**
   - Learned about monorepos and npm workspaces
   - Created root package.json with workspaces
   - Set up folder structure (extension, web, shared)
   - Learned TypeScript basics (left great comments on Jira!)
   - Created tsconfig.json

2. **Code Review & ESLint Fix (SCRUM-16)**
   - Katie reported ESLint error in Jira comment
   - Issue: ESLint v9+ requires new "flat config" format
   - Fixed by creating `eslint.config.js` (replaced `.eslintrc.json`)
   - Changed package.json type to "module"
   - Added lint, format, build scripts

3. **Created subtasks for remaining Sprint 1 stories**
   - SCRUM-7: Define TypeScript interfaces (5 subtasks: SCRUM-18 to SCRUM-22)
   - SCRUM-8: Create Firebase project (6 subtasks: SCRUM-23 to SCRUM-28)
   - SCRUM-9: Dictionary API adapter (5 subtasks: SCRUM-29 to SCRUM-33)
   - SCRUM-10: Firebase service utilities (5 subtasks: SCRUM-34 to SCRUM-38)

4. **Updated CLAUDE.md**
   - Added "Code Review Workflow" section
   - Documents how to handle code changes during reviews

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **SCRUM-6:** In Review (subtasks SCRUM-11 to SCRUM-17 done)
- **Next Stories:** SCRUM-7, SCRUM-8, SCRUM-9, SCRUM-10 (all have subtasks now)
- **Blocked:** Nothing

### Next Steps

1. Complete SCRUM-16 review (ESLint fix done, needs Katie to verify)
2. Complete SCRUM-17 (Verify and commit)
3. Move SCRUM-6 to Done
4. Start SCRUM-7 (Define TypeScript interfaces)

---

## Session 3 — January 18, 2026

### What We Did

1. **Closed out SCRUM-6 (Set up monorepo project structure)**
   - Added review comment to SCRUM-6: "Reviewed - LGTM!"
   - Transitioned SCRUM-6 to Done status
   - First story of Sprint 1 complete!

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **SCRUM-6:** Done ✓
- **Next Story:** SCRUM-7 (Define TypeScript interfaces)
- **Blocked:** Nothing

### Next Steps

1. Start SCRUM-7 (Define TypeScript interfaces)
2. Begin with SCRUM-18 (Learn: TypeScript interfaces basics)

---

## Session 4 — February 2, 2026

### What We Did

1. **Reviewed SCRUM-7 (Define TypeScript interfaces)**
   - Katie completed all 5 subtasks (SCRUM-18 to SCRUM-22)
   - Created interfaces: Word, Category, User, DictionaryResponse, Phonetics, Meaning, Definition
   - File: `shared/src/types/index.ts`

2. **Code Review Feedback**
   - Added feedback comments to all subtasks on Jira:
     - SCRUM-18: Good learning notes on interface vs type, extends vs intersection
     - SCRUM-19: Fixed `phenetics` → `phonetic`, `String` → `string`
     - SCRUM-20: Approved - all fields correct
     - SCRUM-21: Fixed `photoUrl` → `photoURL` (Firebase convention)
     - SCRUM-22: Fixed `string[] | []` → `string[]`, added optional markers
   - Added overall feedback comment on SCRUM-7

3. **Katie applied fixes**
   - All issues resolved
   - Added export statement for all interfaces
   - SCRUM-7 approved and complete

4. **Created Project Plan in Confluence**
   - New page: "VocabPal Project Plan"
   - Contains: Tech stack, 4-sprint breakdown, architecture, feature list
   - URL: https://katienguyen1293.atlassian.net/wiki/spaces/VP/pages/2490370
   - **Linked to Jira Epic SCRUM-5:**
     - Added Jira Issue macro to Confluence page content
     - Macro format: `<ac:structured-macro ac:name="jira"><ac:parameter ac:name="key">SCRUM-5</ac:parameter></ac:structured-macro>`
     - This creates bi-directional link: shows in Jira's "Confluence content" section
     - Note: Generic web links (`/remotelink` API) only show in "Links" section, not "Confluence content"

5. **Reorganized Confluence Session Logs**
   - Created "Session Logs" parent folder
   - Renamed pages to consistent format: `Session N - Mon DD, YYYY`
   - Created missing Session 2 and Session 3 pages
   - Structure:
     ```
     Session Logs/
     ├── Session 1 - Jan 17, 2026
     ├── Session 2 - Jan 18, 2026
     ├── Session 3 - Jan 18, 2026
     └── Session 4 - Feb 2, 2026
     ```

6. **Fixed API Authentication**
   - Discovered `curl -u` doesn't handle special characters in tokens
   - Solution: Use base64-encoded Authorization header
   - Updated CLAUDE.md with correct curl syntax

7. **Updated CLAUDE.md**
   - Added Code Review Workflow section
   - Added Confluence Pages reference table
   - Updated API authentication commands
   - Updated Session Workflow: always log activities to BOTH local and Confluence

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **SCRUM-6:** Done ✓
- **SCRUM-7:** Done ✓
- **Next Story:** SCRUM-8 (Create Firebase project)
- **Blocked:** Nothing

### Next Steps

1. Start SCRUM-8 (Create Firebase project)
2. Begin with SCRUM-23 (Learn: What is Firebase?)

---

## Session 5 — February 3, 2026

### What We Did

1. **Reviewed SCRUM-8 (Create Firebase project)**
   - Katie completed all 6 subtasks (SCRUM-23 to SCRUM-28)
   - Console setup tasks (SCRUM-23 to SCRUM-27) all approved
   - SCRUM-28 (Install Firebase SDK and create config file) needed two fixes:
     - Missing `vite-env.d.ts` type declaration file (TypeScript didn't know about `import.meta.env`)
     - Missing trailing newline in `config.ts`

2. **Code Review Feedback Posted**
   - Added review comments to all subtasks (SCRUM-23 to SCRUM-28) on Jira
   - Added overall review comment on SCRUM-8
   - SCRUM-23: Good Firebase learning notes — approved
   - SCRUM-24: Firebase project created — approved
   - SCRUM-25: Google Auth enabled — approved
   - SCRUM-26: Firestore database created — approved
   - SCRUM-27: Web app registered, config in .env — approved
   - SCRUM-28: Changes requested → Katie fixed → approved

3. **Katie Applied Fixes**
   - Created `shared/src/vite-env.d.ts` with ImportMetaEnv and ImportMeta type declarations
   - Added trailing newline to `shared/src/firebase/config.ts`
   - SCRUM-28 approved after fixes

4. **Jira Updates**
   - SCRUM-28 transitioned to Done
   - SCRUM-8 transitioned to Done

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **SCRUM-6:** Done ✓
- **SCRUM-7:** Done ✓
- **SCRUM-8:** Done ✓
- **Next Story:** SCRUM-9 (Implement Dictionary API adapter)
- **Blocked:** Nothing

### Next Steps

1. Start SCRUM-9 (Implement Dictionary API adapter)
2. Begin with SCRUM-29 (first subtask of SCRUM-9)

---

## Session 6 — February 5, 2026

### What We Did

1. **Reviewed SCRUM-9 (Implement Dictionary API adapter)**
   - Katie completed all 6 subtasks (SCRUM-29 to SCRUM-33, SCRUM-39)
   - Code review on SCRUM-39 (DictionaryAdapter implementation)

2. **Code Review Feedback on SCRUM-39**
   - Issues found:
     - Missing `interface` declaration (created class instead of interface)
     - Used `extends` instead of `implements`
     - Missing exports
     - Extra space in class name
   - Katie asked about interfaces having methods → explained that interfaces declare method signatures (contract), classes provide implementation
   - Posted answer to Jira

3. **Katie Applied Fixes**
   - Created `DictionaryAdapter` interface in `types/index.ts`
   - Changed `FreeDictionaryAdapter` to use `implements DictionaryAdapter`
   - Added exports
   - SCRUM-39 approved and transitioned to Done

4. **Completed SCRUM-33 (Manual Testing)**
   - Wrote test file `DictionaryAdapter.test.ts`
   - Discovered `ts-node` fails silently with ESM modules
   - Used `tsx` instead - tests passed
   - Posted test results and ts-node vs tsx explanation to Jira
   - SCRUM-33 transitioned to Done

5. **Closed SCRUM-9**
   - All subtasks complete
   - Added completion comment
   - Transitioned to Done

6. **File Rename**
   - Renamed `dictionaryApi.test.ts` → `DictionaryAdapter.test.ts` to match content

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **SCRUM-6:** Done ✓
- **SCRUM-7:** Done ✓
- **SCRUM-8:** Done ✓
- **SCRUM-9:** Done ✓
- **SCRUM-10:** To Do
- **Blocked:** Nothing

### Next Steps

1. Start SCRUM-10 (Create Firebase service utilities)
2. Begin with first subtask of SCRUM-10

---

## Session 7 — February 7, 2026

### What We Did

1. **Code Review SCRUM-34 (Learn: Firestore CRUD operations)**
   - Reviewed Katie's learning notes — excellent documentation of all Firestore functions
   - Posted approval comment to Jira

2. **Code Review SCRUM-35 (Create wordService.ts with CRUD operations)**
   - Katie completed wordService.ts with all 5 CRUD operations

   **Round 1 - Initial review found 4 issues:**
   1. ❌ `id: data.id` should be `id: snapshot.id` — document ID is metadata, not in data
   2. ❌ Missing timestamps in `toFirestore()` — timestamps not being saved to Firestore
   3. ❌ `updateWord` missing `updatedAt` — should auto-set on updates
   4. ❌ Type mismatch: `QueryDocumentSnapshot` should be `DocumentSnapshot`

   **Round 2 - Katie fixed 2 of 4:**
   - ✅ Fixed `id: snapshot.id`
   - ✅ Fixed type to `DocumentSnapshot`
   - ❌ Still missing: timestamps not written to Firestore
   - ❌ Still missing: `updateWord` doesn't set `updatedAt`

   **Katie's question:** "Doesn't Firestore auto-generate timestamps?"
   - Answer: NO! Firestore only auto-generates document IDs, not timestamps
   - Added learning note to SCRUM-34 clarifying `Omit` controls caller input, not what's written to DB

   **Round 3 - Katie added `serverTimestamp()`:**
   - ✅ Added `serverTimestamp()` in `toFirestore()`
   - ❌ NEW issue: `updateWord` uses `toFirestore()` which overwrites `createdAt` on every update!

   **Round 4 - Final fixes:**
   - ✅ `updateWord` now directly sets only `updatedAt: serverTimestamp()`
   - ✅ `fromFirestore` uses `.toDate()` for Firestore Timestamps
   - ✅ Minor: `new Date(data.createdAt?.toDate())` is redundant but works

   **SCRUM-35 approved and transitioned to Done**

3. **Katie's Question: Why use `as` type assertion in wordService.ts?**
   - Katie asked about line 19: `const data = snapshot.data(options||{}) as Omit<Word, ...>`
   - Explained: `snapshot.data()` returns generic `DocumentData | undefined`, TypeScript doesn't know the shape
   - Type assertion tells TypeScript what fields exist so we can access `data.word`, `data.definition`, etc.
   - Added learning note as comment on SCRUM-10

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **SCRUM-6:** Done ✓
- **SCRUM-7:** Done ✓
- **SCRUM-8:** Done ✓
- **SCRUM-9:** Done ✓
- **SCRUM-10:** In Progress
  - SCRUM-34: Done ✓
  - SCRUM-35: Done ✓
  - SCRUM-36, 37, 38: To Do
- **Blocked:** Nothing

### Next Steps

1. Continue with SCRUM-36 (categoryService.ts)
2. Then SCRUM-37 (authService.ts)
3. Then SCRUM-38 (export all services)

---

## Session 8 — February 8, 2026

### What We Did

1. **Java Concepts Deep Dive (Learning Discussion)**

   Katie initiated a discussion about Java OOP concepts to solidify understanding. Topics covered:

   **Interface vs Abstract Class:**
   | Use Interface When | Use Abstract Class When |
   |-------------------|------------------------|
   | Need multiple inheritance | Need shared state (instance fields) |
   | Defining a contract/capability | Have partial implementation |
   | Want loose coupling | Need constructors |
   | "Can do" relationship | "Is a" relationship |

   **Key Learnings:**
   - Abstract class CAN implement an interface (common pattern!)
   - Interface fields are always `public static final` (constants only)
   - Abstract classes can have any type of field (static, instance, mutable)
   - Default methods in interfaces provide shared behavior but can't access instance state

   **Java Modifiers:**
   - Access modifiers: `public`, `private`, `protected`, (default)
   - Non-access modifiers: `static`, `final`, `abstract`, `synchronized`, `volatile`, `transient`
   - `static` = belongs to class (shared across instances, mutable)
   - `static final` = belongs to class (constant, immutable)

   **Interface Decision Flow:**
   ```
   Need multiple inheritance?     → Interface
   Need instance fields?          → Abstract class
   Just defining a contract?      → Interface
   Need constructor?              → Abstract class
   "Can do" capability?           → Interface
   "Is a" relationship?           → Abstract class
   Both could work?               → Interface (more flexible)
   ```

2. **Career & Learning Discussion**

   - Discussed relevance of Java in AI era
   - Java still dominates: enterprise, banking, Android, big data (Hadoop/Spark/Kafka)
   - Python dominates AI/ML; TypeScript for web
   - Katie's learning approach: understanding "why" deeply rather than surface-level memorization
   - This approach differentiates developers — deep knowledge is rare

3. **Katie's Summary of Interface Usage:**
   - Loose coupling
   - Multiple inheritance of patterns/structures
   - Shared utility implementation via default methods
   - Can be extended by abstract class
   - Abstract class better when methods need instance fields

### Current Status

- **Sprint:** Sprint 1 - Foundation (ACTIVE)
- **SCRUM-10:** In Progress (SCRUM-34, SCRUM-35 done; SCRUM-36, 37, 38 remaining)
- **Blocked:** Nothing
- **Note:** This was a learning/discussion session, no code changes

### Next Steps

1. Continue with SCRUM-36 (categoryService.ts)
2. Then SCRUM-37 (authService.ts)
3. Then SCRUM-38 (export all services)

---

## Session 9 — [DATE]

*To be filled in next session*

---
