import { useRightAnswersLocalStorage } from "@/hooks/use-right-answers-local-storage";
import { cn } from "@/utils/cn";

interface PromptsProps {
  encrypted_prompts: string[][];
}

export function Prompts({ encrypted_prompts }: PromptsProps) {
  const { parseRightAnswers } = useRightAnswersLocalStorage();

  const parsedRightAnswers = parseRightAnswers();

  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <h1 className="mb-4 text-xl font-bold">Mensagens</h1>

      <div className="flex flex-col divide-y-2">
        {encrypted_prompts.map((p, i) => {
          const ans = parsedRightAnswers[String(i)] as boolean | string;
          const isSolved = !!ans;

          return (
            <div className="py-3" key={"prompt-" + i}>
              <div
                className={cn(
                  "mb-3 flex w-fit items-center justify-center rounded px-2 py-1 text-sm font-medium uppercase",
                  !isSolved ? "bg-amber-300" : "bg-green-300",
                )}
              >
                Mensagem {i + 1}
              </div>
              <div>
                <ul className="flex flex-wrap items-center gap-2">
                  {isSolved
                    ? (ans as string).split("").map((a, j) => {
                        if (a === " ") {
                          a = "⎵";
                        }

                        return <li key={"prompt-num-" + i + "-" + j}>{a}</li>;
                      })
                    : p.map((v, u) => {
                        return <li key={"prompt-num-" + i + "-" + u}>{v}</li>;
                      })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
