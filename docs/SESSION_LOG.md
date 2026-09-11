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

## Session 9 — February 10, 2026

### What We Did

1. **Code Review SCRUM-36 (categoryService.ts)**
   - Initial review found 2 issues:
     - `toFireStore` typo → should be `toFirestore`
     - Missing `updatedAt` in Omit for createCategory signature
   - Katie fixed both issues
   - Added export keywords to all functions
   - SCRUM-36 approved and transitioned to Done

2. **Code Review SCRUM-37 (authService.ts)**
   - Initial review: implementation was good
   - Only issue: missing trailing newline (already fixed)
   - Good patterns:
     - GoogleAuthProvider usage
     - onAuthStateChange subscription pattern
     - Proper error handling
   - SCRUM-37 approved and transitioned to Done

3. **Code Review SCRUM-38 (index.ts exports)**
   - Katie created barrel export file
   - Initial issue: removed `export` keywords from service files
   - Explained: `export *` only re-exports things already exported
   - Katie fixed by adding `export` back to all functions
   - SCRUM-38 approved and transitioned to Done

4. **Closed SCRUM-10 (Create Firebase service utilities)**
   - All 5 subtasks complete (SCRUM-34 to SCRUM-38)
   - Transitioned to Done

5. **Sprint 1 Complete!**
   - All 5 stories done:
     - SCRUM-6: Set up monorepo ✓
     - SCRUM-7: TypeScript interfaces ✓
     - SCRUM-8: Firebase project ✓
     - SCRUM-9: Dictionary API adapter ✓
     - SCRUM-10: Firebase services ✓

6. **Deep Dive: Auth Patterns (SCRUM-37 discussion)**
   - Answered Katie's questions about onAuthStateChange:
     - Why it's different from getCurrentUser (async vs sync)
     - How React apps use useEffect + subscription pattern
     - Why variable is named `unsubscribe` (name by what it DOES)
     - How to build custom Observer pattern without Firebase
     - Race conditions: subscribe to state, don't check synchronously
   - Updated CLAUDE.md workflow: read comments BEFORE approving

### Current Status

- **Sprint:** Sprint 1 - Foundation (COMPLETE!)
- **SCRUM-6:** Done ✓
- **SCRUM-7:** Done ✓
- **SCRUM-8:** Done ✓
- **SCRUM-9:** Done ✓
- **SCRUM-10:** Done ✓
- **Blocked:** Nothing

7. **Created Sprint 2 - Chrome Extension**
   - Created Sprint 2 in Jira (ID: 36)
   - Created 4 stories with detailed subtasks:

   **SCRUM-40: Set up Chrome Extension project (6 subtasks)**
   - SCRUM-41: Learn Chrome Extension architecture and Manifest V3
   - SCRUM-42: Create manifest.json with Manifest V3 format
   - SCRUM-43: Set up extension folder structure
   - SCRUM-44: Configure Vite for Chrome extension build
   - SCRUM-45: Create basic popup page with React
   - SCRUM-46: Load and test extension in Chrome

   **SCRUM-47: Build popup UI with React (5 subtasks)**
   - SCRUM-48: Learn React patterns for Chrome extensions
   - SCRUM-49: Create WordList component
   - SCRUM-50: Create WordCard component
   - SCRUM-51: Style popup with Tailwind CSS
   - SCRUM-52: Add popup header and footer with web app link

   **SCRUM-53: Implement content script for word highlighting (6 subtasks)**
   - SCRUM-54: Learn Content scripts and message passing
   - SCRUM-55: Create content script for text selection
   - SCRUM-56: Add context menu for saving words
   - SCRUM-57: Add visual feedback when word saved
   - SCRUM-58: Create service worker for background tasks
   - SCRUM-59: Integrate dictionary API lookup

   **SCRUM-60: Connect extension to Firebase (6 subtasks)**
   - SCRUM-61: Configure OAuth client ID for extension
   - SCRUM-62: Implement Google sign-in using chrome.identity
   - SCRUM-63: Test complete flow end-to-end
   - SCRUM-64: Learn Firebase Auth in Chrome extensions
   - SCRUM-65: Wire up wordService to Firestore

### Current Status

- **Sprint 1:** COMPLETE ✅
- **Sprint 2:** Created, ready to start
- **Next ticket:** SCRUM-41 (Learn Chrome Extension architecture)

8. **Compared Sprint 2 with Original VocabPal**
   - Katie asked to verify Sprint 2 matches original VocabPal features
   - Examined original files:
     - `extension/src/background/index.ts` - context menu + notifications
     - `extension/src/content/index.tsx` - floating button on text selection
     - `extension/src/popup/components/Flashcard.tsx` - flip animation, navigation
     - `extension/src/popup/components/WordList.tsx` - grouping by date/source
     - `extension/src/popup/components/CategorySelect.tsx` - multi-select filtering

   **Key findings - original has features I missed:**
   - Floating "Add to VocabPal" button (in ADDITION to context menu)
   - Flashcard component with flip animation
   - WordList grouping by date/source
   - CategorySelect with multi-select filtering

9. **Added Missing Subtasks to Sprint 2**
   - **SCRUM-66:** Add floating "Add to VocabPal" button on text selection (under SCRUM-53)
   - **SCRUM-67:** Create Flashcard component with flip animation (under SCRUM-47)
   - **SCRUM-68:** Add WordList grouping by date and source (under SCRUM-47)
   - **SCRUM-69:** Create CategorySelect component for study filtering (under SCRUM-47)

### Updated Sprint 2 Structure

**SCRUM-47: Build popup UI with React (now 8 subtasks)**

- SCRUM-48: Learn React patterns for Chrome extensions
- SCRUM-49: Create WordList component
- SCRUM-50: Create WordCard component
- SCRUM-51: Style popup with Tailwind CSS
- SCRUM-52: Add popup header and footer with web app link
- SCRUM-67: Create Flashcard component with flip animation _(NEW)_
- SCRUM-68: Add WordList grouping by date and source _(NEW)_
- SCRUM-69: Create CategorySelect component for study filtering _(NEW)_

**SCRUM-53: Implement content script for word highlighting (now 7 subtasks)**

- SCRUM-54: Learn Content scripts and message passing
- SCRUM-55: Create content script for text selection
- SCRUM-56: Add context menu for saving words
- SCRUM-57: Add visual feedback when word saved
- SCRUM-58: Create service worker for background tasks
- SCRUM-59: Integrate dictionary API lookup
- SCRUM-66: Add floating "Add to VocabPal" button on text selection _(NEW)_

10. **Updated CLAUDE.md Workflow**
    - Added reminder to update Confluence pages on major milestones
    - Pages to update: Project Overview, Teaching Plan, VocabPal Project Plan
    - Added Session 9 to Confluence Pages list
    - Updated sprint status (Sprint 1 COMPLETE, Sprint 2 ACTIVE)

11. **Updated Confluence Pages**
    - **VocabPal Project Plan** (page 2490370):
      - Sprint 1 marked COMPLETE ✅
      - All Sprint 1 stories marked Done
      - Added Sprint 2 stories with subtask counts
      - Updated Core Features section (two ways to save words)
    - **Teaching Plan** (page 360449):
      - Added Status column to Sprint Overview table
      - Sprint 1 marked COMPLETE, Sprint 2 IN PROGRESS
      - Added Sprint 2 Breakdown with all stories and subtasks

### Current Status

- **Sprint 1:** COMPLETE ✅
- **Sprint 2:** Updated with 4 new subtasks to match original VocabPal
- **Confluence:** Project Plan and Teaching Plan updated
- **Next ticket:** SCRUM-41 (Learn Chrome Extension architecture)

