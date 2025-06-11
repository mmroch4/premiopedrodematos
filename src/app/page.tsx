import { InfoIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-grid grid min-h-screen p-4">
      <main className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/jogar"
            className="rounded bg-blue-500 px-10 py-3 text-lg font-bold uppercase tracking-wide text-white hover:bg-blue-600"
          >
            Jogar
          </Link>
        </div>
        <Link
          href="/sobre"
          className="flex items-center justify-center rounded px-4 py-3 tracking-wide flex-wrap hover:bg-slate-200"
        >
          <InfoIcon className="mr-2 size-4" /> Saiba mais sobre o projeto
        </Link>
      </main>
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
