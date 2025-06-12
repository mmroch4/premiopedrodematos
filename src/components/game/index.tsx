"use client";

import { useRightAnswersLocalStorage } from "@/hooks/use-right-answers-local-storage";
import { cn } from "@/utils/cn";
import { CheckIcon, ScrollTextIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Answers } from "./answers";
import { Information } from "./information";
import { Prompts } from "./prompts";
import { Story } from "./story";

interface GameInterfaceProps {
  stopGame: () => void;
  game: {
    history: string;
    e: string;
    n: string;
    count: number;
    html: string;
    encrypted_prompts: string[][];
  };
}

function Selector({
  id,
  current_id,
  setSectionId,
  children,
}: {
  id: number;
  current_id: number;
  setSectionId: (id: number) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => setSectionId(id)}
      className={cn(
        "rounded px-3 py-2 hover:bg-slate-100",
        current_id === id ? "bg-slate-200" : "",
      )}
    >
      {children}
    </button>
  );
}

export function GameInterface({ stopGame, game }: GameInterfaceProps) {
  const { getRightAnswersCount } = useRightAnswersLocalStorage();

  const [sectionId, setSectionId] = useState<number>(3);

  return (
    <main className="flex flex-col items-center py-8">
      <div className="w-full px-6 pb-4">
        <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between gap-4">
          <div className="flex-1">
            <button
              onClick={stopGame}
              className="flex items-center justify-center rounded-md border border-red-200 px-3 py-2 hover:bg-red-50"
            >
              <XIcon className="mr-2 size-4 flex-shrink-0 text-red-500" />
              Terminar jogo
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <CheckIcon className="mr-2 size-4 text-green-500" />
            <p>
              Respostas certas: <span>{getRightAnswersCount()}</span>
            </p>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <Link
              href="/guia"
              className="flex items-center justify-center hover:underline"
            >
              <ScrollTextIcon className="mr-2 size-4 flex-shrink-0" />
              Como jogar?
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-t px-6 py-2">
        <ul className="mx-auto flex w-full max-w-screen-lg flex-wrap items-center justify-between gap-6">
          <li>
            <Selector id={0} current_id={sectionId} setSectionId={setSectionId}>
              História
            </Selector>
          </li>
          <li>
            <Selector id={1} current_id={sectionId} setSectionId={setSectionId}>
              Mensagens
            </Selector>
          </li>
          <li>
            <Selector id={2} current_id={sectionId} setSectionId={setSectionId}>
              Respostas
            </Selector>
          </li>
          <li>
            <Selector id={3} current_id={sectionId} setSectionId={setSectionId}>
              Informações
            </Selector>
          </li>
        </ul>
      </div>

      <div className="w-full px-6">
        {sectionId === 0 ? (
          <Story count={game.count} html={game.html} />
        ) : sectionId === 1 ? (
          <Prompts encrypted_prompts={game.encrypted_prompts} />
        ) : sectionId === 2 ? (
          <Answers history={game.history} />
        ) : (
          <Information e={game.e} n={game.n} />
        )}
      </div>
    </main>
  );
}
