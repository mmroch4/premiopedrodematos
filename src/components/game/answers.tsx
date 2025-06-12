import { DefaultRightAnswersKeys, useRightAnswersLocalStorage } from "@/hooks/use-right-answers-local-storage";
import { useVerifyAnswersForm } from "@/hooks/use-verify-answers-form";
import { cn } from "@/utils/cn";
import { CheckIcon } from "lucide-react";

interface AnswersProps {
  history: string;
}

export function Answers({ history }: AnswersProps) {
  const { register, onSubmit, verification } = useVerifyAnswersForm(history);
  const { parseRightAnswers } = useRightAnswersLocalStorage();

  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <h1 className="mb-3 text-xl font-bold">Respostas</h1>

      <p className="mb-4 text-slate-800">Quando acertares uma resposta, aparecerá um sinal de certo.</p>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col divide-y-2">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => {
            const u = String(i) as DefaultRightAnswersKeys;

            const isRight =
              (!!verification && verification.verdict[i]) ||
              !!parseRightAnswers()[u];

            return (
              <div className="py-3" key={"prompt-answer-" + i}>
                <div
                  className={cn(
                    "mb-3 flex w-fit items-center justify-center rounded px-2 py-1 text-sm font-medium uppercase",
                    isRight ? "bg-green-300" : "bg-amber-300",
                  )}
                >
                  Mensagem {i + 1}
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    {...register(`${u}`)}
                    className={cn(
                      "rounded border px-3 py-2 bg-slate-50",
                      isRight
                        ? "border-green-400 bg-green-100 text-green-950"
                        : "",
                    )}
                    disabled={isRight}
                  />

                  {isRight && (
                    <CheckIcon className="ml-2 size-5 text-green-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded bg-slate-200 px-4 py-3 hover:bg-slate-300"
        >
          Verificar
        </button>
      </form>
    </section>
  );
}
