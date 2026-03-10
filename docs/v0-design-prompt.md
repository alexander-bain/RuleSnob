# RuleSnob — v0.app Design Prompt

Copy-paste this into v0.app to generate UI designs for the RuleSnob app.

---

## Prompt

Design a complete mobile-first web app called **RuleSnob** — a spaced-repetition learning game for mastering the Rules of Golf. The app should feel like a premium golf scorecard: clean, minimal, high contrast, with a sophisticated green and cream color palette. Think Augusta National meets Duolingo.

### Brand & Design System

**Color Palette:**
- Primary dark green (fairway): `#1B5E20`
- Primary green: `#2E7D32`
- Light green (success bg): `#E8F5E9`
- Sand/warm accent: `#D4A76A`
- Page background: `#FAF8F5` to `#F0EDE8` gradient
- Primary text (pencil): `#2D2D2D`
- Red (incorrect/error): `#C62828`
- Light red bg: `#FFEBEE`
- Orange (warning/focus areas): `#E65100`
- Orange bg: `#FFF3E0`
- White: `#FFFFFF`
- Gray 100: `#F5F5F5`
- Gray 200: `#EEEEEE`
- Gray 400: `#BDBDBD`
- Gray 600: `#757575`
- Gray 800: `#424242`

**Category Colors** (used for badges, progress bars, mastery indicators):
- Fundamentals: `#2E7D32` (green)
- Playing the Round: `#1565C0` (blue)
- Playing the Ball: `#6A1B9A` (purple)
- Bunkers & Greens: `#C62828` (red)
- Lifting & Returning: `#E65100` (orange)
- Free Relief: `#00838F` (teal)
- Penalty Relief: `#AD1457` (pink)
- Resolving Issues: `#4E342E` (brown)

**Typography:**
- Font: Inter (Google Fonts)
- Mobile-first: max-width 520px container, centered
- Scorecard aesthetic — clean, minimal, high contrast

**Component Style:**
- Cards: white bg, rounded-2xl (16px), subtle shadow-sm, 1px border `#EEEEEE`
- Buttons: rounded-xl (12px), font-semibold
- Primary CTA: `#1B5E20` bg, white text, green shadow `rgba(27,94,32,0.3)`
- Secondary: white bg, gray border, hover gray-100
- Category badges: pill-shaped, tinted with category color at 8% opacity, 1px border at 18% opacity
- Progress bars: 6px height, rounded-full, smooth transitions
- Score displays: large bold numbers, uppercase tracking labels underneath

### Screen 1: Landing Page (Logged Out)

A centered, minimal landing page:
- "RuleSnob" title in large bold `#1B5E20` text
- Tagline: "Master the Rules of Golf with spaced repetition. 300+ scenario-based questions. Track your Rules IQ. Become a Rules Official."
- A prominent "Sign in with Google" button (white with Google logo, rounded, subtle shadow)
- Footer: "Based on the 2023 Rules of Golf" in small gray text
- Warm cream gradient background
- No nav bar, no clutter — just the essentials

### Screen 2: Home Screen (Dashboard)

The main hub after signing in. Shows the user's progress at a glance.

**Header:**
- "RuleSnob" in small uppercase tracking text, top left
- "Sign out" link, top right (subtle gray text)

**Score Card (hero section):**
- Large Rules IQ number (64px, bold, `#1B5E20`)
- Title below it (e.g., "Weekend Player") in the corresponding tier color
- Three stats in a row below: Scenarios seen | Sessions played | Day Streak
- Separated by thin vertical dividers

**Category Mastery Section:**
- Card with "Category Mastery" header (uppercase, small, gray)
- 8 categories listed vertically, each showing:
  - Category name + rule range in small gray text
  - Mastery percentage (colored: green ≥70%, orange ≥40%, red >0%, gray if unseen)
  - Thin progress bar filled to the mastery percentage
  - If unseen, show "0/N" instead of percentage

**Difficulty Selector:**
- Card with "Difficulty" header
- 4 buttons in a row: All | Weekend | Competitor | Official
- Selected state: green border, light green bg, green text
- Unselected: gray border, white bg, gray text

**Session Length Selector:**
- Card with "Session Length" header
- 2 buttons: "9 holes" | "18 holes"
- Same selected/unselected styling as difficulty

**Start Button:**
- Full-width green CTA: "Start Front 9" or "Start Full 18"
- Below it: small gray text "X due for review · Y new scenarios"

### Screen 3: Session Screen (Question)

A clean quiz interface:

**Progress bar** at the top: thin green bar showing progress through the session (e.g., 4/9), with the count displayed to the right

