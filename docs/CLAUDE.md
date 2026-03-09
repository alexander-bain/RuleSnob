# Rules IQ — Project CLAUDE.md

## What This Is

Rules IQ is a spaced-repetition learning game for mastering the Rules of Golf. Think Anki meets golf rules trivia, designed to be played in short sessions with friends. The game presents scenario-based multiple-choice questions sourced from the official 2023 Rules of Golf, tracks mastery using the SM-2 algorithm, computes a composite "Rules IQ" score (0–200), and will eventually generate new scenarios with LLMs.

**Live URL target:** golfrules.alexbain.com (Vercel)

## Current State

We have a **working single-file React prototype** (`prototype/rules-iq.jsx`) with:
- 49 curated & audited scenarios across 8 rule categories and 3 difficulty tiers
- Full SM-2 spaced repetition engine
- Composite scoring system (Rules IQ 0–200 with titles)
- Session-based gameplay (queue of ~13 cards per session)
- Category mastery heat map
- "I guessed" button for honest self-assessment
- All inline styles, no external dependencies beyond React

**What's missing:** persistence, authentication, leaderboards, LLM scenario generation, deployment.

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 14+ (App Router) | React SSR, API routes, Vercel-native |
| Auth | Firebase Auth | Google sign-in, zero-friction for casual users |
| Database | Cloud Firestore | Real-time listeners for leaderboards, easy security rules |
| Hosting | Vercel | Free tier, automatic deploys from GitHub |
| LLM (Phase 3) | OpenAI GPT-4 via API route | Scenario generation with validation |
| Styling | Tailwind CSS | Utility-first, replaces all inline styles from prototype |

## Architecture

```
rules-iq/
├── app/
│   ├── layout.tsx              # Root layout with font loading, metadata
│   ├── page.tsx                # Landing/marketing page (logged-out state)
│   ├── play/
│   │   └── page.tsx            # Main game (protected route)
│   ├── leaderboard/
│   │   └── page.tsx            # Group leaderboard
│   └── api/
│       ├── generate-scenario/
│       │   └── route.ts        # LLM scenario generation (Phase 3)
│       └── validate-scenario/
│           └── route.ts        # LLM scenario validation (Phase 3)
├── components/
│   ├── HomeScreen.tsx          # Score card, category mastery, session config
│   ├── SessionScreen.tsx       # Scenario display, answer choices
│   ├── FeedbackScreen.tsx      # Correct/incorrect, rule explanation
│   ├── SummaryScreen.tsx       # Session results, category breakdown
│   ├── Leaderboard.tsx         # Group leaderboard table
│   ├── AuthButton.tsx          # Google sign-in/sign-out
│   ├── ProtectedRoute.tsx      # Auth gate wrapper
│   └── ui/                     # Shared UI primitives (buttons, cards, badges)
├── lib/
│   ├── firebase.ts             # Firebase app initialization
│   ├── auth.ts                 # Auth context provider, useAuth hook
│   ├── firestore.ts            # Firestore reads/writes, real-time subscriptions
│   ├── sm2.ts                  # SM-2 algorithm (extracted from prototype)
│   ├── scoring.ts              # Rules IQ calculation (extracted from prototype)
│   └── scenarios.ts            # Scenario data + types
├── types/
│   └── index.ts                # TypeScript interfaces
├── public/
│   └── rules-of-golf-2023.pdf  # Reference PDF for LLM validation
├── prototype/
│   └── rules-iq.jsx            # Original working prototype (reference only)
├── CLAUDE.md                   # This file
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── .env.local                  # Firebase config, OpenAI key (never commit)
```

## Key Implementation Details

### SM-2 Algorithm

