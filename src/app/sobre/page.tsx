import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { BookTextIcon, ImageIcon, InfoIcon, University } from "lucide-react";

import { Metadata } from "next";
import { metadata as m } from "../metadata";

export const metadata: Metadata = {
  ...m,
  title: "Sobre • Shh...",
  description: "Que raios é isto, é pá?",
};

const PPM_URL = process.env.NEXT_PUBLIC_PPM_URL as string;
const ARTICLE_URL = process.env.NEXT_PUBLIC_ARTICLE_URL as string;
const POSTER_URL = process.env.NEXT_PUBLIC_POSTER_URL as string;

export default function AboutPage() {
  return (
    <div className="default-grid">
      <Navigation />

      <main className="px-6">
        <div className="mx-auto max-w-screen-md py-12">
          <div className="mb-6 flex items-center">
            <InfoIcon className="mr-3 size-10 text-amber-500" />
            <h1 className="text-4xl font-bold">Sobre o projeto</h1>
          </div>

          <p className="mb-4 text-justify text-lg text-slate-800">
            Este site foi criado com a finalidade de constituir o{" "}
            <em>Material Interativo</em> do artigo{" "}
            <span className="font-medium">
              &quot;RSA: O método de chaves públicas e assinaturas
              digitais&quot;
            </span>
            , apresentado por{" "}
            <a
              href="https://www.miguelrocha.dev/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap underline hover:text-amber-500"
            >
              Miguel Martins Rocha
            </a>
            , candidato à 17º edição do Prémio Pedro de Matos .
          </p>

          <p className="mb-4 text-justify text-lg text-slate-800">
            O objetivo deste projeto é proporcionar uma experiência interativa e
            educativa sobre o algoritmo RSA, um dos métodos mais utilizados para
            criptografia e assinaturas digitais, permitindo que os utilizadores
            compreendam melhor como funciona a criptografia assimétrica.
          </p>

          <p className="mb-4 text-justify text-lg text-slate-800">
            Espero que este projeto contribua para a divulgação do conhecimento
            em criptografia e que inspire outros a explorar este fascinante
            campo da matemática e da segurança digital.
          </p>

          <ul className="space-y-2">
            <li>
              <a
                href={ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title='Artigo "RSA: O método de chaves públicas e assinaturas digitais"'
                className="flex w-fit items-center rounded border border-amber-500 p-2 text-amber-900 hover:bg-amber-100"
              >
                <BookTextIcon className="mr-2 size-4 flex-shrink-0" /> Artigo
                &quot;RSA: O método de chaves públicas e assinaturas
                digitais&quot;
              </a>
            </li>
            <li>
              <a
                href={POSTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                title='Poster do Artigo "RSA: O método de chaves públicas e assinaturas digitais"'
                className="flex w-fit items-center rounded border border-amber-500 p-2 text-amber-900 hover:bg-amber-100"
              >
                <ImageIcon className="mr-2 size-4 flex-shrink-0" /> Poster do
                Artigo &quot;RSA: O método de chaves públicas e assinaturas
                digitais&quot;
              </a>
            </li>
            <li>
              <a
                href={PPM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="17º edição do Prémio Pedro de Matos • Instituto Politécnico de Leiria"
                className="flex w-fit items-center rounded border border-amber-500 p-2 text-amber-900 hover:bg-amber-100"
              >
                <University className="mr-2 size-4 flex-shrink-0" />
                17º edição do Prémio Pedro de Matos • Instituto Politécnico de
                Leiria
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
