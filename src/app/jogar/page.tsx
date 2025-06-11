"use client";

import { Game } from "@/components/game";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CircleHelpIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsClient, useLocalStorage } from "usehooks-ts";

async function getGame() {
  const res = await fetch("/api/game/generate");

  const body = (await res.json()) as {
    story: {
      history: string;
      e: string;
      n: string;
      count: number;
      html: string;
      encrypted_prompts: string[][];
    };
  };

  return body.story;
}

export default function PlayPage() {
  const isClient = useIsClient();

  const [isPlaying, setIsPlaying, removeIsPlaying] = useLocalStorage(
    "is_playing",
    false,
  );
  const [game, setGame, removeGame] = useLocalStorage("game", "");

  const [isEnabledToFetch, setIsEnabledToFetch] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery({
    queryKey: ["game"],
    queryFn: getGame,
    enabled: isEnabledToFetch,
    staleTime: "static",
  });

  const isCreating = !isSuccess;

  function startGame() {
    setIsEnabledToFetch(true);
  }

  useEffect(() => {
    if (isEnabledToFetch && !isCreating) {
      setIsEnabledToFetch(false);

      setIsPlaying(true);
      setGame(JSON.stringify(data));
    }
  }, [isEnabledToFetch, isCreating]);

  function stopGame() {
    setIsPlaying(false);
    setGame("");
    queryClient.invalidateQueries({ queryKey: ["game"] });
  }

  if (!isClient) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="about-grid grid min-h-screen p-4">
      <nav className="flex items-center">
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="/"
              className="flex items-center justify-center rounded border px-3 py-2"
            >
              <HomeIcon className="mr-2 size-4" /> Página Principal
            </Link>
          </li>
        </ul>
      </nav>

      {!isPlaying ? (
        <main className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <button
              onClick={startGame}
              className="rounded bg-amber-500 px-4 py-3 text-lg font-bold uppercase tracking-wide text-white hover:bg-amber-600"
            >
              Começar Jogo
            </button>

            <Link
              href="/guia"
              className="flex flex-wrap items-center justify-center rounded px-4 py-3 tracking-wide hover:bg-slate-200"
            >
              <CircleHelpIcon className="mr-2 size-4" /> Como Jogar?
            </Link>
          </div>
        </main>
      ) : (
        <Game stopGame={stopGame} game={data || JSON.parse(game)} />
      )}

      <footer className="flex items-center justify-center py-12 text-center">
        <p className="flex flex-wrap items-center justify-center gap-1">
          Feito por{" "}
          <a
            href="https://www.miguelrocha.dev/pt"
            target="_blank"
            className="underline hover:text-blue-500"
          >
            Miguel Rocha
          </a>
        </p>
      </footer>
    </div>
  );
}
