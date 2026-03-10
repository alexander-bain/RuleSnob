import { CategoryKey, CategoryInfo, Scenario } from "@/types";
import { SCENARIOS_BATCH_1 } from "./scenarios-batch-1";
import { SCENARIOS_BATCH_2 } from "./scenarios-batch-2";
import { SCENARIOS_BATCH_3 } from "./scenarios-batch-3";
import { SCENARIOS_BATCH_4 } from "./scenarios-batch-4";
import { SCENARIOS_BATCH_5 } from "./scenarios-batch-5";
import { SCENARIOS_BATCH_6 } from "./scenarios-batch-6";
import { SCENARIOS_BATCH_7 } from "./scenarios-batch-7";
import { SCENARIOS_BATCH_8 } from "./scenarios-batch-8";
import { SCENARIOS_BATCH_9 } from "./scenarios-batch-9";
import { SCENARIOS_BATCH_10 } from "./scenarios-batch-10";
import { SCENARIOS_BATCH_11 } from "./scenarios-batch-11";
import { SCENARIOS_BATCH_12 } from "./scenarios-batch-12";

export const CATEGORIES: Record<CategoryKey, CategoryInfo> = {
  FUNDAMENTALS: { name: "Fundamentals", rules: "1\u20134", color: "#2E7D32" },
  PLAYING_ROUND: {
    name: "Playing the Round",
    rules: "5\u20136",
    color: "#1565C0",
  },
  PLAYING_BALL: {
    name: "Playing the Ball",
    rules: "7\u201311",
    color: "#6A1B9A",
  },
  BUNKERS_GREENS: {
    name: "Bunkers & Greens",
    rules: "12\u201313",
    color: "#C62828",
  },
  LIFTING_RETURNING: {
    name: "Lifting & Returning",
    rules: "14",
    color: "#E65100",
  },
  FREE_RELIEF: { name: "Free Relief", rules: "15\u201316", color: "#00838F" },
  PENALTY_RELIEF: {
    name: "Penalty Relief",
    rules: "17\u201319",
    color: "#AD1457",
  },
  RESOLVING: { name: "Resolving Issues", rules: "20", color: "#4E342E" },
};

