import data from "@/data";
import { RSA } from "@/services/rsa";
import { getRandomNumber } from "@/utils/get-random-number";

const ALTERNATIVES_COUNT = data.alternatives;

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

  return Response.json({
    story: {
      history,
      e: rsa.e.toString(),
      n: rsa.n.toString(),
      count: story.count,
      html: story.text,
      encrypted_prompts,
    },
  });
}
