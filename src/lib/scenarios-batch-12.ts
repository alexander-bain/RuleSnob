import { Scenario } from "@/types";

export const SCENARIOS_BATCH_12: Scenario[] = [
  // ============================================================
  // 2026 ADDITIONAL CLARIFICATIONS OF THE 2023 RULES OF GOLF
  // 50 scenarios based on the January 1, 2026 clarifications
  // ============================================================

  // --- Rule 5.2b/3: Practicing on Course Before Round (3 scenarios) ---

  {
    id: "b12_001",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Before your round in a stroke-play competition, you walk onto the 18th green and roll a ball across it to test the speed. You do not make any strokes. Have you breached Rule 5.2b?",
    choices: [
      "Yes — testing the green surface by rolling a ball counts as practising on the course before the round",
      "No — practising on the course only means making actual strokes",
      "No — testing a green is only prohibited during the round, not before it",
      "Yes, but only if you test the green of the first hole you will play",
    ],
    correct: 0,
    rule: "Clarification 5.2b/3",
    explanation:
      "Under the 2026 clarification to Rule 5.2b/3, 'practising on the course' includes testing the surface of any putting green, such as rolling a ball across it or rubbing the surface. This is not limited to making strokes. Doing so before a stroke-play round (when the Committee has not authorized practice) is a breach of Rule 5.2b.",
    tags: ["2026 clarification", "practice", "putting green", "stroke play", "before round"],
  },
  {
    id: "b12_002",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "Before the round, a player crouches down on a putting green and rubs the surface with their hand three separate times to assess its grain and moisture. How many breaches of Rule 5.2b has the player committed?",
    choices: [
      "One breach — rubbing the surface of a single green multiple times counts as one breach of Rule 5.2",
      "Three breaches — one for each time the player rubbed the surface",
      "No breach — rubbing the surface is not the same as testing it",
      "Two breaches — the first rub is free but each subsequent one is a separate breach",
    ],
    correct: 0,
    rule: "Clarification 5.2b/3",
    explanation:
      "The 2026 clarification specifies that rubbing the surface of a single green multiple times counts as only one breach of Rule 5.2, not multiple breaches. The repeated testing of the same green is treated as a single act of practising on the course.",
    tags: ["2026 clarification", "practice", "putting green", "multiple breaches"],
  },
  {
    id: "b12_003",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In a stroke-play event where practice on the course is prohibited, a player rolls a ball across the 9th green before the round and then rubs the surface of the 18th green. How many breaches has the player committed?",
    choices: [
      "Two breaches — each green tested is a separate breach of Rule 5.2b",
      "One breach — all pre-round green testing is treated as a single breach",
      "No breach — testing the surface is not considered practising",
      "Three breaches — rolling the ball counts as two (rolling + testing) plus one for rubbing",
    ],
    correct: 0,
    rule: "Clarification 5.2b/3",
    explanation:
      "Under the 2026 clarification, rubbing or testing the surface of a single green multiple times is one breach, but testing the surfaces of two different greens constitutes two separate breaches of Rule 5.2b. Each green tested is a separate act of practising on the course.",
    tags: ["2026 clarification", "practice", "putting green", "stroke play", "penalty"],
  },

  // --- Rule 8.1a/10: Returning Movable Parts of Immovable Obstructions (4 scenarios) ---

  {
    id: "b12_004",
    category: "PLAYING_BALL",
    tier: "weekend",
    text: "You notice a sprinkler head near your ball has popped up from its housing. You push it back down into its intended position, which improves your lie. Is there a penalty?",
    choices: [
      "No penalty — you may return a movable part of an immovable obstruction to its intended position, even if it improves conditions",
      "General penalty — you improved your conditions of play by pushing down the sprinkler head",
      "No penalty, but only if the sprinkler head was within two club-lengths of your ball",
      "One-stroke penalty — returning objects to their position is only allowed by Committee members",
    ],
    correct: 0,
    rule: "Clarification 8.1a/10",
    explanation:
      "The 2026 clarification to Rule 8.1a/10 confirms that a player may return a movable part of an immovable obstruction (like a popped-up sprinkler head) to its intended position without penalty, even if doing so improves the conditions affecting the stroke. This is an exception to Rule 8.1a(2).",
    tags: ["2026 clarification", "immovable obstruction", "sprinkler head", "improving conditions"],
  },
  {
    id: "b12_005",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "A drain cover near the fairway has been dislodged and is lying next to its housing. Your ball is nearby and the open drain affects your stance. You pick up the drain cover and place it back over the drain. Is this allowed?",
    choices: [
      "Yes — returning a dislodged movable part of an immovable obstruction to its intended position is allowed without penalty",
      "No — once removed from the obstruction, the drain cover becomes a movable obstruction and you may only move it away, not place it back",
      "Yes, but only if your ball is within one club-length of the drain",
      "No — placing an object to improve your stance results in a general penalty",
    ],
    correct: 0,
    rule: "Clarification 8.1a/10",
    explanation:
      "The 2026 clarification confirms that a player may return a dislodged drain cover (a movable part of an immovable obstruction) to its intended position without penalty. This applies even if doing so improves the player's conditions, as it is an exception to the normal prohibition on placing movable obstructions to improve conditions under Rule 8.1a(2).",
    tags: ["2026 clarification", "immovable obstruction", "drain cover", "improving conditions"],
  },
  {
    id: "b12_006",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A player finds a loose sprinkler head cover lying several yards from the sprinkler housing. She carries it back and places it on the sprinkler near her ball, improving her lie. Her fellow competitor protests. Who is correct?",
    choices: [
      "The player — returning a movable part of an immovable obstruction to its intended position is allowed without penalty, even if it improves conditions",
      "The fellow competitor — placing an object near the ball to improve conditions is always a breach of Rule 8.1a",
      "The player, but only if she can prove the cover belonged to that specific sprinkler",
      "The fellow competitor — the cover was too far away to be considered part of the obstruction",
    ],
    correct: 0,
    rule: "Clarification 8.1a/10",
    explanation:
      "Under the 2026 clarification to Rule 8.1a/10, a player may return a movable part of an immovable obstruction to its intended position without penalty, regardless of whether this improves conditions. The distance the part has been displaced does not change this right. The player is correct.",
    tags: ["2026 clarification", "immovable obstruction", "improving conditions", "exception"],
  },
  {
    id: "b12_007",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A player's ball lies near a sprinkler housing. A separate, unrelated sprinkler cover is lying nearby. The player places this unrelated cover over the housing near his ball to improve his lie. Is this allowed?",
    choices: [
      "No — the exception only allows returning a movable part to the specific immovable obstruction it belongs to, not placing an unrelated part",
      "Yes — any sprinkler cover can be placed on any sprinkler housing without penalty",
      "Yes — all sprinkler covers are interchangeable parts of immovable obstructions",
      "No penalty if the cover fits the housing, general penalty if it does not",
    ],
    correct: 0,
    rule: "Clarification 8.1a/10",
    explanation:
      "The 2026 clarification allows returning a movable part of an immovable obstruction to its intended position. Placing an unrelated part that did not come from that specific obstruction is not 'returning' it — this would be placing a movable obstruction to improve conditions, which is a breach of Rule 8.1a(2) resulting in a general penalty.",
    tags: ["2026 clarification", "immovable obstruction", "movable obstruction", "improving conditions"],
  },

  // --- Rule 10.2b: Self-Standing Putters and Alignment (5 scenarios) ---

  {
    id: "b12_008",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "A player uses a conforming self-standing putter. Before putting, her caddie sets the putter down in its standing position behind the ball to help show the line of play. The caddie then picks it up and the player putts. Is there a penalty?",
    choices: [
      "Yes — setting a self-standing putter down in its standing position to show the line of play or help take a stance is a breach of Rule 10.2b(3)",
      "No — using any conforming club to indicate the line of play is always allowed",
      "No — the caddie picked it up before the stroke, so there is no breach",
      "Yes, but only a one-stroke penalty, not the general penalty",
    ],
    correct: 0,
    rule: "Clarification 10.2b(3), Rule 10.2b",
    explanation:
      "The 2026 clarification confirms that a player or caddie may not set a self-standing putter down in its standing position to show the line of play or help the player take a stance. This is a breach of Rule 10.2b(3), which prohibits setting down an object to show the line of play, regardless of whether it is picked up before the stroke is made.",
    tags: ["2026 clarification", "self-standing putter", "alignment", "caddie", "line of play"],
  },
  {
    id: "b12_009",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A player with a self-standing putter places the clubhead on the ground directly behind the ball while still holding the club, using it to help align her stance. She then makes her stroke. Has she breached Rule 10.2b?",
    choices: [
      "No — placing the clubhead on the ground behind the ball while still holding the club to help take a stance is allowed; this is not 'setting down an object'",
      "Yes — any use of a self-standing putter to help alignment is prohibited",
      "No, but only because she held the club throughout; if she let go for any moment it would be a breach",
      "Yes — placing the club behind the ball to align is always a breach of Rule 10.2b(3)",
    ],
    correct: 0,
    rule: "Clarification 10.2b(3), Rule 10.2b",
    explanation:
      "The 2026 clarification draws an important distinction: placing the clubhead on the ground behind the ball while still holding the club to help take a stance is allowed — this is normal preparation for a stroke and is not 'setting down an object.' The prohibition applies specifically to setting the self-standing putter down in its standing position (releasing it) to indicate the line of play.",
    tags: ["2026 clarification", "self-standing putter", "alignment", "stance", "holding club"],
  },
  {
    id: "b12_010",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "A player owns a conforming self-standing putter. Can he use it to make strokes during his round?",
    choices: [
      "Yes — self-standing putters may be used to make strokes, provided they conform to the Equipment Rules",
      "No — self-standing putters were banned effective January 2025",
      "Yes, but only for putts on the putting green, not for other strokes",
      "Only if the Committee has specifically authorized them via Local Rule",
    ],
    correct: 0,
    rule: "Clarification 10.2b, Equipment Rules",
    explanation:
      "The 2026 clarification confirms that conforming self-standing putters may be used to make strokes. What is restricted is the manner of using them — specifically, they may not be set down in their standing position to show the line of play or help take a stance. The putter itself is not banned.",
    tags: ["2026 clarification", "self-standing putter", "conforming equipment", "putting"],
  },
  {
    id: "b12_011",
    category: "PLAYING_BALL",
    tier: "official",
    text: "A player sets his self-standing putter on the green in its standing position to read a putt, but does not use it to show the line of play or take his stance. He picks it up, repositions himself, and putts. Is there a penalty?",
    choices: [
      "Yes — setting the self-standing putter down in its standing position on the putting green is a breach of Rule 10.2b(3), as it could be used to show the line of play or help take stance",
      "No — he did not use it for alignment, so there is no breach",
      "No — Rule 10.2b only applies while the player is in the process of making a stroke",
      "Yes, but only a warning for the first offense",
    ],
    correct: 0,
    rule: "Clarification 10.2b(3), Rule 10.2b",
    explanation:
      "Under the 2026 clarification, setting a self-standing putter down in its standing position on or near the putting green is a breach of Rule 10.2b(3). The putter in its standing position effectively acts as an alignment aid. The player's intent does not change the fact that setting it down in this manner breaches the Rule.",
    tags: ["2026 clarification", "self-standing putter", "alignment", "putting green"],
  },
  {
    id: "b12_012",
    category: "PLAYING_BALL",
    tier: "official",
    text: "In early 2024, the USGA/R&A announced a 'delay of implementation' for restrictions on self-standing putters under Clarification 10.2b(3)/2. What is the current status as of January 2026?",
    choices: [
      "The delay was withdrawn in January 2025, and the restrictions on setting down self-standing putters are now fully in effect",
      "The delay is still active through December 2026, so self-standing putters may be set down without restriction",
      "The delay was extended indefinitely pending further study",
      "The delay was replaced by a complete ban on self-standing putters",
    ],
    correct: 0,
    rule: "Clarification 10.2b(3)/2",
    explanation:
      "The 2026 clarification confirms that the 10.2b(3)/2 'delay of implementation' for self-standing putters was withdrawn in January 2025. The restrictions are now fully in effect: players and caddies may not set a self-standing putter down in its standing position to show the line of play or help take a stance.",
    tags: ["2026 clarification", "self-standing putter", "delay of implementation", "rule history"],
  },

  // --- Rule 11.1b(2)/1: Ball Hits Another Ball in Motion on Green (3 scenarios) ---

  {
    id: "b12_013",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "In stroke play, Player A putts from the green. While A's ball is rolling, Player B's ball (also on the green) is blown by wind and starts moving. A's ball then hits B's moving ball. What happens to Player A?",
    choices: [
      "Player A must replay the stroke without penalty — when a ball played from the green hits another ball in motion on the green, the stroke is replayed",
      "Player A plays the ball as it lies — there is no special Rule for hitting a moving ball",
      "Player A gets a one-stroke penalty and plays from where the ball came to rest",
      "Both players must replay their most recent strokes",
    ],
    correct: 0,
    rule: "Clarification 11.1b(2)/1",
    explanation:
      "The 2026 clarification to Rule 11.1b(2)/1 specifies that if a ball played from the putting green accidentally hits another ball in motion on the putting green, the player must replay the stroke without penalty. The ball in motion is treated as a movable obstruction under this specific application of Rule 11.1b.",
    tags: ["2026 clarification", "putting green", "ball in motion", "replay stroke"],
  },
  {
    id: "b12_014",
    category: "PLAYING_BALL",
    tier: "official",
    text: "Player A putts from the green. Meanwhile, Player B's ball on the green begins moving due to gravity. A's ball collides with B's moving ball. Under the 2026 clarification, how is B's moving ball treated?",
    choices: [
      "As a movable obstruction — a ball in motion on the putting green is treated as a movable obstruction for purposes of Rule 11.1b",
      "As a loose impediment — moving balls are always loose impediments",
      "As an outside influence — the moving ball is outside A's control",
      "As a ball at rest — the Rules do not distinguish between moving and stationary balls for collision purposes",
    ],
    correct: 0,
    rule: "Clarification 11.1b(2)/1",
    explanation:
      "Under the 2026 clarification, a ball in motion on the putting green is treated as a movable obstruction for the purpose of applying Rule 11.1b. This is why the player whose ball was played from the green must replay the stroke — the same result as when a ball played from the green is deflected by a movable obstruction.",
    tags: ["2026 clarification", "putting green", "movable obstruction", "ball in motion"],
  },
  {
    id: "b12_015",
    category: "PLAYING_BALL",
    tier: "competitor",
    text: "Player A chips from just off the green. While A's ball is rolling on the green, it strikes Player B's ball, which had been moving after being blown by wind. Does Player A replay the stroke?",
    choices: [
      "No — the replay requirement applies only when the ball was played FROM the putting green, not from off the green",
      "Yes — whenever a ball strikes another moving ball on the green, the stroke must be replayed",
      "Yes — the clarification applies to any ball that is rolling on the green regardless of where it was played from",
      "No, but Player A gets a one-stroke penalty",
    ],
    correct: 0,
    rule: "Clarification 11.1b(2)/1",
    explanation:
      "The 2026 clarification specifically applies when a ball played FROM the putting green hits another ball in motion on the putting green. Since Player A played from off the green (chipping), this specific clarification does not apply. Player A would play the ball as it lies.",
    tags: ["2026 clarification", "putting green", "ball in motion", "chip shot", "off the green"],
  },

  // --- Rule 14.3b(4)/1: Back-on-the-Line Relief Precision (4 scenarios) ---

  {
    id: "b12_016",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "A player takes back-on-the-line relief from a penalty area. She drops the ball slightly to the right of the reference line, but it rolls and comes to rest exactly on the line. Has she completed a valid drop?",
    choices: [
      "No — the ball must be dropped ON the line; dropping even slightly to the side means the ball is in a wrong place, regardless of where it comes to rest",
      "Yes — as long as the ball comes to rest on the line, the drop is valid",
      "Yes — a ball that rolls onto the line has effectively corrected itself",
      "No, but only if the ball was dropped more than one club-length off the line",
    ],
    correct: 0,
    rule: "Clarification 14.3b(4)/1",
    explanation:
      "The 2026 clarification to Rule 14.3b(4)/1 emphasizes that when taking back-on-the-line relief, the drop itself must be on the line. If the ball is dropped even slightly to the side of the line, the ball is in a wrong place — even if it rolls and comes to rest on the line after dropping. Where the ball comes to rest does not fix a bad drop.",
    tags: ["2026 clarification", "back on the line", "dropping procedure", "wrong place"],
  },
  {
    id: "b12_017",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "A player takes back-on-the-line relief and drops the ball two inches to the left of the reference line. The ball comes to rest within one club-length of where it struck the ground, still slightly off the line. The player makes a stroke. What is the ruling?",
    choices: [
      "General penalty under Rule 14.7a for playing from a wrong place — the drop was not on the line, so the ball was in a wrong place from the moment it was dropped",
      "No penalty — two inches off the line is within an acceptable tolerance",
      "One-stroke penalty for an improper drop, but no wrong-place penalty",
      "No penalty — the ball came to rest within one club-length, which is the relief area",
    ],
    correct: 0,
    rule: "Clarification 14.3b(4)/1, Rule 14.7a",
    explanation:
      "Under the 2026 clarification, dropping the ball even slightly to the side of the reference line means the ball is in a wrong place. Playing from a wrong place results in the general penalty (two strokes in stroke play, loss of hole in match play) under Rule 14.7a. The player must also correct the error if it was a serious breach.",
    tags: ["2026 clarification", "back on the line", "wrong place", "general penalty", "dropping"],
  },
  {
    id: "b12_018",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "Under the 2026 clarification regarding back-on-the-line relief, what must a player do if she realizes she dropped the ball slightly off the line before making her next stroke?",
    choices: [
      "She must re-drop the ball correctly on the line before making her stroke to avoid a penalty for playing from a wrong place",
      "She may play from where the ball came to rest as long as it is within one club-length of the line",
      "She must place the ball on the nearest point of the line",
      "She must abandon the back-on-the-line option and choose a different relief option",
    ],
    correct: 0,
    rule: "Clarification 14.3b(4)/1, Rule 14.7a",
    explanation:
      "Under the 2026 clarification, if a player realizes she dropped off the line before playing, she should correct the error by re-dropping the ball on the line. If she plays without correcting, she will receive the general penalty for playing from a wrong place under Rule 14.7a.",
    tags: ["2026 clarification", "back on the line", "correction", "re-drop", "wrong place"],
  },
  {
    id: "b12_019",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "A player carefully drops his ball on the back-on-the-line reference line. The ball bounces and comes to rest one club-length to the right of the line. Is this a valid drop?",
    choices: [
      "Yes — the drop was on the line, and the ball came to rest within one club-length of where it first struck the ground, so it is a valid drop",
      "No — the ball must also come to rest on the line, not just be dropped on it",
      "No — the ball rolled more than the allowed distance off the line",
      "Yes, but only if the resting spot is not nearer the hole than the reference point",
    ],
    correct: 0,
    rule: "Clarification 14.3b(4)/1, Rule 14.3c(2)",
    explanation:
      "The 2026 clarification focuses on where the ball is dropped, not where it comes to rest. As long as the ball is dropped on the line, the relief area extends one club-length in any direction from where the ball first struck the ground (not nearer the hole than the reference point). Since the ball came to rest within one club-length and was dropped correctly on the line, this is a valid drop.",
    tags: ["2026 clarification", "back on the line", "relief area", "valid drop"],
  },

  // --- Model Local Rule A-4: Internal Out of Bounds (5 scenarios) ---

  {
    id: "b12_020",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A course uses Model Local Rule A-4.1 to define internal out of bounds on the right side of hole 7 to prevent players from cutting a dogleg. While playing hole 8, a player's ball comes to rest against one of these internal OB stakes. What is the status of the stake?",
    choices: [
      "It is an obstruction — internal OB stakes are boundary objects only during play of the specific hole they apply to, and obstructions for all other holes",
      "It is a boundary object — OB stakes are always boundary objects regardless of which hole is being played",
      "It is a loose impediment — the stakes are temporary objects",
      "It is an immovable obstruction only if it interferes with the player's stance",
    ],
    correct: 0,
    rule: "Model Local Rule A-4.1",
    explanation:
      "Under Model Local Rule A-4.1, internal OB stakes are boundary objects only during play of the specific hole for which they define the boundary (in this case, hole 7). When the player is playing any other hole (here, hole 8), those stakes are treated as obstructions, meaning the player can take free relief from them.",
    tags: ["2026 clarification", "internal OB", "boundary objects", "obstruction", "local rule"],
  },
  {
    id: "b12_021",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "Under Model Local Rule A-4.2, the Committee defines internal out of bounds on hole 3 that applies only to strokes played from the teeing area of that hole. A player hits his tee shot on hole 3 and the ball crosses the internal boundary. Is the ball out of bounds?",
    choices: [
      "It depends — the ball is only out of bounds if it comes to rest out of bounds; if it crosses the boundary and re-crosses back to come to rest in bounds, it is in bounds",
      "Yes — the ball is out of bounds as soon as it crosses the internal boundary line",
      "No — internal OB never applies to tee shots",
      "Yes, but the player gets free relief to the nearest in-bounds point",
    ],
    correct: 0,
    rule: "Model Local Rule A-4.2",
    explanation:
      "A key principle clarified in the 2026 updates for Model Local Rule A-4 is that a ball is only out of bounds when it comes to rest out of bounds. If a ball crosses and re-crosses a boundary, it is not out of bounds as long as it comes to rest in bounds. This applies to internal OB just as it does to regular boundary lines.",
    tags: ["2026 clarification", "internal OB", "teeing area", "ball at rest", "local rule"],
  },
  {
    id: "b12_022",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A course uses Model Local Rule A-4.1 to create internal OB on hole 12. Playing hole 12, a player's second shot lands against an internal OB stake. The ball is in bounds. Can the player move the stake to play her shot?",
    choices: [
      "No — during play of hole 12, the internal OB stakes are boundary objects and cannot be moved, even if they interfere with the stroke",
      "Yes — internal OB stakes are always movable obstructions",
      "Yes — any stake that interferes with a swing may be removed temporarily",
      "No, but the player may take free relief from the stake under Rule 16.1",
    ],
    correct: 0,
    rule: "Model Local Rule A-4.1",
    explanation:
      "Under Model Local Rule A-4.1, the internal OB stakes are boundary objects during play of the hole they apply to (hole 12 in this case). Boundary objects are not obstructions and may not be moved. The player cannot remove the stake or take free relief from it — she must play the ball as it lies or take an unplayable ball option.",
    tags: ["2026 clarification", "internal OB", "boundary objects", "immovable", "local rule"],
  },
  {
    id: "b12_023",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the primary purpose of Model Local Rule A-4 (Internal Out of Bounds)?",
    choices: [
      "To allow Committees to make part of the course out of bounds for play of a particular hole, such as preventing players from cutting a dogleg",
      "To create additional penalty areas within the course",
      "To designate areas where players must take a mandatory drop",
      "To mark environmentally sensitive areas that players cannot enter",
    ],
    correct: 0,
    rule: "Model Local Rule A-4",
    explanation:
      "Model Local Rule A-4 allows a Committee to designate part of the course as out of bounds for play of a particular hole. A common use is to prevent players from gaining an unfair advantage by cutting a dogleg, such as playing over or through an adjacent hole to shorten the intended route.",
    tags: ["2026 clarification", "internal OB", "committee", "course management", "local rule"],
  },
  {
    id: "b12_024",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "Under Model Local Rule A-4.2, internal OB applies only to strokes from the teeing area of hole 5. A player hits her tee shot in bounds, then her second shot from the fairway crosses the internal boundary and comes to rest beyond it. Is the ball out of bounds?",
    choices: [
      "No — under A-4.2, the internal OB applies only to strokes played from the teeing area; the second shot was from the fairway, so the internal boundary does not apply",
      "Yes — once internal OB is in effect for a hole, it applies to all strokes on that hole",
      "No — internal OB never applies after the tee shot, regardless of the model local rule version",
      "Yes — the ball came to rest beyond the boundary, which is always out of bounds",
    ],
    correct: 0,
    rule: "Model Local Rule A-4.2",
    explanation:
      "Model Local Rule A-4.2 specifically limits the internal OB to strokes played from the teeing area of the specified hole. Since the player's second shot was played from the fairway (not the teeing area), the internal boundary does not apply and the ball is in bounds. This variant is more limited than A-4.1, which applies to all strokes on the hole.",
    tags: ["2026 clarification", "internal OB", "teeing area only", "local rule", "second shot"],
  },

  // --- Model Local Rule E-13: Removing Animals Near Ball (3 scenarios) ---

  {
    id: "b12_025",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball lies in the rough and a large toad is sitting on top of it. The Committee has adopted Model Local Rule E-13. You carefully remove the toad and your ball moves. What is the ruling?",
    choices: [
      "No penalty — under MLR E-13, you may remove an animal touching or near your ball without penalty, and if the ball moves, you replace it without penalty",
      "One-stroke penalty under Rule 9.4b because you caused the ball to move",
      "No penalty for removing the animal, but one-stroke penalty for the ball moving",
      "General penalty — you are not allowed to touch a live animal on the course",
    ],
    correct: 0,
    rule: "Model Local Rule E-13",
    explanation:
      "Model Local Rule E-13 specifically allows a player to remove an animal that is touching or near the ball without penalty. If the ball moves as a result of removing the animal, the player replaces the ball on its original spot without penalty. This overrides the normal Rule 9.4b penalty that would apply for causing a ball to move.",
    tags: ["2026 clarification", "animal removal", "ball moved", "no penalty", "local rule"],
  },
  {
    id: "b12_026",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "A player's ball lies in the fairway and a snake is coiled near the ball, about two inches away. The Committee has adopted Model Local Rule E-13. The player is afraid to play the ball. What are her options?",
    choices: [
      "She may remove the snake without penalty under MLR E-13, since the animal is near the ball, and if the ball moves, replace it without penalty",
      "She must declare the ball unplayable and take penalty relief",
      "She may only call a rules official to remove the snake",
      "She must play the ball as it lies — animals that are not touching the ball cannot be removed",
    ],
    correct: 0,
    rule: "Model Local Rule E-13",
    explanation:
      "Model Local Rule E-13 allows removal of animals that are 'touching or near the ball' — the animal does not need to be directly on the ball. A snake two inches from the ball qualifies as 'near' the ball. The player may remove it without penalty, and if the ball moves during removal, she replaces it without penalty.",
    tags: ["2026 clarification", "animal removal", "near the ball", "snake", "local rule"],
  },
  {
    id: "b12_027",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Without Model Local Rule E-13 in effect, a player removes a lizard sitting on her ball and the ball moves. What penalty does she incur?",
    choices: [
      "One-stroke penalty under Rule 9.4b — without MLR E-13, the player caused the ball to move and must replace it with a one-stroke penalty",
      "No penalty — animals are always loose impediments that can be removed freely",
      "General penalty for touching a live animal on the course",
      "No penalty — the ball moved due to an outside influence (the animal), not the player",
    ],
    correct: 0,
    rule: "Rule 9.4b",
    explanation:
      "Without Model Local Rule E-13, the normal rules apply. Animals that are not defined as loose impediments pose a risk: if the player removes the animal and the ball moves, she incurs a one-stroke penalty under Rule 9.4b for causing the ball to move, and must replace it. MLR E-13 was created specifically to address this situation by providing penalty-free relief.",
    tags: ["2026 clarification", "animal removal", "ball moved", "penalty", "without local rule"],
  },

  // --- Model Local Rule E-14: Unaware Ball Moved (NEW Jan 2026) (5 scenarios) ---

  {
    id: "b12_028",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "A player accidentally kicks her ball while walking to it but is completely unaware it moved. She plays from the new position. The Committee has adopted Model Local Rule E-14. What is the penalty?",
    choices: [
      "One penalty stroke under Rule 9.4b only — MLR E-14 eliminates the general penalty for playing from a wrong place when the player was completely unaware the ball might have moved",
      "General penalty for playing from a wrong place, plus one stroke under Rule 9.4b",
      "No penalty at all — unawareness of movement is a complete excuse",
      "One penalty stroke, but only if the ball moved less than one club-length",
    ],
    correct: 0,
    rule: "Model Local Rule E-14",
    explanation:
      "Model Local Rule E-14, added in January 2026, provides that if a player causes their ball to move but was COMPLETELY UNAWARE it might have moved and plays from the new spot, the player incurs only one penalty stroke (under Rule 9.4b) — the general penalty for playing from a wrong place does NOT apply. This is a significant new relief provision.",
    tags: ["2026 clarification", "unaware ball moved", "wrong place", "new rule 2026", "local rule"],
  },
  {
    id: "b12_029",
    category: "FREE_RELIEF",
    tier: "official",
    text: "A player brushes against tall grass and her ball moves slightly. She notices it might have moved but decides it did not and plays from that spot. The Committee has adopted Model Local Rule E-14. What is the ruling?",
    choices: [
      "General penalty for playing from a wrong place — MLR E-14 does not protect a player who was AWARE the ball might have moved but incorrectly decided it did not",
      "Only one penalty stroke under Rule 9.4b — the player made an honest mistake",
      "No penalty — the player genuinely believed the ball did not move",
      "One penalty stroke for the movement, but no wrong-place penalty because she had reasonable doubt",
    ],
    correct: 0,
    rule: "Model Local Rule E-14",
    explanation:
      "Model Local Rule E-14 distinguishes between being completely unaware and being aware but making the wrong decision. If a player was aware the ball might have moved but incorrectly decided it did not, the general penalty for playing from a wrong place still applies. The protection of MLR E-14 is reserved for situations of complete unawareness.",
    tags: ["2026 clarification", "unaware ball moved", "aware vs unaware", "wrong place", "general penalty"],
  },
  {
    id: "b12_030",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Model Local Rule E-14 (January 2026) addresses which specific situation?",
    choices: [
      "When a player causes their ball to move but was completely unaware it might have moved, reducing the penalty from the general penalty to only one stroke",
      "When wind or water moves a player's ball to a new position",
      "When a player's ball is moved by another player's equipment",
      "When a player accidentally drops their ball instead of placing it",
    ],
    correct: 0,
    rule: "Model Local Rule E-14",
    explanation:
      "Model Local Rule E-14 is a brand-new Local Rule added in January 2026. It specifically addresses the situation where a player causes their ball to move but was completely unaware it might have moved and plays from the new position. Under this MLR, the penalty is reduced to only one stroke (under Rule 9.4b) rather than the additional general penalty for playing from a wrong place.",
    tags: ["2026 clarification", "unaware ball moved", "new rule 2026", "penalty reduction"],
  },
  {
    id: "b12_031",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "During his backswing, a player's club accidentally moves his ball. He does not notice and completes his stroke, sending the ball onto the green. MLR E-14 is in effect. What is the total penalty?",
    choices: [
      "One penalty stroke (under Rule 9.4b for causing the ball to move) — the stroke itself counts, plus the one penalty stroke, but no general penalty for wrong place since he was completely unaware",
      "Two penalty strokes — one for moving the ball and the general penalty for wrong place",
      "No penalty — if the ball was moved during the stroke, it is not a breach",
      "Three penalty strokes — one for the movement, two for playing from a wrong place",
    ],
    correct: 0,
    rule: "Model Local Rule E-14, Rule 9.4b",
    explanation:
      "Under MLR E-14, the player incurs only one penalty stroke under Rule 9.4b for causing the ball to move. The stroke he made counts as his stroke (played from the new position). Because he was completely unaware the ball moved during his backswing, the general penalty for playing from a wrong place is waived. His score for the hole includes the stroke plus one penalty stroke.",
    tags: ["2026 clarification", "unaware ball moved", "backswing", "penalty stroke", "local rule"],
  },
  {
    id: "b12_032",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Why was Model Local Rule E-14 introduced in January 2026?",
    choices: [
      "To reduce the harsh penalty when a player causes their ball to move without any awareness it moved, recognizing that the general penalty for wrong place is disproportionate in such cases",
      "To eliminate all penalties for accidentally moving a ball at rest",
      "To allow players to move their ball without penalty in the rough",
      "To replace Rule 9.4b entirely with a less severe penalty structure",
    ],
    correct: 0,
    rule: "Model Local Rule E-14",
    explanation:
      "Model Local Rule E-14 was introduced in January 2026 to address a fairness concern: when a player unknowingly causes their ball to move and plays from the new spot, the combined penalty of one stroke (Rule 9.4b) PLUS the general penalty (Rule 14.7a for wrong place) was considered disproportionate. MLR E-14 reduces this to just the one-stroke penalty when the player was completely unaware.",
    tags: ["2026 clarification", "unaware ball moved", "new rule 2026", "fairness", "penalty reduction"],
  },

  // --- Model Local Rule F-2: Embedded Ball Relief Variations (4 scenarios) ---

  {
    id: "b12_033",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A tournament uses Model Local Rule F-2.1, which restricts embedded ball relief to areas cut to fairway height or less. A player's ball is embedded in the rough (cut above fairway height). Is the player entitled to free relief?",
    choices: [
      "No — under MLR F-2.1, relief is only available for balls embedded in areas cut to fairway height or less, which excludes the rough",
      "Yes — the default Rule 16.3 always provides relief for embedded balls in the general area",
      "Yes — embedded ball relief is available everywhere except penalty areas",
      "No, but the player may take unplayable ball relief with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Model Local Rule F-2.1",
    explanation:
      "Model Local Rule F-2.1 is more restrictive than the default Rule 16.3. While Rule 16.3 normally provides embedded ball relief anywhere in the general area, MLR F-2.1 limits this relief to areas cut to fairway height or less. A ball embedded in the rough would not qualify for free relief under this Local Rule.",
    tags: ["2026 clarification", "embedded ball", "fairway height", "restricted relief", "local rule"],
  },
  {
    id: "b12_034",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In a professional tournament using Model Local Rule F-2.2, a player's ball is embedded in the stacked turf face above a bunker. Can the player take free embedded ball relief?",
    choices: [
      "No — MLR F-2.2 specifically denies relief for balls embedded in stacked turf or soil faces above bunkers",
      "Yes — embedded ball relief is always available in the general area under Rule 16.3",
      "Yes, but the player must drop within the bunker",
      "No, unless the ball is embedded more than halfway into the turf face",
    ],
    correct: 0,
    rule: "Model Local Rule F-2.2",
    explanation:
      "Model Local Rule F-2.2 specifically denies free embedded ball relief for balls embedded in stacked turf or soil faces above bunkers. These faces are considered a natural feature of the course, and providing free relief from them would undermine the challenge they present. The player's options are to play as it lies or declare the ball unplayable.",
    tags: ["2026 clarification", "embedded ball", "bunker face", "stacked turf", "local rule"],
  },
  {
    id: "b12_035",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In a televised competition using Model Local Rule F-2.3, a player claims her ball is embedded but the pitch-mark has been partially repaired by a mower passing over the area. A referee arrives to inspect. Can the referee determine the ball is embedded?",
    choices: [
      "No — under MLR F-2.3, a referee cannot determine a ball is embedded based on pitch-mark evidence if the pitch-mark has been 'repaired in some way,' including by a mower passing over it",
      "Yes — the referee can always determine whether a ball is embedded based on the overall evidence",
      "Yes — mower marks do not count as 'repair' of a pitch-mark",
      "No — in televised competitions, only video evidence can be used to determine embedding",
    ],
    correct: 0,
    rule: "Model Local Rule F-2.3",
    explanation:
      "Under Model Local Rule F-2.3, designed for televised competitions, a referee may determine that a ball is embedded based on pitch-mark evidence. However, if the pitch-mark has been 'repaired in some way' — and the clarification specifically includes a mower passing over it as a form of repair — the referee cannot use that pitch-mark as evidence of embedding.",
    tags: ["2026 clarification", "embedded ball", "televised competition", "pitch-mark", "referee"],
  },
  {
    id: "b12_036",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "How does Model Local Rule F-2.1 differ from the default Rule 16.3 regarding embedded ball relief?",
    choices: [
      "MLR F-2.1 restricts relief to areas cut to fairway height or less, while the default Rule 16.3 provides relief anywhere in the general area",
      "MLR F-2.1 eliminates embedded ball relief entirely",
      "MLR F-2.1 extends relief to penalty areas, while Rule 16.3 does not",
      "MLR F-2.1 requires a two-stroke penalty for relief, while Rule 16.3 provides free relief",
    ],
    correct: 0,
    rule: "Model Local Rule F-2.1, Rule 16.3",
    explanation:
      "The default Rule 16.3 provides free relief for a ball embedded anywhere in the general area (which includes fairway, rough, and other areas that are not penalty areas, bunkers, or putting greens). Model Local Rule F-2.1 is more restrictive, limiting this relief to areas cut to fairway height or less — effectively excluding the rough.",
    tags: ["2026 clarification", "embedded ball", "fairway height", "general area", "comparison"],
  },

  // --- Model Local Rule G-6: Motorized Transportation (3 scenarios) ---

  {
    id: "b12_037",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "The Committee has adopted Model Local Rule G-6, prohibiting motorized transportation. Holes 9 and 10 are a long walk apart, and the Committee provides a shuttle between them. A player rides the shuttle. Is there a penalty?",
    choices: [
      "No penalty — shuttles between distant holes are an exception to the prohibition on motorized transportation under MLR G-6",
      "General penalty — any motorized transportation is prohibited once the Local Rule is in effect",
      "No penalty, but only if the player walks from the shuttle drop point to the 10th tee",
      "One-stroke penalty for each hole where motorized transport was used",
    ],
    correct: 0,
    rule: "Model Local Rule G-6",
    explanation:
      "Model Local Rule G-6 prohibits motorized transportation during the round, but includes specific exceptions. One exception is for shuttles provided between distant holes (such as between holes 9 and 10 when the nines are far apart). The Committee may also authorize motorized transportation in stroke-and-distance situations.",
    tags: ["2026 clarification", "motorized transportation", "shuttle", "exception", "local rule"],
  },
  {
    id: "b12_038",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Under Model Local Rule G-6, a player takes a cart forward to where her ball is after her drive. She had not walked that distance yet. The Committee later reviews the situation. Can the Committee waive the penalty?",
    choices: [
      "No — the Committee cannot authorize a ride forward when the player has not walked that distance; the penalty stands",
      "Yes — the Committee can always waive penalties retroactively if no competitive advantage was gained",
      "Yes — the Committee can waive penalties for first-time offenses",
      "No — but the penalty is only a warning, not strokes",
    ],
    correct: 0,
    rule: "Model Local Rule G-6",
    explanation:
      "Under Model Local Rule G-6, the Committee has the discretion to waive a penalty if it determines it would have authorized the ride had the player asked in advance. However, the Committee cannot authorize (or waive the penalty for) a ride forward when the player has not walked that distance. This prevents players from gaining a physical advantage by riding instead of walking.",
    tags: ["2026 clarification", "motorized transportation", "forward ride", "committee discretion", "local rule"],
  },
  {
    id: "b12_039",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player's tee shot goes out of bounds under MLR G-6 (motorized transportation prohibited). The player asks a volunteer to drive him back to the tee in a cart. Is this allowed?",
    choices: [
      "Yes — stroke-and-distance situations are an exception to the motorized transportation prohibition under MLR G-6",
      "No — the prohibition applies to all motorized transportation without exception",
      "Yes, but only if the player walks back after re-teeing",
      "No — only Committee-operated shuttles are permitted",
    ],
    correct: 0,
    rule: "Model Local Rule G-6",
    explanation:
      "Model Local Rule G-6 includes an exception for stroke-and-distance situations. When a player must return to the previous spot (such as after an out-of-bounds tee shot), the player may use motorized transportation to return to that spot. This exception recognizes that walking the entire distance back would unreasonably delay play.",
    tags: ["2026 clarification", "motorized transportation", "stroke and distance", "exception", "OB"],
  },

  // --- Model Local Rule G-9: Club Replacement (Revised Jan 2026) (5 scenarios) ---

  {
    id: "b12_040",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Under the revised Model Local Rule G-9 (January 2026), a player notices his 7-iron has a few scratches on the clubface from normal use. Can he replace it?",
    choices: [
      "No — scratches alone do not qualify as 'broken or significantly damaged' under the revised MLR G-9",
      "Yes — any visible damage qualifies for club replacement",
      "Yes — cosmetic damage is considered 'significantly damaged'",
      "No, unless the scratches affect the performance of the club as certified by the manufacturer",
    ],
    correct: 0,
    rule: "Model Local Rule G-9 (revised January 2026)",
    explanation:
      "The revised Model Local Rule G-9 (January 2026) limits club replacement to clubs that are 'broken or significantly damaged.' The clarification provides detailed definitions and specifically notes that scratches alone do not qualify. The club must have damage such as a shaft in pieces, bent, or dented; a clubhead cracked, deformed, or loose; or a clubface cracked or dented.",
    tags: ["2026 clarification", "club replacement", "scratches", "broken or damaged", "local rule"],
  },
  {
    id: "b12_041",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Under revised Model Local Rule G-9, a player's driver shaft snaps in two during a swing. She wants to replace it. From where may she obtain a replacement club?",
    choices: [
      "She may build a replacement from parts she carries or parts carried by any other player on the course, but cannot borrow a whole club from another player",
      "She may borrow a complete club from any other player on the course",
      "She must use only parts from her own bag",
      "She cannot replace the club at all during the round",
    ],
    correct: 0,
    rule: "Model Local Rule G-9 (revised January 2026)",
    explanation:
      "The revised MLR G-9 allows a player to build a replacement club from parts carried by the player or by any other player on the course. However, the player cannot borrow a whole, assembled club from another player. The replacement must be constructed from available parts, and it must fill the gap in the player's set (maintaining set progression).",
    tags: ["2026 clarification", "club replacement", "broken shaft", "building from parts", "local rule"],
  },
  {
    id: "b12_042",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "Under revised Model Local Rule G-9, which of the following qualifies as 'broken or significantly damaged,' allowing club replacement?",
    choices: [
      "A clubhead that is cracked, deformed, or has become loose from the shaft",
      "A clubhead with cosmetic scratches from cart path contact",
      "A grip that has worn smooth over many rounds of play",
      "A shaft that has a small paint chip from being placed in the bag",
    ],
    correct: 0,
    rule: "Model Local Rule G-9 (revised January 2026)",
    explanation:
      "The revised MLR G-9 provides detailed definitions of 'broken or significantly damaged': shaft in pieces, bent, or dented; clubhead cracked, deformed, or loose; clubface cracked or dented; grip loose. Cosmetic scratches, normal grip wear, and paint chips do not qualify as they do not constitute significant damage to the club's structure or function.",
    tags: ["2026 clarification", "club replacement", "damage definitions", "cracked clubhead", "local rule"],
  },
  {
    id: "b12_043",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "Under the revised Model Local Rule G-9, a player's 5-iron shaft is severely bent. He replaces it with a club built from parts. The replacement club must meet which requirement?",
    choices: [
      "It must fill the gap in the player's set by maintaining set progression — the replacement must be the same type of club as the damaged one",
      "It can be any club the player chooses, regardless of which club was damaged",
      "It must be a putter, as putters are the only clubs that can be assembled from parts",
      "It must be approved by the Committee before use",
    ],
    correct: 0,
    rule: "Model Local Rule G-9 (revised January 2026)",
    explanation:
      "The revised MLR G-9 requires that the replacement club 'fill the gap' in the player's set by maintaining set progression. This means the replacement must be the same type of club as the one that was damaged — a player cannot replace a broken 5-iron with, for example, an extra wedge.",
    tags: ["2026 clarification", "club replacement", "set progression", "fill the gap", "local rule"],
  },
  {
    id: "b12_044",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the key difference between the standard Rule 4.1a(2) on club replacement and the revised Model Local Rule G-9?",
    choices: [
      "MLR G-9 is more restrictive — it limits replacement to clubs that are 'broken or significantly damaged,' while the standard Rule allows replacement of any club that becomes damaged during normal use",
      "MLR G-9 is less restrictive — it allows unlimited club replacements during a round",
      "MLR G-9 prohibits all club replacement, while the standard Rule allows it",
      "There is no difference — MLR G-9 simply restates Rule 4.1a(2)",
    ],
    correct: 0,
    rule: "Model Local Rule G-9 (revised January 2026), Rule 4.1a(2)",
    explanation:
      "The revised Model Local Rule G-9 is more restrictive than the standard Rule 4.1a(2). Under the standard Rule, a player may replace a club that becomes damaged during the round through normal course of play. MLR G-9 raises the bar, requiring the club to be 'broken or significantly damaged' — excluding minor damage like scratches.",
    tags: ["2026 clarification", "club replacement", "restrictive", "comparison", "local rule"],
  },

  // --- Model Local Rule M-4: Wheeled Mobility Device Bunker Relief (3 scenarios) ---

  {
    id: "b12_045",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "A player using a wheeled mobility device has a ball in a bunker. Taking a stance in the bunker is not possible due to the device. The Committee has adopted Model Local Rule M-4. What relief is available?",
    choices: [
      "Free relief within the same bunker — the player may drop at the nearest point that allows positioning the device, even if this is nearer the hole",
      "The player must take a one-stroke penalty to drop outside the bunker",
      "No special relief — the player must play from the bunker like any other player",
      "Free relief outside the bunker at the nearest point of complete relief",
    ],
    correct: 0,
    rule: "Model Local Rule M-4",
    explanation:
      "Model Local Rule M-4 provides free relief within the same bunker when a stance is not possible or requires unreasonable effort due to a wheeled mobility device. The player may drop at the nearest point that allows positioning the device, even if that point is nearer the hole. Relief is within the bunker, not outside it.",
    tags: ["2026 clarification", "mobility device", "bunker relief", "accessibility", "local rule"],
  },
  {
    id: "b12_046",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Under Model Local Rule M-4, a player in a wheeled mobility device has a ball in a bunker. Playing the ball as it lies is clearly unreasonable for ANY player (not just because of the device) — e.g., the ball is under a bush in the bunker. Is the player entitled to free relief under MLR M-4?",
    choices: [
      "No — MLR M-4 does not provide relief when playing as it lies is clearly unreasonable for any player, regardless of whether they use a mobility device",
      "Yes — MLR M-4 always provides free relief in bunkers for mobility device users",
      "Yes — the unreasonability for any player does not affect the mobility device player's rights",
      "No, but the player may take the ball outside the bunker with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Model Local Rule M-4",
    explanation:
      "Model Local Rule M-4 includes an important exception: no relief is available if playing the ball as it lies is clearly unreasonable for ANY player (not just because of the mobility device). If the ball is in a position where no player could reasonably play it (e.g., under a bush), the mobility device user must use the same relief options available to all players, such as declaring the ball unplayable.",
    tags: ["2026 clarification", "mobility device", "bunker", "exception", "unreasonable"],
  },
  {
    id: "b12_047",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Under Model Local Rule M-4, a player using a wheeled mobility device has a ball in a bunker. The player chose an unreasonable direction of play, which is the only reason the device cannot be positioned. Is the player entitled to free relief?",
    choices: [
      "No — MLR M-4 does not provide relief when the player has chosen an unreasonable direction of play or club that is the reason the device cannot be positioned",
      "Yes — the reason the device cannot be positioned does not matter; relief is always available",
      "Yes, but only for the first occurrence per round",
      "No — the player must change the direction of play before requesting relief",
    ],
    correct: 0,
    rule: "Model Local Rule M-4",
    explanation:
      "Model Local Rule M-4 includes an exception for when the player has chosen an unreasonable direction of play or club selection. If the inability to position the mobility device results from the player's unreasonable choices (rather than the inherent challenge of the bunker position), the free relief is not available. The player would need to choose a reasonable direction or take other relief options.",
    tags: ["2026 clarification", "mobility device", "bunker", "unreasonable direction", "exception"],
  },

  // --- Section 5A(5): Scorecard Return Timing (3 scenarios) ---

  {
    id: "b12_048",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "The Committee has established a time-based scorecard return policy under Section 5A(5), giving players 15 minutes after finishing the round. A player finishes and discovers an error in his hole 7 score after 10 minutes. Can he correct it?",
    choices: [
      "Yes — under the Committee's time-based policy, the player may correct mistakes within the 15-minute window before the scorecard is considered 'returned'",
      "No — once the player signs the scorecard, no corrections are allowed",
      "Yes, but only if a Committee member is present to witness the correction",
      "No — scorecard corrections can only be made before the player leaves the scoring area",
    ],
    correct: 0,
    rule: "Section 5A(5)",
    explanation:
      "The 2026 clarification to Section 5A(5) allows the Committee to define when a scorecard is considered 'returned' using a time-based policy. Under such a policy (here, 15 minutes), the player may correct mistakes within that window. Since 10 minutes have passed and the window is 15 minutes, the player may still make the correction.",
    tags: ["2026 clarification", "scorecard", "time-based policy", "correction", "committee"],
  },
  {
    id: "b12_049",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "Under a Committee's time-based scorecard return policy (Section 5A(5)), a player finishes the round and goes to the parking lot. Twenty minutes later, within the allowed time window, he realizes an error. He returns to the scoring area and corrects it. Is this valid?",
    choices: [
      "Potentially not — while the time-based policy allows corrections within the window, the player must still promptly proceed to the scoring area after finishing the round",
      "Yes — as long as the correction is within the time window, where the player was does not matter",
      "No — leaving the scoring area automatically finalizes the scorecard",
      "Yes — the time-based policy overrides all other scorecard requirements",
    ],
    correct: 0,
    rule: "Section 5A(5)",
    explanation:
      "The 2026 clarification notes that while a time-based policy allows corrections within the designated window, the player must still promptly proceed to the scoring area after finishing the round. Going to the parking lot instead of promptly proceeding to the scoring area could itself be a breach, even if the correction is attempted within the time window.",
    tags: ["2026 clarification", "scorecard", "time-based policy", "prompt return", "scoring area"],
  },
  {
    id: "b12_050",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What does the 2026 clarification to Section 5A(5) allow a Committee to do regarding scorecards?",
    choices: [
      "Define when a scorecard is considered 'returned' using a time-based policy, giving players a set window to correct mistakes",
      "Eliminate the requirement for scorecards entirely in casual competitions",
      "Allow electronic scorecards to replace paper scorecards",
      "Require players to submit scorecards before leaving the 18th green",
    ],
    correct: 0,
    rule: "Section 5A(5)",
    explanation:
      "The 2026 clarification to Section 5A(5) gives the Committee the authority to define when a scorecard is considered 'returned' using a time-based policy (e.g., 15 minutes after finishing). This provides players with a clear window during which they can review and correct mistakes on their scorecard, rather than the scorecard being final the moment it is handed in.",
    tags: ["2026 clarification", "scorecard", "time-based policy", "committee authority", "correction window"],
  },
];
