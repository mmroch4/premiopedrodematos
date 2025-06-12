import { useRightAnswersLocalStorage } from "@/hooks/use-right-answers-local-storage";

interface StoryProps {
  html: string;
  count: number;
}

export function Story({ html, count }: StoryProps) {
  const { parseRightAnswers } = useRightAnswersLocalStorage();

  const parsedRightAnswers = parseRightAnswers();

  for (let i = 0; i < count; i++) {
    const isSolved = !!parsedRightAnswers[String(i)];

    const replacement = isSolved
      ? `<span class="label label-solved whitespace-nowrap">${parsedRightAnswers[String(i)]}</span>`
      : `<span class="label label-unsolved whitespace-nowrap">MENSAGEM ${i + 1}</span>`;

    html = html.replace(`%!${i + 1}`, replacement);
  }

  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <h1 className="mb-4 text-xl font-bold">História</h1>

      <div>
        <p
          dangerouslySetInnerHTML={{ __html: html }}
          className="text-justify leading-9"
        />
      </div>
    </section>
  );
}
