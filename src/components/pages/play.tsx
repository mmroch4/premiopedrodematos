"use client";

import { Footer } from "@/components/footer";
import { GameInterface } from "@/components/game";
import { Navigation } from "@/components/navigation";
import { useGame } from "@/hooks/use-game";
import { FlameIcon, LoaderCircleIcon, ScrollTextIcon } from "lucide-react";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="default-grid">
      <Navigation />

      {children}

      <Footer />
    </div>
  );
}

export function PlayPage() {
  const isClient = useIsClient();

  const { isPlaying, startGame, stopGame, game, isCreating } = useGame();

  if (!isClient || isCreating) {
    return (
      <Wrapper>
        <main className="flex flex-col items-center justify-center px-6">
          <div className="mb-6 flex items-center justify-center">
            <LoaderCircleIcon
              className="size-16 animate-spin text-slate-400"
              strokeWidth={1}
            />
          </div>
          <h1 className="mb-3 text-center text-3xl font-bold">A carregar...</h1>
          <p className="mb-2 text-center text-lg text-slate-800">
            Acalma-te, amigo! Já está prestes a começar.
          </p>
          <p className="text-center text-lg text-slate-800">
            Sabias que: o recorde de voo de uma galinha é de 13 segundos 🤯
          </p>
        </main>
      </Wrapper>
    );
  }

  if (isPlaying) {
    console.log(game);
    return (
      <Wrapper>
        <GameInterface stopGame={stopGame} game={game} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <main className="flex flex-col items-center justify-center gap-12 px-6">
        <header>
          <div className="mb-6 flex items-center justify-center">
            <div className="mr-2 flex-shrink-0">
              <img
                src="/images/play.svg"
                alt="Shh... • Prémio Pedro de Matos"
                className="mr-2 size-14 sm:mr-4 sm:size-20"
              />
            </div>

            <h1 className="text-3xl font-medium sm:text-5xl">Estás pronto??</h1>
          </div>

          <p className="text-center text-lg text-slate-800">
            Antes de começar,{" "}
            <Link
              href="/guia"
              className="font-bold uppercase text-slate-950 underline decoration-amber-400 decoration-2"
            >
              veja como jogar!!{" "}
            </Link>
          </p>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          <button
            onClick={startGame}
            className="flex items-center justify-center rounded bg-amber-500 px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-amber-600 sm:text-lg"
          >
            <FlameIcon className="mr-2 size-5 sm:size-6" /> COMEÇAR
          </button>

          <Link
            href="/guia"
            className="flex flex-wrap items-center justify-center gap-2 rounded text-center tracking-wide hover:underline"
          >
            <ScrollTextIcon className="size-4" /> Como jogar?
          </Link>
        </div>
      </main>
    </Wrapper>
  );
}
