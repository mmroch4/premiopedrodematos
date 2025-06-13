import data from "@/data";
import { RSA } from "@/services/rsa";
import { getRandomNumber } from "@/utils/get-random-number";
import { createId } from "@paralleldrive/cuid2";
import jwt from "jsonwebtoken";

const ALTERNATIVES_COUNT = data.alternatives;

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET() {
  const story_index = getRandomNumber(0, data.stories.length - 1);

  let history = `${story_index}:`;

  const story = data.stories[story_index];

  const rsa = new RSA();

  const chosen_prompts = story.prompts.map((prompts) => {
    const i = getRandomNumber(0, ALTERNATIVES_COUNT - 1);

    history += String(i);

    return prompts[i].toUpperCase().trim();
  });

  const encrypted_prompts = chosen_prompts.map((prompt) => {
    return prompt.split("").map((x) => {
      return rsa.encrypt(BigInt(RSA.convertCharToNumeric(x))).toString();
    });
  });

  const gameId = createId();

  const startedAt = String(Date.now());

  const gameIdToken = jwt.sign(gameId, JWT_SECRET);

  const startedAtToken = jwt.sign(startedAt, JWT_SECRET);

  return Response.json({
    story: {
      history,
      e: rsa.e.toString(),
      n: rsa.n.toString(),
      count: story.count,
      html: story.text,
      encrypted_prompts,
      gameId: gameIdToken,
      startedAt: startedAtToken,
    },
  });
}
