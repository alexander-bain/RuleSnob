# Rules IQ — Claude Code Kickoff Prompt

Copy-paste the prompt below into Claude Code CLI to start building.

---

## Setup (run these first)

```bash
# 1. Create the Next.js project inside the golfrules directory
cd golfrules
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias="@/*"

# 2. Install Firebase
npm install firebase

# 3. Create .env.local (you'll fill in values after creating Firebase project)
touch .env.local
```

Then create a Firebase project at https://console.firebase.google.com:
1. Create project called "RuleSnob"
2. Enable Authentication → Sign-in method → Google
3. Create Firestore database (start in test mode, we'll add rules later)
4. Go to Project Settings → Your apps → Add web app → copy config values into .env.local

---

## The Prompt

```
Read the CLAUDE.md file in this directory. It contains the complete specification for the RuleSnob app — a spaced-repetition golf rules learning game.

Your job is to build Phase 1. Here's what to do, in order:

1. Read CLAUDE.md thoroughly. It has the architecture, data model, algorithms, and design system.

2. Read prototype/rules-iq.jsx. This is the working prototype you're converting. It has all 49 scenarios, the SM-2 engine, scoring logic, and 4 game screens (home, session, feedback, summary). Don't modify the game logic — port it faithfully.

3. Set up the file structure from CLAUDE.md. Create all directories and files.

4. Extract the core logic into lib/:
   - lib/scenarios.ts — all 49 scenarios + CATEGORIES constant + TypeScript types
   - lib/sm2.ts — SM-2 algorithm, unchanged from prototype
   - lib/scoring.ts — calculateRulesIQ, getTitle, getTitleColor functions

5. Build lib/firebase.ts and lib/auth.ts:
   - Firebase initialization from env vars
   - AuthProvider context + useAuth hook
   - Google sign-in with GoogleAuthProvider

6. Build lib/firestore.ts:
   - loadCardStates(uid) — reads all card states from subcollection
   - saveSessionResults(uid, cardStates, userStats) — batch write at session end
   - subscribeToLeaderboard(groupId, callback) — real-time listener
   - Enable Firestore offline persistence

7. Convert the 4 game screens to Tailwind-styled React components:
   - HomeScreen: score card, category mastery bars, tier selector, start button
   - SessionScreen: progress bar, category badge, scenario text, 4 answer buttons
   - FeedbackScreen: correct/incorrect badge, choice highlighting, rule explanation, "I guessed" button
   - SummaryScreen: accuracy ring (SVG), stats row, category breakdown, weak areas callout

8. Build the main play page (app/play/page.tsx):
   - Wrap with ProtectedRoute (redirect to landing if not authenticated)
   - Load card states from Firestore on mount
   - Run the game loop (same state management as prototype)
   - Save results to Firestore at session end

9. Build the landing page (app/page.tsx):
   - Simple page with app name, tagline, and Google sign-in button
   - If already authenticated, redirect to /play

10. Wire up the layout (app/layout.tsx):
    - Inter font via next/font/google
    - AuthProvider wrapping children
    - Metadata: title "Rules IQ", description about golf rules learning

11. Test locally:
    - npm run dev
    - Sign in with Google
    - Play a full session
    - Refresh the page — card states should persist
    - Check Firestore console to verify data is being written

Focus on getting it working end-to-end. Don't spend time on the leaderboard page yet (Phase 2). Don't build the AI scenario generation yet (Phase 3). The goal is: sign in → play sessions → progress persists → deploy to Vercel.

Important: the color palette, typography, and component style guide are all in CLAUDE.md. Convert the inline styles from the prototype to Tailwind classes, but keep the same visual design — scorecard-cream background, green accents, white cards with subtle shadows. Mobile-first, max-w-lg centered.
```

---

## After the Build

Once Claude Code finishes Phase 1:

1. **Test locally** — `npm run dev`, sign in, play a session, refresh, verify persistence
2. **Deploy** — push to GitHub, connect repo in Vercel dashboard, add env vars in Vercel settings
3. **Custom domain** — add RuleSnob.com in Vercel, update DNS (CNAME to cname.vercel-dns.com)
4. **Firestore security rules** — replace test-mode rules with the production rules from CLAUDE.md
5. **v0 design pass** — once it's live and working, use v0.dev to generate polished component designs, then swap them in

## When to Use v0.dev

After Phase 1 is deployed and working, use v0 to redesign specific components. Good prompts for v0:

- "Design a mobile-first scorecard for a golf rules quiz app. Show a large score number (0-200), a title like 'Club Competitor', stats (scenarios seen, sessions, streak), and a category mastery heat map with 8 categories. Use a cream/green color scheme that feels like a golf scorecard."
- "Design a quiz answer feedback screen for a golf rules app. Show the question, 4 multiple choice answers (highlight correct in green, incorrect in red), and a rule explanation card below. Include a 'I guessed' secondary button and a 'Next Scenario' primary button."
- "Design a leaderboard for a golf rules trivia game. Show player name, photo, Rules IQ score (0-200), title, and rank. Include a group name header and invite button. Green/cream theme."

Take the v0 output (React + Tailwind), adapt it to match your data structures, and drop it into the existing components.
