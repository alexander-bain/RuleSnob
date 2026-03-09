# Rules IQ — Scenario Audit Report

**Date:** March 9, 2026
**Source of truth:** 2023 Rules of Golf (USGA/R&A), plus 2026 Clarifications
**Scope:** All 49 scenarios in `rules-iq.jsx`

---

## Summary

**All 49 scenarios have correct answers and explanations.** Four minor rule citation references were updated for precision. No answer choices, correct answer indices, or explanations required changes.

---

## Fixes Applied

| ID | Category | Old Citation | New Citation | Reason |
|----|----------|-------------|-------------|--------|
| f3 | Fundamentals | Rule 6.1b(2) | Rule 6.1b(1) | Scenario describes match play; 6.1b(1) is the match play rule, 6.1b(2) is stroke play |
| r1 | Playing the Round | Rule 9.1b, Definition of Stroke | Definition of Stroke, Rule 6.2b(5) | Primary rules are the Definition of Stroke (intent required) and Rule 6.2b(5) (ball knocked off tee before stroke) |
| b7 | Playing the Ball | Rule 9.1, Definition of Abnormal Course Condition | Definition of Abnormal Course Conditions | Rule 9.1 ("play it as it lies") wasn't the relevant rule; the key is the Definition itself |
| b8 | Playing the Ball | Rule 19.2a | Rule 19.2 | 19.2a covers only stroke-and-distance; Rule 19.2 covers all three unplayable options |

---

## Full Scenario Verification

### Fundamentals (Rules 1–4): 5 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| f1 | Ball moved during search | Rule 7.4 | Correct |
| f2 | Ball out of bounds | Rule 18.1 | Correct |
| f3 | Tee outside markers (match play) | Rule 6.1b(1) | Fixed citation |
| f4 | 15 clubs in bag | Rule 4.1b | Correct |
| f5 | 3-minute search clock | Rule 18.2a(1) | Correct |

### Playing the Round (Rules 5–6): 5 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| r1 | Practice swing hits teed ball | Definition of Stroke, Rule 6.2b(5) | Fixed citation |
| r2 | Disagreement in stroke play | Rule 20.1c(3) | Correct |
| r3 | Lightning / immediate suspension | Rule 5.7a | Correct |
| r4 | Practice putting between holes | Rule 5.5b | Correct |
| r5 | Giving advice in stroke play | Rule 10.2a | Correct |

### Playing the Ball (Rules 7–11): 10 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| b1 | Loose impediment (broken branch) | Rule 15.1a | Correct |
| b2 | Cart path relief | Rule 16.1b | Correct |
| b3 | Provisional ball | Rule 18.3a | Correct |
| b4 | Ball moved by natural forces | Rule 9.3 | Correct |
| b5 | Ball hits own cart | Rule 11.1a | Correct |
| b6 | Wrong ball in stroke play | Rule 6.3c | Correct |
| b7 | Ball in divot hole | Definition of Abnormal Course Conditions | Fixed citation |
| b8 | Unplayable ball options | Rule 19.2 | Fixed citation |
| b9 | Embedded ball in fairway | Rule 16.3b | Correct |
| b10 | Cut/cracked ball substitution | Rule 4.2c | Correct |

### Bunkers & Greens (Rules 12–13): 8 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| bg1 | Practice swing touches sand | Rule 12.2b(1) | Correct |
| bg2 | Removing leaf in bunker | Rule 15.1a | Correct |
| bg3 | Unplayable in bunker | Rule 19.3 | Correct |
| bg4 | Repairing spike marks on green | Rule 13.1c(2) | Correct |
| bg5 | Ball hits ball on green (stroke play) | Rule 11.1a Exception | Correct |
| bg6 | Flagstick left in, ball hits it | Rule 13.2a(2) | Correct |
| bg7 | Wind moves ball after lift/replace on green | Rule 13.1d(2) | Correct |
| bg8 | Ball on fringe — can you lift? | Rule 13.1b | Correct |

### Lifting & Returning (Rule 14): 4 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| lr1 | Drop height (knee) | Rule 14.3b(2) | Correct |
| lr2 | Ball rolls out of relief area | Rule 14.3c(2) | Correct |
| lr3 | Must mark before lifting | Rule 14.1a | Correct |
| lr4 | Ball hits foot during drop | Rule 14.3b(2) | Correct |

### Free Relief (Rules 15–16): 6 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| fr1 | Rake in bunker (movable obstruction) | Rule 15.2a | Correct |
| fr2 | Blue stakes (GUR) | Rule 16.1, Committee Procedures | Correct |
| fr3 | Sprinkler head — line of play only | Rule 16.1a | Correct |
| fr4 | Temporary water in fairway | Rule 16.1b | Correct |
| fr5 | Animal burrow — relief optional | Rule 16.1 | Correct |
| fr6 | Embedded ball in rough | Rule 16.3a | Correct |

### Penalty Relief (Rules 17–19): 8 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| pr1 | Red penalty area options | Rule 17.1d | Correct |
| pr2 | Yellow penalty area options | Rule 17.1d | Correct |
| pr3 | Play from penalty area (optional) | Rule 17.1a | Correct |
| pr4 | Penalty stroke count | Rule 17.1d(2) | Correct |
| pr5 | Provisional — original found | Rule 18.3c(2) | Correct |
| pr6 | Provisional played twice, original found | Rule 18.3c(2) | Correct |
| pr7 | Ball found while walking back | Rule 18.2a(1) | Correct |
| pr8 | Ball in penalty area, stance outside | Rule 17.1 | Correct |

### Resolving Issues (Rule 20): 3 scenarios

| ID | Topic | Rule | Verdict |
|----|-------|------|---------|
| ri1 | Opponent lifts ball without permission | Rule 9.5b | Correct |
| ri2 | Two-ball procedure (stroke play) | Rule 20.1c(3) | Correct |
| ri3 | Match play disagreement | Rule 20.1b | Correct |

---

## Notes for Future Scenario Development

1. **Difficulty distribution:** Current bank is 22 weekend, 22 competitor, 5 official tier. The "official" tier needs more scenarios.
2. **Category balance:** Penalty Relief (8) and Playing the Ball (10) are well-covered. Resolving Issues (3) and Lifting & Returning (4) could use expansion.
3. **2026 Clarifications reviewed:** No clarifications affect the correctness of existing scenarios. Key clarifications cover Rules 5, 8, 10, 11, and 14 edge cases that could fuel new scenarios.
4. **Target:** 200 scenarios across all categories and tiers for a robust learning experience.
