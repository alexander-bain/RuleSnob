import { useState, useCallback, useMemo, useEffect, useRef } from "react";

// ============================================================
// RULES IQ — A Spaced-Repetition Game for the Rules of Golf
// ============================================================

// --- SCENARIO DATA ---
// Each scenario tests ONE atomic rule concept in a concrete situation.
// Categories map to the official Rules of Golf (2023) structure.

const CATEGORIES = {
  FUNDAMENTALS: { name: "Fundamentals", rules: "1–4", color: "#2E7D32" },
  PLAYING_ROUND: { name: "Playing the Round", rules: "5–6", color: "#1565C0" },
  PLAYING_BALL: { name: "Playing the Ball", rules: "7–11", color: "#6A1B9A" },
  BUNKERS_GREENS: { name: "Bunkers & Greens", rules: "12–13", color: "#C62828" },
  LIFTING_RETURNING: { name: "Lifting & Returning", rules: "14", color: "#E65100" },
  FREE_RELIEF: { name: "Free Relief", rules: "15–16", color: "#00838F" },
  PENALTY_RELIEF: { name: "Penalty Relief", rules: "17–19", color: "#AD1457" },
  RESOLVING: { name: "Resolving Issues", rules: "20", color: "#4E342E" },
};

const SCENARIOS = [
  // --- FUNDAMENTALS (Rules 1-4) ---
  {
    id: "f1",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You accidentally move your ball while searching for it in the rough. What happens?",
    choices: [
      "One-stroke penalty; replace the ball",
      "No penalty; replace the ball",
      "One-stroke penalty; play it from the new spot",
      "No penalty; play it from the new spot",
    ],
    correct: 1,
    rule: "Rule 7.4",
    explanation:
      "Under Rule 7.4, if you accidentally move your ball while searching for it, there is no penalty. You must replace the ball on its original spot (estimated if not known).",
  },
  {
    id: "f2",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your ball comes to rest out of bounds, marked by white stakes. What is your relief option?",
    choices: [
      "Drop within two club-lengths of where it crossed the OB line, one-stroke penalty",
      "Stroke and distance: replay from where you last played, one-stroke penalty",
      "Drop anywhere on the course within two club-lengths, two-stroke penalty",
      "Free drop at the nearest point of relief",
    ],
    correct: 1,
    rule: "Rule 18.1",
    explanation:
      "When your ball is out of bounds, you must take stroke-and-distance relief: go back to where you last played and play again under one-stroke penalty. (Note: some courses offer a Local Rule alternative, but the base rule is stroke and distance.)",
  },
  {
    id: "f3",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You tee your ball in front of the tee markers and hit your drive. Your opponent in match play notices. What happens?",
    choices: [
      "Two-stroke penalty, ball is in play",
      "Your opponent may cancel the stroke and make you replay",
      "No penalty if the ball lands in the fairway",
      "One-stroke penalty, ball is in play",
    ],
    correct: 1,
    rule: "Rule 6.1b(1)",
    explanation:
      "In match play, if you play from outside the teeing area, there is no penalty but your opponent may cancel the stroke and require you to replay from within the teeing area.",
  },
  {
    id: "f4",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you realize on the 3rd tee that you have 15 clubs in your bag. What is the penalty?",
    choices: [
      "Two strokes per hole played with the extra club, max four strokes",
      "Disqualification",
      "Two-stroke penalty applied once",
      "No penalty if you declare the extra club out of play immediately",
    ],
    correct: 0,
    rule: "Rule 4.1b",
    explanation:
      "In stroke play, the penalty for carrying excess clubs is two strokes for each hole where a breach occurred, with a maximum of four penalty strokes (applied to the first two holes). You must immediately declare which club is out of play.",
  },
  {
    id: "f5",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You have 3 minutes to search for your ball before it is considered lost. When does the 3-minute clock start?",
    choices: [
      "When you arrive at the area where the ball is likely to be",
      "When you hit the shot",
      "When the group ahead clears the area",
      "When you begin physically looking",
    ],
    correct: 0,
    rule: "Rule 18.2a(1)",
    explanation:
      "The 3-minute search time begins when you or your caddie arrive at the area where the ball is likely to be and begin to search.",
  },

  // --- PLAYING THE ROUND (Rules 5-6) ---
  {
    id: "r1",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "During a round, you take a practice swing on the teeing area and accidentally hit your teed ball off the tee. Does this count as a stroke?",
    choices: [
      "Yes, it counts as a stroke",
      "No, because you did not intend to hit the ball — re-tee without penalty",
      "One-stroke penalty but re-tee",
      "No penalty, but you must play the ball from where it comes to rest",
    ],
    correct: 1,
    rule: "Definition of Stroke, Rule 6.2b(5)",
    explanation:
      "A stroke requires intent to hit the ball. Since this was a practice swing with no intention to strike the ball, it is not a stroke. Simply re-tee without penalty.",
  },
  {
    id: "r2",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you and your fellow competitor disagree about a ruling. You are unsure of the correct procedure. What should you do?",
    choices: [
      "Play the hole with two balls, report to the Committee before signing your card",
      "Follow the ruling your fellow competitor suggests",
      "Stop play and wait for a rules official",
      "Play the hole and sort it out after the round",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "In stroke play, if you are uncertain about the right procedure, you may play two balls. You must report the facts to the Committee before returning your scorecard so they can determine which ball counts.",
  },
  {
    id: "r3",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "A lightning warning siren sounds during your round. What should you do?",
    choices: [
      "You must stop play immediately",
      "You may finish the hole you are playing, then stop",
      "You may continue if you feel safe",
      "You must return to the clubhouse within 5 minutes",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "When the Committee suspends play with an immediate suspension (typically for dangerous weather like lightning), all players must stop play immediately. This is different from a normal suspension where you may finish the hole.",
  },
  {
    id: "r4",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Between holes in stroke play, you putt on the practice putting green. Is this allowed?",
    choices: [
      "Yes, practicing putting or chipping on or near the practice green between holes is allowed",
      "No, you cannot practice during a round",
      "Only if the Committee has not prohibited it",
      "Only in match play, not stroke play",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "Between the play of two holes, you may practice putting or chipping on or near the putting green of the hole just completed, any practice green, or the next teeing area — as long as the Committee hasn't restricted it and you don't unreasonably delay play.",
  },
  {
    id: "r5",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You give your playing partner advice about which club to use on a par 3. In stroke play, what is the penalty?",
    choices: [
      "Two-stroke penalty on you (the advice giver)",
      "No penalty — advice between partners is allowed",
      "Two-stroke penalty on both of you",
      "One-stroke penalty on the advice receiver",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "In stroke play (individual), giving advice to another player results in a two-stroke penalty (the general penalty) on the player who gave the advice. Advice means any verbal comment or action intended to influence a player's club selection, shot technique, or play strategy.",
  },

  // --- PLAYING THE BALL (Rules 7-11) ---
  {
    id: "b1",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is in the rough and there's a broken branch behind it that would interfere with your backswing. Can you move it?",
    choices: [
      "Yes, you may remove any loose impediment anywhere on the course without penalty",
      "No, you cannot move natural objects near your ball",
      "Only if the branch is not attached to a tree",
      "Yes, but you take a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "A detached branch is a loose impediment. Under Rule 15.1a, you may remove any loose impediment anywhere on the course without penalty — including near your ball. If your ball moves as a result, it must be replaced (with a penalty only in certain conditions).",
  },
  {
    id: "b2",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball lands on a paved cart path in the fairway. What are your options?",
    choices: [
      "Free relief: find the nearest point of complete relief (no nearer the hole), drop within one club-length",
      "You must play it as it lies",
      "Two club-lengths relief from the edge of the path, one-stroke penalty",
      "Drop anywhere in the fairway within one club-length of the path",
    ],
    correct: 0,
    rule: "Rule 16.1b",
    explanation:
      "A cart path is an immovable obstruction. You are entitled to free relief: find the nearest point of complete relief (where the path doesn't interfere with your stance, swing, or ball), no nearer the hole, and drop within one club-length of that point.",
  },
  {
    id: "b3",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You hit your drive and think it might be lost. What should you do before going to look for it?",
    choices: [
      "Play a provisional ball before going forward to search",
      "Go search first; you can always go back and re-tee",
      "Declare a lost ball and take a penalty drop",
      "Ask your playing partners to help estimate where it went",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "When you think your ball may be lost outside a penalty area (or out of bounds), you should play a provisional ball. This saves time — if the original is found, you pick up the provisional; if not, the provisional is in play under stroke-and-distance penalty.",
  },
  {
    id: "b4",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You address your ball on the fairway, and it moves slightly before you make a stroke. You did not cause it to move. What do you do?",
    choices: [
      "No penalty; play the ball from its new position",
      "One-stroke penalty; replace the ball",
      "No penalty; replace the ball",
      "One-stroke penalty; play from the new position",
    ],
    correct: 0,
    rule: "Rule 9.3",
    explanation:
      "If natural forces (wind, gravity, water) cause your ball at rest to move, there is generally no penalty and you play the ball from its new position. (Exception: on the putting green after your ball has been lifted and replaced — see Rule 13.1d.)",
  },
  {
    id: "b5",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You hit a shot and your ball strikes your golf cart. What happens in stroke play?",
    choices: [
      "No penalty; play the ball as it lies",
      "One-stroke penalty; play as it lies",
      "Two-stroke penalty; replay the shot",
      "No penalty; you must replay the shot",
    ],
    correct: 0,
    rule: "Rule 11.1a",
    explanation:
      "Under the current Rules of Golf, if your ball in motion accidentally hits you, your equipment, or your caddie, there is no penalty. Play the ball as it lies.",
  },
  {
    id: "b6",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "In stroke play, you play a ball from the rough and realize after your shot that it was not your ball. What happens?",
    choices: [
      "Two-stroke penalty; go back and play your actual ball (strokes with the wrong ball don't count)",
      "One-stroke penalty; continue with the wrong ball",
      "Disqualification",
      "No penalty if you correct the mistake before teeing off on the next hole",
    ],
    correct: 0,
    rule: "Rule 6.3c",
    explanation:
      "Playing a wrong ball in stroke play results in a two-stroke penalty. Strokes made with the wrong ball do not count. You must correct the mistake by playing your original ball. If you don't correct it before making a stroke on the next tee, you are disqualified.",
  },
  {
    id: "b7",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is sitting in a divot hole in the middle of the fairway. Do you get free relief?",
    choices: [
      "No, a divot hole is not an abnormal course condition — play it as it lies",
      "Yes, a divot hole in the fairway qualifies for free relief",
      "Only if the divot has not been replaced",
      "Only in stroke play, not match play",
    ],
    correct: 0,
    rule: "Definition of Abnormal Course Conditions",
    explanation:
      "A divot hole is not an abnormal course condition under the Rules — even in the middle of the fairway. You must play the ball as it lies or take an unplayable lie with penalty. (Some courses adopt a preferred lies Local Rule during certain conditions, but that's separate.)",
  },
  {
    id: "b8",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball is against a tree root and you decide the lie is unplayable. What are your three options under the unplayable ball rule?",
    choices: [
      "Stroke and distance, drop within 2 club-lengths (not nearer the hole), or drop on a line behind the ball (keeping the spot between you and the hole) — all with one-stroke penalty",
      "Free drop within 1 club-length, or stroke and distance, or play from the previous spot — all with no penalty",
      "Drop within 1 club-length for one stroke, drop anywhere in the fairway for two strokes, or replay for one stroke",
      "Stroke and distance, drop within 1 club-length (not nearer the hole), or take a free drop in the nearest fairway",
    ],
    correct: 0,
    rule: "Rule 19.2",
    explanation:
      "Under Rule 19.2, you always have three unplayable ball options (each with one-stroke penalty): (1) stroke and distance (replay from previous spot), (2) back-on-the-line relief (drop on a line going back from the hole through the ball's spot, as far back as you want), or (3) lateral relief (drop within two club-lengths of the spot, not nearer the hole).",
  },
  {
    id: "b9",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball embeds in its own pitch mark in the fairway (the general area). Are you entitled to relief?",
    choices: [
      "Yes, free relief — lift, clean, and drop within one club-length of the spot directly behind where it was embedded, not nearer the hole",
      "No, you must play it as it lies",
      "Yes, but only if the course has adopted a Local Rule",
      "Yes, but with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 16.3b",
    explanation:
      "Under Rule 16.3, you get free relief for a ball embedded in the general area (which includes the fairway and rough). Lift, clean, and drop the ball within one club-length of the spot right behind where it was embedded, not nearer the hole.",
  },
  {
    id: "b10",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You are about to play your approach shot when you notice your ball has a small cut on it. Can you substitute another ball?",
    choices: [
      "Yes, but only if the ball is visibly cut or cracked — cosmetic scuffs don't count",
      "Yes, you can change balls between any shots",
      "No, you must play the same ball for the entire hole",
      "Only if a rules official confirms the damage",
    ],
    correct: 0,
    rule: "Rule 4.2c",
    explanation:
      "Under Rule 4.2c, you may substitute another ball if your ball in play is cut or cracked during the hole. Normal wear, scuffs, or scratches do not qualify. You may lift the ball to check for damage, but must announce your intention first.",
  },

  // --- BUNKERS & GREENS (Rules 12-13) ---
  {
    id: "bg1",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker. Before playing your shot, you touch the sand with your club during a practice swing. Is there a penalty?",
    choices: [
      "Yes, two-stroke penalty (or loss of hole in match play)",
      "No, you may touch the sand at any time",
      "Only if you touched the sand within one club-length of the ball",
      "No penalty as long as you didn't improve your lie",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "Under Rule 12.2b, before making a stroke at a ball in a bunker, you must not deliberately touch the sand with your hand or club, including on a practice swing. This results in the general penalty (two strokes in stroke play, loss of hole in match play).",
  },
  {
    id: "bg2",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a greenside bunker. Before your stroke, you notice a small leaf resting against your ball. May you remove it?",
    choices: [
      "Yes, remove it without penalty — loose impediments may be removed anywhere",
      "No, you cannot remove anything in a bunker",
      "Only if it's not touching the ball",
      "Yes, but with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "Under the current Rules (since 2019), you may remove loose impediments in a bunker without penalty. This includes leaves, twigs, and stones. If your ball moves while removing the impediment, it must be replaced.",
  },
  {
    id: "bg3",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is buried in a bunker. You declare it unplayable. What are your relief options?",
    choices: [
      "Stroke and distance, back-on-the-line (keeping the ball in the bunker), or lateral relief within 2 club-lengths (in the bunker) — each for one stroke. For two strokes, you may drop outside on the back-on-the-line.",
      "Only stroke and distance or play it as it lies",
      "Free relief because the ball is embedded",
      "Drop within 2 club-lengths outside the bunker with one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 19.3",
    explanation:
      "For an unplayable ball in a bunker, you have the normal three options (stroke and distance, back-on-the-line, lateral) each for one stroke — but the back-on-the-line and lateral drops must stay in the bunker. For an additional penalty stroke (two total), you may drop outside the bunker on the back-on-the-line.",
  },
  {
    id: "bg4",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "On the putting green, there's a spike mark directly on your line of putt. Can you repair it?",
    choices: [
      "Yes, you may repair almost any damage on the putting green, including spike marks",
      "No, spike marks cannot be repaired — only ball marks and old hole plugs",
      "Only if the Committee has adopted a Local Rule",
      "Only after all players in the group have putted",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Under the 2019 Rules, you may repair almost any damage on the putting green, including spike marks, ball marks, animal damage, and club indentations. The only damage you cannot repair is natural surface imperfections or natural wear of the hole.",
  },
  {
    id: "bg5",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is on the putting green. Your playing partner's ball is 10 feet away, also on the green. They putt and their ball hits yours. What happens in stroke play?",
    choices: [
      "The player who putted gets a two-stroke penalty; both balls are played as they lie (yours must be replaced to its original spot)",
      "No penalty to either player; both balls played as they lie",
      "No penalty; the moving ball is replayed, the struck ball is replaced",
      "Both players get a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 11.1a, Penalty Exception in Stroke Play",
    explanation:
      "In stroke play, when both balls are on the putting green before the stroke and one hits the other, the player who made the stroke gets a two-stroke penalty. The struck ball (yours) must be replaced to its original spot. The player who putted plays their ball as it lies.",
  },
  {
    id: "bg6",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "You leave the flagstick in the hole and your putt hits the flagstick and drops in. What happens?",
    choices: [
      "No penalty — the ball is holed",
      "Two-stroke penalty, but the ball is holed",
      "You must replay the putt",
      "One-stroke penalty, ball is holed",
    ],
    correct: 0,
    rule: "Rule 13.2a(2)",
    explanation:
      "Under the current Rules (since 2019), there is no penalty if your ball played from the putting green (or anywhere else) hits the flagstick left in the hole. If the ball comes to rest in the hole, it counts as holed.",
  },
  {
    id: "bg7",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is on the putting green. You mark it, lift it, and replace it. Then a gust of wind blows it off the green. What do you do?",
    choices: [
      "Replace it on the original spot with no penalty",
      "Play it from where the wind moved it, no penalty",
      "Replace it with a one-stroke penalty",
      "Drop it at the nearest point of relief on the green",
    ],
    correct: 0,
    rule: "Rule 13.1d(2)",
    explanation:
      "This is a common edge case. When a ball has been lifted and replaced on the putting green, and then natural forces (like wind) move it, you must replace it on its original spot — no penalty. This is different from a ball that was never lifted, which you would play from the new spot.",
  },
  {
    id: "bg8",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is on the fringe (not on the putting green). Can you mark and lift it?",
    choices: [
      "No, you may only mark and lift on the putting green (unless another Rule applies)",
      "Yes, you can mark and lift anywhere around the green",
      "Yes, the fringe is considered part of the putting green",
      "Only if your ball is in another player's line of play",
    ],
    correct: 0,
    rule: "Rule 13.1b, Definition of Putting Green",
    explanation:
      "The fringe (or apron) is NOT part of the putting green — it's part of the general area. You may only mark and lift under Rule 13.1b when your ball is on the putting green. (You could lift if it assists or interferes with another player's play under Rule 15.3.)",
  },

  // --- LIFTING & RETURNING (Rule 14) ---
  {
    id: "lr1",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "When taking a drop, from what height must you drop the ball?",
    choices: [
      "Knee height",
      "Shoulder height",
      "Waist height",
      "Any height, as long as it falls straight down",
    ],
    correct: 0,
    rule: "Rule 14.3b(2)",
    explanation:
      "Since the 2019 Rules, you must drop from knee height (measured when standing upright). The ball must be dropped straight down without spin or direction, and it must not touch you or your equipment before hitting the ground.",
  },
  {
    id: "lr2",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You drop your ball correctly in a relief area, but it rolls outside the relief area. What do you do?",
    choices: [
      "Drop again. If it rolls out a second time, place it where the second drop first hit the ground.",
      "Play it from where it came to rest",
      "Drop again as many times as needed until it stays",
      "Place it at the nearest spot inside the relief area",
    ],
    correct: 0,
    rule: "Rule 14.3c(2)",
    explanation:
      "If a properly dropped ball rolls outside the relief area, you drop again. If it rolls out a second time, you place the ball on the spot where the second drop first hit the ground. You never drop more than twice.",
  },
  {
    id: "lr3",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "You lift your ball on the putting green to clean it. Must you mark its position first?",
    choices: [
      "Yes, you must mark the spot before lifting anywhere on the course",
      "No, marking is optional on the putting green",
      "Only if another player asks you to",
      "Yes, but only on the putting green — elsewhere marking is optional",
    ],
    correct: 0,
    rule: "Rule 14.1a",
    explanation:
      "Under Rule 14.1, before lifting a ball that must be replaced, you must mark the spot. This applies everywhere on the course, including the putting green. The most common method is placing a ball marker behind the ball.",
  },
  {
    id: "lr4",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You take relief from a cart path. After dropping the ball at knee height, it bounces and hits your foot before landing in the relief area. What happens?",
    choices: [
      "The drop does not count — you must re-drop",
      "No penalty; play the ball as it lies",
      "One-stroke penalty; play as it lies",
      "No penalty; but you must re-drop",
    ],
    correct: 0,
    rule: "Rule 14.3b(2)",
    explanation:
      "When dropping, the ball must not touch you or your equipment before hitting the ground. If it does, the drop does not count and must be redone. There is no penalty — the ball simply must be re-dropped correctly.",
  },

  // --- FREE RELIEF (Rules 15-16) ---
  {
    id: "fr1",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "A movable rake is lying in a bunker next to your ball. Can you remove it?",
    choices: [
      "Yes, a rake is a movable obstruction and can be removed without penalty anywhere",
      "No, you cannot move anything in a bunker before your stroke",
      "Yes, but if the ball moves you get a one-stroke penalty",
      "Only if the rake is not touching your ball",
    ],
    correct: 0,
    rule: "Rule 15.2a",
    explanation:
      "A rake is a movable obstruction. You may remove movable obstructions anywhere on the course without penalty (Rule 15.2a). If your ball moves when you remove it, the ball must be replaced — no penalty.",
  },
  {
    id: "fr2",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball lands in an area marked with blue stakes. What do these stakes signify?",
    choices: [
      "Ground under repair (GUR) — you get free relief",
      "A penalty area — one-stroke penalty relief",
      "Out of bounds — stroke and distance",
      "Environmentally sensitive area — you must take relief",
    ],
    correct: 0,
    rule: "Rule 16.1, Committee Procedures",
    explanation:
      "Blue stakes (or blue lines) typically mark ground under repair (GUR), which is an abnormal course condition. You are entitled to free relief: find the nearest point of complete relief, not nearer the hole, and drop within one club-length.",
  },
  {
    id: "fr3",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is in the rough, but a sprinkler head near the green interferes with your intended line of play (not your stance or swing). Do you get free relief?",
    choices: [
      "No — relief from immovable obstructions only covers interference with stance, swing, or where the ball lies, not line of play (unless a Local Rule applies)",
      "Yes, you always get relief when an obstruction is on your line",
      "Yes, but only if the ball is within two club-lengths of the obstruction",
      "Yes, sprinkler heads always give relief when near the green",
    ],
    correct: 0,
    rule: "Rule 16.1a",
    explanation:
      "Free relief from an immovable obstruction (like a sprinkler head) only applies when the obstruction interferes with your ball, stance, or area of intended swing — not your line of play. However, many courses adopt a Local Rule granting line-of-play relief from sprinkler heads near greens.",
  },
  {
    id: "fr4",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "There's a large puddle of casual water in the fairway and your ball is sitting in it. What are your options?",
    choices: [
      "Free relief: find the nearest point of complete relief from the temporary water, not nearer the hole, and drop within one club-length",
      "You must play it as it lies — water is a natural condition",
      "Drop anywhere on the dry part of the fairway",
      "Free relief, but you must drop within the same cut of grass",
    ],
    correct: 0,
    rule: "Rule 16.1b",
    explanation:
      "Temporary water (casual water) is an abnormal course condition. You get free relief: find the nearest point of complete relief (no nearer the hole) where the water doesn't affect your ball, stance, or swing, and drop within one club-length of that point. The relief area might be in the rough.",
  },
  {
    id: "fr5",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "An animal burrow is directly behind your ball and would interfere with your stance. The nearest point of complete relief would put you in a worse position (behind a tree). Must you take relief?",
    choices: [
      "No — relief from abnormal course conditions is optional; you can play it as it lies",
      "Yes — you must take relief from animal holes",
      "No, but only because the relief would be worse",
      "Yes, unless the Committee has ruled otherwise",
    ],
    correct: 0,
    rule: "Rule 16.1",
    explanation:
      "Relief from abnormal course conditions (including animal holes) is always optional in the general area. You may choose to play the ball as it lies, even if the condition interferes with your play. You're never required to take free relief.",
  },
  {
    id: "fr6",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is embedded in a steep bank of rough above a bunker. Are you entitled to free relief for an embedded ball?",
    choices: [
      "Yes — embedded ball relief applies anywhere in the general area, including the rough",
      "No — embedded ball relief only applies in the fairway",
      "Yes, but only if the ball is embedded in its own pitch mark",
      "Only if a Local Rule grants it for rough",
    ],
    correct: 0,
    rule: "Rule 16.3a",
    explanation:
      "Under the default Rule 16.3, you get free relief for a ball embedded in the general area — which includes both the fairway and the rough. The ball must be embedded in its own pitch mark (created as a result of your previous stroke). Note: the Committee may restrict this relief to fairway-height areas by Local Rule.",
  },

  // --- PENALTY RELIEF (Rules 17-19) ---
  {
    id: "pr1",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball goes into a red-staked penalty area. What are your relief options?",
    choices: [
      "All three: stroke and distance, back-on-the-line, or lateral relief (within 2 club-lengths of where it crossed the edge) — all with one-stroke penalty",
      "Only stroke and distance or back-on-the-line — lateral relief is not available",
      "Drop on either side of the penalty area within 2 club-lengths",
      "Free drop within 2 club-lengths of the edge",
    ],
    correct: 0,
    rule: "Rule 17.1d",
    explanation:
      "Red-staked penalty areas give you three relief options, each with a one-stroke penalty: (1) stroke and distance, (2) back-on-the-line (on a line from the hole through where the ball last crossed the edge of the penalty area), or (3) lateral relief within 2 club-lengths of where the ball last crossed the edge, not nearer the hole.",
  },
  {
    id: "pr2",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball goes into a yellow-staked penalty area. What are your relief options?",
    choices: [
      "Two options: stroke and distance, or back-on-the-line — each with one-stroke penalty (no lateral relief)",
      "Same as red stakes: stroke and distance, back-on-the-line, or lateral",
      "Must play it from the penalty area or take stroke and distance",
      "Free relief because yellow stakes are less severe than red",
    ],
    correct: 0,
    rule: "Rule 17.1d",
    explanation:
      "Yellow penalty areas offer only two relief options (each with a one-stroke penalty): (1) stroke and distance, or (2) back-on-the-line (drop on a line from the hole through where the ball crossed the edge). Unlike red penalty areas, lateral relief is NOT available.",
  },
  {
    id: "pr3",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a red penalty area, sitting on dry ground with a clear shot to the green. Can you play it from the penalty area?",
    choices: [
      "Yes — you can always play your ball from a penalty area; relief is optional",
      "No — you must take relief from a penalty area",
      "Yes, but with a one-stroke penalty",
      "Only if the Committee has not prohibited it",
    ],
    correct: 0,
    rule: "Rule 17.1a",
    explanation:
      "You always have the option to play your ball as it lies in a penalty area, just as you would anywhere else on the course. You may even ground your club and remove loose impediments in the penalty area. Relief is never mandatory.",
  },
  {
    id: "pr4",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit your tee shot on a par 3 and it goes into the water (yellow penalty area). What is the total penalty if you take back-on-the-line relief and then hole out?",
    choices: [
      "One penalty stroke (e.g., tee shot + penalty + drop and hit = hitting 3)",
      "Two penalty strokes",
      "No penalty if you drop correctly",
      "One stroke, but you're hitting your fourth shot",
    ],
    correct: 0,
    rule: "Rule 17.1d(2)",
    explanation:
      "The penalty for relief from a penalty area is one stroke. Your tee shot was stroke 1, you add 1 penalty stroke, so your next shot (after the drop) is your 3rd stroke. If you hole that, you score 3 on the hole.",
  },
  {
    id: "pr5",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit a provisional ball after your tee shot heads toward some trees. You find your original ball in bounds with a clear shot. What must you do with the provisional?",
    choices: [
      "Abandon the provisional and play your original ball",
      "Choose whichever ball you prefer",
      "Play whichever ball is in a better position",
      "The provisional becomes the ball in play",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "If your original ball is found in bounds within 3 minutes of searching, the provisional ball must be abandoned. You must continue play with the original ball, regardless of the positions of the two balls.",
  },
  {
    id: "pr6",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit a provisional ball off the tee. You then hit your provisional again (second shot with provisional). Now you find your original ball. Can you still play the original?",
    choices: [
      "Yes, as long as the provisional hasn't been played from a spot nearer the hole than where the original ball is",
      "No, once you hit the provisional a second time, it's automatically in play",
      "Yes, you can always choose the original if found within 3 minutes",
      "No, the provisional became the ball in play after the second shot",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "You can still play your original ball as long as you haven't played the provisional from a spot that is nearer the hole than where the original ball lies. The key is the location of the provisional when played, not the number of strokes made with it.",
  },
  {
    id: "pr7",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You believe your ball is lost. You go back to the tee to play another ball under stroke and distance. On the way back, your playing partner finds your original ball (within 3 minutes). What happens?",
    choices: [
      "You must play the original ball — it was found in time",
      "You can choose either ball",
      "The original is lost because you started walking back",
      "You must play the new ball since you declared the original lost",
    ],
    correct: 0,
    rule: "Rule 18.2a(1)",
    explanation:
      "A ball is not lost until the 3-minute search time expires or you put another ball in play by making a stroke. Since you hadn't made a stroke with a new ball yet and the 3 minutes hadn't expired, your original ball is found in time. You must play it.",
  },
  {
    id: "pr8",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit your ball into a red penalty area that runs along the side of the fairway. You find your ball just inside the penalty area margin. Your stance is outside the penalty area. Do you get free relief for the fact that you're straddling the line?",
    choices: [
      "No — the ball is in the penalty area, so no free relief applies; your options are play it as it lies or take penalty relief",
      "Yes — since your stance is outside, you get free relief",
      "Yes — the ball must be fully inside for penalty area rules to apply",
      "You may move the ball to just outside the penalty area, no penalty",
    ],
    correct: 0,
    rule: "Rule 17.1",
    explanation:
      "A ball is in a penalty area when any part of it lies on or touches the boundary of the penalty area. Once the ball is in the penalty area, that's where the ball is — your stance being outside doesn't change that. You can play it as it lies or take penalty area relief.",
  },

  // --- RESOLVING RULES ISSUES (Rule 20) ---
  {
    id: "ri1",
    category: "RESOLVING",
    tier: "competitor",
    text: "In match play, your opponent picks up your ball on the putting green without your permission to mark it. What happens?",
    choices: [
      "Your opponent gets a one-stroke penalty",
      "No penalty — any player may mark and lift a ball on the putting green",
      "Loss of hole for your opponent",
      "No penalty, but your opponent must replace the ball",
    ],
    correct: 0,
    rule: "Rule 9.5b",
    explanation:
      "If your opponent lifts or deliberately touches your ball at rest without your authority (when not permitted by the Rules), your opponent gets one penalty stroke. Your ball must be replaced.",
  },
  {
    id: "ri2",
    category: "RESOLVING",
    tier: "competitor",
    text: "In stroke play, you are uncertain about a rules situation. You want to protect yourself. What is the proper procedure?",
    choices: [
      "Announce you will play two balls, play the hole with both, and report to the Committee before signing your scorecard",
      "Choose the interpretation you believe is correct and proceed",
      "Ask your fellow competitors to vote on the correct ruling",
      "Mark your ball and refuse to continue until a rules official arrives",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "When uncertain in stroke play, you may invoke Rule 20.1c(3): announce that you want to play two balls, decide which ball you want to count if the Rules allow, play the hole with both balls, and report the situation to the Committee before returning your scorecard.",
  },
  {
    id: "ri3",
    category: "RESOLVING",
    tier: "official",
    text: "In match play, you and your opponent disagree about a ruling and cannot resolve it. Neither of you wants to concede the point. What is the proper procedure?",
    choices: [
      "Either player may request a ruling from the Committee; if no referee is available, finish the hole and the Committee will rule later",
      "The player whose ball it is makes the final decision",
      "Both players must agree or the hole is halved",
      "The player with honors on the next tee makes the call",
    ],
    correct: 0,
    rule: "Rule 20.1b",
    explanation:
      "In match play, either player may request a ruling from the Committee. If a referee is available, the referee decides. If not, the players should agree on a way forward and either player may later request an official ruling from the Committee.",
  },
];

// --- SM-2 SPACED REPETITION ENGINE ---
const SM2 = {
  defaults: () => ({
    easeFactor: 2.5,
    interval: 0, // 0 means new/unseen
    dueTime: 0,
    timesSeen: 0,
    timesCorrect: 0,
    lastSeen: 0,
  }),

  processAnswer(card, correct, now) {
    const updated = { ...card };
    updated.timesSeen += 1;
    updated.lastSeen = now;

    if (correct) {
      updated.timesCorrect += 1;
      if (updated.interval === 0) {
        updated.interval = 1;
      } else if (updated.interval === 1) {
        updated.interval = 6;
      } else {
        updated.interval = Math.round(updated.interval * updated.easeFactor);
      }
      updated.easeFactor = Math.max(1.3, updated.easeFactor + 0.1);
    } else {
      updated.interval = 0; // reset — will show again soon
      updated.easeFactor = Math.max(1.3, updated.easeFactor - 0.2);
    }
    // dueTime in minutes for within-session scheduling, days for between-session
    updated.dueTime = now + (updated.interval === 0 ? 60000 : updated.interval * 86400000);
    return updated;
  },
};

// --- SCORING ---
function calculateRulesIQ(cardStates, scenarios) {
  const catScores = {};
  const catCounts = {};

  for (const s of scenarios) {
    const state = cardStates[s.id];
    if (!state || state.timesSeen === 0) continue;
    const cat = s.category;
    if (!catScores[cat]) {
      catScores[cat] = 0;
      catCounts[cat] = 0;
    }
    // Score based on accuracy * ease factor (higher ease = more confident knowledge)
    const accuracy = state.timesCorrect / state.timesSeen;
    const easeBonus = (state.easeFactor - 1.3) / (2.5 - 1.3); // 0 to 1
    catScores[cat] += accuracy * 0.7 + easeBonus * 0.3;
    catCounts[cat] += 1;
  }

  let totalScore = 0;
  let totalWeight = 0;
  const categoryMastery = {};

  for (const cat of Object.keys(CATEGORIES)) {
    if (catCounts[cat] && catCounts[cat] > 0) {
      const mastery = catScores[cat] / catCounts[cat];
      categoryMastery[cat] = Math.round(mastery * 100);
      totalScore += mastery * catCounts[cat];
      totalWeight += catCounts[cat];
    } else {
      categoryMastery[cat] = 0;
    }
  }

  const rawIQ = totalWeight > 0 ? (totalScore / totalWeight) * 200 : 0;
  // Scale by coverage (what % of scenarios have been seen)
  const coverage = Math.min(1, totalWeight / (scenarios.length * 0.5));
  const rulesIQ = Math.round(rawIQ * coverage);

  return { rulesIQ, categoryMastery };
}

function getTitle(score) {
  if (score >= 161) return "Rules Official";
  if (score >= 121) return "Rules Savant";
  if (score >= 81) return "Club Competitor";
  if (score >= 41) return "Weekend Player";
  return "Rookie";
}

function getTitleColor(score) {
  if (score >= 161) return "#1B5E20";
  if (score >= 121) return "#2E7D32";
  if (score >= 81) return "#1565C0";
  if (score >= 41) return "#E65100";
  return "#9E9E9E";
}

// --- MAIN APP ---
export default function RulesIQ() {
  // State
  const [screen, setScreen] = useState("home"); // home, session, feedback, summary
  const [cardStates, setCardStates] = useState(() => {
    const s = {};
    for (const sc of SCENARIOS) s[sc.id] = SM2.defaults();
    return s;
  });
  const [sessionQueue, setSessionQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [sessionResults, setSessionResults] = useState([]);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [streak, setStreak] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);
  const [tier, setTier] = useState("all");

  const { rulesIQ, categoryMastery } = useMemo(
    () => calculateRulesIQ(cardStates, SCENARIOS),
    [cardStates]
  );

  // Build session queue
  const startSession = useCallback(() => {
    const now = Date.now();
    const filteredScenarios = tier === "all" ? SCENARIOS : SCENARIOS.filter((s) => s.tier === tier);

    // Due reviews (seen before, interval elapsed)
    const due = filteredScenarios
      .filter((s) => {
        const cs = cardStates[s.id];
        return cs.timesSeen > 0 && cs.dueTime <= now;
      })
      .sort((a, b) => cardStates[a.id].dueTime - cardStates[b.id].dueTime);

    // New cards (never seen)
    const unseen = filteredScenarios
      .filter((s) => cardStates[s.id].timesSeen === 0)
      .sort(() => Math.random() - 0.5);

    // Recently wrong (interval = 0, show again)
    const wrong = filteredScenarios
      .filter((s) => {
        const cs = cardStates[s.id];
        return cs.timesSeen > 0 && cs.interval === 0;
      });

    // Session: up to 5 due + 3 wrong + 5 new = ~13 max per session
    const queue = [...wrong.slice(0, 3), ...due.slice(0, 5), ...unseen.slice(0, 5)];

    // Shuffle for variety
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }

    if (queue.length === 0) {
      // All cards seen and not due — let them review any
      const any = filteredScenarios.sort(() => Math.random() - 0.5).slice(0, 10);
      setSessionQueue(any);
    } else {
      setSessionQueue(queue);
    }

    setCurrentIndex(0);
    setSelectedAnswer(null);
    setSessionResults([]);
    setSessionStartTime(Date.now());
    setScreen("session");
  }, [cardStates, tier]);

  const currentScenario = sessionQueue[currentIndex];

  const handleAnswer = (choiceIndex) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(choiceIndex);
    const correct = choiceIndex === currentScenario.correct;
    const now = Date.now();

    // Update card state
    setCardStates((prev) => ({
      ...prev,
      [currentScenario.id]: SM2.processAnswer(prev[currentScenario.id], correct, now),
    }));

    setSessionResults((prev) => [
      ...prev,
      { scenarioId: currentScenario.id, correct, category: currentScenario.category },
    ]);

    setScreen("feedback");
  };

  const handleNext = () => {
    if (currentIndex + 1 >= sessionQueue.length) {
      setTotalSessions((p) => p + 1);
      const correctCount = [...sessionResults].filter(r => r.correct).length;
      if (correctCount >= sessionResults.length * 0.5) setStreak((p) => p + 1);
      setScreen("summary");
    } else {
      setCurrentIndex((p) => p + 1);
      setSelectedAnswer(null);
      setScreen("session");
    }
  };

  const handleFlagGuess = () => {
    if (!currentScenario) return;
    setCardStates((prev) => ({
      ...prev,
      [currentScenario.id]: {
        ...prev[currentScenario.id],
        interval: 1,
        easeFactor: Math.max(1.3, prev[currentScenario.id].easeFactor - 0.1),
        dueTime: Date.now() + 86400000,
      },
    }));
  };

  // --- STYLES ---
  const colors = {
    fairway: "#1B5E20",
    green: "#2E7D32",
    lightGreen: "#E8F5E9",
    sand: "#D4A76A",
    scorecard: "#FAF8F5",
    pencil: "#2D2D2D",
    red: "#C62828",
    white: "#FFFFFF",
    gray100: "#F5F5F5",
    gray200: "#EEEEEE",
    gray400: "#BDBDBD",
    gray600: "#757575",
    gray800: "#424242",
  };

  const baseStyle = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: colors.pencil,
    minHeight: "100vh",
    background: `linear-gradient(135deg, ${colors.scorecard} 0%, #F0EDE8 100%)`,
  };

  const containerStyle = {
    maxWidth: 520,
    margin: "0 auto",
    padding: "16px 20px",
  };

  // --- HOME SCREEN ---
  if (screen === "home") {
    const scenariosSeen = Object.values(cardStates).filter((c) => c.timesSeen > 0).length;
    const title = getTitle(rulesIQ);
    const titleColor = getTitleColor(rulesIQ);

    return (
      <div style={baseStyle}>
        <div style={containerStyle}>
          {/* Header */}
          <div style={{ textAlign: "center", padding: "32px 0 24px" }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, color: colors.green, textTransform: "uppercase" }}>
              Rules IQ
            </div>
          </div>

          {/* Score Card */}
          <div
            style={{
              background: colors.white,
              borderRadius: 16,
              padding: "32px 24px",
              textAlign: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              border: `1px solid ${colors.gray200}`,
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 700, color: colors.fairway, lineHeight: 1 }}>
              {rulesIQ}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: titleColor, marginTop: 8, textTransform: "uppercase", letterSpacing: 1.5 }}>
              {title}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 20 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 600, color: colors.pencil }}>{scenariosSeen}</div>
                <div style={{ fontSize: 11, color: colors.gray600, textTransform: "uppercase", letterSpacing: 0.5 }}>Scenarios</div>
              </div>
              <div style={{ width: 1, background: colors.gray200 }} />
              <div>
                <div style={{ fontSize: 22, fontWeight: 600, color: colors.pencil }}>{totalSessions}</div>
                <div style={{ fontSize: 11, color: colors.gray600, textTransform: "uppercase", letterSpacing: 0.5 }}>Sessions</div>
              </div>
              <div style={{ width: 1, background: colors.gray200 }} />
              <div>
                <div style={{ fontSize: 22, fontWeight: 600, color: colors.pencil }}>{streak}</div>
                <div style={{ fontSize: 11, color: colors.gray600, textTransform: "uppercase", letterSpacing: 0.5 }}>Streak</div>
              </div>
            </div>
          </div>

          {/* Category Heat Map */}
          <div
            style={{
              background: colors.white,
              borderRadius: 16,
              padding: "20px 24px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              border: `1px solid ${colors.gray200}`,
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
              Category Mastery
            </div>
            {Object.entries(CATEGORIES).map(([key, cat]) => {
              const mastery = categoryMastery[key] || 0;
              const masteryColor = mastery >= 70 ? "#2E7D32" : mastery >= 40 ? "#E65100" : mastery > 0 ? "#C62828" : colors.gray400;
              const barWidth = Math.max(mastery, 2);
              const count = SCENARIOS.filter(s => s.category === key).length;
              const seen = SCENARIOS.filter(s => s.category === key && cardStates[s.id].timesSeen > 0).length;
              return (
                <div key={key} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, color: colors.pencil, fontWeight: 500 }}>
                      {cat.name}
                      <span style={{ color: colors.gray400, fontWeight: 400, marginLeft: 6, fontSize: 11 }}>
                        Rules {cat.rules}
                      </span>
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: masteryColor }}>
                      {mastery > 0 ? `${mastery}%` : `${seen}/${count}`}
                    </span>
                  </div>
                  <div style={{ height: 6, background: colors.gray100, borderRadius: 3, overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${barWidth}%`,
                        background: masteryColor,
                        borderRadius: 3,
                        transition: "width 0.4s ease",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tier Selector */}
          <div
            style={{
              background: colors.white,
              borderRadius: 16,
              padding: "16px 24px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              border: `1px solid ${colors.gray200}`,
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
              Difficulty
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { value: "all", label: "All" },
                { value: "weekend", label: "Weekend" },
                { value: "competitor", label: "Competitor" },
                { value: "official", label: "Official" },
              ].map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTier(t.value)}
                  style={{
                    flex: 1,
                    padding: "8px 4px",
                    border: `1.5px solid ${tier === t.value ? colors.fairway : colors.gray200}`,
                    borderRadius: 8,
                    background: tier === t.value ? colors.lightGreen : colors.white,
                    color: tier === t.value ? colors.fairway : colors.gray600,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startSession}
            style={{
              width: "100%",
              padding: "16px",
              background: colors.fairway,
              color: colors.white,
              border: "none",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(27,94,32,0.3)",
              transition: "transform 0.1s ease",
              letterSpacing: 0.5,
            }}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            Start Session
          </button>
          <div style={{ textAlign: "center", fontSize: 12, color: colors.gray600, marginTop: 8 }}>
            {(() => {
              const filtered = tier === "all" ? SCENARIOS : SCENARIOS.filter(s => s.tier === tier);
              const dueCount = filtered.filter(s => cardStates[s.id].timesSeen > 0 && (cardStates[s.id].dueTime <= Date.now() || cardStates[s.id].interval === 0)).length;
              const newCount = filtered.filter(s => cardStates[s.id].timesSeen === 0).length;
              return `${dueCount} due for review \u00B7 ${newCount} new scenarios`;
            })()}
          </div>
        </div>
      </div>
    );
  }

  // --- SESSION SCREEN ---
  if (screen === "session" && currentScenario) {
    const progress = ((currentIndex + 1) / sessionQueue.length) * 100;
    const cat = CATEGORIES[currentScenario.category];

    return (
      <div style={baseStyle}>
        <div style={containerStyle}>
          {/* Progress */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingTop: 16 }}>
            <div style={{ flex: 1, height: 4, background: colors.gray200, borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: colors.green, borderRadius: 2, transition: "width 0.3s ease" }} />
            </div>
            <span style={{ fontSize: 13, color: colors.gray600, fontWeight: 500, whiteSpace: "nowrap" }}>
              {currentIndex + 1}/{sessionQueue.length}
            </span>
          </div>

          {/* Category Badge */}
          <div style={{ marginBottom: 16 }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                background: `${cat.color}12`,
                color: cat.color,
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                border: `1px solid ${cat.color}30`,
              }}
            >
              {cat.name} \u00B7 {currentScenario.tier === "weekend" ? "Weekend" : currentScenario.tier === "competitor" ? "Competitor" : "Official"}
            </span>
          </div>

          {/* Scenario */}
          <div
            style={{
              background: colors.white,
              borderRadius: 16,
              padding: "24px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              border: `1px solid ${colors.gray200}`,
              marginBottom: 20,
            }}
          >
            <p style={{ fontSize: 17, lineHeight: 1.6, color: colors.pencil, margin: 0, fontWeight: 400 }}>
              {currentScenario.text}
            </p>
          </div>

          {/* Choices */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {currentScenario.choices.map((choice, i) => {
              const letter = String.fromCharCode(65 + i);
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "14px 16px",
                    background: colors.white,
                    border: `1.5px solid ${colors.gray200}`,
                    borderRadius: 12,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s ease",
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: colors.pencil,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.green;
                    e.currentTarget.style.background = colors.lightGreen;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.gray200;
                    e.currentTarget.style.background = colors.white;
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: colors.gray100,
                      color: colors.green,
                      fontWeight: 700,
                      fontSize: 13,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {letter}
                  </span>
                  <span style={{ flex: 1 }}>{choice}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- FEEDBACK SCREEN ---
  if (screen === "feedback" && currentScenario) {
    const correct = selectedAnswer === currentScenario.correct;
    const accentColor = correct ? colors.green : colors.red;

    return (
      <div style={baseStyle}>
        <div style={containerStyle}>
          <div style={{ paddingTop: 24 }}>
            {/* Result badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: `${accentColor}12`,
                borderRadius: 20,
                marginBottom: 20,
                border: `1px solid ${accentColor}30`,
              }}
            >
              <span style={{ fontSize: 18 }}>{correct ? "\u2713" : "\u2717"}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: accentColor }}>
                {correct ? "Correct!" : "Incorrect"}
              </span>
            </div>

            {/* Scenario recap */}
            <div
              style={{
                background: colors.white,
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: `1px solid ${colors.gray200}`,
                marginBottom: 16,
              }}
            >
              <p style={{ fontSize: 15, lineHeight: 1.5, color: colors.gray600, margin: "0 0 16px" }}>
                {currentScenario.text}
              </p>

              {/* Show all choices with correct/incorrect highlighting */}
              {currentScenario.choices.map((choice, i) => {
                const isCorrect = i === currentScenario.correct;
                const isSelected = i === selectedAnswer;
                const letter = String.fromCharCode(65 + i);
                let bg = "transparent";
                let borderColor = "transparent";
                if (isCorrect) { bg = "#E8F5E9"; borderColor = colors.green; }
                else if (isSelected && !isCorrect) { bg = "#FFEBEE"; borderColor = colors.red; }

                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      padding: "10px 12px",
                      borderRadius: 8,
                      background: bg,
                      border: `1.5px solid ${borderColor}`,
                      marginBottom: 6,
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ fontWeight: 700, color: isCorrect ? colors.green : isSelected ? colors.red : colors.gray400, flexShrink: 0 }}>
                      {letter}.
                    </span>
                    <span style={{ color: isCorrect ? colors.fairway : isSelected ? colors.red : colors.gray600 }}>
                      {choice}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Explanation */}
            <div
              style={{
                background: colors.white,
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: `1px solid ${colors.gray200}`,
                marginBottom: 20,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 600, color: colors.green, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                {currentScenario.rule}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: colors.pencil, margin: 0 }}>
                {currentScenario.explanation}
              </p>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 10 }}>
              {correct && (
                <button
                  onClick={handleFlagGuess}
                  style={{
                    flex: 1,
                    padding: "14px",
                    background: colors.white,
                    color: colors.gray600,
                    border: `1.5px solid ${colors.gray200}`,
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  I guessed
                </button>
              )}
              <button
                onClick={handleNext}
                style={{
                  flex: 2,
                  padding: "14px",
                  background: colors.fairway,
                  color: colors.white,
                  border: "none",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(27,94,32,0.3)",
                }}
              >
                {currentIndex + 1 >= sessionQueue.length ? "See Results" : "Next Scenario"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SUMMARY SCREEN ---
  if (screen === "summary") {
    const correctCount = sessionResults.filter((r) => r.correct).length;
    const totalCount = sessionResults.length;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const elapsed = sessionStartTime ? Math.round((Date.now() - sessionStartTime) / 60000) : 0;

    // Category breakdown
    const catBreakdown = {};
    for (const r of sessionResults) {
      if (!catBreakdown[r.category]) catBreakdown[r.category] = { correct: 0, total: 0 };
      catBreakdown[r.category].total += 1;
      if (r.correct) catBreakdown[r.category].correct += 1;
    }

    return (
      <div style={baseStyle}>
        <div style={containerStyle}>
          <div style={{ paddingTop: 32, textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, color: colors.green, textTransform: "uppercase", marginBottom: 24 }}>
              Session Complete
            </div>

            {/* Score ring */}
            <div style={{ position: "relative", width: 160, height: 160, margin: "0 auto 24px" }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke={colors.gray200} strokeWidth="8" />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke={accuracy >= 70 ? colors.green : accuracy >= 40 ? "#E65100" : colors.red}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(accuracy / 100) * 440} 440`}
                  transform="rotate(-90 80 80)"
                  style={{ transition: "stroke-dasharray 0.8s ease" }}
                />
              </svg>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: colors.pencil }}>{accuracy}%</div>
                <div style={{ fontSize: 12, color: colors.gray600 }}>
                  {correctCount}/{totalCount}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 24,
                background: colors.white,
                borderRadius: 12,
                padding: "16px",
                marginBottom: 20,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: `1px solid ${colors.gray200}`,
              }}
            >
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: colors.fairway }}>{rulesIQ}</div>
                <div style={{ fontSize: 11, color: colors.gray600, textTransform: "uppercase" }}>Rules IQ</div>
              </div>
              <div style={{ width: 1, background: colors.gray200 }} />
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: colors.pencil }}>{elapsed}m</div>
                <div style={{ fontSize: 11, color: colors.gray600, textTransform: "uppercase" }}>Duration</div>
              </div>
              <div style={{ width: 1, background: colors.gray200 }} />
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: colors.pencil }}>{streak}</div>
                <div style={{ fontSize: 11, color: colors.gray600, textTransform: "uppercase" }}>Streak</div>
              </div>
            </div>

            {/* Category breakdown */}
            <div
              style={{
                background: colors.white,
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: `1px solid ${colors.gray200}`,
                marginBottom: 20,
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
                This Session
              </div>
              {Object.entries(catBreakdown).map(([cat, data]) => {
                const catInfo = CATEGORIES[cat];
                const pct = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={cat} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${colors.gray100}` }}>
                    <span style={{ fontSize: 14, color: colors.pencil }}>{catInfo.name}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: pct >= 70 ? colors.green : pct >= 40 ? "#E65100" : colors.red }}>
                      {data.correct}/{data.total} ({pct}%)
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Weak areas callout */}
            {(() => {
              const weak = Object.entries(catBreakdown)
                .filter(([, d]) => d.correct / d.total < 0.5)
                .map(([cat]) => CATEGORIES[cat].name);
              if (weak.length === 0) return null;
              return (
                <div
                  style={{
                    background: "#FFF3E0",
                    borderRadius: 12,
                    padding: "16px 20px",
                    marginBottom: 20,
                    textAlign: "left",
                    border: "1px solid #FFE0B2",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#E65100", marginBottom: 4 }}>
                    Focus area{weak.length > 1 ? "s" : ""}
                  </div>
                  <div style={{ fontSize: 14, color: "#BF360C", lineHeight: 1.5 }}>
                    Review {weak.join(" and ")} before your next session.
                  </div>
                </div>
              );
            })()}

            {/* Actions */}
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setScreen("home")}
                style={{
                  flex: 1,
                  padding: "14px",
                  background: colors.white,
                  color: colors.pencil,
                  border: `1.5px solid ${colors.gray200}`,
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Home
              </button>
              <button
                onClick={startSession}
                style={{
                  flex: 2,
                  padding: "14px",
                  background: colors.fairway,
                  color: colors.white,
                  border: "none",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(27,94,32,0.3)",
                }}
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
