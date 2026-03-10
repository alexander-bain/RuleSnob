import { Scenario } from "@/types";

export const SCENARIOS_BATCH_8: Scenario[] = [
  // =====================================================================
  // PLAYING THE BALL (Rules 7–11) — 93 scenarios
  // Tier distribution: ~37 weekend, ~33 competitor, ~23 official
  // =====================================================================

  // ===================================================================
  // RULE 7 — Ball Search: Finding and Identifying Ball (~15 scenarios)
  // ===================================================================

  // --- Rule 7.1: How to Fairly Search for a Ball ---

  {
    id: "b8_001",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball lands in thick rough. How long do you have to search for your ball before it is considered lost?",
    choices: [
      "3 minutes from the time you or your caddie begin searching",
      "5 minutes from when the ball was last played",
      "3 minutes from when you arrive at the area where the ball is estimated to be",
      "There is no time limit as long as you are actively searching",
    ],
    correct: 0,
    rule: "Rule 18.2a(1)",
    explanation:
      "Under Rule 18.2a(1), a ball is lost if not found within 3 minutes after the player, the player's caddie, or the player's partner begins to search for it. The search time starts when searching begins, not when the shot was played.",
    tags: ["ball search", "3-minute rule", "lost ball"],
  },
  {
    id: "b8_002",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "While searching for your ball in tall grass, you accidentally step on it and push it into the ground. What is the ruling?",
    choices: [
      "No penalty; replace the ball on its original spot and recreate the original lie",
      "One-stroke penalty; replace the ball on its original spot",
      "No penalty; play the ball as it now lies",
      "One-stroke penalty; drop the ball within one club-length",
    ],
    correct: 0,
    rule: "Rule 7.4",
    explanation:
      "Under Rule 7.4, if a ball is accidentally moved during search, there is no penalty. The ball must be replaced on its original spot (estimated if not known exactly). If the ball was pushed into the ground, the original lie must be recreated as well.",
    tags: ["ball search", "accidentally moved", "no penalty", "replace ball"],
  },
  {
    id: "b8_003",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "While searching for your ball in heavy rough, you kick aside some long grass and move sand and soil to uncover it. Is this allowed?",
    choices: [
      "Yes — you may take reasonable actions to search for and find your ball",
      "No — you may not move any natural objects while searching",
      "Yes, but only if you return all material to its original position",
      "No — you must only search visually without disturbing anything",
    ],
    correct: 0,
    rule: "Rule 7.1a",
    explanation:
      "Under Rule 7.1a, the player may take reasonable actions to find and identify a ball, including moving sand, soil, and other natural or artificial things. However, if the lie is improved beyond what is reasonably necessary for search, the player may incur a penalty under Rule 8.1a.",
    tags: ["ball search", "reasonable actions", "moving objects"],
  },
  {
    id: "b8_004",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "While searching for your ball, you take reasonable actions but those actions improve the conditions affecting your stroke (for example, bending back tall grass). What happens?",
    choices: [
      "No penalty — the improvement is allowed when it results from actions reasonably taken to find the ball",
      "One-stroke penalty for improving conditions under Rule 8.1a",
      "Two-stroke penalty for improving conditions under Rule 8.1a",
      "No penalty, but you must restore the conditions before playing",
    ],
    correct: 0,
    rule: "Rule 7.1a",
    explanation:
      "Under Rule 7.1a, if conditions affecting the stroke are improved as a result of reasonable actions taken to find or identify a ball, there is no penalty. However, if the actions go beyond what is reasonable, a penalty under Rule 8.1a may apply.",
    tags: ["ball search", "improving conditions", "no penalty", "reasonable actions"],
  },
  {
    id: "b8_005",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball comes to rest in a shallow stream where water partially covers it. You reach into the water and move some pebbles and sediment to confirm it is your ball. Is this allowed?",
    choices: [
      "Yes — taking reasonable actions to find your ball in water is permitted under the search rules",
      "No — you may never touch anything in a penalty area while your ball is in the penalty area",
      "Yes, but only if you announced to your playing partners first",
      "No — you must treat the ball as lost if it is under water",
    ],
    correct: 0,
    rule: "Rule 7.1a",
    explanation:
      "Under Rule 7.1a, a player may take reasonable actions to find and identify a ball, including in a penalty area. Moving water, sand, or other natural material to search for a ball in water is a reasonable search action.",
    tags: ["ball search", "penalty area", "water", "identification"],
  },
  {
    id: "b8_006",
    category: "PLAYING_BALL",
    tier: "official",
    text: "Your 3-minute search time expires. Thirty seconds later, another player finds your ball. Can you play it?",
    choices: [
      "No — the ball became lost when the 3-minute search time expired, and this cannot be reversed",
      "Yes — the ball is found and you may play it with a one-stroke penalty for the delay",
      "Yes — the search clock restarts when a ball is found",
      "Only if you have not yet played a provisional ball",
    ],
    correct: 0,
    rule: "Rule 18.2a(1)",
    explanation:
      "Under Rule 18.2a(1), once the 3-minute search time has expired, the ball is lost. This cannot be reversed even if the ball is subsequently found. The player must proceed under stroke and distance (Rule 18.1).",
    tags: ["lost ball", "3-minute rule", "search time expired"],
  },

  // --- Rule 7.2: How to Identify Your Ball ---

  {
    id: "b8_007",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You find a ball in the rough that looks like yours. You can see part of the brand logo but not the number or your identifying mark. Can you pick it up to check?",
    choices: [
      "Yes, but you must first announce your intention to your marker or opponent and mark the spot before lifting",
      "Yes — you can always pick up a ball to identify it without any requirements",
      "No — you must play it as it lies or declare it lost",
      "Yes, but only if another player is present to witness the identification",
    ],
    correct: 0,
    rule: "Rule 7.3",
    explanation:
      "Under Rule 7.3, if a ball might be yours but cannot be identified as it lies, you may lift it to identify it. However, you must first mark its spot and must not clean the ball more than needed to identify it. You must also give your opponent (match play) or marker (stroke play) a reasonable opportunity to observe the lifting and replacing.",
    tags: ["ball identification", "lifting to identify", "mark spot"],
  },
  {
    id: "b8_008",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You find a ball that you believe is yours. You can see your identifying mark without lifting the ball. What is the proper procedure?",
    choices: [
      "The ball is identified — no need to lift it; play it as it lies",
      "You must still lift it to confirm the ball number",
      "You must announce to your marker that the ball is identified",
      "You must mark the ball and clean it before playing",
    ],
    correct: 0,
    rule: "Rule 7.2",
    explanation:
      "Under Rule 7.2, a ball is identified when it is your ball and you can confirm this by seeing your identifying mark, the ball number, brand, or other distinguishing feature. If you can identify it as it lies, there is no need to lift it.",
    tags: ["ball identification", "identifying mark", "play as it lies"],
  },
  {
    id: "b8_009",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You lift your ball to identify it without first marking the spot and without giving your opponent a chance to observe. You confirm it is your ball. What is the penalty?",
    choices: [
      "One-stroke penalty for failing to follow the proper procedure under Rule 7.3",
      "No penalty — you identified it correctly, which is what matters",
      "Two-stroke penalty for lifting without authority",
      "Loss of hole in match play; two strokes in stroke play",
    ],
    correct: 0,
    rule: "Rule 7.3",
    explanation:
      "Under Rule 7.3, if a player lifts the ball to identify it without first marking the spot, or without giving the opponent or marker a reasonable chance to observe, the player gets one penalty stroke — even though the ball was correctly identified.",
    tags: ["ball identification", "procedure violation", "one-stroke penalty"],
  },
  {
    id: "b8_010",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Two players in the same group both play the same brand and number of ball (e.g., both play a Titleist Pro V1 #3) and neither has a distinguishing mark. Their balls are found near each other in the rough, but they cannot tell whose is whose. What is the ruling?",
    choices: [
      "Both balls are lost — each player must proceed under stroke-and-distance penalty",
      "Each player plays the ball nearest to where they believe their ball would be",
      "They flip a coin to assign the balls",
      "Both balls are considered found; each plays the ball they choose with no penalty",
    ],
    correct: 0,
    rule: "Rule 7.2",
    explanation:
      "Under Rule 7.2, a player's ball can only be identified by confirming it is theirs — by seeing a distinguishing mark, number, brand, or condition. If neither player can identify which ball is theirs, neither ball is identified, and both are treated as lost. Both players must proceed under stroke and distance (Rule 18.1).",
    tags: ["ball identification", "indistinguishable balls", "lost ball", "stroke and distance"],
  },
  {
    id: "b8_011",
    category: "PLAYING_BALL",
    tier: "official",
    text: "You lift your ball to identify it under Rule 7.3 and, in the process, clean it thoroughly — removing all dirt and grass. Is this permitted?",
    choices: [
      "No — you may only clean the ball as needed to identify it (e.g., enough to see your mark), and cleaning it further results in a one-stroke penalty",
      "Yes — once you lift the ball you may clean it fully",
      "No — you may not clean the ball at all when lifting to identify",
      "Yes, but only if you are in the general area",
    ],
    correct: 0,
    rule: "Rule 7.3",
    explanation:
      "Under Rule 7.3, when lifting to identify, the player must not clean the ball more than needed to identify it (except on the putting green). If the player cleans the ball beyond what is needed for identification, they get one penalty stroke.",
    tags: ["ball identification", "cleaning ball", "lifting to identify", "penalty"],
  },

  // --- Rule 7.4: Ball Accidentally Moved During Search ---

  {
    id: "b8_012",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "While searching for your ball in a bush, you accidentally kick it and it rolls 10 feet away. What must you do?",
    choices: [
      "Replace the ball on its original spot with no penalty",
      "Play the ball from its new position with no penalty",
      "Replace the ball on its original spot with a one-stroke penalty",
      "Drop the ball within one club-length of the original spot",
    ],
    correct: 0,
    rule: "Rule 7.4",
    explanation:
      "Under Rule 7.4, if a player accidentally moves their ball while searching for it, the ball must be replaced on its original spot (estimated if not known exactly) with no penalty. This exception to Rule 9.4 specifically covers accidental movement during search.",
    tags: ["ball search", "accidentally moved", "no penalty", "replace ball"],
  },
  {
    id: "b8_013",
    category: "PLAYING_BALL",
    tier: "official",
    text: "Your caddie is searching for your ball and accidentally moves it. Under Rule 7.4, what is the ruling?",
    choices: [
      "No penalty; replace the ball on its original spot",
      "One-stroke penalty to you; replace the ball",
      "No penalty; play the ball from its new position",
      "Your caddie receives a warning; ball is played as it lies",
    ],
    correct: 0,
    rule: "Rule 7.4",
    explanation:
      "Under Rule 7.4, there is no penalty when anyone (including the player, the caddie, the opponent, or anyone else) accidentally moves the ball during search. The ball must be replaced on its original spot.",
    tags: ["ball search", "caddie", "accidentally moved", "no penalty"],
  },
  {
    id: "b8_014",
    category: "PLAYING_BALL",
    tier: "official",
    text: "While searching for your ball, your opponent accidentally moves it in match play. What is the ruling?",
    choices: [
      "No penalty to anyone; the ball must be replaced on its original spot",
      "One-stroke penalty to your opponent; the ball is replaced",
      "No penalty; you may choose to play from the new spot or replace it",
      "Your opponent loses the hole",
    ],
    correct: 0,
    rule: "Rule 7.4",
    explanation:
      "Under Rule 7.4, there is no penalty when anyone accidentally moves a ball during search — this applies to the player, the caddie, the opponent, or any other person. The ball must be replaced on its original estimated spot.",
    tags: ["ball search", "opponent", "match play", "no penalty", "replace ball"],
  },
  {
    id: "b8_015",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You search for your ball for 2 minutes, pause the search to walk back and play a provisional, then return and resume searching. How much search time remains?",
    choices: [
      "1 minute — the search time does not pause; only the actual time spent searching counts, but the clock does not stop when you walk away",
      "3 minutes — the clock restarts when you resume searching",
      "0 minutes — once you leave the search area, the ball is lost",
      "1 minute — the clock pauses while you play the provisional and resumes when you return",
    ],
    correct: 3,
    rule: "Rule 18.2a(1)",
    explanation:
      "Under Rule 18.2a(1), the search time is 3 minutes, and any time spent not actively searching (such as walking to play a provisional ball) does not count toward the search time. The clock effectively pauses during that time. So with 2 minutes of actual search time used, 1 minute of search time remains when the player returns.",
    tags: ["ball search", "3-minute rule", "provisional ball", "search time"],
  },

  // ===================================================================
  // RULE 8 — Course Played as It Is Found (~18 scenarios)
  // ===================================================================

  // --- Rule 8.1: Player's Actions That Improve Conditions ---

  {
    id: "b8_016",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is under a low-hanging tree branch that interferes with your backswing. Can you bend or break the branch to create room for your swing?",
    choices: [
      "No — bending or breaking growing things to improve the area of your intended swing is a penalty",
      "Yes — you may remove any interference from natural objects",
      "Yes, but only if the branch is dead",
      "No, unless the branch is a loose impediment lying on the ground",
    ],
    correct: 0,
    rule: "Rule 8.1a(1)",
    explanation:
      "Under Rule 8.1a, a player must not improve the conditions affecting the stroke by bending or breaking anything growing or attached (such as tree branches) to improve the area of the intended stance or swing. Doing so results in the general penalty (two strokes in stroke play, loss of hole in match play).",
    tags: ["improving conditions", "tree branch", "area of swing", "general penalty"],
  },
  {
    id: "b8_017",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball lies in the general area and a small rock is directly behind it. You want to remove the rock before playing your shot. Is this allowed?",
    choices: [
      "Yes — a rock is a loose impediment and may be removed without penalty anywhere on the course, including bunkers; but if removing it causes the ball to move, you get one penalty stroke under Rule 15.1b",
      "No — removing a rock behind your ball improves your lie",
      "Yes, but only if the rock is not embedded",
      "No — loose impediments may not be moved in the general area",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "Under Rule 15.1, a player may remove a loose impediment (like a rock) anywhere on or off the course without penalty. This is not considered an improvement of conditions under Rule 8.1a. If the ball moves as a result of removing the loose impediment (outside a penalty area or bunker situation), the player must replace the ball with one penalty stroke under Rule 15.1b.",
    tags: ["loose impediment", "rock", "removal", "no penalty"],
  },
  {
    id: "b8_018",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Before making your stroke, you press down the ground behind your ball with your foot to create a more level surface. What is the ruling?",
    choices: [
      "General penalty — pressing down the ground to improve the area of your intended swing or stance is not allowed",
      "No penalty — you may level the ground in the general area",
      "One-stroke penalty",
      "No penalty if you do it with your shoe rather than a club",
    ],
    correct: 0,
    rule: "Rule 8.1a(3)",
    explanation:
      "Under Rule 8.1a, a player must not improve the conditions affecting the stroke by pressing down or leveling the surface of the ground. This applies to the area of the intended stance, the area of the intended swing, the line of play, or the relief area. The penalty is the general penalty (two strokes/loss of hole).",
    tags: ["improving conditions", "pressing down ground", "general penalty"],
  },
  {
    id: "b8_019",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "There is heavy morning dew on the grass along your line of play in the fairway. Can you wipe away the dew before playing your shot?",
    choices: [
      "No — removing dew or frost from your line of play is not allowed and results in the general penalty",
      "Yes — dew is a temporary condition you may always remove",
      "Yes, but only on the putting green",
      "No, but a caddie may do it on your behalf",
    ],
    correct: 0,
    rule: "Rule 8.1a(4)",
    explanation:
      "Under Rule 8.1a, a player must not improve conditions affecting the stroke by removing or pressing down dew, frost, or water (except on the putting green, where Rule 13.1c(1) allows removal of loose impediments and movable obstructions, and natural surface water may be removed as part of allowed actions). The penalty is the general penalty.",
    tags: ["improving conditions", "dew", "line of play", "general penalty"],
  },
  {
    id: "b8_020",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball is near a boundary fence. A fence post is slightly loose. You push it back to its original upright position, which happens to give you more room to swing. What is the ruling?",
    choices: [
      "General penalty — you must not move, bend, or break a boundary object if doing so improves the conditions affecting your stroke",
      "No penalty — you are simply restoring the fence to its proper position",
      "No penalty — boundary objects are movable obstructions",
      "One-stroke penalty; you must push it back to its leaning position",
    ],
    correct: 0,
    rule: "Rule 8.1a(5)",
    explanation:
      "Under Rule 8.1a, a player must not improve conditions by moving, bending, or breaking any boundary object that is fixed. Even though the player may feel they are 'restoring' the object, any action that improves conditions affecting the stroke (such as area of swing) results in the general penalty.",
    tags: ["boundary object", "improving conditions", "fence", "general penalty"],
  },
  {
    id: "b8_021",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball is at the base of a tree, and you want to play away from the tree toward the fairway. While taking practice swings near (but not touching) the branches, you accidentally break a small twig. What happens?",
    choices: [
      "General penalty — even accidentally breaking something growing during a practice swing that improves conditions results in a penalty",
      "No penalty — accidental breakage during a practice swing is not penalized",
      "One-stroke penalty for the practice swing only",
      "No penalty — only breakage during the actual stroke matters",
    ],
    correct: 0,
    rule: "Rule 8.1a(1)",
    explanation:
      "Under Rule 8.1a, the prohibition on improving conditions by bending or breaking growing things applies to any action, including practice swings. If a practice swing breaks branches and improves the area of the intended swing, the general penalty applies. The exception is if the improvement is restored before the stroke is made — but restoration of broken growing things is rarely fully possible.",
    tags: ["practice swing", "breaking branch", "improving conditions", "general penalty"],
  },
  {
    id: "b8_022",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You take your normal stance for a shot and, in doing so, a branch moves because it is in the way of your body. You did not deliberately bend it. Is there a penalty?",
    choices: [
      "No penalty — fairly taking your stance is permitted even if it moves a branch, provided you do not deliberately move it beyond what is necessary to take your stance",
      "General penalty — you must not move any growing objects",
      "No penalty, but only if the branch returns to its original position",
      "One-stroke penalty for not choosing a different stance",
    ],
    correct: 0,
    rule: "Rule 8.1b(1)",
    explanation:
      "Under Rule 8.1b, a player is allowed to fairly take a stance. This means the player is entitled to take a normal stance without being required to use a particularly awkward stance just to avoid moving something growing. However, the player must not build a stance (e.g., bending a branch far out of the way to create space).",
    tags: ["fairly taking stance", "branch", "growing things", "exception"],
  },
  {
    id: "b8_023",
    category: "PLAYING_BALL",
    tier: "official",
    text: "Your ball lies in tall grass. Before making your stroke, you make several practice swings in the tall grass a few feet away from your ball, flattening the grass in that area. The practice swing area is along your line of play. What is the ruling?",
    choices: [
      "General penalty — flattening grass along your line of play with practice swings improves conditions affecting the stroke",
      "No penalty — practice swings in a different spot do not affect conditions for the stroke",
      "No penalty — practice swings are never penalized",
      "General penalty, but only if the flattened area is within two club-lengths of the ball",
    ],
    correct: 0,
    rule: "Rule 8.1a",
    explanation:
      "Under Rule 8.1a, a player must not improve the conditions affecting the stroke, including the line of play. If practice swings flatten grass along the line of play (even a few feet away), this improves conditions affecting the stroke and the general penalty applies.",
    tags: ["practice swing", "line of play", "improving conditions", "tall grass"],
  },
  {
    id: "b8_024",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is in the fairway and a divot hole is right behind it. You place a tee in the ground behind the ball to prevent it from rolling back while you address it. Is this allowed?",
    choices: [
      "No — placing an object on the ground to affect the position of the ball is not allowed",
      "Yes — you may use a tee anywhere in the general area",
      "Yes — a tee is an allowed piece of equipment",
      "No penalty, but you must remove the tee before the stroke",
    ],
    correct: 0,
    rule: "Rule 8.1a",
    explanation:
      "Under Rule 8.1a, a player must not improve conditions affecting the stroke by placing an object to influence the ball's position or lie. Using a tee to prop up or prevent the ball from moving is not allowed in the general area and results in the general penalty.",
    tags: ["improving conditions", "placing object", "tee", "general penalty"],
  },
  {
    id: "b8_025",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "After your ball comes to rest against a boundary stake, you realize the stake is interfering with your swing. Can you remove the boundary stake?",
    choices: [
      "No — boundary stakes are fixed boundary objects and must not be moved; there is no free relief",
      "Yes — boundary stakes are movable obstructions and may be removed",
      "Yes, but only if the Committee has not declared them immovable",
      "No, but you may take free relief under Rule 16.1",
    ],
    correct: 0,
    rule: "Rule 8.1a(5)",
    explanation:
      "Under the Rules, boundary objects (stakes, fences, walls) defining out of bounds are not obstructions — they are fixed parts of the course. Under Rule 8.1a, a player must not move or break boundary objects to improve conditions. The player's only options are to play the ball as it lies or take unplayable ball relief under Rule 19 with penalty.",
    tags: ["boundary stake", "out of bounds", "immovable", "no relief"],
  },

  // --- Rule 8.2: Player's Deliberate Actions to Alter Conditions for Own Ball ---

  {
    id: "b8_026",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball is at rest on a slope in the fairway. You deliberately stomp on the ground several feet in front of your ball, creating a depression that would stop the ball from rolling too far on your next shot. What is the penalty?",
    choices: [
      "General penalty — you deliberately altered physical conditions to affect where your ball might come to rest after a stroke",
      "No penalty — the alteration is not near the ball",
      "One-stroke penalty for altering the course",
      "Disqualification for serious breach",
    ],
    correct: 0,
    rule: "Rule 8.2",
    explanation:
      "Under Rule 8.2, a player must not deliberately alter physical conditions to affect where their ball at rest might go or come to rest after a stroke. This includes deliberately creating depressions or altering the ground to influence ball movement. The general penalty applies.",
    tags: ["altering conditions", "deliberate action", "general penalty"],
  },
  {
    id: "b8_027",
    category: "PLAYING_BALL",
    tier: "official",
    text: "Your ball is on the fringe of the putting green. You pour water from your bottle onto the green along your intended putting line to slow down the surface. What is the ruling?",
    choices: [
      "General penalty — deliberately altering physical conditions to affect where your ball in motion might go is not allowed",
      "No penalty — water is a natural substance",
      "Two-stroke penalty, but only in stroke play",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 8.2",
    explanation:
      "Under Rule 8.2, a player must not deliberately alter physical conditions to affect the outcome of their own stroke to be made or where their ball at rest might go. Pouring water onto the green to slow the surface is a deliberate alteration and results in the general penalty.",
    tags: ["altering conditions", "putting green", "water", "general penalty"],
  },

  // --- Rule 8.3: Deliberate Actions to Affect Another Player's Ball ---

  {
    id: "b8_028",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "In match play, your opponent's ball is on the putting green. Before your opponent putts, you deliberately step on and press down the grass along their line of putt to make it smoother. What is the ruling?",
    choices: [
      "General penalty — deliberately altering conditions to affect another player's ball or stroke is penalized under Rule 8.3",
      "No penalty — you are allowed to walk on the putting green",
      "Loss of hole only if the opponent complains",
      "Two-stroke penalty in stroke play; no penalty in match play",
    ],
    correct: 0,
    rule: "Rule 8.3",
    explanation:
      "Under Rule 8.3, a player must not take deliberate action to alter physical conditions to affect another player's ball at rest or stroke to be made. Deliberately pressing down grass on another player's putting line is a clear violation and results in the general penalty (loss of hole in match play, two strokes in stroke play).",
    tags: ["altering conditions", "another player", "putting line", "match play"],
  },
  {
    id: "b8_029",
    category: "PLAYING_BALL",
    tier: "official",
    text: "In stroke play, Player A deliberately places a large clump of mud on Player B's line of putt on the putting green while Player B is looking away. What is the ruling?",
    choices: [
      "Player A gets the general penalty (two strokes) and must remove the mud; in a serious case, the Committee may disqualify Player A",
      "No penalty — Player B can simply remove the mud as a loose impediment",
      "Both players receive a warning from the Committee",
      "Player A is disqualified automatically",
    ],
    correct: 0,
    rule: "Rule 8.3",
    explanation:
      "Under Rule 8.3, if a player deliberately alters physical conditions to affect another player's ball at rest or stroke to be made, the general penalty applies. In addition, Rule 1.2a allows the Committee to disqualify a player for serious misconduct. Deliberately placing an obstruction on another player's line is a clear violation.",
    tags: ["altering conditions", "another player", "serious misconduct", "stroke play"],
  },
  {
    id: "b8_030",
    category: "PLAYING_BALL",
    tier: "official",
    text: "In fourball stroke play, your partner deliberately steps on a spike mark on the putting green along the line of putt of an opponent from another side. What penalty applies?",
    choices: [
      "General penalty to your partner for deliberately altering conditions to affect another player's stroke",
      "No penalty — spike marks may be repaired on the putting green",
      "General penalty to both you and your partner",
      "No penalty — it only matters if the player whose line was affected complains",
    ],
    correct: 0,
    rule: "Rule 8.3",
    explanation:
      "Under Rule 8.3, deliberately altering conditions to affect another player's stroke results in the general penalty. While players may repair damage on the putting green under Rule 13.1c(2), the key here is the intent — the action was deliberate and aimed at affecting another player's ball or stroke, which triggers the penalty.",
    tags: ["altering conditions", "fourball", "putting green", "deliberate action"],
  },

  // --- Rule 8.1b: Allowed Actions (Exceptions) ---

  {
    id: "b8_031",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball lies in the general area and a movable obstruction (a rake) is directly in front of it on your line of play. Can you move the rake?",
    choices: [
      "Yes — movable obstructions may be removed anywhere on the course without penalty",
      "No — moving the rake improves your line of play",
      "Yes, but only if the rake is not touching your ball",
      "No — obstructions on the line of play cannot be moved",
    ],
    correct: 0,
    rule: "Rule 15.2a",
    explanation:
      "Under Rule 15.2a, a movable obstruction (such as a rake, can, bottle, or stake that is not boundary-defining) may be removed without penalty anywhere on the course. This is an exception to the general principle of not improving conditions — removing movable obstructions is always allowed.",
    tags: ["movable obstruction", "rake", "removal", "no penalty"],
  },
  {
    id: "b8_032",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "While walking to your ball, you accidentally scuff the ground on your line of play with your shoe. Must you restore the damage?",
    choices: [
      "No penalty and no obligation to restore — it was accidental and not done to improve conditions",
      "You must restore the ground or face a penalty",
      "General penalty for accidentally damaging the course",
      "No penalty, but you must repair the damage in all cases",
    ],
    correct: 0,
    rule: "Rule 8.1b(5)",
    explanation:
      "Under Rule 8.1b, accidentally altering conditions (such as scuffing the ground while walking) is not a breach of Rule 8.1a because the player did not deliberately take an action to improve conditions. There is no penalty and no requirement to restore the conditions.",
    tags: ["accidental damage", "line of play", "no penalty"],
  },
  {
    id: "b8_033",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball lies in the general area. You ground your club lightly directly behind the ball when addressing it. Is this allowed?",
    choices: [
      "Yes — lightly grounding the club behind the ball when addressing it is allowed in the general area",
      "No — you may never ground your club behind the ball",
      "Yes, but only on the fairway, not in the rough",
      "No — grounding the club presses down the ground and improves conditions",
    ],
    correct: 0,
    rule: "Rule 8.1b(6)",
    explanation:
      "Under Rule 8.1b, a player is allowed to lightly ground the club right in front of or right behind the ball. This does not constitute pressing down the ground or improving conditions as long as the player does not press the club down. (Note: in a bunker, grounding the club is restricted under Rule 12.2b.)",
    tags: ["grounding club", "addressing ball", "general area", "allowed action"],
  },

  // ===================================================================
  // RULE 9 — Ball Played as It Lies; Ball at Rest Lifted or Moved (~22 scenarios)
  // ===================================================================

  // --- Rule 9.1: Ball Played as It Lies ---

  {
    id: "b8_034",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball lands in a muddy area and is sitting in a patch of casual water (temporary water). Can you improve your lie before playing?",
    choices: [
      "You must play the ball as it lies or take relief from the temporary water under Rule 16.1 — you may not improve the lie",
      "Yes — you may move mud away from the ball in temporary water",
      "Yes — temporary water is an abnormal course condition, so you may clean the lie",
      "No — you must play it as it lies with no relief option",
    ],
    correct: 0,
    rule: "Rule 9.1",
    explanation:
      "Under Rule 9.1, a ball must be played as it lies unless the Rules allow otherwise. While a player may not improve the lie, the player does have the option to take free relief from temporary water (an abnormal course condition) under Rule 16.1. The player cannot selectively improve the lie while choosing to play from the same spot.",
    tags: ["play as it lies", "temporary water", "free relief", "lie"],
  },
  {
    id: "b8_035",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball lands in a bare patch of dirt in the fairway. The lie is terrible but there is no abnormal course condition. What are your options?",
    choices: [
      "You must play the ball as it lies — there is no relief from a bad lie in the general area unless a Local Rule allows preferred lies",
      "You may take free relief within one club-length",
      "You may place the ball on a nearby grass area without penalty",
      "You may declare an unplayable lie for free relief",
    ],
    correct: 0,
    rule: "Rule 9.1",
    explanation:
      "Under Rule 9.1, the fundamental principle is that the ball must be played as it lies. A bad lie in the general area does not entitle the player to relief unless a Local Rule for preferred lies (lift, clean, and place) is in effect. The player could declare the ball unplayable under Rule 19, but that comes with a one-stroke penalty.",
    tags: ["play as it lies", "bad lie", "no relief", "general area"],
  },

  // --- Rule 9.2: Deciding Whether Ball Has Moved ---

  {
    id: "b8_036",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You address your ball on the putting green and the ball appears to oscillate (wobble) but returns to its original spot. Has the ball 'moved' under the Rules?",
    choices: [
      "No — a ball has only 'moved' if it leaves its original spot and comes to rest in a different spot; oscillating and returning is not movement",
      "Yes — any visible movement counts as the ball having moved",
      "It depends on whether other players saw the movement",
      "Yes — the ball must be replaced with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 9.2",
    explanation:
      "Under the Definition of 'Moved,' a ball has moved only if it has left its original spot and come to rest at a new spot that can be seen by the naked eye. A ball that merely oscillates (wobbles back and forth) and returns to its original position has not moved.",
    tags: ["ball moved", "oscillation", "definition", "putting green"],
  },
  {
    id: "b8_037",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A television replay shows that a player's ball moved slightly on the putting green, but the movement was not visible to the naked eye at the time. The player did not see it move. Under the 2023 Rules, has the ball 'moved'?",
    choices: [
      "No — the ball is treated as not having moved because the movement was not reasonably discernible to the naked eye at the time",
      "Yes — video evidence is conclusive and the ball must be replaced",
      "It depends on whether the Committee reviews the video",
      "Yes — any detectable movement means the ball moved",
    ],
    correct: 0,
    rule: "Rule 1.3c(2)",
    explanation:
      "Under Rule 1.3c(2) (the 'naked eye' standard), when the Rules refer to seeing or finding facts about the position of a ball, the standard is what can reasonably be seen with the naked eye. Video replay that shows movement not visible to the naked eye is not used to override what was reasonably discernible at the time.",
    tags: ["video evidence", "naked eye standard", "ball moved", "putting green"],
  },
  {
    id: "b8_038",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You place your club behind the ball to address it. The ball then moves. Under the 2023 Rules, are you automatically deemed to have caused the movement?",
    choices: [
      "No — there is no presumption that the player caused the ball to move just by addressing it; causation must still be determined based on all available information",
      "Yes — once you address the ball, any movement is automatically attributed to you",
      "Yes — under the old Rules and the current Rules, addressing the ball means you caused the movement",
      "No, but only if the ball was on the putting green",
    ],
    correct: 0,
    rule: "Rule 9.2b",
    explanation:
      "The 2023 Rules removed the old presumption (from pre-2019 Rules) that a player caused the ball to move simply by addressing it. Under Rule 9.2b, whether the player caused the ball to move is determined based on all reasonably available information — it is a question of fact, not an automatic presumption.",
    tags: ["ball moved", "addressing ball", "causation", "2023 rules change"],
  },

  // --- Rule 9.3: Ball Moved by Natural Forces ---

  {
    id: "b8_039",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is on the putting green. After you mark and replace it, a gust of wind blows the ball to a new spot. Where must you play from?",
    choices: [
      "Replace the ball on its original spot — because the ball was lifted and replaced, natural forces moving it means it must go back",
      "Play the ball from its new position — wind is a natural force",
      "Choose either the original or new spot",
      "Re-drop the ball within one club-length of the original spot",
    ],
    correct: 0,
    rule: "Rule 9.3",
    explanation:
      "Under Rule 9.3, if a ball that was lifted and replaced is moved by natural forces (wind, water, gravity), the ball must be replaced on its original spot. This is the key distinction — if a ball was NOT lifted and replaced, it must be played from its new position when moved by natural forces (with one exception on the putting green under 9.3).",
    tags: ["natural forces", "wind", "putting green", "replace ball", "lifted and replaced"],
  },
  {
    id: "b8_040",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is in the fairway. You have NOT touched or addressed it. A strong gust of wind blows it 15 yards down a slope. Where must you play from?",
    choices: [
      "Play the ball from its new position — when a ball at rest that has NOT been lifted and replaced is moved by natural forces, you play it from the new spot",
      "Replace the ball on its original spot",
      "Drop the ball at the original spot",
      "Choose either position",
    ],
    correct: 0,
    rule: "Rule 9.3",
    explanation:
      "Under Rule 9.3, when a ball at rest that has NOT been lifted and replaced is moved by natural forces (wind, water, gravity), the player must play the ball from its new position. There is no penalty. The exception under 9.3 for balls on the putting green does not apply here since the ball is in the fairway.",
    tags: ["natural forces", "wind", "play from new spot", "general area"],
  },
  {
    id: "b8_041",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "On the putting green, you have NOT marked or lifted your ball. While you are reading the green, the ball slowly rolls due to gravity and ends up 3 feet closer to the hole. What is the ruling?",
    choices: [
      "Replace the ball on its original spot — on the putting green, a ball moved by natural forces must be replaced if it has not been lifted and replaced",
      "Play the ball from its new position",
      "You receive a one-stroke penalty and must replace the ball",
      "Drop the ball at the original spot",
    ],
    correct: 0,
    rule: "Rule 9.3",
    explanation:
      "Under Rule 9.3, there is a special exception for the putting green: if a ball on the putting green is moved by natural forces to a new spot, it must always be replaced on its original spot — regardless of whether it was previously lifted and replaced. This is the only area of the course with this rule for balls not lifted/replaced.",
    tags: ["natural forces", "gravity", "putting green", "replace ball"],
  },
  {
    id: "b8_042",
    category: "PLAYING_BALL",
    tier: "official",
    text: "Your ball is on a steep slope in the general area. You have not touched it. Rain-soaked ground causes the ball to slowly slide downhill. Where must you play from?",
    choices: [
      "Play the ball from its new position — outside the putting green, a ball moved by natural forces that has not been lifted and replaced is played from the new spot",
      "Replace the ball on its original spot",
      "Take free relief because rain is a temporary water condition",
      "Drop the ball at the original spot with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 9.3",
    explanation:
      "Under Rule 9.3, when a ball that has not been lifted and replaced is moved by natural forces outside the putting green, it must be played from its new position. The fact that rain or water contributed to the movement does not change the ruling — natural forces include water and gravity.",
    tags: ["natural forces", "rain", "slope", "play from new spot"],
  },

  // --- Rule 9.4: Ball Lifted or Moved by Player ---

  {
    id: "b8_043",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You accidentally move your ball by stepping on it while walking to your next shot (not while searching for it). What is the ruling?",
    choices: [
      "One-stroke penalty; replace the ball on its original spot",
      "No penalty; replace the ball on its original spot",
      "No penalty; play the ball from the new position",
      "Two-stroke penalty; replace the ball",
    ],
    correct: 0,
    rule: "Rule 9.4b",
    explanation:
      "Under Rule 9.4b, if a player accidentally causes their ball to move (other than the specific exceptions like searching under Rule 7.4 or on the putting green under Rule 13.1d), the player gets one penalty stroke and must replace the ball on its original spot.",
    tags: ["ball moved", "accidentally moved", "one-stroke penalty", "replace ball"],
  },
  {
    id: "b8_044",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You accidentally move your ball on the putting green while removing a leaf near it. What is the penalty?",
    choices: [
      "No penalty; replace the ball on its original spot",
      "One-stroke penalty; replace the ball",
      "No penalty; play from the new spot",
      "General penalty for moving your ball",
    ],
    correct: 0,
    rule: "Rule 13.1d(1)",
    explanation:
      "Under Rule 13.1d(1), there is no penalty if a player accidentally moves their ball or ball-marker on the putting green. The ball must simply be replaced on its original spot. This is a specific exception to the general rule of a one-stroke penalty under Rule 9.4b.",
    tags: ["putting green", "accidentally moved", "no penalty", "replace ball"],
  },
  {
    id: "b8_045",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You pick up your ball in the fairway, believing a Local Rule allows lift, clean, and place. In fact, no such Local Rule is in effect. What is the ruling?",
    choices: [
      "One-stroke penalty for lifting the ball without authority; replace the ball on its original spot",
      "No penalty — honest mistake",
      "General penalty for lifting without authority",
      "You must play the ball from where you cleaned it, with no penalty",
    ],
    correct: 0,
    rule: "Rule 9.4b",
    explanation:
      "Under Rule 9.4b, if a player lifts their ball in play when not allowed by the Rules, they get one penalty stroke and must replace the ball. Believing a Local Rule exists when it does not is not an excuse that avoids the penalty.",
    tags: ["lifting ball", "no authority", "one-stroke penalty", "replace ball"],
  },
  {
    id: "b8_046",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "While taking practice swings near your ball in the general area, you accidentally hit your ball with the club and move it. What is the ruling?",
    choices: [
      "One-stroke penalty; replace the ball on its original spot — the practice swing is not a stroke, so this is accidental movement",
      "Count the practice swing as a stroke and play the ball from its new position",
      "No penalty; replace the ball",
      "Two-stroke penalty; play from the new position",
    ],
    correct: 0,
    rule: "Rule 9.4b",
    explanation:
      "Under the Definition of 'Stroke,' a stroke requires intent to hit the ball. A practice swing has no such intent, so accidentally hitting the ball during a practice swing is not a stroke. It is treated as accidentally moving the ball under Rule 9.4b — one penalty stroke, and the ball must be replaced.",
    tags: ["practice swing", "accidentally moved", "one-stroke penalty", "not a stroke"],
  },

  // --- Rule 9.5: Ball Lifted or Moved by Opponent (Match Play) ---

  {
    id: "b8_047",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "In match play, your opponent accidentally kicks your ball while walking near it (not during search). What is the ruling?",
    choices: [
      "One-stroke penalty to your opponent; replace the ball on its original spot",
      "No penalty; replace the ball on its original spot",
      "No penalty; play the ball from its new position",
      "Loss of hole for your opponent",
    ],
    correct: 0,
    rule: "Rule 9.5b",
    explanation:
      "Under Rule 9.5b, if an opponent (or their caddie) accidentally lifts or moves the player's ball (other than during search under Rule 7.4), the opponent gets one penalty stroke and the ball must be replaced on its original spot.",
    tags: ["match play", "opponent", "accidentally moved", "one-stroke penalty"],
  },
  {
    id: "b8_048",
    category: "PLAYING_BALL",
    tier: "official",
    text: "In match play, your opponent picks up your ball on the putting green believing your putt was conceded, but you had not conceded anything. What happens?",
    choices: [
      "One-stroke penalty to your opponent; replace the ball on its original spot — a concession must actually be made",
      "The putt is automatically conceded because your opponent picked up the ball",
      "No penalty; replace the ball and putt out",
      "Loss of hole for your opponent",
    ],
    correct: 0,
    rule: "Rule 9.5b",
    explanation:
      "Under Rule 9.5b, if an opponent lifts or moves the player's ball without authority, the opponent gets one penalty stroke. The ball must be replaced. A concession must be communicated clearly — simply picking up the other player's ball does not constitute a concession by the player whose turn it is.",
    tags: ["match play", "opponent", "concession", "lifting ball", "one-stroke penalty"],
  },

  // --- Rule 9.6: Ball Lifted or Moved by Outside Influence ---

  {
    id: "b8_049",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "A dog runs onto the course and picks up your ball, carrying it away. What should you do?",
    choices: [
      "Replace the ball on its original spot (estimated if necessary) with no penalty — the dog is an outside influence",
      "Play the ball from where the dog dropped it",
      "Take a free drop within one club-length of the original spot",
      "Declare the ball lost and proceed under stroke and distance",
    ],
    correct: 0,
    rule: "Rule 9.6",
    explanation:
      "Under Rule 9.6, if an outside influence (which includes any animal) lifts or moves a ball at rest, the ball must be replaced on its original spot (estimated if not known) with no penalty. A dog is an outside influence, not an act of nature.",
    tags: ["outside influence", "animal", "replace ball", "no penalty"],
  },
  {
    id: "b8_050",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "A bird picks up your ball from the fairway and flies away with it. You saw the original spot. What is the ruling?",
    choices: [
      "No penalty; replace a ball on the original spot — the bird is an outside influence",
      "The ball is lost; take stroke-and-distance relief",
      "Drop a ball within one club-length of the original spot with no penalty",
      "No penalty; play a new ball from where the bird dropped it",
    ],
    correct: 0,
    rule: "Rule 9.6",
    explanation:
      "Under Rule 9.6, if an outside influence (including a bird or any animal) lifts or moves a ball at rest, the ball must be replaced on its original spot with no penalty. If the original ball cannot be recovered, the player may substitute another ball.",
    tags: ["outside influence", "bird", "replace ball", "no penalty"],
  },
  {
    id: "b8_051",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "A fellow competitor in stroke play accidentally moves your ball while walking to their own ball (not during search). What is the ruling?",
    choices: [
      "No penalty to anyone; replace the ball on its original spot — the fellow competitor is an outside influence in stroke play",
      "One-stroke penalty to the fellow competitor; replace the ball",
      "One-stroke penalty to you; replace the ball",
      "No penalty; play the ball from its new position",
    ],
    correct: 0,
    rule: "Rule 9.6",
    explanation:
      "Under Rule 9.6, in stroke play a fellow competitor is an outside influence (unlike an opponent in match play under Rule 9.5). When an outside influence moves a ball, there is no penalty to anyone, and the ball must be replaced on its original spot.",
    tags: ["outside influence", "fellow competitor", "stroke play", "no penalty"],
  },

  // --- Rule 9.7: Ball-Marker Lifted or Moved ---

  {
    id: "b8_052",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You have marked your ball on the putting green. While your playing partner putts, the wind blows your ball-marker to a new position. What should you do?",
    choices: [
      "Replace the ball-marker on its original spot (or replace the ball on the original spot) with no penalty",
      "Place your ball where the marker ended up",
      "Drop the ball within one club-length of where the marker ended up",
      "Leave the marker; play from wherever the ball-marker now sits",
    ],
    correct: 0,
    rule: "Rule 9.7",
    explanation:
      "Under Rule 9.7, the same rules that apply to a ball at rest also apply to a ball-marker. If the ball-marker is moved by natural forces or an outside influence, it must be replaced on its original spot (or the ball replaced on that spot) with no penalty.",
    tags: ["ball-marker", "wind", "putting green", "replace marker"],
  },
  {
    id: "b8_053",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "On the putting green, you accidentally kick your own ball-marker while walking to read your line. What is the ruling?",
    choices: [
      "No penalty; replace the ball-marker on its original spot — accidentally moving a ball-marker on the putting green is treated like accidentally moving the ball",
      "One-stroke penalty; replace the ball-marker",
      "No penalty; place the ball where the marker ended up",
      "General penalty for carelessness",
    ],
    correct: 0,
    rule: "Rule 9.7b",
    explanation:
      "Under Rule 9.7b, the same exceptions that apply to a ball accidentally moved on the putting green (Rule 13.1d — no penalty) also apply to the ball-marker. Accidentally moving your ball-marker on the putting green results in no penalty; simply replace it on its original spot.",
    tags: ["ball-marker", "putting green", "accidentally moved", "no penalty"],
  },
  {
    id: "b8_054",
    category: "PLAYING_BALL",
    tier: "official",
    text: "In match play, your opponent deliberately moves your ball-marker on the putting green without your permission and without conceding the hole. What is the penalty?",
    choices: [
      "One-stroke penalty to your opponent; replace the ball-marker on its original spot",
      "No penalty; replace the ball-marker",
      "Loss of hole for your opponent",
      "General penalty to your opponent",
    ],
    correct: 0,
    rule: "Rule 9.7b",
    explanation:
      "Under Rule 9.7b, the rules for a ball-marker mirror those for the ball itself. Under Rule 9.5b, if an opponent lifts or moves the player's ball (or ball-marker) without authority, the opponent receives one penalty stroke. The ball-marker must be replaced on its original spot.",
    tags: ["ball-marker", "match play", "opponent", "one-stroke penalty"],
  },
  {
    id: "b8_055",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your ball is on the putting green and you have marked it. Your caddie accidentally steps on the ball-marker and moves it. What is the ruling?",
    choices: [
      "No penalty; replace the ball-marker — your caddie accidentally moving the ball-marker on the putting green is penalty-free like accidentally moving the ball",
      "One-stroke penalty to you; replace the ball-marker",
      "No penalty; place the ball where the marker now lies",
      "General penalty for caddie actions",
    ],
    correct: 0,
    rule: "Rule 9.7b",
    explanation:
      "Under Rule 9.7b combined with Rule 13.1d, accidentally moving a ball-marker on the putting green is treated the same as accidentally moving the ball on the putting green — no penalty. The ball-marker (or ball) must be replaced on its original spot.",
    tags: ["ball-marker", "caddie", "putting green", "no penalty"],
  },

  // ===================================================================
  // RULE 10 — Preparing for and Making a Stroke, Advice and Help (~22 scenarios)
  // ===================================================================

  // --- Rule 10.1: Making a Stroke ---

  {
    id: "b8_056",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "A player pushes the ball forward with the clubhead rather than striking it with a swinging motion. Is this a valid stroke?",
    choices: [
      "No — a stroke must be made by fairly striking the ball with the head of the club; pushing, scraping, or spooning the ball is not allowed",
      "Yes — any forward movement of the club that contacts the ball is a stroke",
      "Yes, as long as the player intended to move the ball",
      "No, but there is no penalty — the player simply retakes the stroke",
    ],
    correct: 0,
    rule: "Rule 10.1a",
    explanation:
      "Under Rule 10.1a, the player must fairly strike the ball with the head of the club. This means making a brief contact between the club and ball during a swinging motion. Pushing, scraping, or spooning the ball is not a fair strike. The player gets the general penalty if they make a stroke that is not a fair strike.",
    tags: ["fair strike", "pushing ball", "making a stroke", "general penalty"],
  },
  {
    id: "b8_057",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your ball is against a fence and the only way to advance it is to hit it with the back of your putter. Is this allowed?",
    choices: [
      "Yes — you may strike the ball with any part of the clubhead, including the back, toe, or heel",
      "No — you must strike the ball with the face of the club",
      "Yes, but only with a putter",
      "No — hitting with the back of the club is not a fair strike",
    ],
    correct: 0,
    rule: "Rule 10.1a",
    explanation:
      "Under Rule 10.1a, the player must fairly strike the ball with the head of the club. This includes any part of the clubhead — the face, the back, the toe, or the heel. There is no requirement to use the face of the club. As long as it is a fair strike, it is allowed.",
    tags: ["fair strike", "clubhead", "back of putter", "making a stroke"],
  },
  {
    id: "b8_058",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "A player uses a 'belly putter' by anchoring the butt end of the club against their stomach while putting. Is this allowed under the 2023 Rules?",
    choices: [
      "No — the player must not anchor the club against their body when making a stroke; this is a violation of the anchoring ban",
      "Yes — anchoring is allowed as long as the club conforms to equipment rules",
      "Yes — the anchoring ban only applies to the chest, not the stomach",
      "No, but only in professional competition — amateurs may anchor",
    ],
    correct: 0,
    rule: "Rule 10.1b",
    explanation:
      "Under Rule 10.1b, the player must not make a stroke while anchoring the club, either directly (by pressing the club or a hand against the body) or by using an 'anchor point' (holding the forearm against the body to create a fixed pivot point). This rule applies to all levels of play.",
    tags: ["anchoring ban", "belly putter", "making a stroke", "general penalty"],
  },
  {
    id: "b8_059",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A player holds the putter with a split grip and rests the top hand against their chest while putting. Is this a violation?",
    choices: [
      "Yes — resting any hand or the grip against the body constitutes an anchor point and violates Rule 10.1b",
      "No — only the butt end of the club is covered by the anchoring ban",
      "No — a split grip removes the anchoring issue",
      "It depends on whether the player's forearm is also touching the body",
    ],
    correct: 0,
    rule: "Rule 10.1b",
    explanation:
      "Under Rule 10.1b, anchoring includes directly pressing the club or a gripping hand against the body, or creating an anchor point by holding a forearm against the body. Resting the top hand against the chest while making a stroke is direct anchoring and violates the Rule, regardless of grip style.",
    tags: ["anchoring ban", "split grip", "putting", "penalty"],
  },
  {
    id: "b8_060",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A player makes a stroke at a moving ball (the ball was slowly rolling due to wind). Is this allowed?",
    choices: [
      "Generally no — the player must not make a stroke at a moving ball and receives the general penalty, with exceptions for a ball on water or in a tidal area",
      "Yes — you can play a ball at any time",
      "No — but the penalty is only one stroke",
      "Yes — as long as the player did not cause the ball to move",
    ],
    correct: 0,
    rule: "Rule 10.1d",
    explanation:
      "Under Rule 10.1d, a player must not make a stroke at a ball in motion. If the player does, they get the general penalty (two strokes in stroke play, loss of hole in match play). Exceptions exist: (1) if the ball is moving in water and the player plays it, (2) if a ball placed back on a spot won't stay and the player plays the moving ball, and (3) certain situations when a ball on the putting green begins to move.",
    tags: ["moving ball", "stroke at moving ball", "general penalty", "wind"],
  },

  // --- Rule 10.2: Advice and Other Help ---

  {
    id: "b8_061",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "During a round, you ask a player in another group what club they used on a particular hole. Is this a penalty?",
    choices: [
      "Yes — asking about club selection is asking for advice, which results in the general penalty",
      "No — you can freely discuss club selection with anyone",
      "No — the restriction on advice only applies to players in your group",
      "Yes, but only in match play",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "Under Rule 10.2a, during a round, a player must not give advice to or ask for advice from any other player in the competition (not just players in their group). Asking what club someone used is asking for advice because it could influence the player's own club selection. The general penalty applies.",
    tags: ["advice", "club selection", "general penalty", "other player"],
  },
  {
    id: "b8_062",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You ask your caddie, 'What club should I use here?' Is this allowed?",
    choices: [
      "Yes — a player may ask their own caddie for advice without penalty",
      "No — asking anyone for advice is a penalty",
      "Yes, but only before the round starts",
      "No — a caddie may volunteer advice but cannot be asked directly",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "Under Rule 10.2a, the prohibition on advice does not apply between a player and their caddie. A player may freely ask for and receive advice from their own caddie during the round without penalty.",
    tags: ["advice", "caddie", "club selection", "no penalty"],
  },
  {
    id: "b8_063",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your playing partner in a fourball match asks you, 'What club did you just hit?' Can you answer without penalty?",
    choices: [
      "Yes — in a fourball (or foursomes) format, partners may give each other advice",
      "No — advice between partners is never allowed",
      "Yes, but only if the Committee has authorized it",
      "No — each partner must play independently without sharing information",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "Under Rule 10.2a, a player may give advice to their partner in the same competition. Partners in fourball, foursomes, or other team formats may freely share advice, including club selection, strategy, and line of play.",
    tags: ["advice", "partner", "fourball", "no penalty"],
  },
  {
    id: "b8_064",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Before your round, you ask a friend who played the course yesterday about the green speeds and pin positions. Is this a penalty?",
    choices: [
      "No — information about course conditions is not 'advice' under the Rules and can be shared freely; also, information gathered before the round is not restricted",
      "Yes — any course-specific information from another player is advice",
      "No, but only because it was before the round — during the round it would be a penalty",
      "Yes — pin positions are strategic information",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "Under the Definition of 'Advice,' advice does not include publicly available information such as the location of things on the course (like pin positions), distances, or the Rules. Additionally, information shared before the round even started is not restricted. Course conditions like green speed are not 'advice' under the Rules.",
    tags: ["advice", "public information", "before round", "course conditions"],
  },
  {
    id: "b8_065",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You place a club on the ground to help align your feet for a shot. You remove it before making the stroke. Is this allowed?",
    choices: [
      "No — placing an object on the ground to help with alignment is not allowed, even if removed before the stroke; the general penalty applies",
      "Yes — as long as you remove the alignment aid before the stroke, there is no penalty",
      "Yes — alignment aids are always permitted during practice",
      "No, but the penalty is only one stroke",
    ],
    correct: 0,
    rule: "Rule 10.2b(3)",
    explanation:
      "Under Rule 10.2b(3), a player must not set down an object (such as a club or alignment stick) to help aim for the stroke being played. The restriction applies to the act of setting down the object — removing it before the stroke does not avoid the penalty. The general penalty applies.",
    tags: ["alignment aid", "club on ground", "general penalty", "aiming"],
  },
  {
    id: "b8_066",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "While reading a putt on the putting green, you touch the green with your finger to indicate the line you think the ball should travel. What is the ruling?",
    choices: [
      "No penalty — you may touch the putting green to indicate a target or line, as long as doing so does not improve conditions",
      "General penalty for touching the line of putt",
      "One-stroke penalty for indicating a line",
      "No penalty, but only if your caddie is not present",
    ],
    correct: 0,
    rule: "Rule 10.2b(2)",
    explanation:
      "Under Rule 10.2b(2), a player or caddie may touch the putting green to indicate a target or line for putting, as long as doing so does not improve the conditions affecting the stroke. The old restriction on touching the line of putt was removed in the 2019 Rules modernization.",
    tags: ["putting green", "indicating line", "touching green", "no penalty"],
  },

  // --- Rule 10.3: Caddies ---

  {
    id: "b8_067",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your caddie stands directly behind you on an extension of your line of play while you take your putting stance. You then make the stroke. What is the ruling?",
    choices: [
      "General penalty — from the time you begin taking your stance until the stroke is made, your caddie must not stand on or close to an extension of the line of play behind you",
      "No penalty — a caddie can stand anywhere",
      "No penalty — this restriction only applies on the teeing area",
      "One-stroke penalty, but only in stroke play",
    ],
    correct: 0,
    rule: "Rule 10.2b(4)",
    explanation:
      "Under Rule 10.2b(4), from the time a player begins taking a stance for the stroke and until the stroke is made, the player must not have their caddie deliberately standing on or close to an extension of the line of play behind the ball. If the caddie is in such a position when the player begins to take a stance, the caddie must move away. The general penalty applies if the caddie remains there.",
    tags: ["caddie position", "line of play", "putting", "general penalty"],
  },
  {
    id: "b8_068",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Your caddie stands behind you to help you align on a tee shot. You take your stance, and then your caddie steps to the side before you make the stroke. Is this allowed?",
    choices: [
      "No — once you begin taking your stance with the caddie behind you on the line of play, the breach has occurred even if the caddie moves away before the stroke",
      "Yes — as long as the caddie moves before the stroke, there is no penalty",
      "Yes — the rule only applies on the putting green",
      "No, but the penalty is only one stroke rather than the general penalty",
    ],
    correct: 0,
    rule: "Rule 10.2b(4)",
    explanation:
      "Under Rule 10.2b(4), the restriction applies from the time the player begins taking a stance for the stroke. If the caddie is deliberately positioned on or close to the extension of the line of play behind the ball when the player begins to take the stance, the breach occurs. The caddie moving away afterward does not cure the breach, and the general penalty applies.",
    tags: ["caddie position", "alignment", "tee shot", "general penalty"],
  },
  {
    id: "b8_069",
    category: "PLAYING_BALL",
    tier: "official",
    text: "Your caddie is holding the flagstick out of the hole while you putt from the putting green. Your caddie accidentally drops the flagstick into the path of your rolling ball and the ball hits it. What is the ruling?",
    choices: [
      "No penalty; the ball is played as it lies and the stroke counts",
      "One-stroke penalty; replay the putt",
      "General penalty; the ball must be replaced and the putt replayed",
      "No penalty; the stroke is cancelled and the putt must be replayed from the original spot",
    ],
    correct: 3,
    rule: "Rule 11.1b",
    explanation:
      "Under Rule 11.1b, when a ball played from the putting green is accidentally deflected or stopped by any person or outside influence (including an accidentally dropped flagstick), the stroke does not count. The ball must be replaced on its original spot and the stroke replayed. This is different from a ball played from off the green, where Rule 11.1a would apply and the ball would be played as it lies.",
    tags: ["flagstick", "ball in motion", "putting green", "replay stroke"],
  },
  {
    id: "b8_070",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Can your caddie lift your ball on the putting green without your specific authorization each time?",
    choices: [
      "Yes — a caddie may mark, lift, and replace the player's ball on the putting green without needing specific authorization for each instance",
      "No — the player must authorize each lifting",
      "Yes, but only if the player has given a standing authorization at the start of the round",
      "No — only the player may touch the ball on the putting green",
    ],
    correct: 0,
    rule: "Rule 14.1b",
    explanation:
      "Under Rule 14.1b, a player's caddie may lift the player's ball on the putting green without specific authorization each time. The caddie has standing authority to mark, lift, clean, and replace the ball on the putting green. However, the caddie may not lift the ball elsewhere on the course without the player's authorization.",
    tags: ["caddie", "lifting ball", "putting green", "standing authority"],
  },
  {
    id: "b8_071",
    category: "PLAYING_BALL",
    tier: "official",
    text: "You have two caddies during the round — you handed your bag to a friend partway through. You did not release the first caddie. What is the penalty?",
    choices: [
      "General penalty for each hole where you have two caddies at the same time — a player may have only one caddie at a time",
      "No penalty — you may have multiple caddies",
      "One-stroke penalty per hole with two caddies",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 10.3a",
    explanation:
      "Under Rule 10.3a, a player may have only one caddie at a time. If a player has two caddies at the same time, the player gets the general penalty for each hole on which the breach occurs. The player must promptly choose one caddie and dismiss the other.",
    tags: ["caddie", "two caddies", "general penalty", "per hole"],
  },
  {
    id: "b8_072",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "In stroke play, you notice your fellow competitor's caddie is standing behind the fellow competitor while the fellow competitor is putting. Should you be concerned about a penalty to you?",
    choices: [
      "No — a breach of Rule 10.2b(4) by your fellow competitor's caddie only penalizes your fellow competitor, not you",
      "Yes — if you see a breach and do not report it, you are penalized too",
      "No, because the rule does not apply to caddies of fellow competitors",
      "Yes — both players in the group receive a penalty",
    ],
    correct: 0,
    rule: "Rule 10.2b(4)",
    explanation:
      "Under Rule 10.2b(4), the restriction on caddie positioning behind the line of play applies to each player individually. A fellow competitor's caddie standing behind the fellow competitor is a potential breach for the fellow competitor only. You have no obligation to warn them, and no penalty applies to you.",
    tags: ["caddie position", "fellow competitor", "stroke play", "no penalty to you"],
  },

  // --- Rule 10.2: Other Advice and Help Scenarios ---

  {
    id: "b8_073",
    category: "PLAYING_BALL",
    tier: "official",
    text: "During the round, you use a smartphone app that provides wind speed and direction data to help you select a club. Is this allowed?",
    choices: [
      "It depends — weather information (including wind) is not advice, but using a device to measure wind conditions at the course may be restricted by Local Rule",
      "No — all electronic devices are banned during a round",
      "Yes — wind data is always public information",
      "No — any app that helps with club selection is prohibited",
    ],
    correct: 0,
    rule: "Rule 4.3a",
    explanation:
      "Under Rule 4.3a, players may use devices to access information that was available before the round (like weather forecasts). However, using a device to measure wind conditions in real-time on the course may be restricted depending on what the device does. A Local Rule under Rule 4.3 may restrict use of distance-measuring devices or other technology. General weather apps providing forecasts are typically allowed.",
    tags: ["electronic device", "wind data", "advice", "local rule"],
  },
  {
    id: "b8_074",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You overhear another player in your group tell their caddie what club they are using. Can you use that information?",
    choices: [
      "Yes — information you overhear is not 'asking for advice,' so there is no penalty for using overheard information",
      "No — you must ignore any strategic information from other players",
      "Yes, but only if the other player was not speaking to you",
      "No — this is considered receiving advice",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "Under Rule 10.2a, the penalty applies to asking for or giving advice. Overhearing information that was not directed at you is not asking for advice. You may act on information you passively overhear without penalty.",
    tags: ["advice", "overheard information", "no penalty", "club selection"],
  },
  {
    id: "b8_075",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "During the round, you look into another player's bag to see what club they selected for a shot. Is this a penalty?",
    choices: [
      "No — looking at another player's clubs is not asking for advice; it is publicly visible information",
      "Yes — this is equivalent to asking for advice",
      "No, but only if the other player does not notice",
      "Yes — the general penalty applies for gaining strategic information",
    ],
    correct: 0,
    rule: "Rule 10.2a",
    explanation:
      "Under Rule 10.2a, looking at the clubs in another player's bag or watching what club they select is not asking for advice. 'Advice' requires a verbal or gestural communication — passively observing publicly visible information is not a breach.",
    tags: ["advice", "observing clubs", "public information", "no penalty"],
  },
  {
    id: "b8_076",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A player's caddie holds up a towel as a wind shield while the player makes a stroke. Is this allowed?",
    choices: [
      "No — a caddie (or anyone) must not deliberately shield the player from weather conditions while the player is making a stroke; this results in the general penalty",
      "Yes — a caddie may assist the player in any way",
      "No, but the penalty is only one stroke",
      "Yes — protection from weather elements is always allowed",
    ],
    correct: 0,
    rule: "Rule 10.2b(5)",
    explanation:
      "Under Rule 10.2b(5), while the player is making a stroke, no one may deliberately position any object or person to protect the player from the elements (sun, rain, wind). The general penalty applies if the player makes the stroke while being shielded.",
    tags: ["caddie", "weather protection", "wind shield", "general penalty"],
  },
  {
    id: "b8_077",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "While waiting to play, you use a weighted practice club to warm up. Is this allowed during the round?",
    choices: [
      "Yes — using a weighted practice device or club for stretching/warm-up between holes is generally allowed, as long as you do not use a non-conforming club to make a stroke",
      "No — you may not use any training aids during the round",
      "Yes, but only before the first tee shot",
      "No — the general penalty applies for using a training device",
    ],
    correct: 0,
    rule: "Rule 4.3a(6)",
    explanation:
      "Under Rule 4.3a, a player may use equipment for stretching or warm-up purposes (such as swinging a weighted club) during the round, as long as it is not used to make a stroke and does not unduly delay play. However, a player must not use a training aid that could help gauge or measure conditions during the stroke.",
    tags: ["practice device", "warm-up", "training aid", "during round"],
  },

  // ===================================================================
  // RULE 11 — Ball in Motion Accidentally Hits Person, Animal or Object;
  //           Deliberate Actions to Affect Ball in Motion (~16 scenarios)
  // ===================================================================

  // --- Rule 11.1: Ball in Motion Accidentally Hits Person or Outside Influence ---

  {
    id: "b8_078",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You hit a chip shot from the fringe of the green and the ball accidentally hits your golf bag, which you left on the green. What is the ruling?",
    choices: [
      "No penalty; play the ball as it lies — when a ball in motion accidentally hits your equipment, there is no penalty",
      "One-stroke penalty; play the ball as it lies",
      "General penalty; replay the shot",
      "No penalty; replay the shot",
    ],
    correct: 0,
    rule: "Rule 11.1a",
    explanation:
      "Under Rule 11.1a, if a player's ball in motion accidentally hits any person or outside influence (including the player's own equipment), there is no penalty to any player. The ball is generally played as it lies.",
    tags: ["ball in motion", "equipment", "accidentally hits", "no penalty"],
  },
  {
    id: "b8_079",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You hit a shot from the rough and the ball accidentally hits your playing partner's cart. What is the ruling?",
    choices: [
      "No penalty to anyone; play the ball as it lies",
      "One-stroke penalty to you; play the ball as it lies",
      "One-stroke penalty to your playing partner; replay the shot",
      "No penalty; you must replay the shot",
    ],
    correct: 0,
    rule: "Rule 11.1a",
    explanation:
      "Under Rule 11.1a, if a ball in motion accidentally hits any person, animal, or equipment, there is no penalty. Another player's cart is their equipment and counts as an outside influence. The ball is played as it lies.",
    tags: ["ball in motion", "cart", "outside influence", "no penalty"],
  },
  {
    id: "b8_080",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You hit a putt on the green and it is rolling toward the hole. The ball hits another ball at rest on the putting green. Both players are playing from the green. What happens in stroke play?",
    choices: [
      "Two-stroke penalty to you for hitting the other ball; your ball is played as it lies, and the other ball must be replaced",
      "No penalty; your ball is played as it lies, and the other ball is replaced",
      "No penalty; both balls are played as they lie",
      "One-stroke penalty to you; replay your putt, and the other ball is replaced",
    ],
    correct: 0,
    rule: "Rule 11.1a (Exception)",
    explanation:
      "Under Rule 11.1a, in stroke play, when both balls were on the putting green before the stroke was made and the ball in motion hits the other ball at rest, the player who made the stroke gets a two-stroke penalty. The player's ball is played from where it comes to rest, and the other ball must be replaced. (There is no penalty in match play for this situation.)",
    tags: ["putting green", "hitting another ball", "stroke play", "two-stroke penalty"],
  },
  {
    id: "b8_081",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Same situation as above — but this time it is match play. You putt from the green and your ball hits your opponent's ball, which is also on the green. What is the ruling?",
    choices: [
      "No penalty; your ball is played as it lies, and your opponent's ball is replaced on its original spot",
      "Two-stroke penalty; the same rule applies as in stroke play",
      "Loss of hole — hitting your opponent's ball is penalized in match play",
      "No penalty; both balls are played from where they end up",
    ],
    correct: 0,
    rule: "Rule 11.1a",
    explanation:
      "Under Rule 11.1a, in match play there is no penalty when a ball in motion hits another ball at rest on the putting green. The player's ball is played as it lies, and the opponent's ball must be replaced. The two-stroke penalty only applies in stroke play.",
    tags: ["putting green", "hitting another ball", "match play", "no penalty"],
  },
  {
    id: "b8_082",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You play a shot from the fairway and your ball in motion hits a bird in flight. The ball drops into a bunker. What is the ruling?",
    choices: [
      "No penalty; play the ball as it lies in the bunker — a bird is an outside influence and the deflection was accidental",
      "Replay the shot from the original spot without penalty",
      "Free drop from the bunker within one club-length",
      "One-stroke penalty; play from the bunker",
    ],
    correct: 0,
    rule: "Rule 11.1a",
    explanation:
      "Under Rule 11.1a, if a ball in motion accidentally hits an animal (an outside influence), there is no penalty and the ball must be played as it lies. There is no option to replay the stroke because the animal is an outside influence that accidentally affected the ball.",
    tags: ["ball in motion", "bird", "outside influence", "play as it lies"],
  },
  {
    id: "b8_083",
    category: "PLAYING_BALL",
    tier: "official",
    text: "You play a stroke from the general area and your ball accidentally hits your own caddie who is standing ahead on the fairway. Where must you play from?",
    choices: [
      "Play the ball as it lies — there is no penalty when a ball in motion accidentally hits the player's caddie",
      "You must replay the stroke from the original spot",
      "One-stroke penalty; play the ball as it lies",
      "General penalty; drop within one club-length of where the ball hit the caddie",
    ],
    correct: 0,
    rule: "Rule 11.1a",
    explanation:
      "Under Rule 11.1a, if a ball in motion accidentally hits any person (including the player or the player's caddie), there is no penalty. The ball is played as it lies. The old rule penalizing a player when their ball hit their caddie was removed in the 2019 Rules modernization.",
    tags: ["ball in motion", "caddie", "accidentally hits", "no penalty"],
  },

  // Special putting green exception for Rule 11.1b

  {
    id: "b8_084",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "You putt from the putting green and while the ball is rolling, your caddie accidentally stops the ball with their foot. What is the ruling?",
    choices: [
      "No penalty; however, the stroke must be cancelled — replace the ball on its original spot and replay the stroke",
      "No penalty; play the ball as it lies where the caddie stopped it",
      "One-stroke penalty; replay the putt",
      "General penalty; the ball must be replaced and the putt replayed",
    ],
    correct: 0,
    rule: "Rule 11.1b",
    explanation:
      "Under Rule 11.1b, when a ball played from the putting green is accidentally stopped or deflected by any person or outside influence, the stroke does not count. The ball must be replaced on its original spot and replayed. There is no penalty because the deflection was accidental. This special rule applies only when the stroke was played from the putting green.",
    tags: ["putting green", "caddie", "accidentally stopped", "replay stroke"],
  },

  // --- Rule 11.2: Ball in Motion Deliberately Deflected or Stopped ---

  {
    id: "b8_085",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "Your opponent in match play sees your chip shot heading for the hole and deliberately swats it away. What happens?",
    choices: [
      "General penalty to your opponent; you choose to either play the ball as it lies or estimate where the ball would have come to rest",
      "Your opponent loses the hole automatically",
      "No penalty; replay the shot",
      "Your opponent gets a one-stroke penalty; you must replay the shot",
    ],
    correct: 0,
    rule: "Rule 11.2c",
    explanation:
      "Under Rule 11.2, when a person deliberately deflects or stops a ball in motion, the player whose ball was deflected gets to choose: play the ball as it lies, or estimate where the ball would have come to rest and place it there. In match play, the person who deliberately deflected the ball receives the general penalty (loss of hole). Note: if the ball was virtually certain to have gone in the hole, the player may treat the ball as holed.",
    tags: ["deliberate deflection", "match play", "opponent", "general penalty"],
  },
  {
    id: "b8_086",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "In stroke play, you hit a shot that is heading toward out of bounds. You run and stop the ball with your foot before it goes out. What is the penalty?",
    choices: [
      "General penalty (two strokes); you must estimate where the ball would have come to rest or gone out of bounds, and proceed accordingly",
      "One-stroke penalty; play the ball from where it was stopped",
      "Disqualification",
      "No penalty — you are allowed to stop your own ball",
    ],
    correct: 0,
    rule: "Rule 11.2a",
    explanation:
      "Under Rule 11.2, if a player deliberately stops or deflects their own ball in motion, the player gets the general penalty (two strokes in stroke play). The Committee must then estimate where the ball would have come to rest. If the ball would have gone out of bounds, the player must proceed under stroke and distance. If there is a serious breach, the Committee may disqualify the player.",
    tags: ["deliberate deflection", "own ball", "stroke play", "general penalty"],
  },
  {
    id: "b8_087",
    category: "PLAYING_BALL",
    tier: "official",
    text: "In stroke play, you hit a putt on the putting green that is rolling well past the hole. You reach out and stop the ball while it is still moving. What is the ruling?",
    choices: [
      "General penalty (two strokes); the ball is placed on the spot where it was stopped or on the estimated spot where it would have come to rest, as decided by the Committee",
      "One-stroke penalty; the putt is replayed",
      "Disqualification for a serious breach",
      "No penalty; play the ball from where you stopped it",
    ],
    correct: 0,
    rule: "Rule 11.2a",
    explanation:
      "Under Rule 11.2, deliberately stopping your own ball in motion results in the general penalty (two strokes). Under the procedure, the ball is placed at the estimated spot where it would have come to rest (or the spot where it was stopped, if that is closer to the hole). If this amounts to a serious breach (a significant advantage gained), the Committee may disqualify the player.",
    tags: ["deliberate stop", "own ball", "putting green", "general penalty"],
  },
  {
    id: "b8_088",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "A spectator deliberately catches your ball in the air after you hit a shot from the fairway. What options do you have?",
    choices: [
      "You may choose to play the ball as it lies or estimate where it would have come to rest and place a ball on that spot",
      "You must replay the shot from the original spot",
      "You must play the ball from where the spectator drops it",
      "Free drop within one club-length of where the spectator caught it",
    ],
    correct: 0,
    rule: "Rule 11.2c",
    explanation:
      "Under Rule 11.2c, when any person other than the player deliberately deflects or stops the player's ball in motion, the player has the choice to: (1) play the ball as it lies, or (2) estimate where the ball would have come to rest and place a ball on that spot. No penalty applies to the player. The spectator is not governed by the Rules.",
    tags: ["deliberate deflection", "spectator", "outside influence", "estimated spot"],
  },

  // --- Rule 11.3: Deliberately Moving Objects or Altering Conditions to Affect Ball in Motion ---

  {
    id: "b8_089",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "After your opponent putts, you notice the ball is rolling toward a rake near the green. You quickly pick up the rake before the ball reaches it. Is this allowed?",
    choices: [
      "No — deliberately removing an object to affect a ball in motion is a breach of Rule 11.3; the general penalty applies",
      "Yes — removing a movable obstruction is always allowed",
      "Yes — you are being helpful to your opponent",
      "No, but only if the ball would have been deflected by the rake",
    ],
    correct: 0,
    rule: "Rule 11.3",
    explanation:
      "Under Rule 11.3, no player may deliberately alter physical conditions or move an object to affect where any ball in motion might come to rest. Picking up a rake (or any object) while a ball is in motion to influence where the ball goes is a breach, resulting in the general penalty.",
    tags: ["ball in motion", "deliberate action", "removing object", "general penalty"],
  },
  {
    id: "b8_090",
    category: "PLAYING_BALL",
    tier: "official",
    text: "While your ball is rolling on the putting green toward the hole, your caddie quickly repairs a ball mark that is in the path of the rolling ball. What is the ruling?",
    choices: [
      "General penalty — no one may deliberately alter conditions to affect a ball in motion, even if the action would normally be allowed when no ball is in motion",
      "No penalty — repairing ball marks on the green is always allowed",
      "One-stroke penalty for the caddie's action",
      "No penalty — the caddie was maintaining the course",
    ],
    correct: 0,
    rule: "Rule 11.3",
    explanation:
      "Under Rule 11.3, while a ball is in motion, no one may deliberately alter physical conditions to affect where the ball might come to rest. Even though repairing a ball mark is normally allowed under Rule 13.1c, doing so while a ball is in motion and in a position to be affected by the repair is a violation. The general penalty applies to the player.",
    tags: ["ball in motion", "ball mark repair", "putting green", "general penalty"],
  },
  {
    id: "b8_091",
    category: "PLAYING_BALL",
    tier: "official",
    text: "After you hit a chip shot, your ball is rolling toward a bunker. You quickly place your towel on the ground at the edge of the bunker to cushion the ball and keep it from going in. What is the penalty?",
    choices: [
      "General penalty — deliberately placing an object to affect where a ball in motion might come to rest is a breach of Rule 11.3",
      "One-stroke penalty for placing an object on the course",
      "No penalty — a towel is your personal equipment",
      "Disqualification for unsportsmanlike conduct",
    ],
    correct: 0,
    rule: "Rule 11.3",
    explanation:
      "Under Rule 11.3, a player must not deliberately alter physical conditions or place objects to affect where a ball in motion might come to rest. Placing a towel to block the ball from entering a bunker is a clear violation and results in the general penalty (two strokes in stroke play, loss of hole in match play). In extreme cases, the Committee could also act under Rule 1.2a for serious misconduct.",
    tags: ["ball in motion", "placing object", "deliberate action", "general penalty"],
  },
  {
    id: "b8_092",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You hit a putt on the putting green. While the ball is still rolling, you realize it is going to miss badly. You pick up the ball before it stops. What is the ruling?",
    choices: [
      "General penalty — you deliberately stopped your ball in motion; the ball must be placed on the estimated spot where it would have come to rest",
      "No penalty — you can always pick up your ball on the putting green",
      "One-stroke penalty; replay the putt",
      "No penalty; replay the putt from the original spot",
    ],
    correct: 0,
    rule: "Rule 11.2a",
    explanation:
      "Under Rule 11.2, if a player deliberately stops their own ball in motion, the general penalty applies (two strokes in stroke play, loss of hole in match play). The ball must be placed on the estimated spot where it would have come to rest. The player cannot replay the stroke — they must play from the estimated resting spot with the penalty strokes added.",
    tags: ["deliberate stop", "own ball", "putting green", "general penalty"],
  },
  {
    id: "b8_093",
    category: "PLAYING_BALL",
    tier: "official",
    text: "In match play, your opponent's ball is rolling toward the hole after a long putt. You deliberately kick it away because you don't want to concede the hole. What happens?",
    choices: [
      "General penalty (loss of hole) to you; your opponent may choose to play the ball as it lies or estimate where the ball would have come to rest",
      "Your opponent's ball is automatically considered holed",
      "Two-stroke penalty to you; your opponent replays the putt",
      "No penalty — in match play, either player may concede at any time",
    ],
    correct: 0,
    rule: "Rule 11.2c",
    explanation:
      "Under Rule 11.2c, when a player deliberately deflects or stops another player's ball in motion, the player who committed the act gets the general penalty (loss of hole in match play). The player whose ball was deflected may choose to play the ball as it lies or estimate where the ball would have come to rest. If the ball was deemed virtually certain to have been holed, the opponent could treat it as holed.",
    tags: ["deliberate deflection", "match play", "opponent", "loss of hole"],
  },
];
