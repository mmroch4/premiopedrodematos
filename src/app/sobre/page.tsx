import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-grid grid min-h-screen p-4">
      <nav className="flex items-center">
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="/"
              className="flex items-center justify-center rounded border px-3 py-2"
            >
              <ArrowLeftIcon className="mr-2 size-4" /> Voltar
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col items-center justify-center">
        <div className="max-w-md">
          <p className="text-pretty text-justify">
            Este site foi criado como Material Interativo do trabalho{" "}
            <span className="font-medium italic">
              "RSA: O método de chaves públicas e assinaturas digitais"
            </span>
            , apresentado por{" "}
            <a
              href="https://www.miguelrocha.dev/pt"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Miguel Martins Rocha
            </a>
            , candidato ao{" "}
            <a href="https://premiopedromatos.ipleiria.pt/" target="_blank">
              Prémio Pedro de Matos
            </a>
            .
          </p>
        </div>
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