**Category badge** below the progress bar: pill showing the category name and difficulty tier (e.g., "Bunkers & Greens · Competitor"), colored with the category's color

**Scenario card:**
- White card with the scenario text in 17px regular weight
- Well-spaced, easy to read

**Answer choices:**
- 4 buttons stacked vertically with small gaps
- Each has a letter badge (A, B, C, D) in a small rounded square on the left
- Full answer text to the right
- Hover state: green border, light green bg
- Clean, tappable targets (plenty of padding)

### Screen 4: Feedback Screen (After Answering)

Shows whether the user got it right and teaches the rule:

**Result badge** at top:
- Correct: green checkmark, "Correct!" text in green, green-tinted pill bg
- Incorrect: red X, "Incorrect" text in red, red-tinted pill bg

**Scenario recap card:**
- Shows the question text again (in gray, smaller)
- All 4 answer choices visible:
  - Correct answer: green bg (`#E8F5E9`), green border, green letter
  - User's wrong answer (if incorrect): red bg (`#FFEBEE`), red border, red letter
  - Other choices: no bg, gray text, muted

**Rule explanation card:**
- Shows the official rule reference (e.g., "RULE 12.2B(1)") in small green uppercase
- Explanation paragraph below in dark text

**Action buttons:**
- If user got it correct: "I guessed" button (secondary, left) + "Next Scenario" button (primary CTA, right, wider)
- If incorrect: just "Next Scenario" button
- Last question: "See Results" instead of "Next Scenario"

### Screen 5: Session Summary

Shown after completing all questions in a session:

**"Session Complete" header** in small green uppercase

**Score ring:**
- Large circular SVG ring (160px)
- Ring fills proportionally to accuracy percentage
- Color: green ≥70%, orange ≥40%, red <40%
- Accuracy percentage in the center (large bold)
- "X/Y" correct count below it (small gray)

**Stats row:**
- Three stats: Rules IQ | Duration (in minutes) | Day Streak
- In a white card with dividers

**Category breakdown card:**
- "This Session" header
- List of categories played with score per category
- Each row: category name left, "X/Y (Z%)" right, colored by performance

**Focus areas callout** (only if <50% in any category):
- Orange-tinted card: "Focus area(s)"
- Lists weak categories: "Review [X] and [Y] before your next session."

**Action buttons:**
- "Home" (secondary, left) + "Play Again" (primary CTA, right, wider)

### Screen 6: Profile Page (Concept)

A user profile page accessible from the home screen:

**Profile header:**
- User avatar (Google photo, circular, ~80px)
- Name below
- Title and Rules IQ prominently displayed

**Stats grid:**
- 2x2 grid of stat cards: Total Scenarios | Sessions | Day Streak | Avg Accuracy
- Each card: large number + small label

**Achievement badges section:**
- Horizontal scrollable or grid of earned badges
- Example badges: "First Session", "7-Day Streak", "Rules Savant", "Perfect Session", "All Categories Seen", "100 Scenarios"
- Unearned badges shown as locked/grayed out

**Mastery timeline:**
- A simple line chart or sparkline showing Rules IQ over time
- Last 30 days or last 20 sessions

**Golf profile section (optional):**
- Handicap index
- Home course
- Years playing
- Displayed in a card with editable fields

### Screen 7: Leaderboard (Future)

Group leaderboard for competing with friends:

**Group header:**
- Group name (e.g., "Sunday Foursome")
- Invite code or share button

**Leaderboard table:**
- Rank | Avatar | Name | Rules IQ | Title
- Current user highlighted with green left border
- Top 3 get medal indicators (gold, silver, bronze)

**Join/Create buttons** at the bottom

### Interaction & Animation Notes

- Buttons should have `active:scale-[0.98]` for tactile press feedback
- Progress bars should animate smoothly (`transition-all duration-300`)
- Score ring on summary screen should animate from 0 to final value
- Category mastery bars should animate on mount
- Cards should fade in subtly on screen transitions
- The "I guessed" button is important — it demotes a correctly-answered card because the user admits they didn't truly know the answer. Make it visually distinct but secondary.
- Streak should show a fire/flame indicator when streak ≥ 3

### Mobile-First Responsive

- Max width 520px, centered on desktop
- All touch targets ≥ 44px
- No horizontal scrolling
- Safe area padding for notch/home indicator on iOS
- Full-bleed gradient background behind the centered container

### Tone

The app should feel like it was designed by someone who takes golf seriously but doesn't take themselves too seriously. Premium without being stuffy. Think: the guy at the club who knows every rule but explains them with a smile.

---

Generate multiple design variations for each screen. Focus on the Home Screen and Session Screen first, as those are the most impactful.
