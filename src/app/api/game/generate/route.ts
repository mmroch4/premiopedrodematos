import { Cryptography } from '@/cryptography';
import data from '@/data';
import { convertToPattern } from '@/utils/convert-to-pattern';
import { getRandomNumber } from '@/utils/get-random-number';

const ALTERNATIVES_COUNT = data.alternatives;

export async function GET() {
  const story_index = getRandomNumber(0, data.count - 1);
  let history = `${story_index}:`;
  const story = data.stories[story_index];
  const cryptography = new Cryptography();

  const chosen_prompts = story.prompts.map((prompts) => {
    const index = getRandomNumber(0, ALTERNATIVES_COUNT - 1);

    history += String(index);

    return prompts[index].toUpperCase().trim();
  });

  const encrypted_prompts = chosen_prompts.map((prompt) => {
    const encrypted_prompt = prompt.split('').map((x) => {
      return cryptography.encrypt(BigInt(convertToPattern(x))).toString();
    });

    return encrypted_prompt;
  });

  let html = story.text;

  for (let i = 1; i <= story.count; i++) {
    html = html.replace(
      `%!${i}`,
      `<span class="label">MENSAGEM ${i}</span>`,
    );
  }

  return Response.json({
    story: {
      history,
      e: cryptography.e.toString(),
      n: cryptography.n.toString(),
      count: story.count,
      html,
      encrypted_prompts,
    },
  });
}
