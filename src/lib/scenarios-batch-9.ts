import { Scenario } from "@/types";

export const SCENARIOS_BATCH_9: Scenario[] = [
  // ============================================================
  // RULE 12 — BUNKERS (~38 scenarios)
  // ============================================================

  // --- Rule 12.1: When Ball Is in a Bunker ---

  {
    id: "b9_001",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball comes to rest on the grass bank just above a bunker, but part of the ball overhangs the sand without touching it. Is your ball in the bunker?",
    choices: [
      "No — the ball must touch or be in the sand to be in the bunker",
      "Yes — if any part of the ball is above the bunker, it is in the bunker",
      "Yes — the ball is in the bunker if it is within one club-length of the sand",
      "It depends on whether the grass bank is considered part of the bunker",
    ],
    correct: 0,
    rule: "Rule 12.1",
    explanation:
      "A ball is in a bunker when any part of it touches the sand or is inside the edge of the bunker. A ball lying on the grass lip or bank above the bunker — even if overhanging the sand — is not in the bunker unless it actually touches the sand. The grass-covered walls or edges are not part of the bunker.",
    tags: ["bunker", "ball location", "lip", "definition"],
  },
  {
    id: "b9_002",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball plugs into the steep face of a bunker and is completely embedded in the sand beneath the lip. Is the ball in the bunker?",
    choices: [
      "Yes — the ball is touching sand within the edge of the bunker",
      "No — an embedded ball beneath the lip is not considered in the bunker",
      "Only if more than half the ball is below the sand surface",
      "It depends on whether the Committee has adopted a Local Rule for embedded balls",
    ],
    correct: 0,
    rule: "Rule 12.1",
    explanation:
      "A ball is in a bunker when any part of it touches the sand or is inside the edge of the bunker. A ball embedded in the face of a bunker is clearly touching sand within the bunker boundary, so it is in the bunker. Note that the embedded ball relief under Rule 16.3 does not apply in bunkers.",
    tags: ["bunker", "embedded ball", "ball location"],
  },
  {
    id: "b9_003",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "After an explosion shot, your ball lands on a rake that is lying inside a bunker. The ball is resting on the rake above the sand. Is the ball in the bunker?",
    choices: [
      "Yes — the ball is inside the edge of the bunker even though it is sitting on the rake",
      "No — because the ball is not touching sand, it is not in the bunker",
      "You must remove the rake and the ball will then determine its status",
      "The ball is in the bunker only if the rake is partially buried in the sand",
    ],
    correct: 0,
    rule: "Rule 12.1",
    explanation:
      "A ball is in a bunker when any part of it lies on or touches sand, or is inside the edge of the bunker. Even though the ball is sitting on a rake (a movable obstruction), it is still inside the edge of the bunker. When the rake is moved, if the ball moves it must be replaced in the bunker. The ball remains in the bunker.",
    tags: ["bunker", "movable obstruction", "rake", "ball location"],
  },
  {
    id: "b9_004",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball comes to rest on a pile of leaves in a bunker. The ball is not touching sand at all — only the leaves. Is the ball in the bunker?",
    choices: [
      "Yes — the ball is inside the edge of the bunker",
      "No — the ball must be touching sand to be in the bunker",
      "Only if the leaves are touching sand",
      "The player may choose to treat it as in or out of the bunker",
    ],
    correct: 0,
    rule: "Rule 12.1",
    explanation:
      "A ball is in a bunker when any part of the ball touches the sand or is inside the edge of the bunker. Even though the ball is sitting on leaves (loose impediments) and not touching sand, it is still inside the edge of the bunker and therefore in the bunker.",
    tags: ["bunker", "loose impediments", "leaves", "ball location"],
  },
  {
    id: "b9_005",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "A bunker has been so eroded by heavy rain that there is almost no sand left — just dirt and mud in the depression. Your ball lands in this depression. Is it in a bunker?",
    choices: [
      "Yes — it is still a bunker as defined by the Committee unless they have declared it ground under repair",
      "No — without sand, it no longer meets the definition of a bunker",
      "Only if the original sand outline is still visible",
      "The player may treat it as either a bunker or general area",
    ],
    correct: 0,
    rule: "Rule 12.1, Definition of Bunker",
    explanation:
      "A bunker is a specially prepared area of sand. However, once the Committee has defined an area as a bunker, it remains a bunker even if sand has been washed away, unless the Committee declares it ground under repair or redefines it. Dirt or soil within the edge of the bunker is still part of the bunker.",
    tags: ["bunker", "definition", "ground under repair", "committee"],
  },
  {
    id: "b9_006",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is sitting on a small island of grass in the middle of a large bunker. The grass island is about 3 feet across and your ball is entirely on grass. Is your ball in the bunker?",
    choices: [
      "No — grass-covered areas within a bunker are not part of the bunker",
      "Yes — any area within the edges of a bunker is part of the bunker",
      "It depends on whether the grass is natural or artificially maintained",
      "Only the Committee can determine if the grass island is part of the bunker",
    ],
    correct: 0,
    rule: "Rule 12.1, Definition of Bunker",
    explanation:
      "The definition of a bunker specifically excludes grass-covered ground bordering or within the bunker. A grass island within a bunker is not part of the bunker. The ball on the grass island is in the general area, and the player is free to ground the club, take practice swings touching the ground, etc.",
    tags: ["bunker", "grass island", "definition", "general area"],
  },

  // --- Rule 12.2: Playing Ball in a Bunker ---

  {
    id: "b9_007",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker. Before playing your shot, you take a practice swing that touches the sand. What happens?",
    choices: [
      "You get the general penalty (two strokes in stroke play / loss of hole in match play)",
      "No penalty — practice swings in a bunker are always allowed",
      "One-stroke penalty",
      "Penalty only if the practice swing was within one club-length of the ball",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "When a ball is in a bunker, the player must not deliberately touch sand in the bunker with a hand, club, rake, or other object before making the stroke. A practice swing that touches the sand violates this Rule and results in the general penalty.",
    tags: ["bunker", "practice swing", "touching sand", "penalty"],
  },
  {
    id: "b9_008",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a fairway bunker. While waiting for the group ahead to clear, you lean on your club and it touches the sand. Is there a penalty?",
    choices: [
      "Yes — the general penalty applies for deliberately touching sand in the bunker before the stroke",
      "No — leaning on a club is not the same as testing the sand",
      "No penalty as long as you did not touch sand near the ball",
      "One-stroke penalty for accidentally testing the condition",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "Before making a stroke at a ball in a bunker, the player must not deliberately touch sand with a club or otherwise. Leaning on a club so it touches the sand is a deliberate action and results in the general penalty, regardless of where in the bunker it occurs or the player's intent.",
    tags: ["bunker", "leaning on club", "touching sand", "penalty"],
  },
  {
    id: "b9_009",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker. You remove a small fallen branch (a loose impediment) from the bunker near your ball. Is there a penalty?",
    choices: [
      "No penalty — you may remove loose impediments in a bunker",
      "Two-stroke penalty — you cannot remove anything from a bunker before playing",
      "No penalty, but only if the branch is more than one club-length from the ball",
      "One-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 12.2a, Rule 15.1a",
    explanation:
      "Under the current Rules of Golf (2023), a player may remove loose impediments anywhere on the course, including in a bunker, without penalty. This was a major change from pre-2019 Rules. You may remove leaves, stones, branches, and other loose impediments from a bunker freely.",
    tags: ["bunker", "loose impediments", "branch", "no penalty"],
  },
  {
    id: "b9_010",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker. You pick up a plastic water bottle (movable obstruction) that someone left in the sand near your ball. Is there a penalty?",
    choices: [
      "No penalty — you may remove movable obstructions anywhere on the course, including in a bunker",
      "Two-stroke penalty for moving an object in a bunker before playing",
      "No penalty, but only if the bottle is not within two club-lengths of your ball",
      "You must get Committee approval before removing it",
    ],
    correct: 0,
    rule: "Rule 12.2a, Rule 15.2a",
    explanation:
      "Movable obstructions (artificial objects like bottles, rakes, etc.) may be removed anywhere on the course without penalty, including in bunkers. This has always been the case — even a rake lying in a bunker may be moved before playing.",
    tags: ["bunker", "movable obstruction", "no penalty"],
  },
  {
    id: "b9_011",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. While removing a leaf (loose impediment) near your ball, you accidentally cause the ball to move. What is the ruling?",
    choices: [
      "One-stroke penalty, and you must replace the ball",
      "No penalty — the ball moved as a result of removing a loose impediment",
      "General penalty (two strokes) for causing the ball to move in a bunker",
      "Replace the ball with no penalty, since you were entitled to remove the leaf",
    ],
    correct: 0,
    rule: "Rule 15.1b, Rule 9.4b",
    explanation:
      "Although you are allowed to remove loose impediments in a bunker, if doing so causes your ball to move, you get a one-stroke penalty under Rule 9.4b (ball moved by player). You must replace the ball on its original spot. The exception that avoids penalty when removing loose impediments only applies on the putting green.",
    tags: ["bunker", "loose impediments", "ball moved", "penalty", "replace"],
  },
  {
    id: "b9_012",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a greenside bunker. You accidentally stumble and fall, putting your hand in the sand to catch yourself. Is there a penalty?",
    choices: [
      "No penalty — touching sand as a result of falling or stumbling is not a breach",
      "General penalty — any deliberate or accidental touching of sand is penalized",
      "One-stroke penalty for accidentally touching sand",
      "No penalty only if you did not touch sand within one club-length of the ball",
    ],
    correct: 0,
    rule: "Rule 12.2b(1), Exception",
    explanation:
      "Rule 12.2b(1) prohibits deliberately touching sand in a bunker before the stroke. However, touching sand as a result of falling or stumbling is not deliberate and is not a breach. There is no penalty.",
    tags: ["bunker", "touching sand", "falling", "no penalty", "exception"],
  },
  {
    id: "b9_013",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker. As you address the ball, you dig your feet into the sand to get a firm stance. Is there a penalty?",
    choices: [
      "No penalty — digging in with your feet to take a fair stance is allowed",
      "General penalty — you cannot disturb the sand in any way before your stroke",
      "One-stroke penalty for testing the sand with your feet",
      "No penalty only if you do not dig in more than one inch",
    ],
    correct: 0,
    rule: "Rule 12.2b(1), Exception",
    explanation:
      "One of the exceptions to the prohibition on touching sand allows the player to dig in fairly with their feet to take a stance. This is specifically permitted and there is no penalty. The player may not, however, take an exaggerated stance to test the sand.",
    tags: ["bunker", "stance", "digging in feet", "no penalty"],
  },
  {
    id: "b9_014",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. After your stroke, the ball stays in the bunker. Before your next stroke, you smooth the footprints you made walking in. Is there a penalty?",
    choices: [
      "No penalty, provided the smoothing is solely for the purpose of caring for the course and does not improve conditions for your next stroke",
      "General penalty — you cannot smooth sand in a bunker while your ball is still in it",
      "No penalty — smoothing sand is always allowed after any stroke",
      "One-stroke penalty for altering the bunker surface",
    ],
    correct: 0,
    rule: "Rule 12.2b(2)",
    explanation:
      "Between two strokes when a ball is still in the bunker, the player may smooth sand or soil in the bunker for the sole purpose of caring for the course, but must not improve conditions affecting the next stroke. If the smoothing happens to improve conditions for the next stroke, the general penalty applies.",
    tags: ["bunker", "smoothing sand", "caring for course", "between strokes"],
  },
  {
    id: "b9_015",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a large bunker. You hit your shot but the ball stays in the bunker, landing 20 yards away in the same bunker. You rake your old footprints on the way to your ball. Your ball now lies between you and the hole, and the raked area is behind you. Is there a penalty?",
    choices: [
      "No penalty — smoothing sand for course care is allowed as long as it does not improve the conditions for the next stroke, and the raked area is not on your line of play",
      "General penalty — you cannot smooth sand anywhere in the bunker while your ball is in it",
      "No penalty — you can always rake your own footprints",
      "One-stroke penalty for touching sand between strokes",
    ],
    correct: 0,
    rule: "Rule 12.2b(2)",
    explanation:
      "A player may smooth sand in the bunker for course care between strokes, provided it does not improve conditions affecting the next stroke. Since the raked area is behind the player and not on the line of play, area of intended stance, or area of intended swing, there is no improvement and no penalty.",
    tags: ["bunker", "smoothing sand", "between strokes", "caring for course", "line of play"],
  },
  {
    id: "b9_016",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a bunker. You play a shot but it stays in the bunker. On the way to your ball, you rake footprints that happen to be directly on your line of play for the next stroke. Is there a penalty?",
    choices: [
      "Yes — the general penalty applies because smoothing improved conditions affecting the next stroke",
      "No — raking for course care is always allowed regardless of where it occurs",
      "No — you cannot know your line of play until you reach your ball",
      "One-stroke penalty for touching the line of play",
    ],
    correct: 0,
    rule: "Rule 12.2b(2)",
    explanation:
      "While a player may smooth sand in a bunker for caring for the course, this must not improve conditions affecting the next stroke. If the smoothing occurs on the player's line of play, area of intended stance, or area of intended swing, it improves conditions and results in the general penalty.",
    tags: ["bunker", "smoothing sand", "line of play", "improving conditions", "penalty"],
  },
  {
    id: "b9_017",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker. As you swing at the ball, your club touches the sand on the backswing before striking the ball on the downswing. Is there a penalty?",
    choices: [
      "No penalty — touching sand with the club on the backswing for the stroke is allowed",
      "General penalty for touching sand before impact",
      "One-stroke penalty for grounding the club",
      "Penalty only if the club touches sand within one club-length of the ball",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "The restriction on touching sand in a bunker applies to actions taken before making the stroke — such as grounding the club at address, taking practice swings that touch sand, or deliberately testing the sand. Touching the sand on the backswing of the actual stroke is part of making the stroke itself and is not a breach of Rule 12.2b.",
    tags: ["bunker", "backswing", "touching sand", "no penalty"],
  },
  {
    id: "b9_018",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. You place your golf bag on the sand while you prepare to play your shot. Is there a penalty?",
    choices: [
      "No penalty — setting down equipment in a bunker is allowed",
      "General penalty for deliberately touching sand with an object",
      "One-stroke penalty",
      "No penalty only if the bag is more than two club-lengths from the ball",
    ],
    correct: 0,
    rule: "Rule 12.2b(1), Exception",
    explanation:
      "Setting down a club, bag, rake, or other equipment in the bunker is specifically permitted under the exceptions to Rule 12.2b. This is not considered testing the conditions of the bunker. There is no penalty.",
    tags: ["bunker", "equipment", "touching sand", "exception"],
  },
  {
    id: "b9_019",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball lies in a bunker and you want to identify it. Can you mark and lift the ball to identify it, touching the sand in the process?",
    choices: [
      "Yes — you may mark, lift, and identify the ball, touching sand as reasonably necessary",
      "No — you cannot touch sand for any reason before your stroke",
      "Yes, but you get a one-stroke penalty for lifting the ball in a bunker",
      "Only if you cannot identify it without lifting",
    ],
    correct: 0,
    rule: "Rule 12.2b(1), Exception, Rule 7.3",
    explanation:
      "A player may mark and lift a ball to identify it anywhere on the course, including in a bunker. The exceptions to Rule 12.2b allow touching sand in a bunker when doing so for specific purposes, including identifying the ball under Rule 7.3. There is no penalty as long as the ball is replaced.",
    tags: ["bunker", "ball identification", "lifting", "touching sand"],
  },
  {
    id: "b9_020",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a bunker. Before playing, you use your wedge to push some sand away to check whether there is a sprinkler head buried beneath the surface near your ball. Is there a penalty?",
    choices: [
      "Yes — the general penalty applies; you may not probe or dig in the sand to search for an immovable obstruction",
      "No — you are entitled to determine if an immovable obstruction interferes with your stroke",
      "No penalty if the sprinkler head would have given you free relief",
      "One-stroke penalty for testing conditions",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "The prohibition on touching sand in a bunker before the stroke does not have an exception for searching for something beneath the surface. Deliberately probing or digging in the sand with a club to find a buried obstruction is a breach of Rule 12.2b, resulting in the general penalty.",
    tags: ["bunker", "touching sand", "obstruction", "penalty", "digging"],
  },
  {
    id: "b9_021",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker. You ground your club in the sand right behind the ball while addressing it. What is the ruling?",
    choices: [
      "General penalty — you cannot ground your club in the sand of a bunker before the stroke",
      "No penalty — you may ground your club lightly at address",
      "One-stroke penalty for grounding the club",
      "No penalty as long as you don't press the club into the sand",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "When a ball is in a bunker, the player must not touch the sand with a club before making the stroke, except on the backswing for the stroke. Grounding the club at address — placing it on the sand behind or in front of the ball — is a breach of Rule 12.2b and incurs the general penalty.",
    tags: ["bunker", "grounding club", "addressing ball", "penalty"],
  },
  {
    id: "b9_022",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. Between strokes (the ball is still in the bunker), you use a rake to smooth the area of your previous shot explosion — but this area is also the area of your intended swing for the next shot. Is there a penalty?",
    choices: [
      "Yes — the general penalty applies because smoothing improved the conditions for your next stroke",
      "No — smoothing for course care is always allowed between strokes",
      "No — raking with a rake is never penalized",
      "One-stroke penalty for altering conditions",
    ],
    correct: 0,
    rule: "Rule 12.2b(2)",
    explanation:
      "While a player may smooth sand between strokes for the purpose of caring for the course, the smoothing must not improve the conditions affecting the next stroke. Smoothing the area of the intended swing for the next stroke improves conditions and results in the general penalty.",
    tags: ["bunker", "smoothing sand", "improving conditions", "area of swing"],
  },
  {
    id: "b9_023",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a bunker. You are unsure whether an object near your ball is a stone or a piece of artificial material. You pick it up and discover it is a stone (loose impediment). You then set it back down. Is there any issue?",
    choices: [
      "No penalty — you were entitled to remove loose impediments in the bunker, and setting it down is fine",
      "General penalty for touching the sand while picking up the object",
      "One-stroke penalty for moving an object before identifying it",
      "No penalty only if you did not change your lie when picking it up",
    ],
    correct: 0,
    rule: "Rule 12.2a, Rule 15.1a",
    explanation:
      "A player may remove loose impediments from a bunker without penalty under Rule 15.1a. Picking up a stone to determine whether it is a loose impediment or an obstruction is reasonable. Since you are allowed to remove loose impediments in a bunker, there is no penalty regardless of whether you keep it out or put it back.",
    tags: ["bunker", "loose impediments", "stone", "identification"],
  },
  {
    id: "b9_024",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. You take a practice swing in the bunker, but your club does NOT touch the sand — it only swings through the air above the sand. Is there a penalty?",
    choices: [
      "No penalty — a practice swing that does not touch the sand is allowed",
      "General penalty — practice swings are not allowed in bunkers",
      "One-stroke penalty for taking a practice swing near the ball",
      "No penalty, but only if the practice swing is more than two club-lengths from the ball",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "The prohibition is on deliberately touching sand in the bunker with a hand, club, rake, or other object before making the stroke. A practice swing that does not touch the sand does not breach this Rule, and there is no penalty.",
    tags: ["bunker", "practice swing", "no penalty", "touching sand"],
  },
  {
    id: "b9_025",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "In stroke play, your ball is in a bunker. You ground your club in the sand before your stroke (general penalty). You then play the ball from the bunker. How many penalty strokes do you add?",
    choices: [
      "Two penalty strokes — the general penalty in stroke play",
      "One penalty stroke",
      "Four penalty strokes — two for grounding and two for playing from a wrong place",
      "You are disqualified for a serious breach",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "The general penalty for touching sand in a bunker before the stroke is two strokes in stroke play (or loss of hole in match play). The player is not penalized further for then playing the stroke — the breach occurs at the moment the sand is touched, and the penalty is applied. There is no wrong place issue; the ball was played from its correct position.",
    tags: ["bunker", "grounding club", "general penalty", "stroke play"],
  },

  // --- Rule 12.3: Specific Rules for Relief for Ball in Bunker ---

  {
    id: "b9_026",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is in a bunker and you decide it is unplayable. What are your relief options?",
    choices: [
      "All three: stroke and distance; back-on-the-line in the bunker; lateral relief within two club-lengths in the bunker — all for one penalty stroke. Or, for two penalty strokes, back-on-the-line outside the bunker.",
      "Only stroke and distance — you must go back to where you last played",
      "You may drop within two club-lengths of the ball in the general area for one stroke",
      "Drop anywhere in the bunker for one penalty stroke",
    ],
    correct: 0,
    rule: "Rule 12.3, Rule 19.3",
    explanation:
      "When declaring a ball unplayable in a bunker, the player has three one-penalty-stroke options, but two of them (back-on-the-line and lateral) require the ball to be dropped IN the bunker. The player also has a fourth option for two penalty strokes: drop outside the bunker on a line going back from the hole through the ball's spot.",
    tags: ["bunker", "unplayable ball", "relief options", "penalty strokes"],
  },
  {
    id: "b9_027",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is plugged under the lip of a bunker with no shot. You declare it unplayable and want to drop outside the bunker. How many penalty strokes does this cost?",
    choices: [
      "Two penalty strokes",
      "One penalty stroke",
      "Three penalty strokes",
      "You cannot drop outside the bunker — you must stay in the bunker",
    ],
    correct: 0,
    rule: "Rule 19.3b",
    explanation:
      "Under Rule 19.3b, when a ball in a bunker is declared unplayable, the player has the additional option of taking back-on-the-line relief outside the bunker for a total of two penalty strokes. This is more costly than the one-penalty-stroke options (which require staying in the bunker) but allows escape from a difficult bunker situation.",
    tags: ["bunker", "unplayable ball", "outside bunker", "two strokes"],
  },
  {
    id: "b9_028",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. You declare it unplayable and choose lateral relief (two club-lengths, not nearer the hole). Where must you drop?",
    choices: [
      "Within two club-lengths in the bunker, not nearer the hole than the ball's original spot",
      "Within two club-lengths anywhere, including outside the bunker",
      "Within one club-length in the bunker",
      "On any spot in the bunker, not nearer the hole",
    ],
    correct: 0,
    rule: "Rule 19.3a, Rule 19.2c",
    explanation:
      "When taking lateral relief for an unplayable ball in a bunker, the relief area is within two club-lengths of the spot of the original ball, not nearer the hole, and it must be in the bunker. If the relief area extends outside the bunker, any drop that comes to rest outside the bunker must be re-dropped.",
    tags: ["bunker", "unplayable ball", "lateral relief", "two club-lengths"],
  },
  {
    id: "b9_029",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a bunker. You declare it unplayable and choose back-on-the-line relief for one penalty stroke. You drop on the line but the ball rolls out of the bunker. What do you do?",
    choices: [
      "You must re-drop — the ball must come to rest in the bunker when using the one-penalty-stroke back-on-the-line option",
      "Play it from where it came to rest outside the bunker — the drop was valid",
      "Place the ball on the spot where it first struck the bunker sand",
      "The ball must be re-dropped with an additional one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 19.3a, Rule 14.3c(2)",
    explanation:
      "When taking back-on-the-line relief for an unplayable ball in a bunker with one penalty stroke, the relief area is in the bunker. If the ball rolls outside the bunker, it has rolled outside the relief area. The player must re-drop. If the second drop also rolls out, the player places the ball where it first hit the ground on the second drop.",
    tags: ["bunker", "unplayable ball", "back on the line", "re-drop"],
  },
  {
    id: "b9_030",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a bunker. You declare it unplayable and elect the two-penalty-stroke option to go outside the bunker. On what line do you drop?",
    choices: [
      "On the line straight back from the hole through the spot where the ball lay in the bunker, going as far back as you wish",
      "On any line you choose, as long as you go farther from the hole",
      "On a line from the ball to the nearest point of relief outside the bunker",
      "You may drop anywhere in the general area within two club-lengths of the bunker edge",
    ],
    correct: 0,
    rule: "Rule 19.3b",
    explanation:
      "The two-penalty-stroke option for an unplayable ball in a bunker uses back-on-the-line relief: the player drops on the line going straight back from the hole through the spot where the ball lay in the bunker. The player may go back as far as desired on that line, and the ball must come to rest in the general area (outside the bunker).",
    tags: ["bunker", "unplayable ball", "two strokes", "back on the line", "outside bunker"],
  },
  {
    id: "b9_031",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. An immovable obstruction (e.g., a drainage grate) in the bunker interferes with your stance. You are entitled to free relief. Where must you drop?",
    choices: [
      "In the bunker at the nearest point of complete relief, within one club-length, not nearer the hole",
      "Outside the bunker at the nearest point of relief",
      "Anywhere in the bunker, not nearer the hole",
      "You may choose to drop in or outside the bunker",
    ],
    correct: 0,
    rule: "Rule 16.1b",
    explanation:
      "When taking free relief from an immovable obstruction in a bunker, the player must drop in the bunker. The nearest point of complete relief must be in the bunker, and the relief area is within one club-length of that point, not nearer the hole, and must be in the bunker. Alternatively, for one penalty stroke, the player may take back-on-the-line relief outside the bunker.",
    tags: ["bunker", "immovable obstruction", "free relief", "nearest point"],
  },
  {
    id: "b9_032",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a bunker with temporary water (casual water). There is no spot in the bunker that provides complete relief from the temporary water. What are your options?",
    choices: [
      "Take maximum available relief in the bunker (free), or take back-on-the-line relief outside the bunker for one penalty stroke",
      "You must play the ball as it lies — no relief for temporary water in bunkers",
      "Free drop outside the bunker at the nearest point of relief",
      "Take maximum available relief in the bunker, or re-drop anywhere in the general area for one penalty stroke",
    ],
    correct: 0,
    rule: "Rule 16.1c(1), Rule 16.1c(2)",
    explanation:
      "When there is no point of complete relief within the bunker from an abnormal course condition like temporary water, the player may take maximum available relief in the bunker (drop at the point of maximum relief, within one club-length, not nearer the hole) at no penalty. Alternatively, for one penalty stroke, the player may take back-on-the-line relief outside the bunker.",
    tags: ["bunker", "temporary water", "maximum available relief", "penalty relief"],
  },
  {
    id: "b9_033",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "After playing out of a bunker, the ball is safely on the green. Are you required to rake the bunker?",
    choices: [
      "The Rules do not require it, but etiquette and the spirit of the game strongly expect you to rake the bunker",
      "Yes — Rule 12.2 requires all players to rake after playing from a bunker",
      "No — raking bunkers is solely the responsibility of course maintenance",
      "Only in stroke play — match play has no raking requirement",
    ],
    correct: 0,
    rule: "Rule 12.2b(3)",
    explanation:
      "The Rules of Golf do not penalize a player for failing to rake a bunker. However, Rule 12.2b(3) states that after the ball is out of the bunker, the player may smooth sand for caring for the course. Good etiquette demands raking after playing from a bunker to leave it in good condition for other players.",
    tags: ["bunker", "raking", "etiquette", "course care"],
  },
  {
    id: "b9_034",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball lies just outside a bunker in the rough. You take a practice swing that touches the sand in the bunker. Is there a penalty?",
    choices: [
      "No penalty — the restriction on touching sand only applies when the player's ball is in the bunker",
      "General penalty — you cannot touch sand in a bunker before any stroke near a bunker",
      "One-stroke penalty for testing the conditions of the bunker",
      "No penalty, but only if your practice swing was not aimed at the ball",
    ],
    correct: 0,
    rule: "Rule 12.2b",
    explanation:
      "The restrictions under Rule 12.2b on touching sand before making a stroke only apply when the player's ball lies in a bunker. If the ball is outside the bunker — even just barely outside — the player is free to touch sand in the bunker without penalty, including practice swings or grounding a club.",
    tags: ["bunker", "ball outside bunker", "practice swing", "no penalty"],
  },
  {
    id: "b9_035",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "In stroke play, your ball is in a bunker. You ground your club in the sand (a breach). You then realize the mistake and, without playing a stroke, declare the ball unplayable and take relief in the bunker. Does the penalty for grounding the club still apply?",
    choices: [
      "Yes — the two-stroke penalty for touching sand still applies in addition to the one-stroke unplayable penalty",
      "No — declaring unplayable cancels the previous penalty",
      "No — the penalty is replaced by the unplayable ball penalty",
      "Yes, but they are combined into a single two-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 12.2b(1), Rule 19.3",
    explanation:
      "The penalty for touching sand in a bunker (general penalty: two strokes in stroke play) occurred as a separate breach at the moment the club touched the sand. Declaring the ball unplayable is a separate action with its own penalty. Both penalties apply: two strokes for touching sand + one stroke for unplayable relief = three total penalty strokes.",
    tags: ["bunker", "grounding club", "unplayable ball", "multiple penalties"],
  },
  {
    id: "b9_036",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is in a bunker. You want to determine if an abnormal course condition exists (e.g., temporary water beneath the surface). Can you touch the sand to find out?",
    choices: [
      "No — you may not probe or test the sand to determine the presence of temporary water beneath the surface; the general penalty applies",
      "Yes — you are allowed to determine if you have an abnormal course condition",
      "Yes, but only with your foot, not a club",
      "Only if there is visible water on the surface nearby",
    ],
    correct: 0,
    rule: "Rule 12.2b(1)",
    explanation:
      "When a ball is in a bunker, the player cannot deliberately touch sand to test the condition of the bunker. Probing the sand to determine if temporary water exists beneath the surface is deliberately touching the sand and results in the general penalty. You may only claim temporary water relief if the condition is visible or known.",
    tags: ["bunker", "temporary water", "testing conditions", "touching sand", "penalty"],
  },
  {
    id: "b9_037",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is in a bunker. You accidentally drop your glove in the sand while preparing to play. Is there a penalty?",
    choices: [
      "No penalty — dropping an object accidentally or setting it down is not a deliberate attempt to test conditions",
      "General penalty for deliberately touching sand with an object",
      "One-stroke penalty for dropping an item in the bunker",
      "No penalty only if you pick it up before playing your stroke",
    ],
    correct: 0,
    rule: "Rule 12.2b(1), Exception",
    explanation:
      "Accidentally dropping a glove in the sand is not a deliberate action to test the condition of the bunker. The prohibition under Rule 12.2b is on deliberately touching sand with a hand, club, rake, or other object. Accidental contact is not penalized, and placing equipment down is specifically allowed.",
    tags: ["bunker", "touching sand", "accidental", "no penalty"],
  },
  {
    id: "b9_038",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "In match play, your opponent's ball is in a bunker. You notice your opponent make a practice swing that touches the sand. Your opponent does not call a penalty on themselves. What should you do?",
    choices: [
      "You may raise the issue with your opponent — if the facts confirm a breach, your opponent loses the hole",
      "Nothing — it is solely your opponent's responsibility to call penalties on themselves",
      "Call a referee immediately or the claim is lost",
      "You may ignore it — in match play, opponents are not required to report breaches",
    ],
    correct: 0,
    rule: "Rule 12.2b(1), Rule 3.2d",
    explanation:
      "In match play, if a player sees their opponent breach a Rule, they may raise the issue. If the opponent touched sand with a practice swing in a bunker, the general penalty (loss of hole) applies under Rule 12.2b. The player should notify the opponent of the penalty claim in a timely manner.",
    tags: ["bunker", "match play", "penalty claim", "practice swing", "opponent"],
  },

  // ============================================================
  // RULE 13 — PUTTING GREENS (~55 scenarios)
  // ============================================================

  // --- Rule 13.1a: When Ball Is on the Putting Green ---

  {
    id: "b9_039",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball comes to rest on the fringe (apron) just off the putting green. Can you mark, lift, and clean the ball?",
    choices: [
      "No — the fringe is not the putting green, so you may not mark and lift without a specific Rule allowing it",
      "Yes — the fringe is considered part of the putting green",
      "Yes — you may always mark and lift your ball anywhere on the course",
      "Only if another player asks you to mark it",
    ],
    correct: 0,
    rule: "Rule 13.1a, Rule 13.1b",
    explanation:
      "The right to mark, lift, and clean a ball without penalty under Rule 13.1b applies only when the ball is on the putting green. The fringe or apron is not part of the putting green — it is the general area. A ball on the fringe may only be lifted under other applicable Rules (e.g., to identify it under Rule 7.3).",
    tags: ["putting green", "fringe", "marking", "lifting", "cleaning"],
  },
  {
    id: "b9_040",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is sitting right on the edge of the putting green — half the ball is on the green surface and half is on the fringe. Is the ball on the putting green?",
    choices: [
      "Yes — a ball is on the putting green if any part of it touches the putting green",
      "No — the majority of the ball must be on the green surface",
      "It depends on whether the ball's center is on the green",
      "The player may choose to treat it as either on or off the green",
    ],
    correct: 0,
    rule: "Rule 13.1a",
    explanation:
      "A ball is on the putting green when any part of the ball touches the putting green surface. Even if most of the ball hangs over the fringe, as long as any part touches the green, it is on the putting green and the player is entitled to mark, lift, clean, and replace it.",
    tags: ["putting green", "ball location", "fringe", "edge"],
  },

  // --- Rule 13.1b: Marking, Lifting, and Cleaning Ball ---

  {
    id: "b9_041",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is on the putting green. You mark it, lift it, clean it, and replace it. Is there any penalty?",
    choices: [
      "No penalty — on the putting green, you may always mark, lift, clean, and replace the ball",
      "No penalty for marking and lifting, but a one-stroke penalty for cleaning",
      "One-stroke penalty for lifting the ball",
      "No penalty only if another player requested you mark it",
    ],
    correct: 0,
    rule: "Rule 13.1b",
    explanation:
      "A ball on the putting green may always be marked, lifted, and cleaned without penalty. This is one of the fundamental rights on the putting green. The ball must be replaced on its original spot.",
    tags: ["putting green", "marking", "lifting", "cleaning", "no penalty"],
  },
  {
    id: "b9_042",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is on the putting green. You lift it without first marking its position. What happens?",
    choices: [
      "One-stroke penalty for lifting without marking, but you must replace it on its estimated original spot",
      "No penalty — marking is recommended but not required",
      "General penalty (two strokes) for failing to mark",
      "The ball must be played from wherever you are standing when you realize the error",
    ],
    correct: 0,
    rule: "Rule 13.1b, Rule 14.1a",
    explanation:
      "Under Rule 14.1a, before lifting a ball that must be replaced, the player must mark the spot. Failing to mark before lifting results in a one-stroke penalty. The player must then replace the ball on its original spot (estimated if necessary).",
    tags: ["putting green", "marking", "lifting", "penalty", "failure to mark"],
  },

  // --- Rule 13.1c: Improvements Allowed on Putting Green ---

  {
    id: "b9_043",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "You notice a ball mark (pitch mark) on the putting green on your line of putt. Can you repair it?",
    choices: [
      "Yes — you may repair ball marks and any other damage on the putting green",
      "Yes, but only if it is your own ball mark",
      "No — you may not touch the line of putt",
      "Only if it is within one club-length of your ball",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Under Rule 13.1c, a player may repair almost any damage on the putting green, including ball marks (pitch marks), regardless of who caused them. This applies to the line of putt and anywhere on the green. The 2019 Rules greatly expanded what damage can be repaired on the green.",
    tags: ["putting green", "ball mark", "repair", "line of putt"],
  },
  {
    id: "b9_044",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "There are spike marks (shoe damage) on the putting green in your line of putt. Can you repair them?",
    choices: [
      "Yes — shoe damage (spike marks) may be repaired on the putting green",
      "No — spike marks cannot be repaired before putting",
      "Only after everyone in the group has putted",
      "Only if they were made by your own shoes",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Under the 2023 Rules, spike marks (shoe damage) are included in the types of damage that may be repaired on the putting green. This was a significant change from older Rules, which prohibited repairing spike marks before putting. Players may now repair spike marks on their line of putt without penalty.",
    tags: ["putting green", "spike marks", "repair", "shoe damage"],
  },
  {
    id: "b9_045",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "You see an old hole plug on the putting green near your line of putt. Can you tap it down?",
    choices: [
      "Yes — old hole plugs are damage that may be repaired on the putting green",
      "No — old hole plugs are considered natural features of the green",
      "Only if the plug is raised above the surface",
      "Only a referee or Committee member may touch old hole plugs",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Old hole plugs are specifically listed as damage that may be repaired on the putting green under Rule 13.1c(2). A player may tap down or repair an old hole plug at any time, including on the line of putt, without penalty.",
    tags: ["putting green", "old hole plug", "repair", "damage"],
  },
  {
    id: "b9_046",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "You notice aeration holes on the putting green in your line of putt. Can you repair or fill them?",
    choices: [
      "No — aeration holes are not considered damage and cannot be repaired by the player",
      "Yes — any imperfection on the green can be repaired",
      "Yes, but only with sand provided by the Committee",
      "Only if the Committee has adopted a Local Rule allowing it",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Aeration holes are specifically excluded from the types of damage that may be repaired on the putting green. They are part of regular course maintenance and considered an existing condition of the green. Players cannot fill, repair, or alter aeration holes.",
    tags: ["putting green", "aeration holes", "repair", "not allowed"],
  },
  {
    id: "b9_047",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "There is natural wear on the putting green — a bare or thin spot on your line of putt from heavy foot traffic. Can you repair it?",
    choices: [
      "No — natural surface imperfections and natural wear of the hole cannot be repaired",
      "Yes — any damage on the green can be repaired",
      "Yes, but only by pressing it down with your foot",
      "Only if it affects a putt of less than 10 feet",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Natural surface imperfections (bare spots, thin areas, diseased areas, etc.) and natural wear of the hole are not considered damage that may be repaired. These are existing conditions of the green. Only specific types of damage — ball marks, shoe damage, animal damage, old hole plugs, turf plugs, and embedded objects — may be repaired.",
    tags: ["putting green", "natural wear", "surface imperfections", "not allowed"],
  },
  {
    id: "b9_048",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "You find a small embedded acorn on the putting green in your line of putt. Can you remove it?",
    choices: [
      "Yes — embedded objects in the putting green are considered damage that may be repaired",
      "No — embedded natural objects cannot be removed from the green",
      "Yes, but only if it is an artificial object, not a natural one",
      "Only if it affects the roll of the ball",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Rule 13.1c(2) allows repair of damage on the putting green, which includes removing embedded objects (such as a stone, acorn, or tee). An embedded object in the green may be removed and the resulting damage repaired, regardless of whether it is natural or artificial.",
    tags: ["putting green", "embedded object", "repair", "damage"],
  },
  {
    id: "b9_049",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "An animal (e.g., a squirrel) has scratched up an area of the putting green on your line of putt. Can you repair this?",
    choices: [
      "Yes — animal damage on the putting green may be repaired",
      "No — only ball marks and spike marks can be repaired",
      "Only if the animal damage was made during the current round",
      "Only a greenkeeper can repair animal damage",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "Animal damage (scratches, digging, hoofprints, etc.) is specifically included in the types of damage that may be repaired on the putting green under Rule 13.1c(2). The player may repair this damage without penalty.",
    tags: ["putting green", "animal damage", "repair", "damage"],
  },
  {
    id: "b9_050",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "You are repairing a ball mark on the putting green and in doing so, you inadvertently improve your line of putt beyond what the repair requires. What is the ruling?",
    choices: [
      "General penalty — you may repair damage, but if you go beyond repair and improve the green surface, it is a breach",
      "No penalty — any action taken while repairing is protected",
      "One-stroke penalty for improving line of putt",
      "No penalty as long as you did not use a tool other than a tee or repair tool",
    ],
    correct: 0,
    rule: "Rule 13.1c(2), Rule 8.1a",
    explanation:
      "While a player is entitled to repair damage on the putting green, the player must not go beyond what is necessary for the repair. If repairing damage results in improving the putting green surface beyond the repair (e.g., pressing down or smoothing beyond the damaged area), the player gets the general penalty for improving conditions under Rule 8.1a.",
    tags: ["putting green", "repair", "improving conditions", "general penalty"],
  },
  {
    id: "b9_051",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "You want to repair a ball mark on the putting green. What tools can you use?",
    choices: [
      "Anything reasonable — a tee, a ball-mark repair tool, your fingers, the sole of a club, etc.",
      "Only an official ball-mark repair tool",
      "Only a tee or your fingers",
      "Only tools provided by the Committee",
    ],
    correct: 0,
    rule: "Rule 13.1c(2)",
    explanation:
      "The Rules do not specify what tool must be used to repair damage on the putting green. Players may use a tee, a dedicated repair tool, their fingers, the sole of a putter, or anything else that is reasonable. There is no restriction on the type of implement used for repairs.",
    tags: ["putting green", "ball mark", "repair", "tools"],
  },

  // --- Rule 13.1d: When Ball or Ball-Marker Moves on Putting Green ---

  {
    id: "b9_052",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball is on the putting green. A strong gust of wind blows it to a new position. You have NOT yet marked and lifted the ball. What do you do?",
    choices: [
      "Play the ball from its new position — natural forces moved an un-lifted ball, so it must be played from where it comes to rest",
      "Replace the ball on its original spot without penalty",
      "Replace the ball with a one-stroke penalty",
      "You may choose to play from the new position or replace it",
    ],
    correct: 0,
    rule: "Rule 9.3",
    explanation:
      "When natural forces (wind, water, gravity) cause a ball at rest to move, the ball must generally be played from its new position. There is no penalty. The exception under Rule 13.1d (replace without penalty) only applies when the ball had already been lifted and replaced, or marked and moved, and then moves due to natural forces.",
    tags: ["putting green", "wind", "natural forces", "ball moved", "play from new position"],
  },
  {
    id: "b9_053",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is on the putting green. You mark it, lift it, clean it, and replace it on its spot. A gust of wind then blows the ball 3 feet to a new position. What do you do?",
    choices: [
      "Replace the ball on its original spot without penalty",
      "Play the ball from its new position — wind moved it",
      "Replace the ball with a one-stroke penalty",
      "Place the ball at the nearest point between the old and new positions",
    ],
    correct: 0,
    rule: "Rule 13.1d(2)",
    explanation:
      "Under Rule 13.1d(2), if a ball that has already been lifted and replaced on the putting green is moved by natural forces (wind, water, gravity), the ball must be replaced on its original spot without penalty. This is a special exception for the putting green — the key trigger is that the ball was previously lifted and replaced.",
    tags: ["putting green", "wind", "lifted and replaced", "replace", "natural forces"],
  },
  {
    id: "b9_054",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is on the putting green. You mark it and lift it. Before you replace it, the ball-marker is moved by a strong gust of wind. What do you do?",
    choices: [
      "Replace the ball-marker on the original spot (or estimate it) and then replace the ball — no penalty",
      "Place the ball where the ball-marker moved to",
      "Drop the ball at the estimated original spot with a one-stroke penalty",
      "You must re-mark from the ball-marker's new position",
    ],
    correct: 0,
    rule: "Rule 13.1d(1)",
    explanation:
      "Under Rule 13.1d(1), if a ball-marker is moved by natural forces on the putting green, the player replaces the ball-marker on its original spot (estimated if necessary) without penalty, and then replaces the ball. There is no penalty for the ball-marker being moved by natural forces.",
    tags: ["putting green", "ball-marker", "wind", "natural forces", "replace"],
  },
  {
    id: "b9_055",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is on the putting green. You accidentally kick the ball while walking to mark it. What is the ruling?",
    choices: [
      "No penalty — on the putting green, if you accidentally cause your ball to move, you replace it without penalty",
      "One-stroke penalty, and replace the ball",
      "General penalty for moving your ball",
      "Play the ball from its new position",
    ],
    correct: 0,
    rule: "Rule 13.1d(1)",
    explanation:
      "Under Rule 13.1d(1), there is no penalty if you, your opponent, or either caddie accidentally causes your ball or ball-marker to move on the putting green. The ball (or ball-marker) must simply be replaced on its original spot. This is a special exception on the putting green.",
    tags: ["putting green", "accidental movement", "no penalty", "replace"],
  },
  {
    id: "b9_056",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is on a steep slope of the putting green. You mark and lift your ball, repair a ball mark nearby, and replace your ball. Due to the slope, the ball will not stay on the original spot — it keeps rolling away. What do you do?",
    choices: [
      "Try to replace the ball a second time on the original spot. If it still will not stay, place it on the nearest spot where it will remain at rest, not nearer the hole, that is on the green.",
      "You must replace it on the original spot using a tee to prop it up",
      "Drop the ball within one club-length of the original spot",
      "Play the ball from wherever it rolls to — the spot has changed due to conditions",
    ],
    correct: 0,
    rule: "Rule 14.2e",
    explanation:
      "Under Rule 14.2e, if a ball will not stay at rest on its original spot, the player must try a second time. If it still will not stay, the player must place it on the nearest spot where it will remain at rest, not nearer the hole. On the putting green, this nearest spot must also be on the putting green (or in the general area if no spot on the green works).",
    tags: ["putting green", "ball won't stay", "steep slope", "placement", "nearest spot"],
  },

  // --- Rule 13.1e: No Testing of Green Surfaces ---

  {
    id: "b9_057",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Before your putt, you roll a ball along the putting green surface near your line to test the speed of the green. Is there a penalty?",
    choices: [
      "Yes — the general penalty applies for deliberately testing the surface of a putting green",
      "No penalty — testing the green is allowed before your first putt",
      "One-stroke penalty for testing",
      "No penalty if the test was not on your line of putt",
    ],
    correct: 0,
    rule: "Rule 13.1e",
    explanation:
      "Rule 13.1e prohibits deliberately testing the surface of the putting green (or a wrong putting green) by rolling a ball or roughening or scraping the surface. The general penalty applies. This prohibition is during the round — you may test practice greens.",
    tags: ["putting green", "testing surface", "rolling ball", "penalty"],
  },
  {
    id: "b9_058",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Between holes, you rub the surface of the putting green you just played to feel the grain of the grass. Is there a penalty?",
    choices: [
      "Yes — the general penalty applies; testing the surface is prohibited during the round, including between holes on the green just played",
      "No — testing is only prohibited before your own putt, not between holes",
      "No penalty — rubbing is different from rolling a ball",
      "No penalty since you have already holed out on that green",
    ],
    correct: 0,
    rule: "Rule 13.1e",
    explanation:
      "Rule 13.1e prohibits deliberately testing the surface of any putting green during the round. This includes rubbing or scraping the surface to test the grain, speed, or condition. Between holes, a player may not test the putting green of the hole just completed or the hole about to be played (unless the Committee has allowed testing between holes via a Local Rule).",
    tags: ["putting green", "testing surface", "between holes", "grain", "penalty"],
  },
  {
    id: "b9_059",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Between two holes in stroke play, a player rolls a ball on the putting green of the hole just completed. The Committee has NOT adopted a Local Rule permitting this. What is the penalty?",
    choices: [
      "The general penalty (two strokes) is applied to the player's score on the NEXT hole",
      "The general penalty is applied to the hole just completed",
      "One-stroke penalty applied to the next hole",
      "Disqualification for testing during the round",
    ],
    correct: 0,
    rule: "Rule 13.1e",
    explanation:
      "When a breach of Rule 13.1e occurs between two holes, the penalty is applied to the next hole, not the hole just completed. The general penalty (two strokes in stroke play) is added to the player's score on the next hole to be played.",
    tags: ["putting green", "testing surface", "between holes", "penalty application"],
  },

  // --- Rule 13.1f: Relief Must Be Taken from Wrong Putting Green ---

  {
    id: "b9_060",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your ball comes to rest on a putting green other than the one for the hole you are playing (a 'wrong green'). What must you do?",
    choices: [
      "You MUST take free relief — you cannot play from a wrong green",
      "You may play it as it lies from the wrong green",
      "Take relief with a one-stroke penalty",
      "You must take relief only if the wrong green is for the next hole",
    ],
    correct: 0,
    rule: "Rule 13.1f",
    explanation:
      "When a ball is on a wrong putting green, the player must NOT play the ball as it lies. Free relief is mandatory. The player must take the nearest point of complete relief in the general area (not nearer the hole, not on any putting green) and drop within one club-length of that point.",
    tags: ["wrong green", "mandatory relief", "free relief"],
  },
  {
    id: "b9_061",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is on a wrong putting green. You take relief by finding the nearest point of complete relief. 'Complete relief' from a wrong green means relief from which interferences?",
    choices: [
      "The ball must not be on the wrong green, your stance must not be on the wrong green, and your area of intended swing must not be affected by the wrong green",
      "Only the ball must be off the wrong green — stance does not matter",
      "The ball and stance must be off the wrong green, but swing does not matter",
      "Only interference with the ball matters, not stance or swing",
    ],
    correct: 0,
    rule: "Rule 13.1f(2)",
    explanation:
      "When taking relief from a wrong putting green, 'complete relief' means relief from all interference: the ball must not be on the wrong green, the player's stance must not be on the wrong green, and the area of intended swing must not be affected by the wrong green. All three forms of interference must be eliminated.",
    tags: ["wrong green", "complete relief", "stance", "swing", "interference"],
  },
  {
    id: "b9_062",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is on a wrong putting green. You take relief, but the nearest point of complete relief happens to be in a bunker. Must you drop in the bunker?",
    choices: [
      "Yes — the nearest point of complete relief is the reference point, and you must drop within one club-length, even if that is in a bunker",
      "No — you may choose any point that avoids the wrong green",
      "You may take back-on-the-line relief to avoid the bunker",
      "You may choose to play from the wrong green instead of dropping in the bunker",
    ],
    correct: 0,
    rule: "Rule 13.1f",
    explanation:
      "The nearest point of complete relief is determined by the Rule and cannot be avoided. If the nearest point of complete relief from a wrong putting green is in a bunker, the player must drop in the bunker. There is no option to choose a different relief area. The player could then declare the ball unplayable in the bunker, but that would cost additional penalty strokes.",
    tags: ["wrong green", "nearest point", "bunker", "mandatory relief"],
  },
  {
    id: "b9_063",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball lies in the general area but your stance for the intended stroke would be on a wrong putting green. Must you take relief?",
    choices: [
      "Yes — interference from a wrong green includes stance, so mandatory free relief must be taken",
      "No — relief is only required when the ball is on the wrong green",
      "You may choose to change your stance to avoid the green",
      "Free relief is optional for stance interference",
    ],
    correct: 0,
    rule: "Rule 13.1f(1)",
    explanation:
      "Interference from a wrong putting green exists not only when the ball is on the wrong green, but also when the wrong green interferes with the player's stance or area of intended swing. In all cases of interference from a wrong green, relief is mandatory — the player must take free relief.",
    tags: ["wrong green", "stance interference", "mandatory relief"],
  },

  // --- Rule 13.2: The Flagstick ---

  {
    id: "b9_064",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "You are putting from the green. You decide to leave the flagstick in the hole. Your ball hits the flagstick and drops into the hole. Is there a penalty?",
    choices: [
      "No penalty — under the current Rules, there is no penalty for hitting the flagstick left in the hole",
      "Two-stroke penalty for hitting the flagstick while putting from the green",
      "One-stroke penalty",
      "No penalty only if the ball was played from off the green",
    ],
    correct: 0,
    rule: "Rule 13.2a(2)",
    explanation:
      "Under the 2019+ Rules, there is no penalty if a ball played from the putting green (or anywhere else) hits the flagstick left in the hole. The player may choose to leave the flagstick in the hole for any stroke, including putts from the green, without risk of penalty.",
    tags: ["flagstick", "putting", "no penalty", "left in hole"],
  },
  {
    id: "b9_065",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "You are about to putt. Can you have someone attend (hold) the flagstick for you?",
    choices: [
      "Yes — you may have someone attend the flagstick, removing it after you stroke the ball",
      "No — under the current Rules, the flagstick must either be left in or fully removed before the stroke",
      "Only in match play",
      "Only if you are putting from more than 20 feet",
    ],
    correct: 0,
    rule: "Rule 13.2b(1)",
    explanation:
      "A player may authorize someone (caddie, another player, etc.) to attend the flagstick. The person attending removes the flagstick after the stroke is made so the ball in motion can fall in the hole. This is allowed from any distance, on or off the green.",
    tags: ["flagstick", "attending", "putting"],
  },
  {
    id: "b9_066",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "You are putting from the green and choose to leave the flagstick in. Your opponent (in match play) removes the flagstick without your authorization while your ball is in motion. What is the ruling?",
    choices: [
      "If your opponent removed the flagstick to gain an advantage or to affect where your ball might come to rest, the opponent gets the general penalty (loss of hole)",
      "No penalty — any player can remove the flagstick at any time",
      "Your stroke is cancelled and you must replay it",
      "You get to choose: replay the stroke or accept the result",
    ],
    correct: 0,
    rule: "Rule 13.2b(3)",
    explanation:
      "If a person deliberately moves or removes the flagstick while a ball is in motion, and the ball might hit the flagstick (or the person attending), the question is whether it was done to gain an advantage. If so, the person who moved the flagstick gets the general penalty. The player whose ball was in motion plays from where the ball comes to rest, or if the ball was deflected, may cancel and replay.",
    tags: ["flagstick", "removed without authorization", "match play", "ball in motion"],
  },
  {
    id: "b9_067",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball is rolling toward the hole. You notice the flagstick is leaning at an angle (not centered in the hole). Can you straighten it while the ball is in motion?",
    choices: [
      "No — you must not move or remove the flagstick to affect where a ball in motion might come to rest; doing so results in a penalty",
      "Yes — you are entitled to have the flagstick centered in the hole",
      "Yes — straightening is not the same as removing",
      "Only if the flagstick was leaning because of damage",
    ],
    correct: 0,
    rule: "Rule 13.2a",
    explanation:
      "Once a ball is in motion, the player must not deliberately move, remove, or reposition the flagstick to affect where the ball might come to rest. Straightening a leaning flagstick while a ball is rolling toward the hole would be a deliberate action to affect the outcome and results in the general penalty.",
    tags: ["flagstick", "ball in motion", "straightening", "penalty"],
  },
  {
    id: "b9_068",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your approach shot hits the flagstick (which is in the hole) and bounces backward onto the green. Is there a penalty?",
    choices: [
      "No penalty — there is no penalty for a ball hitting an attended or unattended flagstick",
      "Two-stroke penalty for hitting the flagstick from a stroke off the green",
      "One-stroke penalty",
      "No penalty, but you must replay the shot",
    ],
    correct: 0,
    rule: "Rule 13.2a(2)",
    explanation:
      "Under the current Rules, there is no penalty when a ball in motion hits the flagstick, whether the flagstick is attended, removed, or left in the hole. This applies regardless of where the stroke was made from — on the green, off the green, from a bunker, etc. The ball is played as it lies.",
    tags: ["flagstick", "approach shot", "no penalty", "ball deflected"],
  },
  {
    id: "b9_069",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "After a putt, your ball comes to rest leaning against the flagstick inside the hole. Part of the ball is below the lip of the hole. Is the ball holed?",
    choices: [
      "Yes — if any part of the ball is below the surface of the putting green, the ball is holed; you may remove the flagstick and let the ball fall in",
      "No — the ball is not holed until it is entirely below the lip",
      "The ball is holed only if it is touching the bottom of the cup",
      "You must remove the flagstick; if the ball falls in, it counts as holed with the previous stroke",
    ],
    correct: 0,
    rule: "Rule 13.2c",
    explanation:
      "Under Rule 13.2c, if a ball rests against the flagstick in the hole and any part of the ball is below the surface of the putting green, the ball is treated as holed. The player may remove the flagstick, and if the ball falls into the hole, it is holed with the last stroke. If the ball moves away from the hole when the flagstick is removed, it is placed on the lip without penalty.",
    tags: ["flagstick", "ball against flagstick", "holed", "lip of hole"],
  },
  {
    id: "b9_070",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball comes to rest leaning against the flagstick, but the entire ball is above the surface of the putting green — none of it is below the lip. Is the ball holed?",
    choices: [
      "No — the ball is not holed because no part of it is below the surface of the putting green",
      "Yes — any ball leaning against the flagstick in the hole is holed",
      "Yes — the ball is touching the flagstick inside the hole",
      "It depends on whether the flagstick is centered",
    ],
    correct: 0,
    rule: "Rule 13.2c, Definition of Holed",
    explanation:
      "A ball is 'holed' when it is at rest within the hole and the entire ball is below the surface of the putting green. Under Rule 13.2c, when a ball rests against the flagstick, if any part is below the surface, it is treated as holed. But if the entire ball is above the surface, it is NOT holed. The player must play the ball from where it lies (or remove the flagstick to see what happens).",
    tags: ["flagstick", "ball against flagstick", "not holed", "definition"],
  },
  {
    id: "b9_071",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball rests against the flagstick with part of it below the surface (it is holed under Rule 13.2c). You remove the flagstick, but instead of falling into the hole, the ball pops out and comes to rest on the lip. What is the ruling?",
    choices: [
      "The ball is holed with the last stroke — place the ball in the hole, no additional stroke",
      "The ball is not holed — you must play from the lip",
      "The ball is holed, but with an additional penalty stroke",
      "You must replace the ball against the flagstick and try again",
    ],
    correct: 0,
    rule: "Rule 13.2c",
    explanation:
      "Under Rule 13.2c, when a ball rests against the flagstick with any part below the surface, it is treated as holed with the last stroke. If removing the flagstick causes the ball to move away from the hole, it is placed on the lip of the hole and is considered holed — no additional stroke is counted.",
    tags: ["flagstick", "ball against flagstick", "holed", "ball moves away"],
  },

  // --- Rule 13.1d continued: More edge cases ---

  {
    id: "b9_072",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "In stroke play, your fellow competitor accidentally steps on your ball on the putting green, moving it. What is the ruling?",
    choices: [
      "No penalty to anyone — replace the ball on its original spot",
      "Your fellow competitor gets a one-stroke penalty",
      "You get a one-stroke penalty for not protecting your ball",
      "Play the ball from its new position",
    ],
    correct: 0,
    rule: "Rule 13.1d(1), Rule 9.6",
    explanation:
      "On the putting green, if a ball at rest is accidentally moved by another player, their caddie, or an outside influence, there is no penalty to anyone. The ball must be replaced on its original spot (estimated if necessary). This is a special rule for the putting green.",
    tags: ["putting green", "accidental movement", "fellow competitor", "replace"],
  },
  {
    id: "b9_073",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is on the putting green. You mark and lift it, then replace it. While you are reading the putt from behind the ball, the ball slowly rolls forward about 2 inches due to wind and settles in a new position. You saw it move. What must you do?",
    choices: [
      "Replace the ball on its original marked spot without penalty — a ball that was lifted and replaced on the green must be replaced if moved by natural forces",
      "Play it from the new position — natural forces moved a ball at rest",
      "Replace it with a one-stroke penalty",
      "You may choose to play from the new or old spot",
    ],
    correct: 0,
    rule: "Rule 13.1d(2)",
    explanation:
      "Under Rule 13.1d(2), when a ball on the putting green has been lifted and replaced (or marked and moved), and it is then moved to a new spot by natural forces (wind, gravity, water), the ball must be replaced on its original spot without penalty. The key is that the ball had been previously lifted and replaced.",
    tags: ["putting green", "wind", "lifted and replaced", "natural forces", "replace"],
  },
  {
    id: "b9_074",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is on the putting green but you have NOT marked or lifted it. While you are reading the putt, the ball slowly moves about an inch forward due to gravity on a slope. You did not cause it to move. What must you do?",
    choices: [
      "Play the ball from its new position — a ball not previously lifted that moves due to natural forces must be played from where it comes to rest",
      "Replace the ball on its original spot without penalty",
      "Replace the ball with a one-stroke penalty",
      "Re-mark the ball at its new spot and continue",
    ],
    correct: 0,
    rule: "Rule 9.3",
    explanation:
      "When natural forces (wind, gravity, water) cause a ball to move, and the ball has NOT been previously lifted and replaced, the ball must be played from its new position under Rule 9.3. The special exception under Rule 13.1d(2) to replace the ball only applies when the ball was previously lifted and replaced on the putting green.",
    tags: ["putting green", "gravity", "natural forces", "not lifted", "play from new position"],
  },

  // --- Rule 13.1c continued: More repair scenarios ---

  {
    id: "b9_075",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "There is a small twig (loose impediment) on the putting green on your line of putt. Can you remove it?",
    choices: [
      "Yes — loose impediments may be removed from anywhere on the course, including the putting green, without penalty",
      "No — you cannot remove anything on the line of putt",
      "Yes, but only by picking it up, not by brushing it aside",
      "Yes, but only if it is within one club-length of your ball",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "Loose impediments (natural objects like twigs, leaves, stones, insects, etc.) may be removed from anywhere on the course without penalty. On the putting green, you may remove them from your line of putt or anywhere on the green. There is no restriction on how you remove them.",
    tags: ["putting green", "loose impediments", "line of putt", "removal"],
  },
  {
    id: "b9_076",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "There is sand and loose soil on the putting green on your line of putt. Can you brush it away?",
    choices: [
      "Yes — sand and loose soil on the putting green may be removed without penalty",
      "No — sand and loose soil are part of the course and cannot be removed",
      "Only if the sand came from a bunker",
      "Yes, but only with your hand, not a towel",
    ],
    correct: 0,
    rule: "Rule 13.1c(1)",
    explanation:
      "Sand and loose soil on the putting green (but not anywhere else on the course) may be removed without penalty. This is a special provision for the putting green. Off the green, sand and loose soil are only loose impediments on the putting green.",
    tags: ["putting green", "sand", "loose soil", "removal", "line of putt"],
  },

  // --- Rule 13.2 continued: More flagstick scenarios ---

  {
    id: "b9_077",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "You are chipping from off the green. You ask your caddie to remove the flagstick before your stroke. Your caddie removes it and lays it down behind the green. Is this correct procedure?",
    choices: [
      "Yes — you may have the flagstick removed before any stroke, whether on or off the green",
      "No — the flagstick can only be removed for putts on the green",
      "Yes, but the caddie must hold it, not lay it down",
      "No — the flagstick must be attended, not removed, for shots from off the green",
    ],
    correct: 0,
    rule: "Rule 13.2b",
    explanation:
      "A player may have the flagstick removed before any stroke from anywhere on the course — not just putts from the green. The caddie or another person may remove the flagstick and place it anywhere that is out of the way.",
    tags: ["flagstick", "removal", "chipping", "off green"],
  },
  {
    id: "b9_078",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "In stroke play, Player A putts with the flagstick in the hole. Player B, who has already holed out, is standing near the hole. Player A's ball hits the flagstick. Player B did not attend the flagstick. Is there a penalty?",
    choices: [
      "No penalty to anyone — there is no penalty for hitting an unattended flagstick",
      "Player A gets a two-stroke penalty for hitting the flagstick",
      "Player B gets a penalty for not attending the flagstick",
      "Both players are penalized",
    ],
    correct: 0,
    rule: "Rule 13.2a(2)",
    explanation:
      "There is no penalty when a ball in motion hits an unattended flagstick left in the hole. Under the current Rules, a player may leave the flagstick in the hole for any stroke without risk of penalty if the ball hits it. Player B has no obligation to attend or remove the flagstick.",
    tags: ["flagstick", "stroke play", "no penalty", "unattended"],
  },
  {
    id: "b9_079",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "A player leaves the flagstick in the hole and putts. The flagstick is not centered — it is leaning toward the player. The ball rides up the leaning flagstick and pops out of the hole. What is the ruling?",
    choices: [
      "No penalty — the ball must be played from where it comes to rest; the player chose to leave the flagstick in and accepted the consequences",
      "The putt counts as holed because the ball entered the hole",
      "The player may replay the putt because the flagstick was not properly positioned",
      "Two-stroke penalty for leaving a damaged flagstick in the hole",
    ],
    correct: 0,
    rule: "Rule 13.2a",
    explanation:
      "By choosing to leave the flagstick in the hole, the player accepts the consequences — including a leaning flagstick that may deflect the ball out of the hole. There is no penalty and no replay of the stroke. The ball is played from where it comes to rest. The player could have removed or had someone attend the flagstick.",
    tags: ["flagstick", "leaning", "ball deflected", "no penalty", "consequences"],
  },

  // --- Rule 13.3: Ball Overhanging the Hole ---

  {
    id: "b9_080",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your putt stops right on the edge of the hole, hanging over the lip but not falling in. How long do you have to wait to see if it falls?",
    choices: [
      "You must reach the hole in a reasonable time and then wait 10 seconds",
      "30 seconds from when the ball stops",
      "You have unlimited time — you may wait as long as you like",
      "5 seconds from when you reach the ball",
    ],
    correct: 0,
    rule: "Rule 13.3a",
    explanation:
      "Under Rule 13.3a, when any part of a ball overhangs the lip of the hole, the player is allowed a reasonable time to reach the hole plus 10 seconds to wait and see if the ball falls in. If the ball falls in within those 10 seconds, it is holed with the last stroke.",
    tags: ["overhanging ball", "10 seconds", "lip of hole", "holed"],
  },
  {
    id: "b9_081",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball overhangs the hole. You reach the hole and wait. After 8 seconds, the ball drops in. How many strokes does the hole count as?",
    choices: [
      "The ball is holed with the last stroke — no additional stroke added",
      "The last stroke plus one penalty stroke",
      "Two additional strokes",
      "The last stroke counts, but with a one-stroke penalty for delay",
    ],
    correct: 0,
    rule: "Rule 13.3a",
    explanation:
      "If the ball falls into the hole within 10 seconds of the player reaching the hole, it is treated as holed with the last stroke. There is no additional stroke or penalty. The 8 seconds is within the allowed 10-second window, so the ball is simply holed.",
    tags: ["overhanging ball", "10 seconds", "holed", "no penalty"],
  },
  {
    id: "b9_082",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your ball overhangs the hole. You reach the ball and wait. After 15 seconds, the ball falls in. What is the ruling?",
    choices: [
      "The ball is holed, but it counts as one more stroke than the last stroke (i.e., the player adds one penalty stroke)",
      "The ball is holed with the last stroke — no additional penalty",
      "The ball is not holed — replace it on the lip and play again",
      "Two-stroke penalty and the ball is placed on the lip",
    ],
    correct: 0,
    rule: "Rule 13.3b",
    explanation:
      "Under Rule 13.3b, if a ball overhanging the hole falls in after the 10-second waiting time has expired, the ball is treated as holed, but the player adds one penalty stroke to the score for the last stroke. So if the putt was the player's 3rd stroke, the hole is completed in 4 strokes (3 + 1 penalty).",
    tags: ["overhanging ball", "10 seconds", "falls after", "penalty stroke"],
  },
  {
    id: "b9_083",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball overhangs the hole. You walk to the hole and deliberately wait 25 seconds before the ball drops in. Is there any additional concern beyond the one-stroke penalty under Rule 13.3?",
    choices: [
      "Yes — the player may also be penalized for unreasonable delay of play under Rule 5.6a",
      "No — the only consequence is the one additional stroke under Rule 13.3",
      "The player is disqualified for deliberate delay",
      "No — waiting near a ball is not delay of play",
    ],
    correct: 0,
    rule: "Rule 13.3b, Rule 5.6a",
    explanation:
      "While Rule 13.3 addresses the overhanging ball (one-stroke penalty if it falls after 10 seconds), a player who deliberately delays by waiting an unreasonable amount of time beyond the 10 seconds could also be penalized under Rule 5.6a for unreasonable delay of play. The Committee may penalize the player for slow play.",
    tags: ["overhanging ball", "delay of play", "unreasonable delay", "additional penalty"],
  },

  // --- More putting green scenarios ---

  {
    id: "b9_084",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "Your caddie bends down and touches the putting green on your line of putt to show you where to aim. Is there a penalty?",
    choices: [
      "No penalty — under the current Rules, your caddie may touch the putting green to indicate a target, as long as conditions are not improved",
      "Two-stroke penalty — no one may touch the line of putt",
      "One-stroke penalty for the caddie touching the green",
      "No penalty, but only if the caddie uses a club, not a hand",
    ],
    correct: 0,
    rule: "Rule 10.2b(2)",
    explanation:
      "Under the 2023 Rules, a caddie may touch the putting green to point out a target for the player's putt, as long as doing so does not improve conditions. The older prohibition against touching the line of putt was removed in 2019. The caddie must not, however, touch the green while the player is taking a stance or making the stroke.",
    tags: ["putting green", "caddie", "line of putt", "pointing", "no penalty"],
  },
  {
    id: "b9_085",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "Your caddie stands behind you on an extension of the line of putt while you are taking your stance to putt. Is there a penalty?",
    choices: [
      "Yes — the caddie must not deliberately stand on or close to an extension of the line of play behind the ball while the player begins taking a stance and until the stroke is made",
      "No — a caddie can stand anywhere",
      "Only a penalty if the caddie gives advice while standing there",
      "No penalty as long as the caddie moves before you stroke the ball",
    ],
    correct: 0,
    rule: "Rule 10.2b(4)",
    explanation:
      "Under Rule 10.2b(4), once the player begins taking a stance for the stroke and until the stroke is made, the caddie must not deliberately stand on or close to an extension of the line of play behind the ball. If the caddie is in this position when the player begins the stance, the player must back away, or a penalty applies.",
    tags: ["putting green", "caddie", "line of play", "stance", "penalty"],
  },
  {
    id: "b9_086",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "In match play, your opponent concedes your putt when your ball is 2 feet from the hole. You pick up the ball but then realize your opponent cannot concede since it's actually stroke play. What happens?",
    choices: [
      "Concessions do not exist in stroke play. You have lifted your ball without marking — you get a one-stroke penalty and must replace the ball and putt out",
      "The concession is valid in any format — move to the next hole",
      "You are disqualified for not holing out",
      "No penalty — just replace the ball and putt",
    ],
    correct: 0,
    rule: "Rule 3.2b, Rule 14.1a",
    explanation:
      "Concessions only exist in match play. In stroke play, a player must hole out on every hole. If the player lifts the ball without marking (because they thought the putt was conceded), the player gets a one-stroke penalty for lifting without marking under Rule 14.1a, must replace the ball, and must hole out. If the player does not replace and hole out, they are disqualified.",
    tags: ["putting green", "concession", "stroke play", "lifting", "penalty"],
  },
  {
    id: "b9_087",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "You mark your ball on the putting green with a small coin. Another player asks you to move your marker because it is on their line of putt. What should you do?",
    choices: [
      "Move the ball-marker one or more club-head lengths to the side, using a club alignment to remember the offset, then move it back before replacing your ball",
      "Refuse — you have a right to keep your marker where it is",
      "Pick up the marker and replace the ball in its original position",
      "Move the marker anywhere on the green that is not in the way",
    ],
    correct: 0,
    rule: "Rule 15.3b",
    explanation:
      "When asked to move a ball-marker that may interfere with another player's play, the player should move the marker one or more club-head lengths to the side using a consistent method (aligning to a fixed object). The player must remember to move the marker back before replacing and playing the ball. Failure to move it back before playing results in a penalty.",
    tags: ["putting green", "ball-marker", "moving marker", "interference"],
  },
  {
    id: "b9_088",
    category: "BUNKERS_GREENS",
    tier: "competitor",
    text: "You moved your ball-marker one club-head length to the side at another player's request. You forget to move it back and putt from the wrong spot. What is the penalty?",
    choices: [
      "The general penalty (two strokes in stroke play) for playing from a wrong place",
      "One-stroke penalty",
      "No penalty — the ball was on the green and the difference is minor",
      "Disqualification for playing from a wrong place",
    ],
    correct: 0,
    rule: "Rule 14.7a",
    explanation:
      "Playing from a wrong place results in the general penalty (two strokes in stroke play, loss of hole in match play). If the player moved the ball-marker to the side and forgot to move it back before replacing and playing, the ball was played from a wrong place. In stroke play, if the error is minor (one club-head length), it is typically not a serious breach requiring correction.",
    tags: ["putting green", "ball-marker", "wrong place", "general penalty"],
  },
  {
    id: "b9_089",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "On the putting green, you place your ball-marker behind the ball. Before you pick up the ball, a gust of wind moves the ball to a new position — but the marker stays in place. You then lift the ball. When you replace, do you place the ball at the marker or at the new position?",
    choices: [
      "Replace the ball at the marker — the marker was placed before the ball moved and marks the original spot",
      "Place the ball where the wind moved it — that was its last position at rest",
      "You may choose either position",
      "Drop the ball between the marker and where the wind moved it",
    ],
    correct: 0,
    rule: "Rule 13.1b, Rule 14.1",
    explanation:
      "The ball-marker was placed to mark the original position of the ball before lifting. The ball-marker indicates the correct replacement spot. Even though the ball subsequently moved due to wind, the marker was already in place marking the original spot. When the player replaces the ball, it goes back at the marker (the original spot).",
    tags: ["putting green", "ball-marker", "wind", "original spot", "replace"],
  },
  {
    id: "b9_090",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "You are on the putting green. You mark and lift your ball, repair a large ball mark on your line of putt, and while repairing you accidentally press down the turf more firmly than necessary over a 6-inch area, smoothing it beyond what a normal repair would accomplish. Is there a penalty?",
    choices: [
      "Yes — the general penalty applies for improving the line of play beyond what is needed to repair the damage",
      "No — any amount of repair work on a ball mark is acceptable",
      "One-stroke penalty for over-repairing",
      "No penalty as long as you used a proper repair tool",
    ],
    correct: 0,
    rule: "Rule 13.1c(2), Rule 8.1a",
    explanation:
      "While repairing ball marks is allowed, the player must not go beyond what is necessary for the repair. Excessive pressing, smoothing, or altering the green surface beyond the damaged area constitutes improving the line of play under Rule 8.1a, resulting in the general penalty.",
    tags: ["putting green", "repair", "excessive repair", "improving conditions", "penalty"],
  },
  {
    id: "b9_091",
    category: "BUNKERS_GREENS",
    tier: "weekend",
    text: "You have a long putt on the green. You want to stand on the opposite side of the hole to look at the line from behind the hole. While walking across the green to the other side, you step on the line of your putt. Is there a penalty?",
    choices: [
      "No penalty — accidentally stepping on the line of putt while walking is not a breach",
      "Two-stroke penalty for stepping on the line of putt",
      "One-stroke penalty for touching the line",
      "No penalty, but you must repair any damage your step caused",
    ],
    correct: 0,
    rule: "Rule 13.1c",
    explanation:
      "Under the 2019+ Rules, there is no longer a prohibition against touching the line of putt. A player may step on or touch the line of putt without penalty, as long as the player does not deliberately improve the conditions for the stroke. Normal walking across the green, even on the line of putt, is not a breach.",
    tags: ["putting green", "line of putt", "stepping", "no penalty"],
  },
  {
    id: "b9_092",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "In stroke play, your ball is on the 7th green. While waiting, you putt your ball to the hole and it comes to rest 6 inches from the hole. Without marking, you casually tap it in 'out of turn' before the other player (who is farther away) has played. Is there an issue?",
    choices: [
      "No penalty — in stroke play, playing out of turn is not penalized (Rule 6.4b); the stroke counts",
      "Two-stroke penalty for playing out of turn in stroke play",
      "You must recall the stroke and replay in the correct order",
      "No penalty, but the other player may ask you to replay the putt",
    ],
    correct: 0,
    rule: "Rule 6.4b",
    explanation:
      "In stroke play, there is no penalty for playing out of turn. However, if two or more players agree to play out of turn to give one of them an advantage, they each get the general penalty. Casually tapping in a short putt out of turn, without any intent to gain advantage, is not penalized. The stroke counts.",
    tags: ["putting green", "out of turn", "stroke play", "no penalty", "tap in"],
  },
  {
    id: "b9_093",
    category: "BUNKERS_GREENS",
    tier: "official",
    text: "Your ball is on the putting green. You use a putting alignment aid (a device placed on the green to help you align your putt), then remove it before making your stroke. Is there a penalty?",
    choices: [
      "Yes — a player must not use an alignment device set on the ground to help aim for a stroke; the general penalty applies",
      "No penalty — alignment aids are permitted as long as they are removed before the stroke",
      "One-stroke penalty only if the device is electronic",
      "No penalty — training aids are only prohibited in competition if the Committee has a Local Rule",
    ],
    correct: 0,
    rule: "Rule 4.3a(6), Rule 10.2b(3)",
    explanation:
      "Under Rule 4.3a, a player must not use equipment to help align for a stroke, including placing an object on the ground as an alignment aid. Even if the player removes the device before stroking, the act of setting it down to help alignment is a breach, resulting in the general penalty. This applies during a round in any format of play.",
    tags: ["putting green", "alignment aid", "equipment", "penalty", "training aid"],
  },
];