export const SCENARIOS: Scenario[] = [
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
    tags: ["searching", "ball moved", "no penalty", "rough", "replace ball"],
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
      "Under Rule 18.1, when your ball is out of bounds, you must take stroke-and-distance relief: go back to where you last played and play again under one-stroke penalty. (Note: some courses offer a Local Rule alternative, but the base rule is stroke and distance.)",
    tags: ["OB", "out of bounds", "white stakes", "stroke and distance", "penalty"],
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
      "Under Rule 6.1b(1), in match play, if you play from outside the teeing area, there is no penalty but your opponent may cancel the stroke and require you to replay from within the teeing area.",
    tags: ["teeing area", "tee markers", "match play", "tee shot"],
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
      "Under Rule 4.1b, in stroke play, the penalty for carrying excess clubs is two strokes for each hole where a breach occurred, with a maximum of four penalty strokes (applied to the first two holes). You must immediately declare which club is out of play.",
    tags: ["15 clubs", "equipment", "stroke play", "penalty", "excess clubs"],
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
      "Under Rule 18.2a(1), the 3-minute search time begins when you or your caddie arrive at the area where the ball is likely to be and begin to search.",
    tags: ["lost ball", "searching", "3 minutes", "search time"],
  },

  // --- PLAYING THE ROUND (Rules 5-6) ---
  {
    id: "r1",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "During a round, you take a practice swing on the teeing area and accidentally hit your teed ball off the tee. Does this count as a stroke?",
    choices: [
      "Yes, it counts as a stroke",
      "No, because you did not intend to hit the ball \u2014 re-tee without penalty",
      "One-stroke penalty but re-tee",
      "No penalty, but you must play the ball from where it comes to rest",
    ],
    correct: 1,
    rule: "Definition of Stroke, Rule 6.2b(5)",
    explanation:
      "Under the Definition of Stroke, a stroke requires intent to hit the ball. Since this was a practice swing with no intention to strike the ball, it is not a stroke. Simply re-tee without penalty.",
    tags: ["practice swing", "teeing area", "intent", "no penalty", "tee shot"],
  },
  {
    id: "r2",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you and another player in your group disagree about a ruling. You are unsure of the correct procedure. What should you do?",
    choices: [
      "Play the hole with two balls, report to the Committee before signing your card",
      "Follow the ruling the other player suggests",
      "Stop play and wait for a rules official",
      "Play the hole and sort it out after the round",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "In stroke play, if you are uncertain about the right procedure, you may play two balls. You must report the facts to the Committee before returning your scorecard so they can determine which ball counts.",
    tags: ["two balls", "stroke play", "rules dispute", "committee", "scorecard"],
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
      "Under Rule 5.7a, when the Committee suspends play with an immediate suspension (typically for dangerous weather like lightning), all players must stop play immediately. This is different from a normal suspension where you may finish the hole.",
    tags: ["lightning", "suspension", "dangerous situation", "stop play"],
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
      "Under Rule 5.5b, between the play of two holes, you may practice putting or chipping on or near the putting green of the hole just completed, any practice green, or the next teeing area \u2014 as long as the Committee hasn\u2019t restricted it and you don\u2019t unreasonably delay play.",
    tags: ["practice", "between holes", "putting green", "stroke play"],
  },
  {
    id: "r5",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You give your playing partner advice about which club to use on a par 3. In stroke play, what is the penalty?",
    choices: [
      "Two-stroke penalty on you (the advice giver)",
      "No penalty \u2014 advice between partners is allowed",
      "Two-stroke penalty on both of you",
      "One-stroke penalty on the advice receiver",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "Under Rule 10.2a, in stroke play (individual), giving advice to another player results in a two-stroke penalty (the general penalty) on the player who gave the advice. Advice means any verbal comment or action intended to influence a player\u2019s club selection, shot technique, or play strategy.",
    tags: ["advice", "club selection", "stroke play", "penalty"],
  },

  // --- PLAYING THE BALL (Rules 7-11) ---
  {
    id: "b1",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is in the rough and there\u2019s a broken branch behind it that would interfere with your backswing. Can you move it?",
    choices: [
      "Yes, you may remove any loose impediment anywhere on the course without penalty",
      "No, you cannot move natural objects near your ball",
      "Only if the branch is not attached to a tree",
      "Yes, but you take a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "A detached branch is a loose impediment. Under Rule 15.1a, you may remove any loose impediment anywhere on the course without penalty \u2014 including near your ball. If your ball moves as a result, it must be replaced (with a penalty only in certain conditions).",
    tags: ["loose impediment", "branch", "rough", "no penalty", "backswing"],
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
      "Under Rule 16.1b, a cart path is an immovable obstruction. You are entitled to free relief: find the nearest point of complete relief (where the path doesn\u2019t interfere with your stance, swing, or ball), no nearer the hole, and drop within one club-length of that point.",
    tags: ["cart path", "immovable obstruction", "free relief", "fairway", "nearest point"],
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
      "Under Rule 18.3a, when you think your ball may be lost outside a penalty area (or out of bounds), you should play a provisional ball. This saves time \u2014 if the original is found, you pick up the provisional; if not, the provisional is in play under stroke-and-distance penalty.",
    tags: ["provisional", "lost ball", "tee shot", "stroke and distance"],
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
      "Under Rule 9.3, if natural forces (wind, gravity, water) cause your ball at rest to move, there is generally no penalty and you play the ball from its new position. (Exception: on the putting green after your ball has been lifted and replaced \u2014 see Rule 13.1d.)",
    tags: ["ball moved", "natural forces", "wind", "fairway", "no penalty"],
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
      "Under Rule 11.1a, if your ball in motion accidentally hits you, your equipment, or your caddie, there is no penalty. Play the ball as it lies.",
    tags: ["ball in motion", "equipment", "deflection", "no penalty", "stroke play"],
  },
  {
    id: "b6",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "In stroke play, you play a ball from the rough and realize after your shot that it was not your ball. What happens?",
    choices: [
      "Two-stroke penalty; go back and play your actual ball (strokes with the wrong ball don\u2019t count)",
      "One-stroke penalty; continue with the wrong ball",
      "Disqualification",
      "No penalty if you correct the mistake before teeing off on the next hole",
    ],
    correct: 0,
    rule: "Rule 6.3c",
    explanation:
      "Under Rule 6.3c, playing a wrong ball in stroke play results in a two-stroke penalty. Strokes made with the wrong ball do not count. You must correct the mistake by playing your original ball. If you don\u2019t correct it before making a stroke on the next tee, you are disqualified.",
    tags: ["wrong ball", "stroke play", "penalty", "rough", "disqualification"],
  },
  {
    id: "b7",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is sitting in a divot hole in the middle of the fairway. Do you get free relief?",
    choices: [
      "No, a divot hole is not an abnormal course condition \u2014 play it as it lies",
      "Yes, a divot hole in the fairway qualifies for free relief",
      "Only if the divot has not been replaced",
      "Only in stroke play, not match play",
    ],
    correct: 0,
    rule: "Definition of Abnormal Course Conditions",
    explanation:
      "Under the Definitions, a divot hole is not an abnormal course condition \u2014 even in the middle of the fairway. You must play the ball as it lies or take an unplayable lie with penalty. (Some courses adopt a preferred lies Local Rule during certain conditions, but that\u2019s separate.)",
    tags: ["divot", "fairway", "play it as it lies", "no relief"],
  },
  {
    id: "b8",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball is against a tree root and you decide the lie is unplayable. What are your three options under the unplayable ball rule?",
    choices: [
      "Stroke and distance, drop within 2 club-lengths (not nearer the hole), or drop on a line behind the ball (keeping the spot between you and the hole) \u2014 all with one-stroke penalty",
      "Free drop within 1 club-length, or stroke and distance, or play from the previous spot \u2014 all with no penalty",
      "Drop within 1 club-length for one stroke, drop anywhere in the fairway for two strokes, or replay for one stroke",
      "Stroke and distance, drop within 1 club-length (not nearer the hole), or take a free drop in the nearest fairway",
    ],
    correct: 0,
    rule: "Rule 19.2",
    explanation:
      "Under Rule 19.2, you always have three unplayable ball options (each with one-stroke penalty): (1) stroke and distance (replay from previous spot), (2) back-on-the-line relief (drop on a line going back from the hole through the ball\u2019s spot, as far back as you want), or (3) lateral relief (drop within two club-lengths of the spot, not nearer the hole).",
    tags: ["unplayable lie", "tree", "stroke and distance", "lateral relief", "back on the line"],
  },
  {
    id: "b9",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball embeds in its own pitch mark in the fairway (the general area). Are you entitled to relief?",
    choices: [
      "Yes, free relief \u2014 lift, clean, and drop within one club-length of the spot directly behind where it was embedded, not nearer the hole",
      "No, you must play it as it lies",
      "Yes, but only if the course has adopted a Local Rule",
      "Yes, but with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 16.3b",
    explanation:
      "Under Rule 16.3, you get free relief for a ball embedded in the general area (which includes the fairway and rough). Lift, clean, and drop the ball within one club-length of the spot right behind where it was embedded, not nearer the hole.",
    tags: ["embedded ball", "pitch mark", "fairway", "free relief"],
  },
  {
    id: "b10",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You are about to play your approach shot when you notice your ball has a small cut on it. Can you substitute another ball?",
    choices: [
      "Yes, but only if the ball is visibly cut or cracked \u2014 cosmetic scuffs don\u2019t count",
      "Yes, you can change balls between any shots",
      "No, you must play the same ball for the entire hole",
      "Only if a rules official confirms the damage",
    ],
    correct: 0,
    rule: "Rule 4.2c",
    explanation:
      "Under Rule 4.2c, you may substitute another ball if your ball in play is cut or cracked during the hole. Normal wear, scuffs, or scratches do not qualify. You may lift the ball to check for damage, but must announce your intention first.",
    tags: ["ball damaged", "substitution", "cut ball", "equipment"],
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
      "No penalty as long as you didn\u2019t improve your lie",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "Under Rule 12.2b, before making a stroke at a ball in a bunker, you must not deliberately touch the sand with your hand or club, including on a practice swing. This results in the general penalty (two strokes in stroke play, loss of hole in match play).",
    tags: ["bunker", "sand", "touching sand", "practice swing", "penalty"],
  },
  {
    id: "bg2",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a greenside bunker. Before your stroke, you notice a small leaf resting against your ball. May you remove it?",
    choices: [
      "Yes, remove it without penalty \u2014 loose impediments may be removed anywhere",
      "No, you cannot remove anything in a bunker",
      "Only if it\u2019s not touching the ball",
      "Yes, but with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "Under Rule 15.1a, you may remove loose impediments anywhere on the course without penalty, including in bunkers. This includes leaves, twigs, and stones. If your ball moves while removing the impediment, it must be replaced (with a one-stroke penalty outside the putting green under Rule 15.1b).",
    tags: ["bunker", "loose impediment", "leaf", "no penalty"],
  },
  {
    id: "bg3",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is buried in a bunker. You declare it unplayable. What are your relief options?",
    choices: [
      "Stroke and distance, back-on-the-line (keeping the ball in the bunker), or lateral relief within 2 club-lengths (in the bunker) \u2014 each for one stroke. For two strokes, you may drop outside on the back-on-the-line.",
      "Only stroke and distance or play it as it lies",
      "Free relief because the ball is embedded",
      "Drop within 2 club-lengths outside the bunker with one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 19.3",
    explanation:
      "Under Rule 19.3, for an unplayable ball in a bunker, you have the normal three options (stroke and distance, back-on-the-line, lateral) each for one stroke \u2014 but the back-on-the-line and lateral drops must stay in the bunker. For an additional penalty stroke (two total), you may drop outside the bunker on the back-on-the-line.",
    tags: ["bunker", "unplayable lie", "buried lie", "penalty relief", "back on the line"],
  },
  {
    id: "bg4",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "On the putting green, there\u2019s a spike mark directly on your line of putt. Can you repair it?",
    choices: [
      "Yes, you may repair almost any damage on the putting green, including spike marks",
      "No, spike marks cannot be repaired \u2014 only ball marks and old hole plugs",
      "Only if the Committee has adopted a Local Rule",
      "Only after all players in the group have putted",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Under Rule 13.1c(2), you may repair almost any damage on the putting green, including spike marks, ball marks, animal damage, and club indentations. The only damage you cannot repair is natural surface imperfections or natural wear of the hole.",
    tags: ["putting green", "spike mark", "repair", "line of putt"],
  },
  {
    id: "bg5",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is on the putting green. Your playing partner\u2019s ball is 10 feet away, also on the green. They putt and their ball hits yours. What happens in stroke play?",
    choices: [
      "The player who putted gets a two-stroke penalty; both balls are played as they lie (yours must be replaced to its original spot)",
      "No penalty to either player; both balls played as they lie",
      "No penalty; the moving ball is replayed, the struck ball is replaced",
      "Both players get a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 11.1a, Penalty Exception in Stroke Play",
    explanation:
      "Under Rule 11.1a (Exception in stroke play), when both balls are on the putting green before the stroke and one hits the other, the player who made the stroke gets a two-stroke penalty. The struck ball (yours) must be replaced to its original spot. The player who putted plays their ball as it lies.",
    tags: ["putting green", "ball hit ball", "stroke play", "penalty", "replace ball"],
  },
  {
    id: "bg6",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "You leave the flagstick in the hole and your putt hits the flagstick and drops in. What happens?",
    choices: [
      "No penalty \u2014 the ball is holed",
      "Two-stroke penalty, but the ball is holed",
      "You must replay the putt",
      "One-stroke penalty, ball is holed",
    ],
    correct: 0,
    rule: "Rule 13.2a(2)",
    explanation:
      "Under Rule 13.2a(2), there is no penalty if your ball played from the putting green (or anywhere else) hits the flagstick left in the hole. If the ball comes to rest in the hole, it counts as holed.",
    tags: ["flagstick", "putting green", "no penalty", "holed"],
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
      "Under Rule 13.1d(2), when a ball has been lifted and replaced on the putting green, and then natural forces (like wind) move it, you must replace it on its original spot \u2014 no penalty. This is different from a ball that was never lifted, which you would play from the new spot under Rule 9.3.",
    tags: ["putting green", "wind", "ball moved", "replace ball", "natural forces"],
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
      "Only if your ball is in another player\u2019s line of play",
    ],
    correct: 0,
    rule: "Rule 13.1b, Definition of Putting Green",
    explanation:
      "The fringe (or apron) is NOT part of the putting green \u2014 it\u2019s part of the general area. You may only mark and lift under Rule 13.1b when your ball is on the putting green. (You could lift if it assists or interferes with another player\u2019s play under Rule 15.3.)",
    tags: ["fringe", "putting green", "mark and lift", "general area"],
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
      "Under Rule 14.3b(2), you must drop from knee height (measured when standing upright). The ball must be dropped straight down without spin or direction, and it must not touch you or your equipment before hitting the ground.",
    tags: ["drop", "knee height", "relief procedure"],
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
      "Under Rule 14.3c(2), if a properly dropped ball rolls outside the relief area, you drop again. If it rolls out a second time, you place the ball on the spot where the second drop first hit the ground. You never drop more than twice.",
    tags: ["drop", "re-drop", "relief area", "place ball"],
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
      "Yes, but only on the putting green \u2014 elsewhere marking is optional",
    ],
    correct: 0,
    rule: "Rule 14.1a",
    explanation:
      "Under Rule 14.1, before lifting a ball that must be replaced, you must mark the spot. This applies everywhere on the course, including the putting green. The most common method is placing a ball marker behind the ball.",
    tags: ["mark ball", "putting green", "lift", "ball marker"],
  },
  {
    id: "lr4",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You take relief from a cart path. After dropping the ball at knee height, it bounces off the ground and accidentally hits your foot before coming to rest in the relief area. What happens?",
    choices: [
      "No penalty; the drop is valid \u2014 play the ball as it lies in the relief area",
      "The drop does not count \u2014 you must re-drop",
      "One-stroke penalty; play as it lies",
      "No penalty; but you must re-drop",
    ],
    correct: 0,
    rule: "Rule 14.3c(1)",
    explanation:
      "Under Rule 14.3c(1), there is no penalty if a dropped ball accidentally hits the player or their equipment after hitting the ground. As long as the ball comes to rest in the relief area, the drop is valid. A re-drop is only required if the ball touches the player before hitting the ground.",
    tags: ["drop", "cart path", "relief procedure", "accidentally hits player"],
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
      "A rake is a movable obstruction. You may remove movable obstructions anywhere on the course without penalty (Rule 15.2a). If your ball moves when you remove it, the ball must be replaced \u2014 no penalty.",
    tags: ["movable obstruction", "rake", "bunker", "no penalty"],
  },
  {
    id: "fr2",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball lands in an area marked with blue stakes. What do these stakes signify?",
    choices: [
      "Ground under repair (GUR) \u2014 you get free relief",
      "A penalty area \u2014 one-stroke penalty relief",
      "Out of bounds \u2014 stroke and distance",
      "Environmentally sensitive area \u2014 you must take relief",
    ],
    correct: 0,
    rule: "Rule 16.1, Committee Procedures",
    explanation:
      "Under Rule 16.1, blue stakes (or blue lines) typically mark ground under repair (GUR), which is an abnormal course condition. You are entitled to free relief: find the nearest point of complete relief, not nearer the hole, and drop within one club-length.",
    tags: ["GUR", "ground under repair", "blue stakes", "free relief", "course markings"],
  },
  {
    id: "fr3",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is in the rough, but a sprinkler head near the green interferes with your intended line of play (not your stance or swing). Do you get free relief?",
    choices: [
      "No \u2014 relief from immovable obstructions only covers interference with stance, swing, or where the ball lies, not line of play (unless a Local Rule applies)",
      "Yes, you always get relief when an obstruction is on your line",
      "Yes, but only if the ball is within two club-lengths of the obstruction",
      "Yes, sprinkler heads always give relief when near the green",
    ],
    correct: 0,
    rule: "Rule 16.1a",
    explanation:
      "Under Rule 16.1a, free relief from an immovable obstruction (like a sprinkler head) only applies when the obstruction interferes with your ball, stance, or area of intended swing \u2014 not your line of play. However, many courses adopt a Local Rule granting line-of-play relief from sprinkler heads near greens.",
    tags: ["sprinkler head", "immovable obstruction", "line of play", "local rule", "rough"],
  },
  {
    id: "fr4",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "There\u2019s a large puddle of temporary water in the fairway and your ball is sitting in it. What are your options?",
    choices: [
      "Free relief: find the nearest point of complete relief from the temporary water, not nearer the hole, and drop within one club-length",
      "You must play it as it lies \u2014 water is a natural condition",
      "Drop anywhere on the dry part of the fairway",
      "Free relief, but you must drop within the same cut of grass",
    ],
    correct: 0,
    rule: "Rule 16.1b",
    explanation:
      "Under Rule 16.1b, temporary water is an abnormal course condition. You get free relief: find the nearest point of complete relief (no nearer the hole) where the water doesn\u2019t affect your ball, stance, or swing, and drop within one club-length of that point. The relief area might be in the rough.",
    tags: ["temporary water", "free relief", "fairway", "abnormal course condition"],
  },
  {
    id: "fr5",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "An animal burrow is directly behind your ball and would interfere with your stance. The nearest point of complete relief would put you in a worse position (behind a tree). Must you take relief?",
    choices: [
      "No \u2014 relief from abnormal course conditions is optional; you can play it as it lies",
      "Yes \u2014 you must take relief from animal holes",
      "No, but only because the relief would be worse",
      "Yes, unless the Committee has ruled otherwise",
    ],
    correct: 0,
    rule: "Rule 16.1",
    explanation:
      "Under Rule 16.1, relief from abnormal course conditions (including animal holes) is always optional in the general area. You may choose to play the ball as it lies, even if the condition interferes with your play. You\u2019re never required to take free relief.",
    tags: ["animal hole", "abnormal course condition", "optional relief", "stance"],
  },
  {
    id: "fr6",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is embedded in a steep bank of rough above a bunker. Are you entitled to free relief for an embedded ball?",
    choices: [
      "Yes \u2014 embedded ball relief applies anywhere in the general area, including the rough",
      "No \u2014 embedded ball relief only applies in the fairway",
      "Yes, but only if the ball is embedded in its own pitch mark",
      "Only if a Local Rule grants it for rough",
    ],
    correct: 0,
    rule: "Rule 16.3a",
    explanation:
      "Under the default Rule 16.3, you get free relief for a ball embedded in the general area \u2014 which includes both the fairway and the rough. The ball must be embedded in its own pitch mark (created as a result of your previous stroke). Note: the Committee may restrict this relief to fairway-height areas by Local Rule.",
    tags: ["embedded ball", "rough", "free relief", "general area", "pitch mark"],
  },

  // --- PENALTY RELIEF (Rules 17-19) ---
  {
    id: "pr1",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball goes into a red-staked penalty area. What are your relief options?",
    choices: [
      "All three: stroke and distance, back-on-the-line, or lateral relief (within 2 club-lengths of where it crossed the edge) \u2014 all with one-stroke penalty",
      "Only stroke and distance or back-on-the-line \u2014 lateral relief is not available",
      "Drop on either side of the penalty area within 2 club-lengths",
      "Free drop within 2 club-lengths of the edge",
    ],
    correct: 0,
    rule: "Rule 17.1d",
    explanation:
      "Under Rule 17.1d, red-staked penalty areas give you three relief options, each with a one-stroke penalty: (1) stroke and distance, (2) back-on-the-line (on a line from the hole through where the ball last crossed the edge of the penalty area), or (3) lateral relief within 2 club-lengths of where the ball last crossed the edge, not nearer the hole.",
    tags: ["red stakes", "penalty area", "lateral relief", "water"],
  },
  {
    id: "pr2",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball goes into a yellow-staked penalty area. What are your relief options?",
    choices: [
      "Two options: stroke and distance, or back-on-the-line \u2014 each with one-stroke penalty (no lateral relief)",
      "Same as red stakes: stroke and distance, back-on-the-line, or lateral",
      "Must play it from the penalty area or take stroke and distance",
      "Free relief because yellow stakes are less severe than red",
    ],
    correct: 0,
    rule: "Rule 17.1d",
    explanation:
      "Under Rule 17.1d, yellow penalty areas offer only two relief options (each with a one-stroke penalty): (1) stroke and distance, or (2) back-on-the-line (drop on a line from the hole through where the ball crossed the edge). Unlike red penalty areas, lateral relief is NOT available.",
    tags: ["yellow stakes", "penalty area", "water", "back on the line", "stroke and distance"],
  },
  {
    id: "pr3",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a red penalty area, sitting on dry ground with a clear shot to the green. Can you play it from the penalty area?",
    choices: [
      "Yes \u2014 you can always play your ball from a penalty area; relief is optional",
      "No \u2014 you must take relief from a penalty area",
      "Yes, but with a one-stroke penalty",
      "Only if the Committee has not prohibited it",
    ],
    correct: 0,
    rule: "Rule 17.1a",
    explanation:
      "Under Rule 17.1a, you always have the option to play your ball as it lies in a penalty area, just as you would anywhere else on the course. Under Rule 17.1b, you may ground your club and remove loose impediments in the penalty area. Relief is never mandatory.",
    tags: ["penalty area", "play it as it lies", "red stakes", "optional relief"],
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
      "One stroke, but you\u2019re hitting your fourth shot",
    ],
    correct: 0,
    rule: "Rule 17.1d(2)",
    explanation:
      "Under Rule 17.1d, the penalty for relief from a penalty area is one stroke. Your tee shot was stroke 1, you add 1 penalty stroke, so your next shot (after the drop) is your 3rd stroke. If you hole that, you score 3 on the hole.",
    tags: ["penalty area", "water", "yellow stakes", "counting strokes", "tee shot"],
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
      "Under Rule 18.3c(2), if your original ball is found in bounds within 3 minutes of searching, the provisional ball must be abandoned. You must continue play with the original ball, regardless of the positions of the two balls.",
    tags: ["provisional", "original ball", "found ball", "abandon provisional"],
  },
  {
    id: "pr6",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit a provisional ball off the tee. You then hit your provisional again (second shot with provisional). Now you find your original ball. Can you still play the original?",
    choices: [
      "Yes, as long as the provisional hasn\u2019t been played from a spot nearer the hole than where the original ball is",
      "No, once you hit the provisional a second time, it\u2019s automatically in play",
      "Yes, you can always choose the original if found within 3 minutes",
      "No, the provisional became the ball in play after the second shot",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "Under Rule 18.3c(2), you can still play your original ball as long as you haven\u2019t played the provisional from a spot that is nearer the hole than where the original ball lies. The key is the location of the provisional when played, not the number of strokes made with it.",
    tags: ["provisional", "original ball", "nearer the hole", "multiple shots"],
  },
  {
    id: "pr7",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You believe your ball is lost. You go back to the tee to play another ball under stroke and distance. On the way back, your playing partner finds your original ball (within 3 minutes). What happens?",
    choices: [
      "You must play the original ball \u2014 it was found in time",
      "You can choose either ball",
      "The original is lost because you started walking back",
      "You must play the new ball since you declared the original lost",
    ],
    correct: 0,
    rule: "Rule 18.2a(1)",
    explanation:
      "Under Rule 18.2a(1), a ball is not lost until the 3-minute search time expires or you put another ball in play by making a stroke. Since you hadn\u2019t made a stroke with a new ball yet and the 3 minutes hadn\u2019t expired, your original ball is found in time. You must play it.",
    tags: ["lost ball", "3 minutes", "found ball", "stroke and distance"],
  },
  {
    id: "pr8",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit your ball into a red penalty area that runs along the side of the fairway. You find your ball just inside the penalty area margin. Your stance is outside the penalty area. Do you get free relief for the fact that you\u2019re straddling the line?",
    choices: [
      "No \u2014 the ball is in the penalty area, so no free relief applies; your options are play it as it lies or take penalty relief",
      "Yes \u2014 since your stance is outside, you get free relief",
      "Yes \u2014 the ball must be fully inside for penalty area rules to apply",
      "You may move the ball to just outside the penalty area, no penalty",
    ],
    correct: 0,
    rule: "Rule 17.1",
    explanation:
      "Under Rule 17.1, a ball is in a penalty area when any part of it lies on or touches the boundary of the penalty area. Once the ball is in the penalty area, that\u2019s where the ball is \u2014 your stance being outside doesn\u2019t change that. You can play it as it lies or take penalty area relief.",
    tags: ["penalty area", "red stakes", "boundary", "stance"],
  },

  // --- RESOLVING RULES ISSUES (Rule 20) ---
  {
    id: "ri1",
    category: "RESOLVING",
    tier: "competitor",
    text: "In match play, your opponent picks up your ball on the putting green without your permission to mark it. What happens?",
    choices: [
      "Your opponent gets a one-stroke penalty",
      "No penalty \u2014 any player may mark and lift a ball on the putting green",
      "Loss of hole for your opponent",
      "No penalty, but your opponent must replace the ball",
    ],
    correct: 0,
    rule: "Rule 9.5b",
    explanation:
      "Under Rule 9.5b, if your opponent lifts or deliberately touches your ball at rest without your authority (when not permitted by the Rules), your opponent gets one penalty stroke. Your ball must be replaced.",
    tags: ["match play", "opponent", "lifted ball", "putting green", "penalty"],
  },
  {
    id: "ri2",
    category: "RESOLVING",
    tier: "competitor",
    text: "In stroke play, you are uncertain about a rules situation. You want to protect yourself. What is the proper procedure?",
    choices: [
      "Announce you will play two balls, play the hole with both, and report to the Committee before signing your scorecard",
      "Choose the interpretation you believe is correct and proceed",
      "Ask the other players in your group to vote on the correct ruling",
      "Mark your ball and refuse to continue until a rules official arrives",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "When uncertain in stroke play, you may invoke Rule 20.1c(3): announce that you want to play two balls, decide which ball you want to count if the Rules allow, play the hole with both balls, and report the situation to the Committee before returning your scorecard.",
    tags: ["two balls", "stroke play", "rules dispute", "committee", "procedure"],
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
      "Under Rule 20.1b, in match play, either player may request a ruling from the Committee. If a referee is available, the referee decides. If not, the players should agree on a way forward and either player may later request an official ruling from the Committee.",
    tags: ["match play", "rules dispute", "committee", "referee"],
  },
  ...SCENARIOS_BATCH_1,
  ...SCENARIOS_BATCH_2,
  ...SCENARIOS_BATCH_3,
  ...SCENARIOS_BATCH_4,
  ...SCENARIOS_BATCH_5,
  ...SCENARIOS_BATCH_6,
  ...SCENARIOS_BATCH_7,
  ...SCENARIOS_BATCH_8,
  ...SCENARIOS_BATCH_9,
  ...SCENARIOS_BATCH_10,
  ...SCENARIOS_BATCH_11,
  ...SCENARIOS_BATCH_12,
];