Extract this EXACTLY from the prototype. Do not modify the algorithm:

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
```

### Rules IQ Scoring

```typescript
// Per-category mastery: (accuracy × 0.7) + (easeBonus × 0.3)
// where accuracy = timesCorrect / timesSeen
// and easeBonus = (easeFactor - 1.3) / (2.5 - 1.3) normalized 0–1
//
// Overall RulesIQ = weighted average across categories × 200 × coverage
// where coverage = min(1, scenariosSeen / (totalScenarios × 0.5))
//
// Titles:
//   0–40:   Rookie
//   41–80:  Weekend Player
//   81–120: Club Competitor
//   121–160: Rules Savant
//   161–200: Rules Official
```

### Session Queue Logic

Each session builds a queue of ~13 cards:
1. Up to 3 "recently wrong" cards (interval = 0)
2. Up to 5 "due for review" cards (sorted by dueTime ascending)
3. Up to 5 "new/unseen" cards (random order)
4. Shuffle the combined queue
5. If queue is empty (all cards seen and not due), serve 10 random cards

### Scenario Data Structure

```typescript
interface Scenario {
  id: string;            // e.g., "f1", "bg3", "pr7"
  category: CategoryKey; // FUNDAMENTALS | PLAYING_ROUND | PLAYING_BALL | BUNKERS_GREENS | LIFTING_RETURNING | FREE_RELIEF | PENALTY_RELIEF | RESOLVING
  tier: "weekend" | "competitor" | "official";
  text: string;          // The scenario/question
  choices: string[];     // Always exactly 4 choices
  correct: number;       // 0-indexed correct answer
  rule: string;          // Official rule reference, e.g., "Rule 17.1d"
  explanation: string;   // Why the answer is correct, citing the rule
}
```

### Categories

```typescript
const CATEGORIES = {
  FUNDAMENTALS:       { name: "Fundamentals",        rules: "1–4",   color: "#2E7D32" },
  PLAYING_ROUND:      { name: "Playing the Round",   rules: "5–6",   color: "#1565C0" },
  PLAYING_BALL:       { name: "Playing the Ball",    rules: "7–11",  color: "#6A1B9A" },
  BUNKERS_GREENS:     { name: "Bunkers & Greens",    rules: "12–13", color: "#C62828" },
  LIFTING_RETURNING:  { name: "Lifting & Returning", rules: "14",    color: "#E65100" },
  FREE_RELIEF:        { name: "Free Relief",         rules: "15–16", color: "#00838F" },
  PENALTY_RELIEF:     { name: "Penalty Relief",      rules: "17–19", color: "#AD1457" },
  RESOLVING:          { name: "Resolving Issues",    rules: "20",    color: "#4E342E" },
};
```

## Firestore Data Model

### Collection: `users/{uid}`

```typescript
interface UserDoc {
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Timestamp;
  lastActive: Timestamp;
  rulesIQ: number;            // cached for leaderboard queries
  title: string;              // cached: "Rookie" | "Weekend Player" | etc.
  totalSessions: number;
  streak: number;
  scenariosSeen: number;
  groupIds: string[];         // groups this user belongs to
}
```

### Subcollection: `users/{uid}/cardStates/{scenarioId}`

```typescript
interface CardStateDoc {
  easeFactor: number;
  interval: number;
  dueTime: Timestamp;
  timesSeen: number;
  timesCorrect: number;
  lastSeen: Timestamp;
}
```

**Why subcollection?** Individual card states are read/written frequently during gameplay. Keeping them in a subcollection avoids reading/writing the entire user document on every answer. Firestore charges per document read, so this is more efficient.

### Collection: `groups/{groupId}`

```typescript
interface GroupDoc {
  name: string;               // e.g., "Sunday Foursome"
  createdBy: string;          // uid
  inviteCode: string;         // 6-char alphanumeric for easy sharing
  memberUids: string[];
  createdAt: Timestamp;
}
```

### Firestore Security Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{uid} {
      allow read: if request.auth != null;  // any authenticated user can read (for leaderboard)
      allow write: if request.auth.uid == uid;

      match /cardStates/{cardId} {
        allow read, write: if request.auth.uid == uid;
      }
    }

    // Groups: members can read, creator can write
    match /groups/{groupId} {
      allow read: if request.auth != null && request.auth.uid in resource.data.memberUids;
      allow create: if request.auth != null;
      allow update: if request.auth != null && request.auth.uid in resource.data.memberUids;
    }
  }
}
```

## Firebase Setup