### Next Steps

1. Start SCRUM-40 (Set up Chrome Extension project)
2. Begin with SCRUM-41 (Learn about Manifest V3)

---

## Session 10 — February 10, 2026

### What We Did

1. **Discussed Testing Strategy**
   - Katie asked: "Should I write tests now or wait until Sprint 4?"
   - Answer: Write tests as you go, not at the end
   - Reasons: You forget how code works, bugs compound, harder to retrofit tests

2. **Created SCRUM-70 (Add unit tests for Sprint 1 services)**
   - New story added to Sprint 2
   - Created 5 subtasks:
     - SCRUM-71: Set up Jest testing framework in monorepo
     - SCRUM-72: Write unit tests for wordService
     - SCRUM-73: Write unit tests for categoryService
     - SCRUM-74: Write unit tests for authService
     - SCRUM-75: Write unit tests for DictionaryAdapter

3. **Installed Jest Dependencies**
   - Ran: `npm install --save-dev jest ts-jest @types/jest`
   - jest: Testing framework
   - ts-jest: TypeScript support for Jest
   - @types/jest: TypeScript type definitions

4. **Added Learning Guides to All Tickets**
   - SCRUM-71: Jest setup steps (config file, package.json script)
   - SCRUM-72: wordService tests (mocking explained, test structure)
   - SCRUM-73: categoryService tests (similar to wordService)
   - SCRUM-74: authService tests (mocking Firebase Auth)
   - SCRUM-75: DictionaryAdapter tests (mocking fetch)

### Current Status

- **Sprint 1:** COMPLETE ✅
- **Sprint 2:** In Progress
- **SCRUM-70:** To Do (testing story)
  - SCRUM-71 ready for Katie to start
- **Blocked:** Nothing

### Next Steps

1. Katie completes SCRUM-71 (create jest.config.js, update package.json)
2. Then SCRUM-72-75 (write the actual tests)

---

## Session 11 — February 10, 2026 (continued)

### What We Did

1. **Explored Original VocabPal Project**
   - Analyzed complete project structure to understand what needs to be rebuilt
   - Documented all features from extension and web app
   - Identified key components: WordCard, Flashcard, CategorySelect, Layout
   - Noted advanced features: PDF support, multi-context, circular definition filtering

2. **Created Sprint 3 - Web App (Sprint ID: 102)**
   - Created 7 stories with 34 subtasks total:

   **SCRUM-76: Set up Web App project (5 subtasks)**
   - SCRUM-83: Learn Vite and React project structure
   - SCRUM-84: Create web folder with Vite + React + TypeScript
   - SCRUM-85: Install and configure Tailwind CSS
   - SCRUM-86: Install React Router and configure routes
   - SCRUM-87: Connect to shared package and verify build

   **SCRUM-77: Create layout and navigation (4 subtasks)**
   - SCRUM-88 to SCRUM-91

   **SCRUM-78: Build Sign-in page (4 subtasks)**
   - SCRUM-92 to SCRUM-95

   **SCRUM-79: Build Words page (6 subtasks)**
   - SCRUM-96 to SCRUM-101: Firestore sync, grouping, filtering, delete

   **SCRUM-80: Build Flashcards page (5 subtasks)**
   - SCRUM-102 to SCRUM-106: Flip animation, navigation, audio, filters

   **SCRUM-81: Build Categories page (5 subtasks)**
   - SCRUM-107 to SCRUM-111: CRUD operations, color picker, navigation

   **SCRUM-82: Create reusable components (5 subtasks)**
   - SCRUM-112 to SCRUM-116: WordCard, AddToCategoryModal, EmptyState, CategorySelect

3. **Created Sprint 4 - Polish & Deploy (Sprint ID: 103)**
   - Created 7 stories with 37 subtasks total:

   **SCRUM-117: Set up testing framework (5 subtasks)**
   - SCRUM-124 to SCRUM-128: Vitest, RTL, Firebase Emulator, Playwright

   **SCRUM-118: Write tests (6 subtasks)**
   - SCRUM-129 to SCRUM-134: Unit, component, and E2E tests

   **SCRUM-119: Set up CI/CD pipeline (5 subtasks)**
   - SCRUM-135 to SCRUM-139: GitHub Actions workflows

   **SCRUM-120: Optimize performance (5 subtasks)**
   - SCRUM-140 to SCRUM-144: Bundle analysis, code splitting, virtual scrolling

   **SCRUM-121: Chrome Web Store submission (6 subtasks)**
   - SCRUM-145 to SCRUM-150: Icons, screenshots, privacy policy, submission

   **SCRUM-122: Deploy web app (5 subtasks)**
   - SCRUM-151 to SCRUM-155: Vercel/Netlify deployment

   **SCRUM-123: Documentation (5 subtasks)**
   - SCRUM-156 to SCRUM-160: README, CONTRIBUTING, architecture, user guide

4. **Updated Confluence Pages**
   - **VocabPal Project Plan** (page 2490370): Added Sprint 3 & 4 stories with subtask counts
   - **Teaching Plan** (page 360449): Added complete Sprint 3 & 4 breakdowns with all subtasks

5. **Cleanup**
   - Deleted duplicate "Sprint 2 - Chrome Extension 2" (Sprint ID: 69)

### Summary of All Sprints

| Sprint                      | Stories | Subtasks | Status         |
| --------------------------- | ------- | -------- | -------------- |
| Sprint 1 - Foundation       | 5       | 29       | ✅ COMPLETE    |
| Sprint 2 - Chrome Extension | 5       | 31       | 🔄 IN PROGRESS |
| Sprint 3 - Web App          | 7       | 34       | 📋 PLANNED     |
| Sprint 4 - Polish & Deploy  | 7       | 37       | 📋 PLANNED     |
| **Total**                   | **24**  | **131**  |                |

### Current Status

- **Sprint 1:** COMPLETE ✅
- **Sprint 2:** IN PROGRESS (SCRUM-71 next)
- **Sprint 3:** PLANNED (7 stories, 34 subtasks)
- **Sprint 4:** PLANNED (7 stories, 37 subtasks)
- **Confluence:** Project Plan and Teaching Plan updated

6. **Added AWS Deployment Story (Bonus)**
   - Created SCRUM-161: (Bonus) Deploy web app to AWS (S3 + CloudFront)
   - 6 subtasks: SCRUM-162 to SCRUM-167
   - Covers: IAM, S3 static hosting, CloudFront CDN, SSL, GitHub Actions CI/CD

### Updated Sprint 4 Summary

| Sprint 4 Stories                           | Subtasks |
| ------------------------------------------ | -------- |
| SCRUM-117: Testing framework               | 5        |
| SCRUM-118: Write tests                     | 6        |
| SCRUM-119: CI/CD pipeline                  | 5        |
| SCRUM-120: Performance                     | 5        |
| SCRUM-121: Chrome Web Store                | 6        |
| SCRUM-122: Deploy to Vercel                | 5        |
| SCRUM-123: Documentation                   | 5        |
| SCRUM-161: (Bonus) AWS deployment          | 6        |
| SCRUM-169: (Bonus) Security best practices | 8        |
| **Total**                                  | **51**   |

7. **Added Sprint 3 Testing Story**
   - Created SCRUM-168: Add tests for Sprint 3 web app components
   - 6 subtasks: SCRUM-170 to SCRUM-175
   - Covers: useAuth, useWords, useCategories hooks, WordCard, Flashcard, page integration tests

