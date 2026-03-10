import { NextRequest, NextResponse } from "next/server";

const CATEGORIES: Record<string, { name: string; rules: string }> = {
  FUNDAMENTALS: { name: "Fundamentals", rules: "1–4" },
  PLAYING_ROUND: { name: "Playing the Round", rules: "5–6" },
  PLAYING_BALL: { name: "Playing the Ball", rules: "7–11" },
  BUNKERS_GREENS: { name: "Bunkers & Greens", rules: "12–13" },
  LIFTING_RETURNING: { name: "Lifting & Returning", rules: "14" },
  FREE_RELIEF: { name: "Free Relief", rules: "15–16" },
  PENALTY_RELIEF: { name: "Penalty Relief", rules: "17–19" },
  RESOLVING: { name: "Resolving Issues", rules: "20" },
};

const TIER_DESCRIPTIONS: Record<string, string> = {
  weekend:
    "Basic scenarios that any recreational golfer should know. Common situations, straightforward rulings.",
  competitor:
    "Intermediate scenarios for competitive club golfers. Involves less common situations, penalty areas, relief procedures.",
  official:
    "Expert-level scenarios that would challenge even rules officials. Edge cases, match play specifics, committee procedures, obscure interactions between rules.",
};

function validateScenario(data: unknown): { valid: boolean; error?: string } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Response is not an object" };
  }

  const scenario = data as Record<string, unknown>;

  if (typeof scenario.text !== "string" || scenario.text.length < 20) {
    return { valid: false, error: "Invalid or too-short scenario text" };
  }

  if (!Array.isArray(scenario.choices) || scenario.choices.length !== 4) {
    return { valid: false, error: "Must have exactly 4 choices" };
  }

  for (const choice of scenario.choices) {
    if (typeof choice !== "string" || choice.length < 5) {
      return { valid: false, error: "Each choice must be a non-empty string" };
    }
  }

  if (
    typeof scenario.correct !== "number" ||
    scenario.correct < 0 ||
    scenario.correct > 3
  ) {
    return { valid: false, error: "Correct must be 0, 1, 2, or 3" };
  }

  if (typeof scenario.rule !== "string" || !scenario.rule.startsWith("Rule")) {
    return { valid: false, error: "Rule must be a string starting with 'Rule'" };
  }

  if (
    typeof scenario.explanation !== "string" ||
    scenario.explanation.length < 30
  ) {
    return { valid: false, error: "Explanation is too short" };
  }

  if (!Array.isArray(scenario.tags)) {
    return { valid: false, error: "Tags must be an array" };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API key not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { category, tier } = body;

    if (!category || !CATEGORIES[category]) {
      return NextResponse.json(
        { error: "Invalid category" },
        { status: 400 }
      );
    }

    if (!tier || !TIER_DESCRIPTIONS[tier]) {
      return NextResponse.json(
        { error: "Invalid tier. Must be: weekend, competitor, or official" },
        { status: 400 }
      );
    }

    const cat = CATEGORIES[category];

    const prompt = `You are an expert on the 2023 Rules of Golf (including the January 2026 Additional Clarifications). Generate a single scenario-based multiple-choice question for a golf rules quiz app.

CATEGORY: ${cat.name} (Rules ${cat.rules})
DIFFICULTY: ${tier} — ${TIER_DESCRIPTIONS[tier]}

IMPORTANT RULES TO FOLLOW:
1. The scenario must be based on a REAL rule from the 2023 Rules of Golf.
2. There must be exactly 4 answer choices.
3. Exactly ONE answer must be correct.
4. The wrong answers should be plausible (common misconceptions), not obviously absurd.
5. The explanation must cite the specific rule and explain WHY the correct answer is right.
6. Use modern Rules terminology: "penalty area" (not "water hazard"), "temporary water" (not "casual water"), "general area" (not "through the green"), "another player" (not "fellow competitor").
7. The correct answer should NOT always be the longest choice — vary the length.
8. If the scenario involves match play vs stroke play, specify which format in the question.
9. Start the explanation with "Under Rule X.Xa..." to cite the specific sub-rule.

KEY 2023/2026 RULES FACTS (do not contradict these):
- Loose impediments CAN be removed in bunkers (changed 2019)
- You CAN leave the flagstick in while putting (changed 2019)
- Double hit = no penalty, counts as one stroke (changed 2019)
- Caddie CAN touch the putting green to indicate line of play (changed 2019)
- Ball moved during search = one penalty stroke, must replace (Rule 7.4)
- Penalty areas: can ground club, touch/move loose impediments (changed 2019)
- Unplayable in bunker: 1 stroke (back-on-line or 2 club-lengths within bunker) or 2 strokes (drop outside bunker on line)
- Back-on-the-line drop: ball MUST be dropped ON the line (2026 clarification)
- Two balls in motion from putting green collide = both replay (2026 clarification)

Respond with ONLY valid JSON in this exact format (no markdown, no code fences):
{
  "text": "The scenario/question text",
  "choices": ["Choice A", "Choice B", "Choice C", "Choice D"],
  "correct": 0,
  "rule": "Rule X.Xa",
  "explanation": "Under Rule X.Xa, ...",
  "tags": ["tag1", "tag2"]
}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      return NextResponse.json(
        { error: `OpenAI API error: ${response.status}` },
        { status: 502 }
      );
    }

    const completion = await response.json();
    const content = completion.choices?.[0]?.message?.content?.trim();
    if (!content) {
      return NextResponse.json(
        { error: "Empty response from OpenAI" },
        { status: 500 }
      );
    }

    // Parse JSON — strip markdown fences if present
    const jsonStr = content
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      return NextResponse.json(
        { error: "Failed to parse AI response as JSON", raw: content },
        { status: 500 }
      );
    }

    // Validate structure
    const validation = validateScenario(parsed);
    if (!validation.valid) {
      return NextResponse.json(
        { error: `Validation failed: ${validation.error}`, scenario: parsed },
        { status: 422 }
      );
    }

    // Add metadata
    const scenario = {
      id: `ai_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category,
      tier,
      text: parsed.text,
      choices: parsed.choices,
      correct: parsed.correct,
      rule: parsed.rule,
      explanation: parsed.explanation,
      tags: [
        ...((parsed.tags as string[]) || []),
        "ai-generated",
      ],
      aiGenerated: true,
    };

    return NextResponse.json({ scenario });
  } catch (error) {
    console.error("Generate scenario error:", error);
    return NextResponse.json(
      { error: "Failed to generate scenario" },
      { status: 500 }
    );
  }
}
