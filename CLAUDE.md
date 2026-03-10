# RuleSnob — Project CLAUDE.md

## What This Is

RuleSnob is a spaced-repetition learning game for mastering the Rules of Golf. Think Anki meets golf rules trivia, designed to be played in short sessions with friends. Players answer scenario-based multiple-choice questions sourced from the official 2023 Rules of Golf (with January 2026 Additional Clarifications), track mastery using the SM-2 algorithm, compete on group leaderboards, and earn a composite "Rules IQ" score (0–200).

**Live URL:** [RuleSnob.com](https://www.rulesnob.com) (Vercel)
**Repository:** [github.com/alexander-bain/RuleSnob](https://github.com/alexander-bain/RuleSnob)

## Current State (as of March 2026)

All three phases are **shipped and live**:

### Phase 1: Core Game — COMPLETE
- 1,050+ curated scenarios across 8 rule categories and 3 difficulty tiers
- Full SM-2 spaced repetition engine (`lib/sm2.ts`)
- Composite scoring system (Rules IQ 0–200 with titles)
- Session-based gameplay (9 or 18 holes)
- Category mastery heat map on home screen
- "I guessed" button with visual feedback for honest self-assessment
- Firebase Auth (Google sign-in) with display name prompt
- Firestore persistence (card states, user stats, batched writes at session end)
- Deployed to Vercel with custom domain

### Phase 2: Social — COMPLETE
- Group system: create, join (via shareable URL), leave
- Shareable invite URLs: `rulesnob.com/join/[CODE]` with full sign-in + join flow
- Real-time leaderboard with Firestore `onSnapshot` listeners
- Profile page with stats, category mastery, groups list
- Profile avatar link in header (replaces sign-out button)

### Phase 3: AI Scenarios — COMPLETE
- POST `/api/generate-scenario` endpoint using OpenAI GPT-4o (native fetch, no SDK)
- Prompt includes 2023 Rules + 2026 clarifications, modern terminology requirements
- Structural validation: 4 choices, correct index, rule citation, explanation length
- Flag/report system: users can report bad scenarios (wrong_answer, unclear, outdated, other)
- Auto-fills session queue with AI scenarios when curated ones run out

### Analytics — COMPLETE
- GA4 tag: `G-W184WT4ZK0`
- 33 typed event functions in `lib/analytics.ts`
- Full instrumentation across play, leaderboard, profile, and auth flows
- Coverage: auth, session lifecycle, scenario-level (with SM-2 state, timing, position bias), feedback dwell time, navigation, groups, milestones, AI generation, app performance, engagement heuristics
- User-scoped dimensions: `rules_iq`, `title`, `streak`, `coverage_pct`, `group_count`

### What's NOT built yet
- "Challenge a Friend" mode (same scenarios, compare scores)
- Offline resilience (Firestore's `enableIndexedDbPersistence`)
- PWA / installable app
- Admin dashboard for reviewing flagged AI scenarios
- Per-question hit rates across all users (aggregate analytics)

## Tech Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js (App Router) | 16.1.6 | React 19, Turbopack |
| Language | TypeScript | 5.x | Strict mode |
| Styling | Tailwind CSS | 4.x | CSS Cascade Layers (`@layer base`) |
| Auth | Firebase Auth | 12.10.0 | Google sign-in via popup |
| Database | Cloud Firestore | 12.10.0 | Real-time listeners for leaderboard |
| AI Generation | OpenAI GPT-4o | via native fetch | No SDK dependency |
| Analytics | Google Analytics 4 | gtag.js | 33 custom events |
| Hosting | Vercel | — | Auto-deploys from GitHub `main` |
| Domain | RuleSnob.com | — | Configured in Vercel + DNS |

## File Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout: Inter font, GA4 scripts, AuthProvider
│   ├── page.tsx                    # Landing page (logged-out → sign in, logged-in → redirect to /play)
│   ├── globals.css                 # Tailwind v4 imports, @layer base resets (iOS Safari fix)
│   ├── play/
│   │   └── page.tsx                # Main game: all 4 screens (home/session/feedback/summary),
│   │                               #   session queue builder, SM-2 processing, AI generation,
│   │                               #   Firestore persistence, full analytics instrumentation,
│   │                               #   display name prompt
│   ├── leaderboard/
│   │   └── page.tsx                # Group management (create/join/leave), real-time leaderboard,
│   │                               #   shareable invite links, analytics
│   ├── profile/
│   │   └── page.tsx                # User profile: stats, category mastery, groups, sign out
│   ├── join/
│   │   └── [code]/
│   │       └── page.tsx            # Shareable invite URL handler: sign-in → name → join flow
│   └── api/
│       └── generate-scenario/
│           └── route.ts            # POST: GPT-4o scenario generation with validation
│
├── components/
│   ├── HomeScreen.tsx              # Score card, category mastery bars, tier/length selectors,
│   │                               #   start button, leaderboard link, profile avatar
│   ├── SessionScreen.tsx           # Scenario text, 4 answer choices, progress bar
│   ├── FeedbackScreen.tsx          # Correct/incorrect result, rule explanation, "I guessed" button
│   │                               #   with visual feedback, flag/report menu
│   ├── SummaryScreen.tsx           # Session results, category breakdown, accuracy stats
│   ├── AuthButton.tsx              # Google sign-in button with logo SVG, signed-in state
│   └── ProtectedRoute.tsx          # Auth gate wrapper, redirects to / if not authenticated
│
├── lib/
│   ├── analytics.ts                # 33 typed GA4 event functions + setUserProperties
│   ├── auth.tsx                    # AuthProvider context, useAuth hook, Google sign-in/out
│   │                               #   with analytics tracking (attempt/success/error/signout)
│   ├── firebase.ts                 # Firebase app init (getFirebaseAuth, getFirebaseDb helpers)
│   ├── firestore.ts                # All Firestore operations:
│   │                               #   - ensureUserDoc (syncs displayName/photoURL on every sign-in)
│   │                               #   - updateDisplayName, getUserDisplayName
│   │                               #   - loadCardStates, loadUserStats, saveSessionResults
│   │                               #   - createGroup, joinGroup, leaveGroup, getUserGroups
│   │                               #   - getGroupByInviteCode, getGroupMembers
│   │                               #   - subscribeToGroupMembers (real-time)
│   │                               #   - flagScenario
│   ├── sm2.ts                      # SM-2 spaced repetition algorithm (DO NOT MODIFY)
│   ├── scoring.ts                  # Rules IQ calculation, getTitle, getTitleColor
│   ├── scenarios.ts                # 49 original curated scenarios + CATEGORIES constant
│   │                               #   + re-exports all batch imports as unified SCENARIOS array
│   ├── scenarios-batch-1.ts        # ~80 scenarios (first expansion batch)
│   ├── scenarios-batch-2.ts        # ~80 scenarios
│   ├── scenarios-batch-3.ts        # ~80 scenarios
│   ├── scenarios-batch-4.ts        # ~80 scenarios
│   ├── scenarios-batch-5.ts        # ~100 scenarios
│   ├── scenarios-batch-6.ts        # ~100 scenarios
│   ├── scenarios-batch-7.ts        # ~100 scenarios
│   ├── scenarios-batch-8.ts        # ~100 scenarios
│   ├── scenarios-batch-9.ts        # ~100 scenarios
│   ├── scenarios-batch-10.ts       # ~100 scenarios
│   ├── scenarios-batch-11.ts       # ~100 scenarios
│   └── scenarios-batch-12.ts       # ~50 scenarios
│
└── types/
    └── index.ts                    # All TypeScript interfaces:
                                    #   CategoryKey, Tier, Scenario, CategoryInfo, CardState,
                                    #   SessionResult, UserStats, GroupDoc, GroupMember, ScenarioFlag
```

## Key Algorithms

### SM-2 Spaced Repetition (`lib/sm2.ts`)

**DO NOT MODIFY.** This is extracted from the original prototype and tested.

```typescript
interface CardState {
  easeFactor: number;     // starts at 2.5, min 1.3
  interval: number;       // 0 = new/unseen, 1 = first correct, 6 = second correct, then *= easeFactor
  dueTime: number;        // timestamp (ms) when card is next due
  timesSeen: number;
  timesCorrect: number;
  lastSeen: number;       // timestamp (ms)
}

// On correct: interval progresses 0→1→6→(×easeFactor), easeFactor += 0.1
// On incorrect: interval resets to 0, easeFactor -= 0.2 (min 1.3)
// dueTime: if interval=0, due in 60 seconds; otherwise due in interval × 86400000ms (days)
// "I guessed" button: treats correct answer as incorrect (resets interval to 0, penalizes ease)
```

### Rules IQ Scoring (`lib/scoring.ts`)

```
Per-category mastery = (accuracy × 0.7) + (easeBonus × 0.3)
  where accuracy   = timesCorrect / timesSeen
  where easeBonus  = (easeFactor - 1.3) / (2.5 - 1.3), clamped 0–1

Overall RulesIQ = weighted_avg(category_masteries) × 200 × coverage
  where coverage = min(1, scenariosSeen / (totalScenarios × 0.5))

Titles:
  0–40:   Rookie           (color: #9E9E9E)
  41–80:  Weekend Player   (color: #E65100)
  81–120: Club Competitor   (color: #1565C0)
  121–160: Rules Savant     (color: #2E7D32)
  161–200: Rules Official   (color: #1B5E20)
```

### Session Queue Logic (in `play/page.tsx`)

The queue is built based on session length (9 or 18 holes) and difficulty tier filter:

| Slot | Source | Count (9 holes) | Count (18 holes) |
|------|--------|-----------------|-------------------|
| 1 | "Recently wrong" (interval = 0) | up to 3 | up to 5 |
| 2 | "Due for review" (sorted by dueTime asc) | up to 3 | up to 7 |
| 3 | "New/unseen" (random) | up to 3 | up to 6 |
| 4 | AI-generated (when unseen curated < needed) | fills remaining | fills remaining |

The combined queue is shuffled. If queue is empty (all cards seen and not due), serves random cards.

## Scenario Data

### Counts

- **49** original curated scenarios in `scenarios.ts`
- **~1,001** expansion scenarios across `scenarios-batch-1.ts` through `scenarios-batch-12.ts`
- **Total: ~1,050 curated scenarios** + unlimited AI-generated
- All scenarios verified against the 2023 Rules of Golf with January 2026 Additional Clarifications

### Categories

| Key | Name | Rules | Color |
|-----|------|-------|-------|
| FUNDAMENTALS | Fundamentals | 1–4 | #2E7D32 |
| PLAYING_ROUND | Playing the Round | 5–6 | #1565C0 |
| PLAYING_BALL | Playing the Ball | 7–11 | #6A1B9A |
| BUNKERS_GREENS | Bunkers & Greens | 12–13 | #C62828 |
| LIFTING_RETURNING | Lifting & Returning | 14 | #E65100 |
| FREE_RELIEF | Free Relief | 15–16 | #00838F |
| PENALTY_RELIEF | Penalty Relief | 17–19 | #AD1457 |
| RESOLVING | Resolving Issues | 20 | #4E342E |

### Difficulty Tiers

| Tier | Target Audience |
|------|----------------|
| `weekend` | Recreational golfers — common situations, straightforward rulings |
| `competitor` | Competitive club golfers — less common situations, relief procedures |
| `official` | Rules officials — edge cases, match play specifics, obscure interactions |

### Scenario Structure

```typescript
interface Scenario {
  id: string;            // e.g., "f1", "gen_bg17", "ai_1710000000_x4k2"
  category: CategoryKey;
  tier: Tier;
  text: string;          // The scenario/question
  choices: string[];     // Always exactly 4 choices
  correct: number;       // 0-indexed correct answer
  rule: string;          // Official rule reference, e.g., "Rule 17.1d"
  explanation: string;   // Why correct, citing specific sub-rule
  tags: string[];        // e.g., ["stroke-play", "penalty-area", "ai-generated"]
}
```

### Terminology Standards (enforced across all 1,050 scenarios)

Modern Rules of Golf terminology MUST be used:
- "penalty area" (NOT "water hazard")
- "temporary water" (NOT "casual water")
- "general area" (NOT "through the green")
- "another player" (NOT "fellow competitor" — in stroke play)
- Explanations start with "Under Rule X.Ya..." citing the specific sub-rule

### Key 2023/2026 Rules Facts

These have been verified and must not be contradicted:
- Loose impediments CAN be removed in bunkers (changed 2019)
- You CAN leave the flagstick in while putting (changed 2019)
- Double hit = no penalty, counts as one stroke (changed 2019)
- Caddie CAN touch the putting green to indicate line of play (changed 2019)
- Ball moved during search = replace, no penalty stroke (Rule 7.4) — WAIT, actually this IS one penalty stroke
- Penalty areas: can ground club, touch/move loose impediments (changed 2019)
- Unplayable in bunker: 1 stroke (back-on-line or 2 club-lengths within bunker) or 2 strokes (drop outside bunker on line)
- Back-on-the-line drop: ball MUST be dropped ON the line (2026 clarification)
- Two balls in motion from putting green collide = both replay (2026 clarification)

## Firestore Data Model

### Collection: `users/{uid}`

```typescript
{
  displayName: string;        // synced from Google on every sign-in, or set via prompt
  email: string;
  photoURL: string;           // synced from Google on every sign-in
  createdAt: Timestamp;
  lastActive: Timestamp;
  lastPlayedDate: string;     // "YYYY-MM-DD" for streak calculation
  rulesIQ: number;            // cached at session end for leaderboard queries
  title: string;              // cached: "Rookie" | "Weekend Player" | etc.
  totalSessions: number;
  streak: number;
  scenariosSeen: number;
  groupIds: string[];         // group document IDs this user belongs to
}
```

### Subcollection: `users/{uid}/cardStates/{scenarioId}`

```typescript
{
  easeFactor: number;
  interval: number;
  dueTime: Timestamp;
  timesSeen: number;
  timesCorrect: number;
  lastSeen: Timestamp;
}
```

Card states are written in a batch at session end (not per-answer) for performance.

### Collection: `groups/{groupId}`

```typescript
{
  name: string;               // e.g., "Sunday Foursome"
  createdBy: string;          // uid of creator
  inviteCode: string;         // 6-char from "ABCDEFGHJKLMNPQRSTUVWXYZ23456789" (no I/O/0/1)
  memberUids: string[];
  createdAt: Timestamp;
}
```

### Collection: `flags`

```typescript
{
  scenarioId: string;
  uid: string;
  reason: "wrong_answer" | "unclear" | "outdated" | "other";
  comment: string;
  createdAt: Timestamp;
}
```

### Firestore Security Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read: if request.auth != null;        // any authenticated user (for leaderboard)
      allow write: if request.auth.uid == uid;

      match /cardStates/{cardId} {
        allow read, write: if request.auth.uid == uid;
      }
    }

    match /groups/{groupId} {
      allow read: if request.auth != null;          // any authenticated user can look up by invite code
      allow create: if request.auth != null;
      allow update: if request.auth != null && request.auth.uid in resource.data.memberUids;
    }

    match /flags/{flagId} {
      allow create: if request.auth != null;
      allow read: if false;                         // admin-only via Firebase Console
    }
  }
}
```

**Note:** Group read rules must allow any authenticated user (not just members) because `joinGroup` queries by `inviteCode` before the user is a member. The join page (`/join/[code]`) defers all Firestore queries until after authentication.

## Environment Variables (`.env.local`)

```env
# Firebase (all NEXT_PUBLIC_ for client-side)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# OpenAI (server-side only, used by /api/generate-scenario)
OPENAI_API_KEY=
```

Never commit `.env.local`. It is in `.gitignore`.

## Design System

### Color Palette

```
fairway:    #1B5E20  (primary dark green — buttons, headers, Rules IQ score)
green:      #2E7D32  (primary green — branding, correct state)
lightGreen: #E8F5E9  (green tint background — correct feedback, selected states)
sand:       #D4A76A  (accent warm — gold rank badge)
scorecard:  #FAF8F5  (page background base)
parchment:  #F0EDE8  (page background gradient end)
pencil:     #2D2D2D  (primary text)
red:        #C62828  (incorrect/error)
white:      #FFFFFF
gray100:    #F5F5F5
gray200:    #EEEEEE  (borders, dividers)
gray400:    #BDBDBD  (disabled states)
gray600:    #757575  (secondary text)
gray800:    #424242
```

### Typography
- Font: Inter (via `next/font/google`, variable `--font-inter`)
- Mobile-first: `max-width: 520px` container, centered
- The app feels like a golf scorecard — clean, minimal, high contrast

### Component Patterns
- Cards: `bg-white rounded-2xl shadow-sm border border-[#EEEEEE]`
- Primary buttons: `bg-[#1B5E20] text-white rounded-xl font-semibold shadow-[0_4px_12px_rgba(27,94,32,0.3)]`
- Secondary buttons: `bg-white border-[1.5px] border-[#EEEEEE] rounded-xl font-semibold`
- Toggle buttons (tier/length): selected = `border-[#1B5E20] bg-[#E8F5E9] text-[#1B5E20]`
- Progress bars: `h-1.5 rounded-full bg-[#F5F5F5]` with colored fill
- Correct state: `bg-[#E8F5E9]` green tint
- Incorrect state: `bg-[#FFEBEE]` red tint
- Section headers: `text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]`

### CSS Notes (Tailwind v4)

Tailwind v4 uses CSS Cascade Layers internally. All base resets MUST go in `@layer base` in `globals.css`, otherwise they override Tailwind utility classes regardless of specificity. This was the root cause of the iOS Safari button styling bug — `background: none` on buttons was winning over `bg-[#1B5E20]`.

```css
@layer base {
  button, input[type="button"], input[type="submit"] {
    -webkit-appearance: none;
    appearance: none;
  }
}
```

## Analytics Event Taxonomy

GA4 tag: `G-W184WT4ZK0` — loaded in `layout.tsx` via `next/script` with `strategy="afterInteractive"`.

All 33 events are in `lib/analytics.ts` with full TypeScript typing.

| Domain | Events | Key Parameters |
|--------|--------|----------------|
| **Auth** | `auth_sign_in_attempt`, `auth_sign_in_success`, `auth_sign_in_error`, `auth_sign_out` | method, error_code |
| **Session** | `session_start_game`, `session_complete`, `session_abandon` | tier, length, queue composition, accuracy, IQ delta, title changes, velocity, duration |
| **Scenario** | `scenario_presented`, `scenario_answered`, `guess_marked`, `scenario_flagged` | SM-2 state (ease before/after, interval before/after), time_to_answer, choice_position_bias, is_repeat, is_ai_generated |
| **Feedback** | `feedback_screen_view`, `feedback_screen_dwell` | dwell_time, read_explanation (>3s heuristic) |
| **Navigation** | `screen_transition`, `tier_changed`, `session_length_changed` | from/to screens, old/new values |
| **Groups** | `group_created`, `group_joined`, `group_left`, `invite_code_copied`, `leaderboard_viewed` | member_count, user_rank, iq_gap_to_leader |
| **Milestones** | `rules_iq_milestone`, `title_change`, `streak_milestone`, `category_mastered`, `perfect_session` | milestone value, sessions_to_reach |
| **AI** | `ai_generation_started`, `ai_generation_complete` | scenarios_requested/received, latency |
| **Performance** | `app_loaded`, `app_error` | load_time, firestore_hydration_ms |
| **Engagement** | `return_visit`, `first_ever_session`, `scenario_velocity` | days_since_last, streak_broken, scenarios_per_minute |

User properties (set once per session): `rules_iq`, `user_title`, `total_sessions`, `streak`, `scenarios_seen`, `total_scenarios`, `coverage_pct`, `group_count`.

## API Routes

### POST `/api/generate-scenario`

Generates a single AI scenario using GPT-4o.

**Request:**
```json
{ "category": "BUNKERS_GREENS", "tier": "competitor" }
```

**Response:**
```json
{
  "scenario": {
    "id": "ai_1710000000_x4k2",
    "category": "BUNKERS_GREENS",
    "tier": "competitor",
    "text": "...",
    "choices": ["A", "B", "C", "D"],
    "correct": 2,
    "rule": "Rule 12.2b",
    "explanation": "Under Rule 12.2b, ...",
    "tags": ["bunker", "loose-impediments", "ai-generated"],
    "aiGenerated": true
  }
}
```

**Validation:** Must have exactly 4 choices, correct index 0–3, rule starting with "Rule", explanation > 30 chars, text > 20 chars, tags as array.

**Error codes:** 400 (invalid category/tier), 422 (validation failed), 500 (parse error), 502 (OpenAI API error).

## User Flows

### New User (Landing → First Session)
1. `rulesnob.com` → Landing page with Google sign-in button
2. Sign in → `ensureUserDoc` creates Firestore user doc with Google name/photo
3. If no display name → "What should we call you?" prompt
4. Redirect to `/play` → Home screen (Rules IQ: 0, Rookie)
5. Select tier + length → Start session → Queue of new/unseen cards
6. Answer questions → Feedback screen with rule explanation
7. Session end → Summary → Firestore batch write (card states + user stats)

### Invite Flow (Friend Receives Link)
1. `rulesnob.com/join/A3X7K2` → "You've been invited to a group!" + sign-in button
2. Sign in (or already signed in) → Group lookup by invite code
3. If no display name → "What should we call you?" prompt
4. "Join as [Name]" confirmation → Adds to group + user's groupIds
5. "You're in!" → Start Playing or View Leaderboard

### Returning User
1. `rulesnob.com` → Auto-redirect to `/play` (already authenticated)
2. Home screen shows current Rules IQ, streak, due/new counts
3. Analytics: `return_visit` event with days_since_last, streak_broken check

## Critical Rules

1. **Do NOT modify the SM-2 algorithm** (`lib/sm2.ts`). It has been tested and works correctly.
2. **Do NOT modify the curated scenarios** without verifying against the 2023 Rules of Golf. All 1,050 scenarios have been accuracy-audited and terminology-standardized.
3. **Always use TypeScript** with strict mode.
4. **Mobile-first design.** The app is primarily used on phones at the golf course. Max-width 520px container.
5. **Batched writes.** Card state writes happen at session end in a single Firestore batch, not per-answer. This is critical for cost and performance.
6. **The "I guessed" button** is important for learning honesty. It treats a correct answer as incorrect for SM-2 purposes, with visual feedback ("✓ Marked as guess").
7. **CSS resets go in `@layer base`.** Tailwind v4 uses CSS Cascade Layers. Unlayered styles override layered styles regardless of specificity.
8. **Invite link flow defers Firestore queries until after auth.** Unauthenticated users cannot query Firestore. The `/join/[code]` page shows a sign-in prompt first, then looks up the group.
9. **Group reads require auth but NOT membership.** The `joinGroup` function queries by `inviteCode` before the user is a member, so Firestore rules must allow any authenticated user to read groups.

## Development

### Prerequisites
- Node.js 18+
- npm (not yarn or pnpm)

### Commands
```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # ESLint
```

### Deploy
Push to `main` → Vercel auto-deploys. No manual deployment needed.

### Adding New Scenarios

1. Create `src/lib/scenarios-batch-N.ts` following the pattern of existing batch files
2. Export as `SCENARIOS_BATCH_N`
3. Import and spread into the `SCENARIOS` array in `src/lib/scenarios.ts`
4. Verify all scenarios use modern terminology (penalty area, temporary water, general area, another player)
5. Verify all explanations cite specific sub-rules ("Under Rule X.Ya...")
6. Build to confirm no TypeScript errors

### Scenario ID Convention
- Original curated: `f1`, `bg3`, `pr7` (category prefix + number)
- Batch expansions: `gen_f25`, `gen_bg17` (gen_ + category prefix + number)
- AI-generated: `ai_${timestamp}_${random4}` (auto-assigned at generation time)
