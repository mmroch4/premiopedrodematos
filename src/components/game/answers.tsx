import {
  DefaultRightAnswersKeys,
  useRightAnswersLocalStorage,
} from "@/hooks/use-right-answers-local-storage";
import { useVerifyAnswersForm } from "@/hooks/use-verify-answers-form";
import { cn } from "@/utils/cn";
import { CheckIcon } from "lucide-react";

interface AnswersProps {
  history: string;
  startedAt: string;
  gameId: string;
}

export function Answers({ history, gameId, startedAt }: AnswersProps) {
  const { register, onSubmit, verification, formState } = useVerifyAnswersForm({
    history,
    gameId,
    startedAt,
  });
  const { parseRightAnswers } = useRightAnswersLocalStorage();

  const messages = (history.split(":")[1] as string).split("");

  const { isSubmitting } = formState;

  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <div className="mb-4 flex flex-wrap justify-between gap-4">
        <div>
          <h1 className="mb-3 text-xl font-bold">Respostas</h1>

          <p className="text-slate-800">
            Quando acertares uma resposta, aparecerá um sinal de certo.
          </p>
        </div>

        <div>
          <button
            type="submit"
            form="check-answers"
            className={cn(
              "cursor-pointer rounded bg-slate-200 px-4 py-3 hover:bg-slate-300",
              isSubmitting ? "cursor-not-allowed opacity-50" : "",
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verificando..." : "Verificar"}
          </button>
        </div>
      </div>

      <form id="check-answers" onSubmit={onSubmit}>
        <div className="flex flex-col divide-y-2">
          {messages.map((_, i) => {
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
                      "rounded border bg-slate-50 px-3 py-2",
                      isRight
                        ? "border-green-400 bg-green-100 text-green-950"
                        : "",
                    )}
                    disabled={isRight || isSubmitting}
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
          disabled={isSubmitting}
          className={cn(
            "cursor-pointer rounded bg-slate-200 px-4 py-3 hover:bg-slate-300",
            isSubmitting ? "cursor-not-allowed opacity-50" : "",
          )}
        >
          {isSubmitting ? "Verificando..." : "Verificar"}
        </button>
      </form>
    </section>
  );
}