8. **Added Security Best Practices Story (Bonus)**
   - Created SCRUM-169: (Bonus) Implement security best practices and security testing
   - 8 subtasks: SCRUM-176 to SCRUM-183
   - Covers:
     - OWASP Top 10 vulnerabilities
     - Firebase Security Rules
     - Content Security Policy (CSP)
     - Input validation/sanitization
     - npm audit and dependency scanning
     - OWASP ZAP security testing

### Final Project Summary

| Sprint                      | Stories | Subtasks | Status         |
| --------------------------- | ------- | -------- | -------------- |
| Sprint 1 - Foundation       | 5       | 29       | ✅ COMPLETE    |
| Sprint 2 - Chrome Extension | 5       | 31       | 🔄 IN PROGRESS |
| Sprint 3 - Web App          | 8       | 40       | 📋 PLANNED     |
| Sprint 4 - Polish & Deploy  | 9       | 51       | 📋 PLANNED     |
| **Total**                   | **27**  | **151**  |                |

### Next Steps

1. Continue with Sprint 2 testing story (SCRUM-70)
2. Start SCRUM-71 (Jest setup)

---

## Session 13 — February 26, 2026

### What We Did

1. **Fixed Jira API Token**
   - Token had expired — regenerated via Atlassian account settings
   - Updated `.env` with new token
   - Auth confirmed working

2. **Code Review SCRUM-124 (Learn: Testing in JavaScript/TypeScript - Vitest, RTL)**
   - Reviewed all 10 comments Katie left on the ticket
   - **Approved ✅**
   - Highlights:
     - vi.mock() explanation (Comment 4) — strongest note, understood mock module vs mock function vs mock data
     - Spy vs mock distinction (Comment 6) — correct: mocks replace, spies observe
     - AAA pattern (Comment 7) — thorough, covered all three organize-by strategies + beforeEach usage
     - getByRole vs getByTestId (Comment 9) — added accessibility angle (screen readers, keyboard users)
   - Minor notes:
     - Comment 10 (FireEvent) cut off mid-sentence; also noted `userEvent` is preferred over `fireEvent` in modern RTL
     - Comment 3 (Chai syntax) had no content
   - Posted `[Code Review Feedback]` comment on SCRUM-124 in Jira (comment ID: 10899)

### Current Status

- **Sprint 1:** COMPLETE ✅
- **Sprint 2:** IN PROGRESS
- **SCRUM-124:** Reviewed and approved ✅
- **Next ticket:** SCRUM-125 (next subtask under SCRUM-117)

### Next Steps

1. Continue with SCRUM-117 subtasks (SCRUM-125 onward)
2. Move into coding subtasks for the testing framework

---

## Session 14 — March 2, 2026

### What We Did

1. **Code Review SCRUM-125 (Set up Vitest in monorepo)**
   - Round 1: Changes requested — wrong environment for web/extension, workspace test scripts not updated
   - Round 2: All fixes verified ✅ — `jsdom` set for web + extension, all workspace scripts → `vitest`
   - Approved and transitioned to Done

2. **Code Review SCRUM-126 (Set up React Testing Library)**
   - Round 1: Changes requested — testing-library packages in `dependencies` instead of `devDependencies`
   - Round 2: Fix verified ✅ — both packages now in `devDependencies`
   - Accepted skipping custom render for now (will revisit when writing actual component tests)
   - Approved and transitioned to Done

### Current Status

- **Sprint 2:** IN PROGRESS
- **SCRUM-125:** Done ✅
- **SCRUM-126:** Done ✅
- **SCRUM-127, SCRUM-128:** In Progress (Firebase Emulator, Playwright)
- **Blocked:** Nothing

3. **Added Learning Materials to SCRUM-127 and SCRUM-128**
   - Katie asked for reference materials (both tickets were new topics)
   - SCRUM-127 (Firebase Emulator): added why emulators > real Firebase for tests, key commands, setup steps, done criteria
   - SCRUM-128 (Playwright): added E2E vs unit/component distinction, key Playwright APIs, setup steps, done criteria

4. **Answered Katie's question on SCRUM-127 (Firebase Emulator setup)**
   - Katie asked about creating the Vitest setup file that connects to Firebase emulators
   - Provided comprehensive explanation of:
     - What a Vitest setup file is and when it runs
     - How to use connectFirestoreEmulator() and connectAuthEmulator()
     - How to configure vitest.config.ts with setupFiles option
     - Optional: clearing emulator data between tests
   - Included code examples and reference documentation links
   - Posted answer to Jira comment

### Current Status

- **Sprint 2:** IN PROGRESS
- **SCRUM-125:** Done ✅
- **SCRUM-126:** Done ✅
- **SCRUM-127:** In Progress — learning materials added
- **SCRUM-128:** In Progress — learning materials added
- **Blocked:** Nothing

### Next Steps

1. Katie works through SCRUM-127 (Firebase Emulator setup)
2. Katie works through SCRUM-128 (Playwright setup)

---

## Session 15 — March 3, 2026

### What We Did

1. **Answered Katie's question on SCRUM-127 (vitest setup file step)**
   - Katie asked for more detail on: "Add a vitest setup file that connects to emulators before tests run"
   - Explained the full dependency chain: test → wordService → db → config.ts → real Firebase
   - Showed how `connectFirestoreEmulator()` and `connectAuthEmulator()` re-route calls to localhost
   - Explained why setup.ts (not each test file) — `connectFirestoreEmulator()` can only be called once
   - Posted answer as Jira comment on SCRUM-127 (comment ID: 11040)

2. **Provided reference materials on how services call real Firebase**
   - Katie asked for deeper reading on how wordService/authService hit production Firebase during tests
   - Tied explanation to her actual code (wordService.ts line 3 + 38, config.ts)
   - Ordered reading list: Firebase SDK connection model → Emulator Suite → why it matters for testing → video walkthrough
   - Key mental model: `db` and `auth` are like a phone already dialed — emulator re-routes before tests run
   - Posted as Jira comment on SCRUM-127 (comment ID: 11041)

### Current Status

- **Sprint 2:** IN PROGRESS
- **SCRUM-127:** In Progress — two follow-up questions answered
- **Blocked:** Nothing

### Next Steps

1. Katie continues working through SCRUM-127 (Firebase Emulator setup)
2. Katie works through SCRUM-128 (Playwright setup)

---

## Session 16 — March 3, 2026 (continued)

### What We Did

1. **Code Review SCRUM-127 (Set up Firebase Emulator)**
   - Status: In Review
   - Reviewed: firebase.json, .firebaserc, setup.ts, vitest.config.ts, wordService.test.ts

   **What went well:**
   - `firebase.json` — correct emulators section (auth: 9099, Firestore: 8080, UI enabled)
   - `setup.ts` — correct imports and emulator connections; inline comments explaining why the two functions have different signatures were excellent
   - `vitest.config.ts` — `setupFiles` correctly configured

   **One issue found:**
   - `wordService.test.ts` uses `jest.mock()` instead of `vi.mock()` — wrong global for Vitest
   - Fix: change `jest.mock(...)` → `vi.mock(...)` in both lines

   - Posted `[Code Review Feedback]` on SCRUM-127 (comment ID: 11074)
   - Changes requested — needs `jest` → `vi` fix before approval

2. **Katie applied fixes:**
   - `jest.mock` → `vi.mock` in `wordService.test.ts` ✅
   - Added `"types": ["vitest/globals"]` to `shared/tsconfig.json` ✅
   - Removed `@types/jest`, `jest`, `ts-jest` from root `package.json` ✅
   - `vi` now recognized by TypeScript (runtime vs compile-time globals explained)
   - Posted approval comment (comment ID: 11075)
   - SCRUM-127 transitioned to Done ✅

### Current Status

