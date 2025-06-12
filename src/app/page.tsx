import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { BowArrowIcon, InfoIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="default-grid">
      <Navigation />

      <main className="flex flex-col items-center justify-center gap-12 px-6">
        <header>
          <div className="mb-6 flex items-center justify-center">
            <div className="mr-2 flex-shrink-0">
              <img
                src="/images/logo.svg"
                alt="Shh... • Prémio Pedro de Matos"
                className="mr-2 size-[4.5rem] sm:mr-4 sm:size-24"
              />
            </div>

            <h1 className="text-5xl font-medium sm:text-7xl">Shh...</h1>
          </div>

          <p className="text-center text-lg text-slate-800">
            Se não gostas de enigmas,{" "}
            <Link
              href="/jogar"
              className="font-bold uppercase text-slate-950 underline decoration-amber-400 decoration-2"
            >
              não jogues!
            </Link>
          </p>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          <Link
            href="/jogar"
            className="flex items-center justify-center rounded bg-amber-500 px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-amber-600 sm:text-lg"
          >
            <BowArrowIcon className="mr-2 size-5 sm:size-6" /> Jogar
          </Link>

          <Link
            href="/sobre"
            className="flex flex-wrap items-center justify-center gap-2 rounded text-center tracking-wide hover:underline"
          >
            <InfoIcon className="size-4" /> Saiba mais sobre o projeto
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