The developer (Alex) will create a Firebase project manually. The app needs these values in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Phase 3
OPENAI_API_KEY=
```

### Firebase initialization (`lib/firebase.ts`)

```typescript
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### Auth Context (`lib/auth.ts`)

Provide an `AuthProvider` wrapping the app and a `useAuth()` hook returning:
```typescript
{ user: User | null, loading: boolean, signIn: () => Promise<void>, signOut: () => Promise<void> }
```

Use `GoogleAuthProvider` for sign-in. Use `onAuthStateChanged` to persist auth state.

## Design System

### Color Palette (from prototype)

```
fairway:    #1B5E20  (primary dark green)
green:      #2E7D32  (primary green)
lightGreen: #E8F5E9  (green background)
sand:       #D4A76A  (accent warm)
scorecard:  #FAF8F5  (page background)
pencil:     #2D2D2D  (primary text)
red:        #C62828  (incorrect/error)
white:      #FFFFFF
gray100:    #F5F5F5
gray200:    #EEEEEE
gray400:    #BDBDBD
gray600:    #757575
gray800:    #424242
```

### Typography
- Font: Inter (via next/font/google)
- Mobile-first: max-width 520px container, centered
- The app is designed to feel like a scorecard — clean, minimal, high contrast

### Component Style Guide
- Cards: white bg, rounded-2xl (16px), shadow-sm, 1px border gray-200
- Buttons: rounded-xl (12px), font-semibold
- Primary buttons: fairway bg, white text, green shadow
- Secondary buttons: white bg, gray border
- Category badges: pill-shaped, tinted with category color at 8% opacity
- Progress bars: 4px–6px height, rounded, green fill
- Correct state: green background (#E8F5E9), green border
- Incorrect state: red background (#FFEBEE), red border

## Phase Breakdown

### Phase 1: Ship It (YOU ARE HERE)
1. `npx create-next-app@latest rules-iq --typescript --tailwind --app --src-dir=false`
2. Set up the file structure above
3. Extract SM-2, scoring, and scenario data from prototype into `lib/`
4. Build all 4 game screens as React components (convert inline styles → Tailwind)
5. Add Firebase Auth (Google sign-in)
6. Persist card states to Firestore (read on mount, write on each answer)
7. Cache rulesIQ score and user stats to the user document
8. Add a simple loading state while auth + Firestore hydrate
9. Deploy to Vercel
10. Wire up custom domain: golfrules.alexbain.com

### Phase 2: Social
1. Create group system (create group, generate invite code, join via code)
2. Build leaderboard page showing group members ranked by Rules IQ
3. Real-time Firestore listener for live leaderboard updates
4. Add "Challenge a Friend" mode (same 5 scenarios, compare scores)

### Phase 3: AI Scenarios
1. Build `/api/generate-scenario` endpoint
2. Prompt GPT-4 with category, tier, and the rules PDF as context
3. Validate generated scenario structure (4 choices, correct index, rule reference)
4. Serve validated AI scenarios alongside curated ones
5. Flag system for users to report bad AI scenarios

## Critical Rules

1. **Do NOT modify the SM-2 algorithm.** It has been tested and works correctly.
2. **Do NOT modify the 49 curated scenarios.** They have been audited against the official 2023 Rules of Golf and are verified correct.
3. **Always use TypeScript** with strict mode.
4. **Mobile-first design.** The app is primarily used on phones at the golf course.
5. **Offline resilience.** If Firestore is unavailable, the game should still work with local state and sync when reconnected. Use Firestore's built-in offline persistence (`enableIndexedDbPersistence`).
6. **Performance.** Card state writes should be batched or debounced — don't write to Firestore on every single answer during a session. Write the batch at session end.
7. **The "I guessed" button** is important for learning honesty. Keep it.

## Testing

- After building, run the app locally and play through at least one full session
- Verify: Google sign-in works, card states persist across page reloads, Rules IQ score calculates correctly, session queue logic matches the prototype behavior
- Verify the leaderboard shows the authenticated user's score

## Environment Notes

- Node.js 18+
- npm (not yarn or pnpm)
- Deploy target: Vercel (connect GitHub repo)
- Domain: golfrules.alexbain.com (configure in Vercel dashboard + DNS)
