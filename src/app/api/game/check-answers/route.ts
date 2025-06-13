import data from "@/data";
import { xata } from "@/services/xata";
import jwt from "jsonwebtoken";

type Body = {
  history: string;
  answers: string[];
  startedAt: string;
  gameId: string;
  user: string;
};

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    const { history, answers, gameId, startedAt, user } = body;

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

    if (counter >= 1) {
      const decodedGameId = jwt.verify(gameId, JWT_SECRET) as string;
      const decodedStartAt = jwt.verify(startedAt, JWT_SECRET) as string;

      const now = Date.now();
      const period = String(Math.floor((now - Number(decodedStartAt)) / 1000));

      const record = await xata.db.leaderboard.read(decodedGameId);

      let userName = "";

      if (user) {
        userName = (
          jwt.verify(user, JWT_SECRET) as {
            name: string;
            password: string;
          }
        ).name;
      }

      if (!!record) {
        await xata.db.leaderboard.update(decodedGameId, {
          points: counter,
          submitted_at: String(now),
          period,
          user,
        });
      } else {
        await xata.db.leaderboard.create(decodedGameId, {
          points: counter,
          submitted_at: String(now),
          period,
          started_at: decodedStartAt,
          user: userName || "",
        });
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
