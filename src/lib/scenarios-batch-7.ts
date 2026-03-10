import { Scenario } from "@/types";

export const SCENARIOS_BATCH_7: Scenario[] = [
  // ============================================================
  // PLAYING THE ROUND (Rules 5–6) — 93 scenarios
  // Tier distribution: ~37 weekend, ~33 competitor, ~23 official
  // Rule 5: ~50 scenarios | Rule 6: ~43 scenarios
  // ============================================================

  // ===== RULE 5: PLAYING THE ROUND =====

  // --- Rule 5.1: Meaning of Round ---

  {
    id: "b7_001",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "When does your 'round' officially begin under the Rules of Golf?",
    choices: [
      "When you make your first stroke to start your first hole",
      "When you arrive at the golf course",
      "When you step onto the first tee",
      "When your tee time is scheduled to begin",
    ],
    correct: 0,
    rule: "Rule 5.1",
    explanation:
      "A player's round starts when the player makes a stroke to begin his or her first hole. This is distinct from arriving at the course or stepping onto the tee — the round begins at the first stroke.",
    tags: ["round", "start of round", "first stroke"],
  },
  {
    id: "b7_002",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "When does your round officially end?",
    choices: [
      "When you hole out on your final hole (or the result of the final hole is otherwise decided)",
      "When you sign your scorecard",
      "When you leave the 18th green",
      "When you shake hands with your playing partners",
    ],
    correct: 0,
    rule: "Rule 5.1",
    explanation:
      "A round ends when the player holes out on the final hole (including correction of a mistake such as under Rule 6.1 or Rule 14.7b). In match play, it ends when the match result is decided.",
    tags: ["round", "end of round", "holing out"],
  },
  {
    id: "b7_003",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In a match play event, your match is all square after 18 holes and goes to a playoff. Is the playoff considered part of the same round?",
    choices: [
      "Yes — the round is extended until the match result is decided",
      "No — the playoff is a new round",
      "Yes, but only for the first three extra holes",
      "It depends on the Committee's decision",
    ],
    correct: 0,
    rule: "Rule 5.1",
    explanation:
      "Under Rule 5.1, a round in match play ends when the result of the match is decided. If the match is tied after the final hole, the round is extended until the match is decided. The extension is part of the same round.",
    tags: ["round", "match play", "playoff", "extra holes"],
  },

  // --- Rule 5.2: Practising Before or Between Rounds ---

  {
    id: "b7_004",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Before your stroke play round, you want to hit a few practice putts on the putting green of the first hole. Is this allowed?",
    choices: [
      "It depends — the Committee may prohibit or allow practice on the course before a round in stroke play",
      "Yes — you can always practise on the course before your round",
      "No — you can never practise on the course before a stroke play round",
      "Only if no other groups are on the course yet",
    ],
    correct: 0,
    rule: "Rule 5.2b",
    explanation:
      "In stroke play, the Committee may adopt a Local Rule prohibiting or restricting practice on the course before a round on the day of competition. It is not automatically prohibited or allowed — it depends on the Committee's decision.",
    tags: ["practice", "stroke play", "before round", "committee"],
  },
  {
    id: "b7_005",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, you arrive early and hit some practice shots on the course before your match. Is this allowed?",
    choices: [
      "Yes — in match play, a player may practise on the course before a round",
      "No — practice on the course is never allowed before a match",
      "Only putting and chipping, not full shots",
      "Only if your opponent also practises",
    ],
    correct: 0,
    rule: "Rule 5.2a",
    explanation:
      "Under Rule 5.2a, a player may practise on the competition course before a round of match play. This is a key difference from stroke play, where the Committee may restrict or prohibit such practice.",
    tags: ["practice", "match play", "before round"],
  },
  {
    id: "b7_006",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In a 36-hole stroke play event played over one day, what are you allowed to do between rounds regarding practice?",
    choices: [
      "You may practise on any practice area and, unless the Committee prohibits it, may also practise on the course and the putting green of the hole just completed",
      "You cannot practise at all between rounds",
      "You may only practise putting",
      "You may only use the driving range, never the course",
    ],
    correct: 0,
    rule: "Rule 5.2b",
    explanation:
      "Between rounds on the same day in stroke play, a player may practise on any practice area and may also practise on the course just played and the putting green of the last hole completed, unless the Committee restricts this by Local Rule.",
    tags: ["practice", "stroke play", "between rounds", "multi-round"],
  },
  {
    id: "b7_007",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "After completing your stroke play round on Day 1 of a two-day competition, you go back out and practise on the competition course. Is this a problem?",
    choices: [
      "It depends — the Committee may prohibit practice on the course between rounds, even on different days",
      "Yes — you are automatically disqualified",
      "No — you can always practise on the course after your round is over",
      "Only if you play on holes you haven't yet played in the competition",
    ],
    correct: 0,
    rule: "Rule 5.2b",
    explanation:
      "The Committee may adopt a Local Rule prohibiting or restricting practice on the course before or between rounds in stroke play. If such a Local Rule is in effect, practising on the course between rounds (even on different days) would result in a penalty.",
    tags: ["practice", "between rounds", "stroke play", "committee", "local rule"],
  },

  // --- Rule 5.3: Starting and Ending a Round ---

  {
    id: "b7_008",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Your tee time is 8:00 AM. You arrive at the first tee ready to play at 8:03 AM. What happens?",
    choices: [
      "You get the general penalty (two strokes in stroke play / loss of hole in match play) but can still play, provided you are ready within 5 minutes of your tee time",
      "You are disqualified",
      "No penalty — you have a 10-minute grace period",
      "You must wait for the next available tee time",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "Under Rule 5.3a, you must start at the time and place set by the Committee. If you arrive at your starting point ready to play within 5 minutes of your start time, the penalty for being late is the general penalty (two strokes / loss of first hole) instead of disqualification.",
    tags: ["late start", "tee time", "5-minute rule", "penalty"],
  },
  {
    id: "b7_009",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Your tee time is 9:00 AM but you don't arrive at the first tee until 9:06 AM. What is the penalty?",
    choices: [
      "Disqualification",
      "Two-stroke penalty but you can still play",
      "Loss of hole in all forms of play",
      "One-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "If you arrive more than 5 minutes after your starting time, you are disqualified. The 5-minute grace period only applies if you arrive within those 5 minutes — arriving at 9:06 (6 minutes late) means you are disqualified.",
    tags: ["late start", "tee time", "5-minute rule", "disqualification"],
  },
  {
    id: "b7_010",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You arrive at the first tee exactly 5 minutes after your start time. You are ready to play immediately. What is the ruling?",
    choices: [
      "You get the general penalty (two strokes / loss of first hole) but can still play",
      "You are disqualified — you must arrive within 5 minutes, not at 5 minutes",
      "No penalty since you made it within the allowed window",
      "You get a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "The rule states the player must be 'ready to play' at the starting point within 5 minutes of the start time. Arriving at exactly 5 minutes is within the allowance. The penalty is the general penalty (not disqualification), applied to the first hole.",
    tags: ["late start", "tee time", "5-minute rule", "general penalty"],
  },
  {
    id: "b7_011",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, you arrive 3 minutes late to the first tee and get the general penalty of two strokes. On which hole is this penalty applied?",
    choices: [
      "Your first hole",
      "Your final hole (hole 18)",
      "It is applied as a separate penalty, not to any specific hole",
      "It is split — one stroke on hole 1 and one stroke on hole 2",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "When a player gets the general penalty for arriving late (within 5 minutes) in stroke play, the two-stroke penalty is applied to the player's first hole.",
    tags: ["late start", "5-minute rule", "penalty application", "stroke play"],
  },
  {
    id: "b7_012",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Your group is scheduled to start on the 10th tee (shotgun start). You arrive at the 1st tee on time because you misread the starting sheet. By the time you get to the 10th tee, you are 4 minutes late. What happens?",
    choices: [
      "You receive the general penalty (two strokes / loss of hole) for your first hole since you arrived within 5 minutes of your start time",
      "No penalty — it's an honest mistake",
      "You are disqualified for going to the wrong tee",
      "You replay from the 1st tee with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "The starting point is the place set by the Committee — in a shotgun start, that's the assigned hole. Arriving at the wrong starting point doesn't change the requirement. Since you arrived at the correct starting point within 5 minutes, you get the general penalty rather than disqualification.",
    tags: ["late start", "shotgun start", "starting point", "wrong tee"],
  },
  {
    id: "b7_013",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "A player in stroke play is 4 minutes late to the first tee. The Committee has adopted a Local Rule changing the penalty for lateness from the general penalty to one stroke. What penalty applies?",
    choices: [
      "One-stroke penalty, as the Committee's Local Rule modifies the standard penalty",
      "Two-stroke penalty — the Committee cannot change this penalty",
      "The player is disqualified regardless of any Local Rule",
      "No penalty since the Committee adopted a lenient Local Rule",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "Rule 5.3a specifically authorizes the Committee to adopt a Local Rule reducing the penalty for lateness (when arriving within 5 minutes) from the general penalty to one penalty stroke. This is one of the few places the Rules explicitly permit softening of a penalty.",
    tags: ["late start", "local rule", "committee", "penalty reduction"],
  },
  {
    id: "b7_014",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You are playing your round and must leave unexpectedly after the 14th hole. Can you return later to finish the round?",
    choices: [
      "Only if you have good reason and the Committee approves it — otherwise you are disqualified for not finishing",
      "Yes — you can always come back and finish anytime",
      "No — you are automatically disqualified once you leave the course",
      "Yes, but only if you return within 30 minutes",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "A player must start and finish a round as set by the Committee. Discontinuing play without the Committee's authorization typically results in disqualification. The Committee has discretion to allow a player to complete the round under certain circumstances.",
    tags: ["ending round", "discontinuing play", "disqualification", "committee"],
  },

  // --- Rule 5.4: Playing in Groups ---

  {
    id: "b7_015",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In a stroke play competition, the Committee sends you out as a single (playing alone). Is this allowed?",
    choices: [
      "Yes — the Committee decides group sizes and a player can be sent out alone",
      "No — a player must always have at least one other player in the group",
      "Only if the player requests to play alone",
      "Only during a playoff, not during regular competition",
    ],
    correct: 0,
    rule: "Rule 5.4a",
    explanation:
      "Under Rule 5.4a, the Committee is responsible for setting groups. While groups typically consist of 2, 3, or 4 players, the Committee may authorize a player to play alone. A player playing alone may have a marker appointed by the Committee to keep score.",
    tags: ["groups", "playing alone", "committee", "stroke play"],
  },
  {
    id: "b7_016",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During a stroke play round, you decide to separate from your assigned group and play several holes ahead on your own. What happens?",
    choices: [
      "You are disqualified for playing outside your assigned group without the Committee's authorization",
      "No penalty — you can move ahead if you are playing fast",
      "Two-stroke penalty for each hole played out of group",
      "One-stroke penalty and you must rejoin your group",
    ],
    correct: 0,
    rule: "Rule 5.4b",
    explanation:
      "Under Rule 5.4b, a player must play the entire round in the group set by the Committee. Playing outside the group without Committee authorization results in disqualification, unless the Committee determines there were exceptional circumstances.",
    tags: ["groups", "playing out of group", "disqualification", "stroke play"],
  },
  {
    id: "b7_017",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, a player in your group withdraws after the 9th hole. The Committee cannot be reached. Should you continue as a twosome or wait?",
    choices: [
      "Continue playing — the remaining players may finish the round in their reduced group",
      "Stop play and wait until the Committee can assign a replacement",
      "One of you must also withdraw to allow other groups to merge",
      "Find another group to join immediately",
    ],
    correct: 0,
    rule: "Rule 5.4b",
    explanation:
      "When a player withdraws from a group during the round, the remaining players may continue to play in the reduced group. There is no requirement to stop play or find a replacement. The Committee should be informed when practical.",
    tags: ["groups", "withdrawal", "reduced group", "stroke play"],
  },

  // --- Rule 5.5: Practising During Round or While Play Is Stopped ---

  {
    id: "b7_018",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Between two holes during your round, you drop a ball on the putting green you just finished and hit a practice putt. Is this allowed in stroke play?",
    choices: [
      "No — you must not make a practice stroke between two holes in stroke play unless it's putting or chipping on or near the putting green just completed, the next teeing area, or any practice area (and the Committee hasn't restricted it)",
      "Wait — actually, yes: you may practise putting or chipping on or near the putting green of the hole just completed, the next teeing area, or any practice area, as long as it doesn't unreasonably delay play",
      "No — all practice during a round is prohibited",
      "Yes — you can practise anywhere between holes",
    ],
    correct: 1,
    rule: "Rule 5.5b",
    explanation:
      "Between two holes in stroke play, a player may make practice strokes by putting or chipping on or near the putting green of the hole just completed, any practice green, or the next teeing area, as long as the strokes are not made from a bunker and do not unreasonably delay play. The Committee may restrict this by Local Rule.",
    tags: ["practice during round", "between holes", "putting", "stroke play"],
  },
  {
    id: "b7_019",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "While walking to your ball in the fairway, you take a practice swing. Is this a practice stroke?",
    choices: [
      "No — a practice swing is not a practice stroke; practice strokes are strokes made at a ball, while a practice swing is swinging without intending to hit a ball",
      "Yes — any swing counts as a practice stroke",
      "It depends on whether the swing is full or half",
      "Only if the practice swing disturbs the ground",
    ],
    correct: 0,
    rule: "Rule 5.5a",
    explanation:
      "A practice swing is not a practice stroke. Under Rule 5.5a, a player must not make a practice stroke at any ball during play of a hole. However, a practice swing — swinging without intending to hit a ball — is not restricted (though you should avoid unreasonable delay).",
    tags: ["practice swing", "practice stroke", "during hole"],
  },
  {
    id: "b7_020",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During the play of a hole in stroke play, you hit a terrible chip. Before moving on, you drop another ball and chip again 'for practice.' What is the penalty?",
    choices: [
      "The general penalty (two strokes)",
      "One-stroke penalty",
      "No penalty as long as it doesn't delay play",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 5.5a",
    explanation:
      "Under Rule 5.5a, a player must not make a practice stroke at any ball during the play of a hole. Hitting a practice chip during the play of a hole results in the general penalty (two strokes in stroke play, loss of hole in match play).",
    tags: ["practice stroke", "during hole", "general penalty", "stroke play"],
  },
  {
    id: "b7_021",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, between two holes, you practise a chip shot near the green you just played. Is this allowed?",
    choices: [
      "Yes — in match play, a player may make practice strokes between holes without restriction",
      "No — practice between holes is prohibited in match play just like stroke play",
      "Only putting is allowed, not chipping",
      "Only if your opponent agrees",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "In match play, there are no restrictions on practice strokes between two holes or while play is stopped. This is a significant difference from stroke play, where practice between holes is limited to putting/chipping on or near the green just completed, the next tee, or a practice area.",
    tags: ["practice during round", "match play", "between holes"],
  },
  {
    id: "b7_022",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "Play is suspended by the Committee due to lightning. While waiting, you practise full iron shots on the driving range. When play resumes, what happens?",
    choices: [
      "No penalty — while play is stopped, you may practise on any practice area",
      "Two-stroke penalty for practising during a suspension",
      "Disqualification for leaving the course during suspension",
      "One-stroke penalty per practice shot taken",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "Under Rule 5.5b, when play is stopped by the Committee, a player may practise on any practice area or on the competition course if the Committee allows it. Practising on a practice area (such as the driving range) during a suspension is specifically permitted.",
    tags: ["practice during round", "suspension", "driving range", "lightning"],
  },
  {
    id: "b7_023",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, between two holes, you practise a bunker shot from a practice bunker near the putting green you just completed. Is this allowed?",
    choices: [
      "No — the allowance for practice putting/chipping between holes specifically excludes practice from a bunker",
      "Yes — any practice shot near the green just completed is fine",
      "Yes — only practice from bunkers on the course is restricted",
      "No — there are no practice bunkers on a competition course",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "Rule 5.5b allows practice putting or chipping on or near the putting green of the hole just completed, any practice green, or the next teeing area between holes in stroke play. However, it specifically states the player must not make a practice stroke from a bunker.",
    tags: ["practice during round", "bunker", "between holes", "stroke play"],
  },

  // --- Rule 5.6: Unreasonable Delay and Pace of Play ---

  {
    id: "b7_024",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You take a very long time over each shot, sometimes more than 2 minutes. An official warns you about pace of play. If you continue, what penalty could apply?",
    choices: [
      "The general penalty (two strokes / loss of hole), and disqualification for repeated offenses",
      "One-stroke penalty per slow shot",
      "No penalty — there is no specific penalty for slow play in the Rules",
      "A warning only — slow play is not penalized",
    ],
    correct: 0,
    rule: "Rule 5.6a",
    explanation:
      "Under Rule 5.6a, a player must not unreasonably delay play. The penalty is one stroke for the first breach, the general penalty for the second breach, and disqualification for the third breach. The Committee may adopt a pace of play policy with specific time limits.",
    tags: ["pace of play", "slow play", "penalty", "unreasonable delay"],
  },
  {
    id: "b7_025",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Under the Rules of Golf, what is the penalty structure for unreasonable delay of play?",
    choices: [
      "First breach: one penalty stroke. Second breach: general penalty (two strokes / loss of hole). Third breach: disqualification",
      "First breach: warning. Second breach: one stroke. Third breach: two strokes",
      "First breach: two strokes. Second breach: disqualification",
      "Every breach: one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 5.6a",
    explanation:
      "Rule 5.6a sets out a progressive penalty structure for unreasonable delay: one penalty stroke for the first breach, the general penalty for the second breach, and disqualification for the third breach during the same round.",
    tags: ["pace of play", "unreasonable delay", "progressive penalty"],
  },
  {
    id: "b7_026",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "The Committee has adopted a pace of play policy with specific time limits per shot. A player is 'out of position' (behind the group in front) and takes 50 seconds for a shot when the policy allows 40 seconds. What can happen?",
    choices: [
      "The player may be penalized under the Committee's pace of play policy — one penalty stroke for the first bad time",
      "No penalty — pace of play policies are advisory only",
      "Automatic disqualification for any timing violation",
      "The player is penalized only if an official observes it in person",
    ],
    correct: 0,
    rule: "Rule 5.6b",
    explanation:
      "Under Rule 5.6b, the Committee is encouraged to adopt a pace of play policy. If it does, it may include specific time limits per stroke. When a group is 'out of position,' individual players may be timed and penalized under Rule 5.6a's penalty structure for bad times.",
    tags: ["pace of play", "committee policy", "out of position", "timing"],
  },
  {
    id: "b7_027",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During your round, you walk back to the clubhouse between holes to buy a sandwich and a drink, causing a 10-minute delay. What is the ruling?",
    choices: [
      "You are subject to penalty for unreasonable delay under Rule 5.6a",
      "No penalty — you can take breaks between holes",
      "One-stroke penalty, but only if you take more than 15 minutes",
      "Disqualification for leaving the course",
    ],
    correct: 0,
    rule: "Rule 5.6a",
    explanation:
      "Leaving the course to get refreshments between holes, causing a significant delay, constitutes unreasonable delay under Rule 5.6a. The penalty is one stroke for the first offense, the general penalty for the second, and disqualification for the third.",
    tags: ["unreasonable delay", "leaving course", "between holes"],
  },

  // --- Rule 5.7: Stopping Play; Resuming Play ---

  {
    id: "b7_028",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Dark storm clouds roll in and you hear thunder. There has been no signal from the Committee. Can you stop playing on your own?",
    choices: [
      "Yes — a player may stop play if the player reasonably believes there is danger from lightning",
      "No — you must wait for an official suspension signal from the Committee",
      "Only if all players in your group agree to stop",
      "You must finish the current hole before stopping",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "Under Rule 5.7a, a player may stop play if the player reasonably believes there is danger from lightning. This is the one situation where a player may stop play on their own initiative without Committee authorization, even during the play of a hole.",
    tags: ["stopping play", "lightning", "dangerous situation", "player decision"],
  },
  {
    id: "b7_029",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "The Committee suspends play with a siren. Your ball is in the fairway. What must you do?",
    choices: [
      "Stop play immediately, mark the position of your ball if you wish, and leave the course when directed",
      "Finish the current hole and then stop",
      "Hit your next shot and then stop",
      "Continue playing until you find a convenient stopping point",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "When the Committee suspends play for a dangerous situation (typically one prolonged note of a siren), all players must stop play immediately. They must not make another stroke until the Committee resumes play. Players should mark their ball positions.",
    tags: ["suspension", "dangerous situation", "committee signal", "immediate stop"],
  },
  {
    id: "b7_030",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "The Committee suspends play for a non-dangerous reason (e.g., darkness or unplayable course conditions — three short blasts of a siren). You are in the middle of playing a hole. What are your options?",
    choices: [
      "You may choose to stop immediately or finish the hole you are playing, but you must stop after completing the hole",
      "You must stop immediately just like a dangerous-situation suspension",
      "You may continue playing for up to 15 minutes after the signal",
      "You can finish the current hole and the next hole",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "When play is suspended for a non-dangerous reason (three consecutive notes of a siren), players who are between holes must stop before playing the next hole. Players who are playing a hole may stop immediately or finish the hole, but must stop after completing it.",
    tags: ["suspension", "non-dangerous", "finish hole", "committee signal"],
  },
  {
    id: "b7_031",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During a non-dangerous suspension, you choose to finish the hole. You are on the green and you putt — your ball stops 2 feet from the hole. Can you putt out?",
    choices: [
      "Yes — you are allowed to finish the hole you are playing during a non-dangerous suspension",
      "No — you must stop as soon as you reach a natural break point",
      "Only if your fellow competitors agree",
      "No — once you have played a stroke after the signal, you must stop immediately",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "During a suspension for a non-dangerous reason, players who choose to continue playing their current hole may finish it completely. This includes putting out, even if you have multiple putts remaining.",
    tags: ["suspension", "non-dangerous", "finishing hole", "putting out"],
  },
  {
    id: "b7_032",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "Play is suspended for a dangerous situation (lightning). You ignore the signal and hit your approach shot to the green. What is the penalty?",
    choices: [
      "Disqualification",
      "Two-stroke penalty",
      "One-stroke penalty",
      "No penalty, but you must stop after that shot",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "When play is suspended for a dangerous situation, all players must stop immediately. A player who makes a stroke after an immediate suspension signal is disqualified. There is no lesser penalty — this is a player safety issue.",
    tags: ["dangerous situation", "suspension", "disqualification", "immediate stop"],
  },
  {
    id: "b7_033",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Play is suspended and you decide to stop mid-hole. Before leaving, what should you do with your ball?",
    choices: [
      "Mark its position and lift the ball — you are entitled to do so during any suspension",
      "Leave it where it is and hope nobody disturbs it",
      "Move it to the nearest safe location without marking",
      "Pick it up and put it in your pocket — no need to mark",
    ],
    correct: 0,
    rule: "Rule 5.7d",
    explanation:
      "Under Rule 5.7d, when play is stopped, the player may mark the spot and lift the ball. When play resumes, the player must replace the ball on its original spot (or if the spot has been altered, on the nearest spot that recreates the original lie).",
    tags: ["suspension", "marking ball", "lifting ball", "resuming play"],
  },
  {
    id: "b7_034",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "Play resumes after a suspension. You replaced your ball on the putting green where you had marked it, but overnight rain has changed the conditions of the green. What must you do?",
    choices: [
      "Replace the ball on its original spot — changing conditions of the course between suspension and resumption do not entitle you to move the ball",
      "Drop the ball as near as possible to the original spot",
      "Move the ball to the nearest spot with similar conditions",
      "Request a re-start of the hole from the Committee",
    ],
    correct: 0,
    rule: "Rule 5.7d",
    explanation:
      "Under Rule 5.7d, when play resumes, the ball must be replaced on its original spot. Natural changes in course conditions (such as rain, wind, or overnight growth) between suspension and resumption are simply part of the game and do not allow the ball to be moved.",
    tags: ["resuming play", "replacing ball", "changed conditions", "putting green"],
  },
  {
    id: "b7_035",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "You stopped play on your own due to what you believed was a dangerous lightning situation. No Committee signal was given, and the Committee later determines there was no lightning danger. What happens?",
    choices: [
      "You are subject to penalty for unreasonable delay if the Committee determines the danger was not reasonable — but the Committee should consider the circumstances",
      "Automatic disqualification for stopping without authorization",
      "No penalty — a player's belief in danger is always protected",
      "Two-stroke penalty and you must restart the hole",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "A player who stops play on their own due to a reasonable belief in lightning danger is not penalized. However, the player must report to the Committee as soon as practicable. If the Committee determines the belief was not reasonable, the player could be penalized for unreasonable delay, though good judgment should be applied.",
    tags: ["stopping play", "lightning", "reasonable belief", "committee discretion"],
  },
  {
    id: "b7_036",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "It starts raining heavily during your round. No suspension signal has been given. Can you stop playing and leave the course?",
    choices: [
      "No — unless you believe there is danger from lightning, you cannot stop on your own just because of heavy rain",
      "Yes — heavy rain is always grounds for stopping",
      "Yes — any adverse weather allows you to stop",
      "Only if your group unanimously agrees to stop",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "Under Rule 5.7a, a player may only stop play on their own initiative if they reasonably believe there is danger from lightning. Heavy rain alone, no matter how uncomfortable, is not sufficient reason to stop without Committee authorization. Stopping for rain alone constitutes unreasonable delay.",
    tags: ["stopping play", "rain", "lightning", "unauthorized stop"],
  },
  {
    id: "b7_037",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You stopped play because of lightning danger (no Committee signal was given). When can you resume playing?",
    choices: [
      "You must not resume play until the Committee orders play to resume or you reasonably determine the lightning danger has passed",
      "You can resume whenever you personally feel safe",
      "You must wait exactly 30 minutes after the last thunder",
      "You cannot resume until the Committee gives the all-clear signal",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "When a player stops on their own initiative due to lightning danger, the player must report to the Committee as soon as practicable. The player must not resume play until the Committee orders resumption or the player reasonably determines the danger has passed.",
    tags: ["resuming play", "lightning", "player-initiated stop", "committee"],
  },

  // --- Rule 5 — Miscellaneous Edge Cases ---

  {
    id: "b7_038",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "During a suspension for a dangerous situation, a player goes to the practice putting green and hits a few putts. Is this allowed?",
    choices: [
      "No — during a suspension for a dangerous situation, the player must not practise on the course (it wouldn't be safe anyway)",
      "Yes — practice during suspension is always allowed",
      "Only putting practice is allowed during a dangerous suspension",
      "Yes, but only for the first 10 minutes of the suspension",
    ],
    correct: 0,
    rule: "Rule 5.5b, Rule 5.7a",
    explanation:
      "When play is suspended for a dangerous situation, players should leave the course promptly for safety. Remaining on the course to practise during a dangerous-situation suspension would conflict with the purpose of the suspension and could result in penalty.",
    tags: ["practice", "dangerous situation", "suspension", "safety"],
  },
  {
    id: "b7_039",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Your ball is on the putting green when play is suspended. You mark and lift it. When play resumes, you notice an animal has made a scrape where your ball was. What do you do?",
    choices: [
      "Repair the damage and replace the ball on its original spot",
      "Place the ball on the nearest undamaged spot on the green",
      "Drop the ball as near as possible to the original spot",
      "Play the ball from the damaged spot without repairing it",
    ],
    correct: 0,
    rule: "Rule 5.7d, Rule 13.1c",
    explanation:
      "Under Rule 5.7d, the ball must be replaced on its original spot when play resumes. Under Rule 13.1c, damage on the putting green may be repaired at any time (including animal damage). The player should repair the damage and then replace the ball.",
    tags: ["resuming play", "putting green", "damage repair", "animal damage"],
  },

  // --- More Rule 5.2 Edge Cases ---

  {
    id: "b7_040",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, between holes, you hit a full wedge shot from the fairway of the hole you just completed toward the green. The shot is clearly not 'putting or chipping on or near the putting green.' What is the penalty?",
    choices: [
      "The general penalty (two strokes), applied to the next hole",
      "One-stroke penalty",
      "No penalty — any practice between holes is fine",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "Between holes in stroke play, practice is limited to putting or chipping on or near the putting green of the hole just completed, any practice green, or the next teeing area. A full wedge shot from the fairway exceeds what is permitted, resulting in the general penalty applied to the next hole.",
    tags: ["practice between holes", "stroke play", "full shot", "general penalty"],
  },
  {
    id: "b7_041",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You are at the putting green of the hole you just completed and practise a few chip shots. This causes a delay to the group behind you. What might happen?",
    choices: [
      "Even though the practice itself is allowed, you could be penalized for unreasonable delay of play",
      "No penalty — practice between holes cannot result in a penalty",
      "The practice shots are void and don't count",
      "The group behind can play through, but no penalty applies",
    ],
    correct: 0,
    rule: "Rule 5.5b, Rule 5.6a",
    explanation:
      "While putting or chipping practice on or near the green just completed is allowed between holes in stroke play, Rule 5.5b states it must 'not unreasonably delay play.' If it causes delay, the player may be penalized under Rule 5.6a for unreasonable delay.",
    tags: ["practice between holes", "unreasonable delay", "pace of play"],
  },

  // --- Rule 5.3 Additional Edge Cases ---

  {
    id: "b7_042",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you arrive at the first tee 2 minutes late but realize you left your driver in your car. You are 'ready to play' with 13 clubs. Does the 5-minute late arrival rule still apply?",
    choices: [
      "Yes — you are ready to play with the clubs you have; you get the general penalty for being late but are not disqualified",
      "No — you cannot start without a full set of clubs",
      "You are disqualified for not being properly equipped",
      "No penalty — the tee time clock doesn't start until you have all your equipment",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "The 5-minute rule requires you to be 'ready to play' at the starting point. Being ready to play means being present and able to start, not that you have every club. You would receive the general penalty for late arrival but could play with whatever clubs you have.",
    tags: ["late start", "5-minute rule", "ready to play", "equipment"],
  },
  {
    id: "b7_043",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In a stroke play event, a player's start time is 8:00 AM. She is at the tee at 7:55 but steps away to use the restroom. She returns at 8:04, missing her group's start. She is ready to play within 5 minutes. What is the ruling?",
    choices: [
      "General penalty (two strokes) applied to the first hole — she was not ready to play at the starting time but was within 5 minutes",
      "No penalty — she arrived before her start time originally",
      "Disqualification — she was present but chose to leave",
      "One-stroke penalty since she was originally on time",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "The requirement is to be ready to play at the starting point at the starting time. Even though she arrived early, she was not ready to play when the start time arrived. Since she returned within 5 minutes, the penalty is the general penalty rather than disqualification.",
    tags: ["late start", "5-minute rule", "ready to play", "starting time"],
  },

  // --- Rule 5.6 Additional ---

  {
    id: "b7_044",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "A player in stroke play receives a one-stroke penalty for the first breach of unreasonable delay on hole 5. On hole 12, she is again penalized for unreasonable delay. What is the penalty for this second breach?",
    choices: [
      "The general penalty (two strokes)",
      "One additional penalty stroke (total of two penalty strokes across the round)",
      "Disqualification",
      "A warning — the second breach is penalized the same as the first",
    ],
    correct: 0,
    rule: "Rule 5.6a",
    explanation:
      "The penalty structure under Rule 5.6a is progressive within the same round: first breach = one penalty stroke, second breach = general penalty (two strokes in stroke play), third breach = disqualification. So the second breach on hole 12 costs two strokes.",
    tags: ["unreasonable delay", "progressive penalty", "second breach"],
  },

  // --- More Rule 5.7 ---

  {
    id: "b7_045",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "The Committee suspends play. You are between holes. Where do you mark your ball position?",
    choices: [
      "Your ball has already been holed — there is nothing to mark. You simply note which hole you will start next",
      "You must mark the spot on the green where you finished",
      "You mark the closest tee box",
      "You must leave your ball on the course wherever it happens to be",
    ],
    correct: 0,
    rule: "Rule 5.7d",
    explanation:
      "If you are between holes when play is suspended, you have already completed the previous hole and your ball has been holed. There is no ball on the course to mark. When play resumes, you simply go to the next teeing area.",
    tags: ["suspension", "between holes", "marking ball", "resuming play"],
  },
  {
    id: "b7_046",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "During a suspension, you lift your ball from the general area but forget to mark its position first. What happens when play resumes?",
    choices: [
      "You get one penalty stroke for lifting without marking, and must replace the ball on its original estimated spot",
      "No penalty — it doesn't matter during a suspension",
      "Two-stroke penalty and you must play from where you lifted it",
      "You must re-drop the ball from shoulder height at the estimated spot",
    ],
    correct: 0,
    rule: "Rule 5.7d, Rule 14.1",
    explanation:
      "Under Rule 14.1, before lifting a ball that must be replaced, the player must mark the spot. Failing to mark before lifting results in one penalty stroke. The ball must still be replaced on its original spot (using best estimate if the exact spot is not known).",
    tags: ["lifting ball", "marking", "suspension", "penalty"],
  },

  // --- More Rule 5 Edge Cases ---

  {
    id: "b7_047",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, your group finishes hole 9 and the Committee has set up a refreshment station. You spend 12 minutes eating and socializing. Is this unreasonable delay?",
    choices: [
      "No — a reasonable delay at a Committee-provided refreshment station between holes 9 and 10 is acceptable",
      "Yes — any stop longer than 5 minutes is unreasonable delay",
      "Only if the Committee specifically announced time limits",
      "It's only allowed in match play, not stroke play",
    ],
    correct: 0,
    rule: "Rule 5.6a",
    explanation:
      "When the Committee provides a refreshment station (commonly at the turn), players are expected to use it. A reasonable stop at such a facility is not considered unreasonable delay. However, excessively long delays beyond what is reasonable could still be penalized.",
    tags: ["unreasonable delay", "refreshment station", "turn", "committee"],
  },
  {
    id: "b7_048",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In match play, your opponent wants to stop the match after 14 holes due to rain, with no Committee suspension. You want to continue. What happens?",
    choices: [
      "Play must continue — a player cannot stop play on their own except for danger from lightning; the opponent would be subject to penalty for unreasonable delay if they refuse to play",
      "The match is suspended and resumes later",
      "Since it's match play, either player can demand a stoppage",
      "The match is conceded to the player who wants to continue",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "In match play, players cannot agree to stop play unless there is a dangerous situation (lightning) or the Committee suspends play. A player who refuses to continue playing without a valid reason is subject to penalty for unreasonable delay. Rain alone is not sufficient reason to stop.",
    tags: ["match play", "stopping play", "rain", "unreasonable delay"],
  },
  {
    id: "b7_049",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, both you and your opponent agree to stop play for the day and resume the next morning, without Committee authorization. What is the result?",
    choices: [
      "Both players are subject to penalty — players in match play cannot agree to stop play unless the Committee authorizes it or there is a dangerous situation",
      "No penalty — match play players can stop by mutual agreement",
      "Only the player who first suggested stopping is penalized",
      "The match is automatically awarded to the higher-ranked player",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "In match play, players must not agree to stop play unless the Committee authorizes it or there is danger from lightning. If both players agree to stop without authorization, they could both be disqualified if the Committee determines it was an unauthorized stoppage.",
    tags: ["match play", "stopping play", "mutual agreement", "unauthorized"],
  },
  {
    id: "b7_050",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "The Committee sounds the signal to resume play after a non-dangerous suspension. How much time do you have to resume play?",
    choices: [
      "You must resume play without unreasonable delay — there is no fixed time limit in the Rules, but the Committee's pace of play policy may specify",
      "Exactly 5 minutes from the signal",
      "10 minutes to reach your ball position",
      "15 minutes — the standard resumption window",
    ],
    correct: 0,
    rule: "Rule 5.7c",
    explanation:
      "When the Committee resumes play, players must resume without unreasonable delay. The Rules do not specify an exact number of minutes; however, the Committee may establish a pace of play policy or specific resumption time window. Failure to resume promptly could be penalized under Rule 5.6a.",
    tags: ["resuming play", "committee signal", "pace of play", "suspension"],
  },

  // ===== RULE 6: PLAYING A HOLE =====

  // --- Rule 6.1: Starting Play of a Hole ---

  {
    id: "b7_051",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "When does 'play of a hole' officially begin?",
    choices: [
      "When you make a stroke to start the hole from the teeing area",
      "When you place your ball on a tee in the teeing area",
      "When you step onto the teeing area",
      "When the previous group clears the fairway",
    ],
    correct: 0,
    rule: "Rule 6.1a",
    explanation:
      "Under Rule 6.1a, a player starts a hole by making a stroke to begin the hole. Simply placing the ball on a tee or stepping onto the teeing area does not start the hole — only making an actual stroke does.",
    tags: ["starting hole", "first stroke", "teeing area"],
  },

  // --- Rule 6.2: Playing Ball from Teeing Area ---

  {
    id: "b7_052",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You tee your ball one inch in front of the tee markers. What is the ruling?",
    choices: [
      "The ball is outside the teeing area — if you make a stroke, it's playing from outside the teeing area",
      "No penalty — one inch is close enough",
      "One-stroke penalty but the stroke counts",
      "The ball must be within one club-length in front of the markers",
    ],
    correct: 0,
    rule: "Rule 6.2b",
    explanation:
      "The teeing area is defined as a rectangle two club-lengths deep, with the front edge defined by the line between the forward-most points of the two tee markers. The ball must be behind this front edge. Teeing the ball even slightly in front of the markers means the ball is outside the teeing area.",
    tags: ["teeing area", "tee markers", "outside teeing area"],
  },
  {
    id: "b7_053",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "How deep is the teeing area behind the tee markers?",
    choices: [
      "Two club-lengths behind the front edge defined by the tee markers",
      "One club-length behind the tee markers",
      "Three club-lengths behind the tee markers",
      "The depth varies by competition",
    ],
    correct: 0,
    rule: "Rule 6.2a",
    explanation:
      "The teeing area is a rectangle two club-lengths deep. The front edge is defined by the line between the forward-most points of the two tee markers, and it extends back two club-lengths from that line. Any club in the player's bag can be used to measure.",
    tags: ["teeing area", "dimensions", "two club-lengths"],
  },
  {
    id: "b7_054",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You want to tee your ball outside the tee markers to get a better angle. Your feet are outside the teeing area but the ball is within it. Is this allowed?",
    choices: [
      "Yes — the ball must be within the teeing area, but you can stand anywhere, including outside the teeing area",
      "No — both your feet and the ball must be within the teeing area",
      "Only one foot can be outside the teeing area",
      "No — you must stand between the tee markers",
    ],
    correct: 0,
    rule: "Rule 6.2b",
    explanation:
      "The teeing area restriction applies to where the ball is teed, not where the player stands. A player may stand outside the teeing area to make a stroke at a ball that is within the teeing area. This can be useful to create a better angle on certain holes.",
    tags: ["teeing area", "stance", "feet outside", "tee shot"],
  },
  {
    id: "b7_055",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you tee up and hit your drive, then realize you played from outside the teeing area (your ball was slightly in front of the markers). What must you do?",
    choices: [
      "You must correct the mistake by playing a ball from within the teeing area with a two-stroke penalty — the stroke from outside doesn't count",
      "Play the ball as it lies with a one-stroke penalty",
      "Re-tee from the correct spot with no additional penalty",
      "The stroke counts and you add two penalty strokes to your score",
    ],
    correct: 0,
    rule: "Rule 6.1b(2)",
    explanation:
      "In stroke play, if you play from outside the teeing area, you get the general penalty (two strokes) and must correct the mistake by playing from within the teeing area. The stroke made from outside the teeing area and any subsequent strokes before correction do not count.",
    tags: ["outside teeing area", "stroke play", "correction", "general penalty"],
  },
  {
    id: "b7_056",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you play from outside the teeing area, hit a great drive down the middle, and then play your approach shot. Before putting, you realize your tee shot was from outside the teeing area. What is the ruling?",
    choices: [
      "You must go back to the teeing area, play from within it with a two-stroke penalty, and the original tee shot and approach shot do not count",
      "Since you already played multiple strokes, the error is too late to correct — play on with a two-stroke penalty",
      "Disqualification for not correcting immediately",
      "The approach shot counts but the tee shot doesn't, so you are hitting 4 from the fairway",
    ],
    correct: 0,
    rule: "Rule 6.1b(2)",
    explanation:
      "In stroke play, you must correct the mistake before making a stroke on the next teeing area (or before returning your scorecard on the final hole). The strokes from outside the teeing area and any additional strokes played before correction don't count. You go back and play from the teeing area, counting the general penalty.",
    tags: ["outside teeing area", "correction", "stroke play", "multiple strokes"],
  },
  {
    id: "b7_057",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, you play from outside the teeing area on hole 7. You don't realize the mistake and play your tee shot on hole 8 before correcting. What is the ruling?",
    choices: [
      "Disqualification — you failed to correct the mistake before making a stroke to start the next hole",
      "Two-stroke penalty on hole 7 but play continues normally",
      "You must go back and replay hole 7 entirely",
      "Four-stroke penalty (two for each hole affected)",
    ],
    correct: 0,
    rule: "Rule 6.1b(2)",
    explanation:
      "If a player makes a stroke from outside the teeing area and does not correct the mistake before making a stroke to begin another hole (or before returning the scorecard for the final hole), the player is disqualified.",
    tags: ["outside teeing area", "failure to correct", "disqualification", "stroke play"],
  },
  {
    id: "b7_058",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, you play from outside the teeing area. Your opponent may:",
    choices: [
      "Cancel the stroke and require you to play again from within the teeing area, with no penalty — but the opponent must do so promptly",
      "Assess a one-stroke penalty",
      "Claim the hole immediately",
      "Do nothing — playing from outside the teeing area is not penalized in match play",
    ],
    correct: 0,
    rule: "Rule 6.1b(1)",
    explanation:
      "In match play, if a player plays from outside the teeing area, there is no penalty, but the opponent may cancel the stroke. The cancellation must be done promptly — before either player makes another stroke. If cancelled, the player must play from within the teeing area.",
    tags: ["outside teeing area", "match play", "cancellation", "opponent's right"],
  },
  {
    id: "b7_059",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You swing at your ball on the tee and miss completely (whiff). The ball stays on the tee. What is the ruling?",
    choices: [
      "It counts as a stroke — your ball is now in play on the tee. You may play it as it lies from the tee",
      "It doesn't count — you get a free mulligan on the tee",
      "One-stroke penalty and you must re-tee",
      "It only counts if someone in your group saw it",
    ],
    correct: 0,
    rule: "Rule 6.2b, Definition of Stroke",
    explanation:
      "A stroke is the forward movement of the club made to strike the ball. Even if you miss, it counts as a stroke because you intended to hit the ball. The ball is now in play. Since the ball didn't move from the teeing area, you may play it as it lies, and you are still within the teeing area, so you may even re-tee it.",
    tags: ["whiff", "missed stroke", "ball in play", "teeing area"],
  },
  {
    id: "b7_060",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You address your ball on the tee and it falls off the tee before you make a stroke. Does this count as a stroke?",
    choices: [
      "No — the ball was not in play yet, and you did not make a stroke. Re-tee the ball without penalty",
      "Yes — it counts as a stroke because the ball moved",
      "One-stroke penalty for causing the ball to move",
      "No penalty, but you must play the ball from where it came to rest on the ground",
    ],
    correct: 0,
    rule: "Rule 6.2b(5)",
    explanation:
      "A ball on a tee in the teeing area is not yet 'in play' until a stroke is made at it. If the ball falls off the tee or is knocked off accidentally before a stroke is made, it is not in play and may be re-teed without penalty anywhere in the teeing area.",
    tags: ["ball falls off tee", "not in play", "re-tee", "teeing area"],
  },
  {
    id: "b7_061",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "After your tee shot on a par 3 goes into a penalty area, you decide to re-tee under penalty relief. Can you tee the ball up again?",
    choices: [
      "Yes — whenever you play from the teeing area, you may tee the ball, even when replaying under a penalty",
      "No — you can only tee the ball on your original stroke from the tee",
      "Yes, but only if it's a par 3",
      "No — relief drops must be dropped, not teed",
    ],
    correct: 0,
    rule: "Rule 6.2b",
    explanation:
      "Under Rule 6.2b, whenever a player plays a ball from the teeing area under any Rule (including stroke-and-distance relief), the ball may be teed or played from the ground. The ball may be teed anywhere within the teeing area.",
    tags: ["re-teeing", "penalty relief", "stroke and distance", "teeing area"],
  },
  {
    id: "b7_062",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You tee your ball up but it's balanced on a broken tee stuck in the ground, not a proper tee. Is this allowed?",
    choices: [
      "No — the ball may only be played from a tee that meets the equipment rules, from the ground, or from a conforming tee",
      "Yes — a broken tee is still a tee",
      "Only if the broken tee is less than 4 inches tall",
      "Yes — any object can be used as a tee",
    ],
    correct: 0,
    rule: "Rule 6.2b",
    explanation:
      "Under Rule 6.2b, a player playing from the teeing area must play the ball from a conforming tee or from the ground. A tee must meet the Equipment Rules specifications — it must be no longer than 4 inches (101.6 mm), designed to hold the ball, and not influence the movement of the ball. A broken tee fragment stuck in the ground is generally acceptable if it meets these criteria, but an improvised object would not be.",
    tags: ["teeing area", "tee", "equipment rules", "conforming tee"],
  },
  {
    id: "b7_063",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "You move one of the tee markers before playing your tee shot to improve your line of play. What is the penalty?",
    choices: [
      "The general penalty (two strokes / loss of hole) — tee markers are treated as movable obstructions only before the first stroke is made, but moving them to improve conditions is not allowed",
      "No penalty — tee markers can always be moved",
      "Disqualification",
      "One-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 6.2b(4), Rule 8.1a",
    explanation:
      "Tee markers are treated as obstructions when playing from the teeing area. However, under Rule 8.1a(1), a player must not improve the conditions affecting the stroke by moving or bending anything growing or fixed (which includes tee markers that the Committee has fixed in position). Moving a tee marker to improve your line results in the general penalty.",
    tags: ["tee markers", "improving conditions", "general penalty", "obstruction"],
  },

  // --- Rule 6.3: Ball Used in Play of Hole ---

  {
    id: "b7_064",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You start a hole with a Titleist Pro V1 but after a bad drive, you switch to a Callaway ball for your second shot from the tee (stroke-and-distance). Is this allowed?",
    choices: [
      "Yes — you may substitute another ball whenever you take stroke-and-distance relief or other relief that allows substitution",
      "No — you must use the same brand and model for the entire hole",
      "Only if your original ball is lost",
      "No — you must use the same ball for the entire round",
    ],
    correct: 0,
    rule: "Rule 6.3a",
    explanation:
      "Under Rule 6.3a, a player may substitute another ball each time the player takes relief under a Rule (including stroke-and-distance relief), unless the Rule specifically requires using the original ball (e.g., taking free relief under certain conditions). There is no 'one-ball rule' in the standard Rules.",
    tags: ["substitution", "ball change", "stroke and distance", "relief"],
  },
  {
    id: "b7_065",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "A Committee has adopted the 'One Ball Rule' Local Rule. You start the round with a Titleist Pro V1x and your ball goes into a penalty area. You want to use a Titleist AVX for your next shot. Is this allowed?",
    choices: [
      "No — the One Ball Rule requires you to use the same brand and model of ball throughout the round",
      "Yes — you can always switch ball models between holes or after taking relief",
      "Yes — the One Ball Rule only applies to the same hole, not the entire round",
      "Only if the original ball is unrecoverable",
    ],
    correct: 0,
    rule: "Rule 6.3a, Model Local Rule G-4",
    explanation:
      "When the Committee adopts Model Local Rule G-4 (One Ball Rule), the player must play with the same brand and model of golf ball throughout the round. Playing a different model results in the general penalty for each hole where a breach occurred, with disqualification after the third hole.",
    tags: ["one ball rule", "local rule", "substitution", "ball model"],
  },
  {
    id: "b7_066",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During play of a hole, your ball develops a cut after hitting a cart path. Can you change to a new ball?",
    choices: [
      "You may only substitute if the ball is cut or cracked — you must first announce to your marker, mark the ball, and lift it to inspect; if it is visibly cut or cracked, you may substitute",
      "Yes — switch balls whenever you want during a hole",
      "No — you must play the same ball until the hole is finished",
      "Only if the cut affects the ball's flight, as determined by an official",
    ],
    correct: 0,
    rule: "Rule 4.2c",
    explanation:
      "Under Rule 4.2c, if a player reasonably believes the ball has become cut or cracked during play of a hole, the player may lift the ball to check (after announcing to the marker and marking the spot). If it is indeed cut or cracked, the player may substitute another ball. Minor scuffs or scrapes are not cuts or cracks.",
    tags: ["damaged ball", "cut ball", "substitution", "inspection"],
  },
  {
    id: "b7_067",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "You lift your ball to check if it's cut, but you do not announce your intention to your marker or fellow-competitor beforehand. The ball is cut. What happens?",
    choices: [
      "One penalty stroke for lifting without following the required procedure, but you may still substitute since the ball is actually cut",
      "No penalty — the ball was legitimately cut",
      "Two-stroke penalty and you must replace the original ball",
      "Disqualification for improper procedure",
    ],
    correct: 0,
    rule: "Rule 4.2c",
    explanation:
      "Under Rule 4.2c, before lifting the ball to inspect it, the player must announce the intention to the marker or fellow-competitor and mark the ball's position. Failing to follow this procedure results in one penalty stroke, even if the ball turns out to actually be cut.",
    tags: ["damaged ball", "procedure", "announcement", "penalty"],
  },

  // --- Rule 6.4: Order of Play ---

  {
    id: "b7_068",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "On the first tee, how is the order of play (honor) determined?",
    choices: [
      "The order set by the Committee (draw or handicap); if none, by agreement or random method like flipping a tee",
      "The player with the lowest handicap always goes first",
      "Alphabetical order by last name",
      "The oldest player in the group goes first",
    ],
    correct: 0,
    rule: "Rule 6.4a",
    explanation:
      "Under Rule 6.4a, the order of play on the first teeing area is set by the Committee's draw. If there is no draw, the order is decided by agreement among the players or by a random method (such as tossing a tee).",
    tags: ["order of play", "honor", "first tee", "draw"],
  },
  {
    id: "b7_069",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Who has the 'honor' (plays first from the tee) on the second hole?",
    choices: [
      "The player with the lowest gross score on the previous hole",
      "The player who played first on the previous hole",
      "The player with the lowest net score on the previous hole",
      "The order rotates regardless of scores",
    ],
    correct: 0,
    rule: "Rule 6.4a(1)",
    explanation:
      "Under Rule 6.4a, after the first hole, the player with the lowest gross score on the previous hole has the honor. If scores are tied, the honor stays in the same order as on the previous teeing area. In handicap competitions, the Committee may adopt a Local Rule using net score.",
    tags: ["honor", "order of play", "lowest score", "teeing area"],
  },
  {
    id: "b7_070",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, you play out of turn. Your opponent has the right to:",
    choices: [
      "Cancel your stroke without penalty and require you to replay in the correct order",
      "Assess a one-stroke penalty against you",
      "Claim the hole",
      "Do nothing — playing out of turn has no consequence in match play",
    ],
    correct: 0,
    rule: "Rule 6.4a(2)",
    explanation:
      "In match play, if a player plays out of turn, there is no penalty, but the opponent may cancel the stroke. This must be done promptly — before either player makes another stroke. If cancelled, the player must play in the correct order.",
    tags: ["out of turn", "match play", "cancellation", "opponent's right"],
  },
  {
    id: "b7_071",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In stroke play, you play out of turn (your ball is closer to the hole than your fellow competitor's). What is the penalty?",
    choices: [
      "No penalty — there is no penalty for playing out of turn in stroke play",
      "Two-stroke penalty",
      "One-stroke penalty",
      "You must replay the shot in the correct order",
    ],
    correct: 0,
    rule: "Rule 6.4b",
    explanation:
      "In stroke play, there is no penalty for playing out of turn. In fact, the Rules encourage 'ready golf' — playing when you are ready rather than strictly adhering to the order of play — to help pace of play.",
    tags: ["out of turn", "stroke play", "no penalty", "ready golf"],
  },
  {
    id: "b7_072",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, two players agree that one will play out of turn to give the other an advantage (e.g., to see how the putt breaks). What is the ruling?",
    choices: [
      "Both players get the general penalty (two strokes) — agreeing to play out of turn to give one of them an advantage is prohibited",
      "No penalty — out of turn play is always fine in stroke play",
      "Only the player who benefits is penalized",
      "Disqualification for both players",
    ],
    correct: 0,
    rule: "Rule 6.4b",
    explanation:
      "While there is no penalty for playing out of turn in stroke play, Rule 6.4b specifically prohibits two or more players from agreeing to play out of turn to give one of them an advantage. If they do, each player involved gets the general penalty (two strokes).",
    tags: ["out of turn", "stroke play", "agreement", "advantage", "general penalty"],
  },
  {
    id: "b7_073",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In match play, your opponent plays out of turn. You decide not to cancel the stroke. Can you change your mind after seeing where the ball lands?",
    choices: [
      "No — the cancellation must be done promptly, before either player makes another stroke. Once the stroke has been accepted (or another stroke made), it cannot be cancelled",
      "Yes — you can cancel at any time before the hole is completed",
      "Yes — you have until the next tee to decide",
      "Yes — but only if the ball ended up in a favorable position",
    ],
    correct: 0,
    rule: "Rule 6.4a(2)",
    explanation:
      "In match play, the right to cancel a stroke played out of turn must be exercised promptly. If the opponent does not cancel promptly — and particularly after either player makes another stroke — the right to cancel is lost and the stroke stands.",
    tags: ["out of turn", "match play", "cancellation timing", "promptly"],
  },
  {
    id: "b7_074",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "What is 'ready golf' and when does it apply?",
    choices: [
      "It's the recommended practice in stroke play where players play when they are ready rather than following strict order of play, to maintain pace of play",
      "A rule requiring each shot to be taken within 40 seconds",
      "A format where the first player ready on the tee plays first on every hole",
      "A Committee-mandated playing speed for professional events only",
    ],
    correct: 0,
    rule: "Rule 6.4b",
    explanation:
      "The Rules of Golf encourage 'ready golf' in stroke play, where players play when they are ready, in a safe and responsible way, rather than waiting for strict order of play. This helps maintain pace of play. It does not apply in match play, where order of play matters because the opponent can cancel a stroke played out of turn.",
    tags: ["ready golf", "pace of play", "stroke play", "order of play"],
  },
  {
    id: "b7_075",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In match play, after both players tee off, it's unclear whose ball is farther from the hole. You play your approach shot. Your opponent says you played out of turn and wants to cancel your stroke. Is the opponent correct?",
    choices: [
      "If the distances are truly close and it was unclear who was away, there is no playing out of turn — the Rules acknowledge reasonable estimation",
      "Yes — the opponent is always entitled to cancel if there is any question",
      "No — order of play only applies on the tee",
      "The opponent must prove it with a measurement before cancelling",
    ],
    correct: 0,
    rule: "Rule 6.4a",
    explanation:
      "Under Rule 6.4a, if the balls are approximately equidistant, or the distances are unknown, the order can be decided by agreement or random method. If the player played when it was genuinely unclear whose turn it was, no out-of-turn stroke occurred. The opponent's right to cancel applies only when the player clearly played out of the correct order.",
    tags: ["out of turn", "match play", "equidistant", "unclear distance"],
  },

  // --- Rule 6.5: Completing Play of a Hole ---

  {
    id: "b7_076",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "When is the ball considered 'holed'?",
    choices: [
      "When the ball is at rest within the hole and the entire ball is below the surface of the putting green",
      "When any part of the ball breaks the plane of the hole",
      "When the ball touches the bottom of the cup",
      "When the flagstick stops the ball inside the hole",
    ],
    correct: 0,
    rule: "Rule 6.5, Definition of Holed",
    explanation:
      "A ball is 'holed' when it is at rest within the hole and the entire ball is below the surface of the putting green. If any part of the ball is above the surface, it is not holed (even if most of the ball is below the surface). If the flagstick prevents the ball from resting below the surface, it is not holed.",
    tags: ["holed", "definition", "below surface", "putting green"],
  },
  {
    id: "b7_077",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Your ball is resting against the flagstick inside the hole, but part of the ball is above the surface of the green. Is the ball holed?",
    choices: [
      "No — the entire ball must be below the surface; you may remove the flagstick, and if the ball falls in, it is holed",
      "Yes — if the ball is inside the hole, it is always holed",
      "Yes — if the ball is touching the flagstick inside the hole, it counts",
      "No — you must push the ball down with your putter",
    ],
    correct: 0,
    rule: "Rule 13.2a(2)",
    explanation:
      "If the ball rests against the flagstick in the hole but is not below the surface, the player may remove or move the flagstick. If the ball then falls to the bottom of the hole, it is holed. If the ball moves away from the hole, it must be placed on the lip of the hole and holed from there.",
    tags: ["holed", "flagstick", "above surface", "removing flagstick"],
  },
  {
    id: "b7_078",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Your putt stops right on the edge of the hole, hanging over the lip. How long can you wait to see if it falls in?",
    choices: [
      "You are allowed a reasonable time to reach the hole, plus 10 seconds. If it falls in during that time, it counts as holed with your last stroke. After 10 seconds, it counts as at rest",
      "You can wait as long as you want",
      "30 seconds from your last stroke",
      "5 seconds after you reach the hole",
    ],
    correct: 0,
    rule: "Rule 13.3a",
    explanation:
      "Under Rule 13.3a, when any part of a ball overhangs the lip of the hole, the player is allowed a reasonable time to reach the hole and then 10 additional seconds to wait. If the ball falls in within that time, it is holed with the last stroke. If it falls in after the 10 seconds, it is holed but the player gets one penalty stroke added to the score for the hole.",
    tags: ["overhanging ball", "lip of hole", "10 seconds", "waiting time"],
  },
  {
    id: "b7_079",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Your ball is hanging over the lip of the hole. You walk up and wait. After 12 seconds, the ball falls in. What is your score?",
    choices: [
      "Your last stroke, plus one penalty stroke — the ball fell in after the 10-second waiting period",
      "It counts as holed with your last stroke — no penalty",
      "You must replace the ball on the lip and putt again",
      "Two penalty strokes are added",
    ],
    correct: 0,
    rule: "Rule 13.3a",
    explanation:
      "Under Rule 13.3a, after the reasonable time to reach the hole plus 10 seconds, the ball is deemed at rest. If it then falls in, the player is considered to have holed with the last stroke, but one penalty stroke is added. So your score is the last stroke count plus one.",
    tags: ["overhanging ball", "10-second rule", "penalty stroke", "holed after waiting"],
  },
  {
    id: "b7_080",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "Your ball is overhanging the lip and a gust of wind causes it to fall in after 8 seconds. You had already reached the hole. What is the ruling?",
    choices: [
      "The ball is holed with your last stroke — no penalty, since it fell in within the 10-second waiting period",
      "The ball must be replaced on the lip because wind caused it, not gravity",
      "One penalty stroke because wind is an outside influence",
      "The ball is holed but you add one stroke for the wind influence",
    ],
    correct: 0,
    rule: "Rule 13.3a",
    explanation:
      "Under Rule 13.3a, if the ball falls into the hole within the allotted time (reasonable time to walk up plus 10 seconds), it is holed with the last stroke, regardless of what caused it to fall (gravity, wind, vibration). The cause doesn't matter — only the timing.",
    tags: ["overhanging ball", "wind", "10-second rule", "holed"],
  },
  {
    id: "b7_081",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In stroke play, you are frustrated and pick up your ball on the 7th hole without holing out. You tee off on hole 8. What is the ruling?",
    choices: [
      "You are disqualified — in stroke play, you must hole out on every hole, and you failed to correct the error before teeing off on the next hole",
      "Two-stroke penalty on hole 7, but you can continue",
      "You must go back and finish hole 7 with a two-stroke penalty",
      "One-stroke penalty and your score is what it was when you picked up, plus the penalty",
    ],
    correct: 0,
    rule: "Rule 6.3c, Rule 3.3c",
    explanation:
      "In stroke play, a player must hole out on every hole. If a player picks up without holing out, they must correct the mistake before making a stroke on the next teeing area. Failure to do so results in disqualification. Once the player tees off on hole 8 without correcting, it is too late.",
    tags: ["failure to hole out", "stroke play", "pick up", "disqualification"],
  },
  {
    id: "b7_082",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you pick up your ball on hole 14 without holing out but realize your mistake before teeing off on hole 15. What should you do?",
    choices: [
      "Go back to hole 14, replace the ball on the spot where it was lifted, add a two-stroke penalty, and hole out",
      "You are disqualified — there is no way to correct this",
      "Add one penalty stroke and continue to hole 15",
      "Drop a ball on the green of hole 14 and hole out with no penalty",
    ],
    correct: 0,
    rule: "Rule 6.3c, Rule 3.3c",
    explanation:
      "In stroke play, if a player fails to hole out but has not yet made a stroke to begin the next hole, the player can correct the mistake by going back, replacing the ball, and holing out. The penalty is two strokes (the general penalty) added to the score for that hole.",
    tags: ["failure to hole out", "correction", "stroke play", "general penalty"],
  },
  {
    id: "b7_083",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In match play, your opponent concedes your 3-foot putt. Must you still putt?",
    choices: [
      "No — once a stroke, hole, or match is conceded in match play, it cannot be declined or withdrawn. The hole is automatically won",
      "You should still putt for practice",
      "You must still putt — concessions are not allowed in official matches",
      "The concession only counts if you accept it verbally",
    ],
    correct: 0,
    rule: "Rule 3.2b",
    explanation:
      "In match play, a concession is final once made. When your opponent concedes your putt (or the hole), the concession cannot be declined or withdrawn. You have won the hole (or the stroke is considered made), and you should not putt the ball.",
    tags: ["concession", "match play", "putt", "final"],
  },
  {
    id: "b7_084",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, your playing partner says 'that's good' when you have a 2-foot putt remaining. Can you pick up?",
    choices: [
      "No — concessions do not exist in stroke play. You must hole out on every hole or be disqualified",
      "Yes — your playing partner's concession is binding",
      "Yes — any putt within 3 feet can be conceded",
      "Only in a casual round, not competition",
    ],
    correct: 0,
    rule: "Rule 3.3c",
    explanation:
      "Concessions only exist in match play. In stroke play, there is no such thing as a concession. A player must hole out on every hole. If you pick up without holing out in stroke play and do not correct it before the next hole, you are disqualified.",
    tags: ["concession", "stroke play", "hole out", "disqualification"],
  },

  // --- Rule 6.2 Additional Edge Cases ---

  {
    id: "b7_085",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You tee your ball, take a practice swing that accidentally hits the ball off the tee, and it rolls forward 10 yards. What is the ruling?",
    choices: [
      "If you did not intend to hit the ball, it was not a stroke. The ball was not in play (still in the teeing area before a stroke was made). Re-tee the ball without penalty",
      "It counts as your first stroke — play the ball where it lies",
      "One-stroke penalty for accidentally hitting the ball",
      "Two-stroke penalty and you must re-tee",
    ],
    correct: 0,
    rule: "Rule 6.2b(5), Definition of Stroke",
    explanation:
      "A stroke requires the forward movement of the club made with the intention of striking the ball. A practice swing that accidentally contacts the ball is not a stroke because there was no intent to hit the ball. Since the ball was on a tee and not yet 'in play,' it may be re-teed anywhere in the teeing area without penalty.",
    tags: ["practice swing", "accidental contact", "tee", "not a stroke"],
  },
  {
    id: "b7_086",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "Your tee shot goes out of bounds. You go back to the tee and tee up a new ball. You must tee the ball within the teeing area, but the tee markers have been moved since you last teed off (a maintenance crew adjusted them). What do you do?",
    choices: [
      "Play from the teeing area as now defined by the repositioned tee markers — you must use the current position of the markers",
      "You are entitled to play from where the markers were originally positioned",
      "Report the issue to the Committee and stop play until resolved",
      "Drop a ball within two club-lengths of the old marker position",
    ],
    correct: 0,
    rule: "Rule 6.2a, Rule 6.2b",
    explanation:
      "The teeing area is defined by the current position of the tee markers. If the markers have been moved (whether by the Committee, maintenance, or otherwise), the player must play from the teeing area as currently defined. The player has no right to the previous marker positions.",
    tags: ["teeing area", "tee markers moved", "out of bounds", "replay"],
  },
  {
    id: "b7_087",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You are playing from the tee. Can you use your driver to push down a small bump of grass within the teeing area before teeing your ball?",
    choices: [
      "Yes — within the teeing area, you may improve the surface by pressing down or removing irregularities before teeing your ball",
      "No — you cannot alter the surface of the teeing area",
      "Only if you use your foot, not a club",
      "Only with a tee, not a club",
    ],
    correct: 0,
    rule: "Rule 6.2b(3)",
    explanation:
      "Under Rule 6.2b, when playing from the teeing area, a player may alter the surface of the teeing area to improve conditions for the stroke. This includes pushing down bumps, creating a depression for the ball, or removing sand or soil. This is one of the few times a player can improve conditions without restriction.",
    tags: ["teeing area", "improving surface", "allowed", "tee shot"],
  },

  // --- Rule 6.3 Additional Edge Cases ---

  {
    id: "b7_088",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During play of a hole, your ball strikes a sprinkler head and a piece of the cover breaks off, cutting your ball. You want to substitute a new ball. What is the correct procedure?",
    choices: [
      "Announce your intention to lift to another player, mark the spot, lift the ball, confirm the cut, and substitute a new ball on the original spot",
      "Just swap balls — no announcement needed",
      "Play the damaged ball to the end of the hole, then switch",
      "Call a Rules official to make the determination",
    ],
    correct: 0,
    rule: "Rule 4.2c",
    explanation:
      "Under Rule 4.2c, the player must: (1) announce to another player the intention to lift and check, (2) mark the ball's position, (3) lift and examine the ball (giving the other player a chance to observe), and (4) if the ball is cut or cracked, substitute a new ball on the original spot.",
    tags: ["damaged ball", "substitution procedure", "cut ball", "marking"],
  },
  {
    id: "b7_089",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "You substitute a ball during play of a hole even though no Rule permits substitution (e.g., you simply prefer a different ball). What is the penalty?",
    choices: [
      "The general penalty (two strokes / loss of hole) — wrong ball is not the issue, but improper substitution is penalized",
      "No penalty — you can switch balls anytime",
      "One-stroke penalty",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 6.3b",
    explanation:
      "Under Rule 6.3b, if a player substitutes another ball when not allowed by a Rule (wrong substitution), the player gets the general penalty. The player must continue with the substituted ball. This is different from playing a wrong ball, which has its own penalties.",
    tags: ["wrong substitution", "general penalty", "ball in play"],
  },

  // --- Rule 6.4 Additional ---

  {
    id: "b7_090",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In match play, you and your opponent both have putts of similar length. Your opponent asks you to putt first so she can watch the line. You agree. Is there an issue?",
    choices: [
      "No penalty if the player whose turn it is simply chooses not to exercise the right to play first — but if you agree to play out of turn specifically to give an advantage, you could be penalized",
      "Both players are disqualified",
      "Two-stroke penalty to both players",
      "No issue at all — order of play is irrelevant in match play",
    ],
    correct: 0,
    rule: "Rule 6.4a",
    explanation:
      "In match play, order of play matters, but the player who is 'away' may choose to play or allow the other to play first. However, the Rules do not have the same 'agreement to give advantage' restriction in match play that exists in stroke play. The opponent's request is simply a strategic part of match play, and the other player can choose to exercise their right or not.",
    tags: ["order of play", "match play", "putting line", "strategy"],
  },

  // --- Rule 6.5 Additional ---

  {
    id: "b7_091",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, your ball is lodged in the lip of the hole — half the ball is below the surface and half above. You wait 10 seconds, then tap it in. What is your score for that tap-in?",
    choices: [
      "The ball was not holed (not entirely below the surface), so you needed to make another stroke to hole it. Your score is the total strokes including the tap-in, with no penalty",
      "The ball was already holed — the tap-in doesn't count",
      "One penalty stroke for playing a holed ball",
      "Two penalty strokes for disturbing a ball at rest",
    ],
    correct: 0,
    rule: "Rule 6.5, Definition of Holed",
    explanation:
      "A ball is only 'holed' when the entire ball is below the surface of the putting green. If half the ball is above the surface, it is not holed, regardless of how long you wait. The tap-in is a legitimate stroke to complete the hole. No penalty applies.",
    tags: ["holed definition", "ball in lip", "below surface", "tap-in"],
  },
  {
    id: "b7_092",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you accidentally hole out with a wrong ball (a ball that is not yours). You then discover the error on the next tee. What is the ruling?",
    choices: [
      "You must correct the error: go back, find your original ball (or substitute), and hole out. You get a two-stroke penalty for playing a wrong ball. Strokes with the wrong ball don't count",
      "The score with the wrong ball counts — just add two penalty strokes",
      "Disqualification for holing out with the wrong ball",
      "One-stroke penalty and the hole score stands",
    ],
    correct: 0,
    rule: "Rule 6.3c, Rule 6.3b",
    explanation:
      "In stroke play, if you play a wrong ball, you get the general penalty (two strokes) and must correct the error by playing the correct ball. Strokes made with the wrong ball do not count in your score. You must correct before playing from the next tee or you are disqualified.",
    tags: ["wrong ball", "holing out", "correction", "general penalty"],
  },
  {
    id: "b7_093",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In match play, a player and opponent both complete a hole. They realize on the next tee that the player had played a wrong ball for his last two strokes (but the opponent played the correct ball). The opponent did not make a timely claim. What is the result of the hole?",
    choices: [
      "The result of the hole stands — in match play, a claim about a wrong ball must be made before either player makes a stroke on the next hole; since they have moved on, it is too late",
      "The player automatically loses the hole regardless of timing",
      "The hole must be replayed",
      "The opponent can make the claim at any point during the round",
    ],
    correct: 0,
    rule: "Rule 6.3c(1), Rule 20.1b(2)",
    explanation:
      "In match play, under Rule 20.1b, a claim about a wrong ball or similar breach must be made before either player makes a stroke to begin another hole. If the opponent does not make a timely claim and both players move on to the next hole, the result of the completed hole stands as played.",
    tags: ["wrong ball", "match play", "timely claim", "result stands"],
  },
];
