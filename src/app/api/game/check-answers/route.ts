import data from "@/data";

type Body = {
  history: string;
  answers: string[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    const { history, answers } = body;

    const [story_index_raw, alternatives_index_raw] = history.split(":");
    const story_index = Number(story_index_raw);
    const alternatives_index = alternatives_index_raw.split("").map((alt) => {
      return Number(alt);
    });

    const story = data.stories[story_index];
    const prompts = alternatives_index.map((alt_i, i) => {
      return story.prompts[i][alt_i];
    });

    let all_right = true;
    let counter = 0;
    const verdict = [];

    for (let i = 0; i < story.count; i++) {
      if (prompts[i].toUpperCase() === answers[i].toUpperCase()) {
        verdict.push(true);
        counter++;
      } else {
        verdict.push(false);
        all_right = false;
      }
    }

    return Response.json({
      all_right,
      counter,
      verdict,
    });
  } catch (err) {
    console.error("ERROR CHECK ANSWERS: ", err);

    return Response.json({
      all_right: false,
      counter: 0,
      verdict: [],
    });
  }
}