- **SCRUM-127:** Done ✅
- **Blocked:** Nothing

### Next Steps

1. Continue to SCRUM-128 (Playwright setup)

---

## Session 17 — March 3, 2026 (continued)

### What We Did

1. **Fixed "describe is not defined" error (SCRUM-72)**
   - Root cause: no root-level `vitest.config.ts` — vitest ran from root with defaults (`globals: false`), ignoring `shared/vitest.config.ts`
   - Fix: created `vitest.config.ts` at project root with `globals: true`
   - Key insight: dependency at root, config at package level was backwards

2. **Fixed missing `envDir` in shared vitest config**
   - `.env` file is at project root; vitest running from `shared/` couldn't find it
   - All `VITE_FIREBASE_*` variables were `undefined`, causing Firebase init to fail
   - Fix: added `envDir: '../'` at top level of `shared/vitest.config.ts`
   - Learned: `envDir` is a Vite config option (top level), not a Vitest option (inside `test: {}`)

3. **Removed `connectAuthEmulator` from setup.ts**
   - `firebase/auth` is browser-designed and fails in Node.js test environment
   - `wordService.ts` doesn't use auth at all — only Firestore
   - Removed `connectAuthEmulator` and `auth` import from `setup.ts`

4. **Fixed `createWord` logic bugs**
   - Bug 1: Used `auth.currentUser?.displayName` to identify user — always `null` in tests with no logged-in user. Fix: use `word.userId` (already passed in by caller)
   - Bug 2: Used `words.filter()` for duplicate check — filter always returns an array (truthy even when empty), so it always treated every word as a duplicate. Fix: use `words.find()` which returns `undefined` when no match found

5. **Added `clearFirestore()` helper to setup.ts**
   - Exported async function that calls the emulator's HTTP DELETE endpoint to wipe all documents
   - Can be used in `beforeEach`, `afterEach`, or inline inside any test
   - `afterEach` vs `beforeEach` vs `afterAll`: per-test hooks (`beforeEach`/`afterEach`) give better isolation than `beforeAll`

6. **Fixed silent test assertion bug**
   - `expect(result.id).toBeDefined` without `()` never actually runs — test always passes
   - Correct form: `expect(result.id).toBeDefined()`
   - Also covered: `result!.id` (TypeScript non-null assertion `!`) should only be used after `expect(result).not.toBeNull()` first

7. **Discussed mocking vs emulator**
   - `vi.mock('firebase/firestore')` replaces all Firestore functions with fakes (pure unit test, no external deps)
   - With emulator: integration tests that test real read/write behaviour — more valuable
   - Since emulator is set up, mocks for Firestore are not needed

8. **Posted two learning notes to SCRUM-72**
   - Comment 1: vitest setup issues (globals, monorepo config, mocks vs emulator, envDir, config structure)
   - Comment 2: follow-up fixes (auth.currentUser, filter vs find, toBeDefined(), !, beforeAll vs beforeEach)

### Files Changed

- `vitest.config.ts` — created at project root with `globals: true`
- `shared/vitest.config.ts` — added `envDir: '../'`
- `shared/src/services/__tests__/setup.ts` — removed auth emulator, added `clearFirestore()` export
- `shared/src/services/wordService.ts` — removed `auth` import, fixed `auth.currentUser` → `word.userId`, fixed `filter` → `find`

### Current Status

- **SCRUM-72:** In Progress (test setup working, first test passing)
- **Blocked:** Nothing

### Next Steps

1. Complete remaining test cases in `wordService.test.ts` (getWord, getWordsByUser, updateWord, deleteWord)
2. Continue to SCRUM-128 (Playwright setup)

---

## Session 12 — February 11, 2026

### What We Did

1. **Discussed Sprint Order**
   - Katie asked if Sprint 4 can be done before other sprints
   - Answer: No, Sprint 4 depends on Sprints 2 & 3
   - Sprint 4 (testing, CI/CD, deployment) requires having something built to test/deploy

2. **Discussed Deploying Original VocabPal**
   - Katie wants to deploy the original VocabPal (already built) first
   - Recommended keeping documentation separate from VocabPal-Learning
   - Suggested Option B: Light tracking (simple checklist in original repo)
   - Learning from deployment can inform Sprint 4 planning

3. **Updated SCRUM-124 with Reference Materials**
   - Katie asked for reference materials like Sprint 1 learning tasks
   - Added structured description to SCRUM-124 (Learn: Testing in JavaScript/TypeScript):
     - **Goal:** Understand Vitest and RTL fundamentals
     - **Watch (30-40 mins):** Vitest Crash Course, RTL Tutorial, Testing Hooks
     - **Read (20-30 mins):** Vitest guide, RTL intro, Query priority, Mocking guide
     - **Key Concepts:** describe/it, expect matchers, RTL philosophy, query priority, vi.mock(), vi.fn(), renderHook()
     - **Done When:** Can explain AAA pattern, mocking, query priority, testing data-fetching

### Current Status

- **Sprint 1:** COMPLETE ✅
- **Sprint 2:** IN PROGRESS
- **SCRUM-124:** Reference materials added
- **Original VocabPal:** Katie considering deployment

### Next Steps

1. Katie decides on approach for deploying original VocabPal
2. Continue with Sprint 2 or start learning testing (SCRUM-124)

---

## Session 14 — April 5, 2026

### What We Did

