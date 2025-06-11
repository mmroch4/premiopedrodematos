"use client";

import { cn } from "@/utils/cn";
import { PATTERN } from "@/utils/convert-to-pattern";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckIcon, CircleHelpIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  stopGame: () => void;
  game: {
    history: string;
    e: string;
    n: string;
    count: number;
    html: string;
    encrypted_prompts: string[][];
  };
};

function Story({ html }: { html: string }) {
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

function Prompts({ encrypted_prompts }: { encrypted_prompts: string[][] }) {
  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <h1 className="mb-4 text-xl font-bold">Mensagens</h1>

      <div className="flex flex-col divide-y-2">
        {encrypted_prompts.map((p, i) => {
          return (
            <div className="py-3" key={"prompt-" + i}>
              <div className="mb-3 flex w-fit items-center justify-center rounded bg-amber-300 px-2 py-1 text-sm font-medium uppercase">
                Mensagem {i + 1}
              </div>
              <div>
                <ul className="flex flex-wrap items-center gap-2">
                  {p.map((v, u) => (
                    <li key={"prompt-num-" + i + "-" + u}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

type FormValues = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
};

const formSchema = z.object({
  "0": z.string().toUpperCase(),
  "1": z.string().toUpperCase(),
  "2": z.string().toUpperCase(),
  "3": z.string().toUpperCase(),
  "4": z.string().toUpperCase(),
  "5": z.string().toUpperCase(),
  "6": z.string().toUpperCase(),
  "7": z.string().toUpperCase(),
  "8": z.string().toUpperCase(),
  "9": z.string().toUpperCase(),
  "10": z.string().toUpperCase(),
  "11": z.string().toUpperCase(),
});

async function verifyAnswers({
  history,
  answers,
}: {
  history: string;
  answers: string[];
}) {
  const response = await fetch("/api/game/check-answers", {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      history,
      answers,
    }),
  });

  const responseBody = (await response.json()) as {
    all_right: boolean;
    counter: number;
    verdict: boolean[];
  };

  return responseBody;
}

function Answers({ history }: { history: string }) {
  const { register, handleSubmit } = useForm<FormValues>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      "0": "",
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
      "11": "",
    },
  });

  const incorrect_values = new Set();

  const { mutateAsync: verify, data } = useMutation({
    mutationFn: verifyAnswers,
  });

  const onSubmit = handleSubmit(async (values) => {
    const answers = [];

    for (const key in values) {
      answers.push(values[key as keyof typeof values]);
    }

    //const result = await verify({ history, answers });
    await verify({ history, answers });
    // if (!result.all_right) {
    //   incorrect_values.clear()

    //   for (let i = 0; i < result.verdict.length; i++) {
    //     if (!result.verdict[i]) {
    //       incorrect_values.add(i)
    //     }
    //   }
    // }

    // console.log(history, result)
  });

  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <h1 className="mb-4 text-xl font-bold">Respostas</h1>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col divide-y-2">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => {
            const u = String(i) as
              | "0"
              | "1"
              | "2"
              | "3"
              | "4"
              | "5"
              | "6"
              | "7"
              | "8"
              | "9"
              | "10"
              | "11";

            const is_right = !!data && data.verdict[i];

            return (
              <div className="py-3" key={"prompt-answer-" + i}>
                <div className="mb-3 flex w-fit items-center justify-center rounded bg-amber-300 px-2 py-1 text-sm font-medium uppercase">
                  Mensagem {i + 1}
                </div>
                <div>
                  <input
                    type="text"
                    {...register(`${u}`)}
                    className={cn(
                      "rounded border px-3 py-2",
                      is_right ? "border-green-400 text-green-950" : "",
                    )}
                    disabled={is_right}
                  />
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

function Info({ e, n }: { e: string; n: string }) {
  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <h1 className="mb-4 text-xl font-bold">Chave Pública de Encriptação</h1>

      <div className="mb-6 rounded-lg border border-amber-400 bg-amber-200 p-4 text-lg text-amber-950">
        <ul>
          <li>
            e: <span className="text-xl font-bold">{e}</span>
          </li>
          <li>
            n: <span className="text-xl font-bold">{n}</span>
          </li>
        </ul>
      </div>

      <h1 className="mb-4 text-xl font-bold">Tabela de Correspondência</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-300 shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
              >
                Caractere
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
              >
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {Object.entries(PATTERN).map(([char, value]) => (
              <tr
                key={char}
                className="transition-colors duration-200 hover:bg-gray-50"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {char !== " " ? char : '" " (ESPAÇO)'}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Game({ stopGame, game }: Props) {
  const [sectionId, setSectionId] = useState<number>(3);

  let Sec = Info;

  switch (sectionId) {
    case 0:
      Sec = Story;
      break;
    case 1:
      Sec = Prompts;
      break;
    case 2:
      Sec = Answers;
      break;
    case 3:
      Sec = Info;
      break;
  }

  return (
    <main className="flex flex-col items-center py-8">
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={stopGame}
          className="flex flex-wrap items-center justify-center rounded border border-rose-200 px-4 py-3 tracking-wide hover:bg-rose-200"
        >
          <XIcon className="mr-2 size-4" />
          Terminar Jogo
        </button>

        <Link
          href="/guia"
          className="flex flex-wrap items-center justify-center rounded border px-4 py-3 tracking-wide hover:bg-slate-200"
        >
          <CircleHelpIcon className="mr-2 size-4" /> Como Jogar?
        </Link>

        <div className="flex items-center justify-center px-4">
          <CheckIcon className="mr-2 size-4 text-green-500" />
          <p>
            Respostas certas: <span>0</span>
          </p>
        </div>
      </div>

      <div className="mb-4 w-full border-b border-t py-2">
        <div>
          <ul className="flex flex-wrap items-center justify-around gap-6">
            <li>
              <button
                onClick={() => setSectionId(0)}
                className={cn(
                  "rounded px-3 py-2 hover:bg-slate-100",
                  sectionId === 0 ? "bg-slate-200" : "",
                )}
              >
                História
              </button>
            </li>
            <li>
              <button
                onClick={() => setSectionId(1)}
                className={cn(
                  "rounded px-3 py-2 hover:bg-slate-100",
                  sectionId === 1 ? "bg-slate-200" : "",
                )}
              >
                Mensagens
              </button>
            </li>
            <li>
              <button
                onClick={() => setSectionId(2)}
                className={cn(
                  "rounded px-3 py-2 hover:bg-slate-100",
                  sectionId === 2 ? "bg-slate-200" : "",
                )}
              >
                Respostas
              </button>
            </li>
            <li>
              <button
                onClick={() => setSectionId(3)}
                className={cn(
                  "rounded px-3 py-2 hover:bg-slate-100",
                  sectionId === 3 ? "bg-slate-200" : "",
                )}
              >
                Informações
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <Sec
          html={game.html}
          encrypted_prompts={game.encrypted_prompts}
          e={game.e}
          n={game.n}
          history={game.history}
        />
      </div>
    </main>
  );
}
