import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="about-grid grid min-h-screen p-4">
      <nav className="flex items-center">
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="/jogar"
              className="flex items-center justify-center rounded border px-3 py-2"
            >
              <ArrowLeftIcon className="mr-2 size-4" /> Voltar
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col items-center justify-center">
        <div className="max-w-md">
          <h1 className="mb-2 text-left text-2xl font-bold">Como jogar?</h1>
          <p className="text-pretty text-justify">
            Vais acompanhar uma história em que alguns trechos foram encriptados
            com o algoritmo RSA.
            <br />
            A chave pública usada para encriptar as mensagens estará disponível.
            <br />O teu desafio é{" "}
            <span className="font-bold">
              quebrar a criptografia e descobrir o que está escrito
            </span>
            .
            <br />
            Cada letra foi encriptada à parte — ou seja, um número encriptado X,
            depois de desencriptado, retorna um número Y que, com a ajuda de uma
            tabela de correspondência, te diz qual é a letra certa.
            <br />A tabela de correspondência estará também disponível.
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