1. **Answered questions about Firebase Emulator setup (SCRUM-127 recap)**
   - Katie asked where session notes about emulator setup lived — pointed to SCRUM-127 (main ticket) and SCRUM-72 (learning notes)
   - Explained how `connectFirestoreEmulator()` mutates the `db` instance so all services re-route to localhost
   - Explained that `connectAuthEmulator` in setup.ts is currently unused (wordService tests don't use auth) and will only matter when authService tests are written in Sprint 3
   - Explained how `word.userId` is used instead of `auth.currentUser` in tests — caller controls userId directly

2. **Added `getCategory` method to categoryService.ts**
   - Katie asked for a `getCategory(id)` function
   - Added following the same pattern as `getWord` in wordService.ts
   - Returns `Category | null`

3. **Wrote tests for categoryService (SCRUM-73)**
   - Added `getCategory` tests: exists + not found
   - Added `deleteCategory` test
   - Imported `deleteCategory` in test file

4. **Fixed bugs found during test writing**
   - `categoryService.ts`: missing duplicate check in `createCategory` — added `getCategoriesByUser` + `find()` guard, same as wordService
   - `categoryService.ts`: spread order bug — `id: docRef.id` was before `...category`, causing `testCategory.id = '1'` to overwrite the real Firestore ID. Fixed by moving `id` after the spread
   - `categoryService.test.ts` updateCategory test: was using `testCategory.id` (hardcoded) instead of `createdCategory!.id` (real Firestore ID)

5. **Explained TypeScript `!` non-null assertion operator**
   - `result!.id` tells TypeScript "I know this is not null" — safe to use after an `expect(result).not.toBeNull()` check

6. **Code Review posted to SCRUM-73** (comment ID: 11210)
   - Status: APPROVED pending green `npm test`

### Files Changed

- `shared/src/services/categoryService.ts` — added `getCategory`, added duplicate check to `createCategory`, fixed spread order, changed return type to `Category | null`
- `shared/src/services/__tests__/categoryService.test.ts` — added getCategory tests, deleteCategory test, imported deleteCategory

### Current Status

- **SCRUM-73:** In Review — move to Done once `npm test` passes
- **Blocked:** Nothing

### Next Steps

1. Run `npm test` in `shared/` to confirm all categoryService tests pass
2. Move SCRUM-73 to Done
3. Continue with remaining Sprint 2 tickets

---

## Session 15 — April 5, 2026

### What We Did

1. **Fixed SCRUM-74 and SCRUM-75 ticket descriptions**
   - Both had Jest syntax (`jest.mock`, `jest.fn()`) — replaced with Vitest equivalents (`vi.mock`, `vi.fn()`)
   - SCRUM-74: added `mockUser` definition, explained why mocking is needed instead of emulator
   - SCRUM-75: fixed `as jest.Mock` cast → `as unknown as typeof fetch`
   - SCRUM-75 Done When: updated "Jest format" → "Vitest format"

2. **Wrote tests for authService (SCRUM-74)**
   - Created `shared/src/services/__tests__/authService.test.ts`
   - Tests: `signInWithGoogle`, `getCurrentUser`, `signOut`

3. **Debugged and fixed mock issues**

   **Bug 1: `result.id` was undefined**
   - `signInWithPopup` was mocked as `vi.fn()` with no return value
   - authService does `const user = result.user` — so mock must resolve with `{ user: { uid, ... } }`
   - Fix: `signInWithPopup: vi.fn(async () => ({ user: { uid: mockUser.uid, ... } }))`

   **Bug 2: `getCurrentUser()` returned non-null after `signOut()`**
   - `getAuth` mock had `currentUser: mockUser` hardcoded — value captured once at creation, never changed
   - Fix: use a variable + getter so it reads fresh each time:
     ```ts
     let mockCurrentUser = mockUser;
     getAuth: vi.fn(() => ({
       get currentUser() {
         return mockCurrentUser;
       },
       signOut: vi.fn(async () => {
         mockCurrentUser = null;
       }),
     }));
     ```

4. **Key concepts discussed**
   - Why auth uses mocks not emulator: `firebase/auth` is browser-only, crashes in Node.js test env
   - `Promise.resolve(x)` and `async () => x` are equivalent in mocks
   - Only mock what your code actually calls — trace your own code, not the full Firebase API
   - Stateful mocks: use a variable + JS getter to simulate state changes across function calls
   - Posted learning notes to SCRUM-74 as Jira comment

### Files Changed

- `shared/src/services/__tests__/authService.test.ts` — created with full test suite

### Current Status

- **SCRUM-74:** In Progress — tests written, debugging in progress
- **Blocked:** Nothing

### Next Steps

1. Confirm all authService tests pass
2. Move SCRUM-74 to Done
3. Continue with SCRUM-75 (DictionaryAdapter tests)

---

## Session 16 — April 5, 2026

### What We Did

1. **Continued authService test work (SCRUM-74)**
   - Added `onAuthStateChange` test
   - Simplified `onAuthStateChanged` mock to immediately fire the callback: `vi.fn((cb) => { cb(); return vi.fn(); })`
   - Removed unnecessary `clearFirestore()` import and `beforeEach` call
   - Added `beforeEach` to reset `mockCurrentUser = mockUser`

2. **Debugged and discussed mock concepts**

   **Why `currentUser: mockCurrentUser` vs `get currentUser()`**
   - Regular property copies the value at object creation — changing `mockCurrentUser` later has no effect on the property
   - Getter runs every time the property is accessed — always returns the current variable value
   - Conclusion: getter not needed in this test because `getAuth()` is called fresh inside every service function, creating a new object each time that picks up the latest `mockCurrentUser`

   **Why `vi.fn()` needs a return value for `onAuthStateChanged`**
   - Real Firebase's `onAuthStateChanged` returns an unsubscribe function
   - authService stores it as `unsubscribe` and returns it — so the mock must return something callable: `return vi.fn()`

   **`Promise.resolve()` vs `async () =>`**
   - Both are equivalent — `async` automatically wraps return value in a Promise

   **`() => void` return type on `onAuthStateChange`**
   - The function returns the Firebase unsubscribe function, which has shape `() => void` (call with no args, returns nothing)

   **Object literals — properties, methods, and getters**
   - All three can be mixed in one `{}` block
   - Getter syntax (`get name() {}`) is the same concept as in classes, just inline

3. **Code review posted on SCRUM-74** — one remaining issue: `currentUser: mockCurrentUser` should use getter, then confirmed getter not needed after deeper analysis. Learning notes posted.

### Files Changed

- `shared/src/services/__tests__/authService.test.ts` — added `onAuthStateChange` test, fixed `onAuthStateChanged` mock, removed `clearFirestore`, added `beforeEach` reset

### Current Status

- **SCRUM-74:** In Review
- **Blocked:** Nothing

### Next Steps

1. Confirm all authService tests pass with `npm test`
2. Move SCRUM-74 to Done
3. Continue with SCRUM-75 (DictionaryAdapter tests)

---

## Session 17 — April 9, 2026

### What We Did

1. **Engineering Quality Gap Analysis**
   - Compared VocabPal-Learning against The Booking Kit (open source project by Zain, ~55k lines TypeScript)
   - Identified 4 key gaps: CI/CD granularity, test coverage standards, branch strategy/pre-commit hooks, documentation completeness

2. **Created Confluence page: Engineering Quality Gaps**
   - Page: "Engineering Quality Gaps: VocabPal vs Industry Standards"
   - URL: https://katienguyen1293.atlassian.net/wiki/spaces/VP/pages/18644993
   - Content: benchmark table, 4 detailed gap analyses, summary table, proposed Jira work

3. **Created Story A: SCRUM-187 — Enforce code quality with pre-commit hooks and branch strategy**
   - Sprint 4 | 5 subtasks: SCRUM-188 to SCRUM-192
   - Covers: Husky + lint-staged, branch naming convention, GitHub branch protection, Dependabot

4. **Created Story B: SCRUM-193 — Define and enforce test coverage standards**
   - Sprint 4 | 6 subtasks: SCRUM-194 to SCRUM-199
   - Covers: coverage metrics, Vitest thresholds (80% services / 70% components), CI coverage summary, property-based testing with fast-check

5. **Created Story C: SCRUM-200 — Complete project documentation to professional standard**
   - Sprint 4 | 4 subtasks: SCRUM-201 to SCRUM-204
   - Covers: fill in ARCHITECTURE.md and DECISIONS.md, create CONTRIBUTING.md, add README badges

6. **Added 3 subtasks to SCRUM-119 (CI/CD)**
   - SCRUM-205: Separate lint job in ci.yml
   - SCRUM-206: Separate typecheck job in ci.yml (tsc --noEmit)
   - SCRUM-207: Coverage threshold gate in CI

### New Tickets Summary

| Ticket        | Summary                              | Sprint |
| ------------- | ------------------------------------ | ------ |
| SCRUM-187     | Pre-commit hooks and branch strategy | 4      |
| SCRUM-193     | Test coverage standards              | 4      |
| SCRUM-200     | Complete project documentation       | 4      |
| SCRUM-205–207 | Added to existing SCRUM-119 (CI/CD)  | 4      |

### Current Status

- **Sprint 2:** IN PROGRESS (SCRUM-74 in review, SCRUM-75 next)
- **Sprint 4 gaps:** Fully ticketed — SCRUM-187, SCRUM-193, SCRUM-200, SCRUM-205/206/207

### Next Steps

1. Continue SCRUM-74 (confirm authService tests pass, move to Done)
2. Move to SCRUM-75 (DictionaryAdapter tests)
3. Sprint 4 gap tickets addressed when Sprint 4 begins

---

## Session 18 — August 29, 2026

### What We Did

1. **Discovered the entire Jira project (SCRUM) was permanently deleted**
   - Katie's Jira had been inactive too long; Atlassian deleted all issue history
   - Asked Katie to reconstruct the whole board from `SESSION_LOG.md` and her separate `katie-learning-notes` Docusaurus site

2. **Investigated before rebuilding**
   - Found the Atlassian MCP connection now points to a _different_ site: `vocabpal.atlassian.net` (project "My Scrum Space", key SCRUM) — not `katienguyen1293.atlassian.net` as documented in CLAUDE.md
   - That SCRUM project was not empty — it already held 200 issues from an apparent earlier, incomplete reconstruction attempt (Sprint 1 had good real titles; Sprint 2 onward had generic placeholder titles like "Subtask of SCRUM-40: ...")
   - Confirmed with Katie: wipe those 200 placeholder issues and rebuild clean. Also confirmed the original site's project is not recoverable via Atlassian's restore/trash window.
   - No delete tool exists in the Atlassian MCP toolset — Katie bulk-deleted the 200 issues manually via Jira's Bulk Change UI

3. **Rebuilt the full Jira hierarchy from SESSION_LOG.md**
   - Reconciled Sprint 2 testing-story status against actual `git log`/`git status` (not just the log text) to get real completion state right
   - Wrote a full spec (Epic → 30 Stories → 169 Subtasks across all 4 sprints, with target status per item) to a scratch file
   - Delegated the ~200-issue creation to a background agent with Atlassian MCP tool access (create + status transitions + verification)
   - Result: 200/200 issues created and verified — 1 Epic, 30 Stories, 169 Subtasks; 41 Done / 4 In Progress / 155 To Do; sprint grouping done via labels (`sprint-1-foundation`, etc.) since team-managed Jira Sprints aren't creatable through the available tools
   - New Epic: SCRUM-201 (https://vocabpal.atlassian.net/browse/SCRUM-201) — all issue keys are new; they do not match the original SCRUM-N numbers
   - Sprint 3 and most of Sprint 4 subtask titles are synthesized from the session log's thematic summaries (exact original wording wasn't recorded there), not literal reconstructions

### Current Status

- **Jira:** Fully rebuilt at vocabpal.atlassian.net, project SCRUM, Epic SCRUM-201
- **CLAUDE.md/Confluence:** Still reference the old site (katienguyen1293.atlassian.net) — needs updating to match the now-active vocabpal.atlassian.net, not yet done
- **No real Jira Sprints:** Stories are grouped via sprint-N labels instead; creating actual Sprint containers is a manual step in the Backlog view if wanted

### Next Steps

1. Decide whether to update CLAUDE.md's Jira/Confluence site references to vocabpal.atlassian.net
2. Optionally create real Sprint containers in the Backlog view and assign the labeled Stories into them
3. Resume actual development work (SCRUM-74 equivalent: authService tests: In Progress; SCRUM-75 equivalent: DictionaryAdapter tests: To Do)

---

## Session 19 — August 31, 2026

### What We Did

1. **Added descriptions to all 199 rebuilt Story/Subtask issues**
   - Katie noticed the freshly rebuilt tickets had titles only, no description body
   - Confirmed scope with Katie: full Goal/Steps/Learning resources/Done-when template on every Subtask (matching Katie's original Session 1 teaching format), short summary paragraph on every Story, across all 199 non-Epic issues
   - Sprint 1 subtasks (already Done) got retrospective descriptions using real facts from the session log (what was actually built/fixed) rather than a forward-looking template, since the work is already complete
   - Sprint 2's in-progress/done testing subtasks similarly got retrospective text; everything still To Do got the full forward-looking template
   - Wrote all 199 descriptions to a spec file, then delegated the mechanical Jira updates to a background agent

2. **Agent caught a real ambiguity**
   - "Create Flashcard component with flip animation" exists as a subtask under two different stories (extension popup UI in Sprint 2, web app Flashcards page in Sprint 3) with different intended descriptions
   - Agent disambiguated by matching on (parent story, subtask title) instead of title alone, so each got its correct, distinct description instead of one clobbering the other

3. **Result:** 199/199 issues updated successfully, 0 unmatched, Epic SCRUM-201's existing description left untouched. Spot-checked 5 issues including both Flashcard subtasks to confirm correct content landed.

### Current Status

- **Jira:** All 200 issues (Epic + 30 Stories + 169 Subtasks) now have both correct hierarchy/status/labels (Session 18) and full descriptions (this session)
- **Still open from Session 18:** CLAUDE.md/Confluence site references not yet updated to vocabpal.atlassian.net; no real Jira Sprint containers created yet (labels only)

### Next Steps

1. Decide whether to update CLAUDE.md's Jira/Confluence site references to vocabpal.atlassian.net
2. Optionally create real Sprint containers in the Backlog view and assign the labeled Stories into them
3. Resume actual development work (authService tests: In Progress; DictionaryAdapter tests: To Do)

---

## Session 20 — September 10, 2026

### What We Did

1. **Answered: where does Vite expect env vars, and where does `web/` fit in the monorepo?**
   - Confirmed `shared/src/firebaseConfig/config.ts` reads Firebase config via `import.meta.env.VITE_*` (Vite convention, only works under Vite's own transform — not `process.env`)
   - Explained the `VITE_` prefix requirement and that `.env` is resolved per-workspace via each `vitest.config.ts`'s `envDir` — `shared/vitest.config.ts` sets `envDir: '../'` to reach the root `.env`
   - Confirmed `web/` is already a listed npm workspace (root `package.json`) alongside `extension/` and `shared/`, but is still just scaffolding: `package.json`/`tsconfig.json`/`vitest.config.ts` exist, no `src/`, no `vite.config.ts`, no `index.html` yet — same stage as `extension/`

2. **Found two latent bugs while investigating (not yet fixed):**
   - `shared/vitest.config.ts` still points `setupFiles` at `./src/services/__tests__/setup.ts`, but that `services/` folder was deleted and replaced by `src/api/__tests__/` — `npm test` in `shared/` is likely broken right now
   - `web/vitest.config.ts` and `extension/vitest.config.ts` have no `envDir` set, so once either workspace imports `shared`'s Firebase config in a test, `VITE_FIREBASE_*` will resolve to `undefined` (Vite will look for `.env` in the wrong directory)
   - Also noted: neither `web/package.json` nor `extension/package.json` declares `@vocabpal/shared` as a dependency yet — needed before either can import from `shared`

3. **Katie fixed the `web`/`extension` `envDir` gap herself** — added `envDir: '../'` to both `web/vitest.config.ts` and `extension/vitest.config.ts`

4. **Answered: how do you test that `web` can call methods from `shared` once it's built?**
   - Walked through three levels: a module-resolution smoke test with a pure export (no Firebase), calling the Firebase-backed services against the local emulator (reusing `shared/src/api/__tests__/setup.ts`'s emulator-connect pattern), and full integration once `web/` has a real Vite app
   - Confirmed `web/` has no `src/` yet, so this is prep for Sprint 3, not immediate work

5. **Discussed npm scope naming (`@vocabpal` vs `@vocabpal-learning`)** — recommended keeping `@vocabpal`, since the scope is just an internal workspace label (packages are private, never published) with no need to match the root `package.json` name

6. **Set up a `@/` path alias for `shared/src`, to replace relative imports**
   - Katie added `resolve.alias` in `shared/vitest.config.ts` and `baseUrl`/`paths` in `shared/tsconfig.json` herself
   - Katie updated the imports in `shared/src/api/firebase/{wordService,categoryService,authService}.ts` and `shared/src/api/dictionaryapi/{DictionaryAdapter,transformWord,dictionaryApi}.ts` from relative paths to `@/types` / `@/firebaseConfig/config`
   - **Caught and fixed 3 real broken imports in the process** (these were TS2307 compile errors, not just style): `authService.ts`'s `'../types'` and `categoryService.ts`'s `'../types'` were both one directory level too shallow (should've been `'../../types'`), and `categoryService.ts`'s `'./config'` pointed at a nonexistent local file instead of `'../../firebaseConfig/config'`
   - Verified fix with `npx tsc --noEmit` (clean) and `npx vitest run` — remaining test failures are all `ECONNREFUSED :8080`, i.e. the Firebase emulator wasn't running locally, unrelated to the import fix

### Current Status

- `shared/` now typechecks cleanly; its Firebase-backed tests need `firebase emulators:start` running to pass
- `web/vitest.config.ts` and `extension/vitest.config.ts` `envDir` gap is fixed
- `shared/vitest.config.ts`'s stale `setupFiles` path was already correct by the time it was checked (pointed at `./src/api/__tests__/setup.ts`) — no longer an open issue
- Still open: `@vocabpal/shared` not yet declared as a dependency in `web/package.json` or `extension/package.json`; `web/` still has no `src/`, `vite.config.ts`, or `index.html`

7. **Pushed both repos to GitHub** — `VocabPal-Learning` (`SCRUM-117`, commit `828bc63`: the `shared/api` restructure, alias, import fixes) and `katie-learning-notes` (`main`, commit `e2c4ec0`: the new `vite.md` doc, `sync-jira.js` fix, sidebar addition)

8. **Set up GitHub Actions auto-deploy for katie-learning-notes** — `katie-learning-notes` was only deploying to GitHub Pages via a manual local `npm run deploy` (Docusaurus pushing to `gh-pages`); added `.github/workflows/deploy.yml` to build and deploy automatically on every push to `main`
   - First run failed: `sidebars.ts` referenced 4 docs (`project/overview`, `project/architecture`, `learning-notes/javascript/async-await`, `learning-notes/javascript/adapter-pattern`) that are gitignored under an "Excluded from public site" rule and were never actually committed — a pre-existing gap that only ever surfaced on a truly clean checkout, which this was the first one of
   - Fixed by gating those 4 sidebar entries on `process.env.CI` (set automatically by GitHub Actions) — shown locally, hidden in CI/production — verified both by direct evaluation of `sidebars.ts`'s output and by a real GitHub Actions run
   - Confirmed live: fetched `thuykat.github.io/learning-notes-VP/learning-notes/build-tools/vite` directly and verified the page content and "Build Tools" sidebar entry render correctly

9. **Marked SCRUM-292 Done** — updated `vite.md`'s status line and transitioned the Jira ticket via the Atlassian MCP connection to `vocabpal.atlassian.net`

### Current Status

- `katie-learning-notes` now auto-deploys to GitHub Pages on every push to `main`; no more manual `npm run deploy` needed
- SCRUM-292 (Learn Vite and React project structure) is Done — the doc fully covers its "Done When" criteria (env vars, monorepo/`web` fit, and the dev-server-vs-webpack bundling explanation)

### Next Steps

1. Wire `@vocabpal/shared` as a declared dependency of `web/` and `extension/` when Sprint 3 web app work starts
2. Write the first `web/` smoke test importing a pure export from `@vocabpal/shared` (e.g. `transformWord`) once `web/src/` exists
3. Move to the next SCRUM-213 subtask: SCRUM-293 (Create web folder with Vite + React + TypeScript)
4. Resume actual development work (authService tests: In Progress; DictionaryAdapter tests: To Do)

---

## Session 21 — September 10–11, 2026

### What We Did

1. **Fixed a duplicate nested `web/web/` folder** — Katie ran `npm create vite@latest web` from inside `web/` itself, scaffolding a fresh Vite project one level too deep. Flattened `web/web/*` up into `web/`, hand-merged the two colliding `package.json`s (kept the real Vite scaffold's scripts/dependencies, re-added `@vocabpal/shared` and the `test`/`test:watch` scripts so nothing from earlier sessions was lost), and kept the new Vite-generated `tsconfig.json` (project-references style) over the old thin one.

2. **Installed the missing `jsdom` devDependency at the root** — `web/vitest.config.ts` and `extension/vitest.config.ts` both set `environment: 'jsdom'`, but `jsdom` itself was never actually installed anywhere in the repo; this was the first time either workspace's test script had actually been run. Fixed for both workspaces at once via the root `package.json`.

3. **Set up `web/src/test-setup.ts`** importing `@testing-library/jest-dom`, wired via `setupFiles` in `web/vitest.config.ts`, so DOM matchers (`toBeInTheDocument()`, etc.) are available in every `web` test. Verified end-to-end with a real component test, not just config inspection.

4. **Fixed a runtime crash in `App.tsx`**: `<Link>` elements were rendered as siblings *after* `</BrowserRouter>` closed, outside the router's context provider — caused `Uncaught TypeError: Cannot destructure property 'basename' of ... null` the moment the app rendered. Moved them inside `<BrowserRouter>`.

5. **Verified Tailwind CSS actually works, not just installed** — found `src/index.css` was missing `@import 'tailwindcss';` (the `@tailwindcss/vite` plugin alone injects nothing without it). Added it, added a temporary utility-class element, and confirmed via the actual built CSS output (`grep`'d for `.bg-purple-600{...}` in `dist/assets/*.css`) that real rules were generated — not just present as an inert class name.

6. **Reviewed Katie's SCRUM-295 implementation (React Router setup) against the ticket's actual acceptance criteria** — found two real gaps: the `Categories` placeholder page was missing entirely (ticket requires 4 pages, only 3 existed), and `Words` was only reachable at `/` (index route), not at `/words` as the ticket's own "Done When" example requires. Katie fixed the Categories gap herself; the `/words` routing decision is still open (she interrupted the question to chase a different bug — see below).

7. **Debugged a deep `@shared` alias failure, in layers:**
   - `web/tsconfig.app.json` was missing a `@shared/*` paths entry that `web/vite.config.ts`'s `resolve.alias` already had — type-checker didn't know about it
   - Fixing that revealed a deeper problem: importing via the raw path `@shared/api/firebase/wordService` pulled `shared`'s internal `.ts` source directly into `web`'s own `tsc` compilation, checked under `web`'s stricter rules (`verbatimModuleSyntax`) with no knowledge of `shared`'s own `@` alias — a structural mismatch, not a config typo
   - Root cause underneath that: `shared/package.json`'s `"main": "index.js"` pointed at a file that had never existed — the package had no real entry point at all
   - Fixed properly: gave `shared` a real `build` script (`tsc`), ran it to generate `shared/dist/`, and pointed `main`/`types` at the compiled output (`./dist/api/index.js` / `.d.ts`) instead of raw source — the standard, correct shape for a TS workspace dependency
   - Also fixed a typo along the way: `Words.tsx` imported a nonexistent `getWordByUser`; the real export is `getWordsByUser`

8. **Explored TypeScript Project References as an alternative ("Pattern B")** to the manual `dist/` build ("Pattern A") — worked through the full `composite`/`references` setup, then arrived at the key realization together: Project References doesn't replace building `shared` to `dist/`, it only automates *triggering* that build via `tsc -b`. `shared/package.json`'s `main`/`types` still point at compiled output either way. Decided `tsc --watch` in a spare terminal was the more proportionate fix for this project's size, given Project References requires touching 4 config files and still doesn't help `npm run dev` on its own.

9. **Found and fixed a second, separate bug via `npm run dev`**: even with `shared` building to `dist/`, the emitted `.js` still contained literal, unresolved `@/firebaseConfig/config` imports — `tsc` never rewrites alias imports in its output, in either `.js` or `.d.ts`. This only surfaced when Vite's dev server actually tried to *execute* the compiled file (unconditional at module-load time), not during `tsc -b`'s type-check (which never needed to fully resolve the unused import). Fixed with `tsc-alias`, run as a second build step (`"build": "tsc && tsc-alias"`) — confirmed the compiled output now imports `../../firebaseConfig/config`, a real relative path. Also confirmed this gap applies identically to Pattern A and Pattern B, since both rely on the same underlying `tsc` emit step.

10. **Wrote up the whole alias saga as a new doc** in `katie-learning-notes`: `learning-notes/monorepo/consuming-workspace-packages.md`, covering the alias collision, Pattern A vs Pattern B, the `tsc-alias` fix, and the now-confirmed fact that Vite's dev server does follow the workspace symlink into `shared/dist/`.

11. **Per Katie's request, moved `npm-workspaces.md` and `consuming-workspace-packages.md` to local-only** in `katie-learning-notes` — gitignored, untracked from git (`git rm --cached`), and gated out of the CI-built sidebar via the existing `isCI` pattern. Both remain fully intact and visible in the local sidebar.

12. **Deployed and verified GitHub Pages CDN caching behavior** — after hiding the two docs, `curl` initially returned stale `200`s for both; confirmed via `git clone --depth 1 --branch gh-pages` that the actual deployed branch was already correct, and a cache-busted request returned real `404`s — the delay was CDN propagation, not a failed deploy.

### Current Status

- `web/` now has a real, working Vite + React + TypeScript + Tailwind + React Router setup, with `@vocabpal/shared` importable both in `npm run build` and `npm run dev`
- `shared/`'s build pipeline is `tsc && tsc-alias`, producing a clean, runtime-safe `dist/` with no unresolved alias imports
- SCRUM-295 has one open gap: `Words` still isn't reachable at `/words` specifically (only `/`) — decision on how to resolve it was interrupted, not yet made
- `npm-workspaces.md` and `consuming-workspace-packages.md` are local-only in `katie-learning-notes`; everything else from this session is pushed and live

### Next Steps

1. Decide and implement the `/words` route fix for SCRUM-295 (add a second route vs. replace the index route)
2. Wire `getWordsByUser` into `Words.tsx`'s actual render logic (currently imported but unused)
3. Consider adding `shared`'s `build:watch` script and documenting the two-terminal dev workflow (`tsc --watch` in `shared/` + `npm run dev` in `web/`) if this friction keeps coming up
4. Continue SCRUM-213 subtasks: SCRUM-294 (Tailwind — effectively done), SCRUM-296 (connect to shared — effectively done, pending final Jira transition)

---

## Session 22 — September 11, 2026

### What We Did

1. **Reconciled `katie-learning-notes`'s Session Logs page further** — renamed the stale "Sprint 2/3/4" headers to match the live board's real sprint themes, refreshed the Sprint 3 status table (SCRUM-213/292–296 all confirmed Done against the live board — Katie had transitioned these herself), added a Session 21 narrative, then removed an open-items note at Katie's request.

2. **Fixed the navbar GitHub link** in `katie-learning-notes` (`docusaurus.config.ts`) — was pointing at `github.com/katiem` (a placeholder), corrected to the real account `github.com/ThuyKat`.

3. **Actually ran `scripts/sync-jira.js` for the first time**, at Katie's request, to verify a public post's claim that it syncs comments automatically. Found a second, deeper problem beyond the URL/ticket-map fix from Session 21: every request 404'd because the `.env` `JIRA_EMAIL`/`JIRA_API_TOKEN` pair isn't authorized on `vocabpal.atlassian.net` at all — a different Atlassian account than whatever's connected via this session's Atlassian MCP OAuth. Diagnosed precisely (confirmed via a direct authenticated `fetch` reproducing the exact 404 and reading Jira's actual error body). Fix requires generating a fresh API token from the account that actually owns `vocabpal.atlassian.net` — not something completable from this session.

4. **Fixed a `Firebase: Error (auth/invalid-api-key)` crash** — `web/vite.config.ts` (the real app config used by `npm run dev`, as opposed to `web/vitest.config.ts`) never got the `envDir: '../'` fix from earlier sessions. Vite's dev server defaulted to looking for `.env` inside `web/` itself, found nothing, and `VITE_FIREBASE_API_KEY` resolved to `undefined` at runtime. Fixed and verified directly via Vite's own `loadEnv` function (not just inference) that the API key now resolves correctly.

5. **Reviewed and approved SCRUM-297 (Learn: React Router layout patterns) and SCRUM-298 (Create Layout component)** — Katie built `Layout.tsx` (`Header` + `<Outlet />` + `Footer`), correctly nested `Words`/`Flashcards`/`Categories` under it while keeping `SignIn` outside, and styled `Header` with real Tailwind utilities. Verified via `npm run build`. Posted a `[Code Review Feedback] — APPROVED` comment on SCRUM-298, flagging two pre-existing, non-blocking items (the unused `getWordsByUser` import, and the still-open `/words` routing gap) as tracked separately rather than blockers.

6. **Taught Tailwind CSS from Katie's existing CSS/SCSS background** — utility-first vs. named-class mental model, a direct SCSS-concept-to-Tailwind-concept mapping table, and the three standard ways to avoid repeating identical utility classes across elements (component extraction, a JS constant, or `@apply` — with the honest caveat that the community steers away from leaning on `@apply` too much).

7. **Corrected a misreading of Katie's own explanation of `<Outlet />`** — she'd said it correctly the first time ("Layout wraps around Words/Flashcards/Categories" = Layout is the outer wrapper); the ambiguous phrasing was misparsed as backwards on first read, caught and corrected once she clarified.

8. **Wrote a new local-only doc**: `katie-learning-notes/docs/learning-notes/react/router-and-layout.md` (SCRUM-297/298) — covers `<Outlet />` and nested routes, `NavLink` vs `Link`, the Tailwind/SCSS bridge, the DRY-duplication solutions, a TypeScript return-type-inference side note, and the SCRUM-298 code review result. Gitignored and gated behind `isCI` in `sidebars.ts` (new "React" category, entirely local-only for now), matching the established pattern — verified both local and simulated-CI builds succeed.

9. **Saved two memory entries** for future sessions: Katie learns build-tooling/monorepo concepts best through real, narrated debugging rather than tutorials or upfront explanation (her own words, prompted by this session's alias saga); and her CSS background (solid CSS, one prior SCSS project, no Tailwind before this project) — to keep bridging new CSS concepts from SCSS vocabulary going forward.

### Current Status

- `web/`'s dev server now correctly loads Firebase config; `npm run dev` should no longer throw `auth/invalid-api-key`
- SCRUM-297 and SCRUM-298 are Done, both subtasks of SCRUM-214 (which itself is still showing "To Do" at the Story level — a minor Jira bookkeeping gap, not touched)
- `sync-jira.js` is logic-correct but still non-functional pending a valid API token for the account that owns `vocabpal.atlassian.net`
- `router-and-layout.md` joins `npm-workspaces.md` and `consuming-workspace-packages.md` as local-only docs in `katie-learning-notes`

### Next Steps

1. Generate a fresh Jira API token from the account with access to `vocabpal.atlassian.net`, update `.env`, and re-run `sync-jira.js` to actually verify it end-to-end
2. Decide and implement the `/words` route fix for SCRUM-295 (still open, carried over from Session 21)
3. Wire `getWordsByUser` into `Words.tsx`'s actual render logic (still open, carried over)
4. Continue SCRUM-214's remaining scope now that its two subtasks are done — check whether the Story itself should transition

---
