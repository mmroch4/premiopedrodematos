"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import {
  BookTextIcon,
  BowArrowIcon,
  ImageIcon,
  InfoIcon,
  MenuIcon,
  ScrollTextIcon,
  University,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ARTICLE_URL = process.env.NEXT_PUBLIC_ARTICLE_URL as string;
const POSTER_URL = process.env.NEXT_PUBLIC_POSTER_URL as string;
const PPM_URL = process.env.NEXT_PUBLIC_PPM_URL as string;

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 py-4">
      <nav className="mx-auto flex w-full max-w-screen-lg flex-wrap items-center justify-between gap-6">
        <div>
          <Link href="/" className="flex items-center justify-center">
            <div className="mr-2">
              <img
                src="/images/logo.svg"
                alt="Shh... • Prémio Pedro de Matos"
                className="size-8"
              />
            </div>

            <span className="text-xl font-medium">Shh...</span>
          </Link>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Abrir menu de navegação</span>

            <MenuIcon className="size-6" />
          </button>
        </div>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="md:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center justify-between border-b pb-6">
                  <Link href="/" className="flex items-center justify-center">
                    <div className="mr-2">
                      <img
                        src="/images/logo.svg"
                        alt="Shh... • Prémio Pedro de Matos"
                        className="size-8"
                      />
                    </div>

                    <span className="text-xl font-medium">Shh...</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5"
                  >
                    <span className="sr-only">Fechar menu de navegação</span>

                    <XIcon
                      aria-hidden="true"
                      className="size-6 text-slate-800"
                    />
                  </button>
                </div>

                <div className="flow-root">
                  <div>
                    <ul className="mb-4 space-y-1 border-b pb-4">
                      <li>
                        <Link
                          href="/jogar"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-ml-3 flex items-center rounded-lg px-3 py-2 text-lg hover:bg-slate-100"
                        >
                          <BowArrowIcon className="mr-3 size-5 flex-shrink-0" />
                          Jogar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/guia"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-ml-3 flex items-center rounded-lg px-3 py-2 text-lg hover:bg-slate-100"
                        >
                          <ScrollTextIcon className="mr-3 size-5 flex-shrink-0" />
                          Como jogar?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sobre"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-ml-3 flex items-center rounded-lg px-3 py-2 text-lg hover:bg-slate-100"
                        >
                          <InfoIcon className="mr-3 size-5 flex-shrink-0" />
                          Sobre o projeto
                        </Link>
                      </li>
                    </ul>

                    <ul className="space-y-1">
                      <li>
                        <a
                          href={ARTICLE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          title='Artigo "RSA: O método de chaves públicas e assinaturas digitais"'
                          onClick={() => setMobileMenuOpen(false)}
                          className="-ml-3 flex items-center rounded-lg px-3 py-2 text-lg hover:bg-slate-100"
                        >
                          <BookTextIcon className="mr-3 size-5 flex-shrink-0" />{" "}
                          Artigo
                        </a>
                      </li>
                      <li>
                        <a
                          href={POSTER_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          title='Poster do Artigo "RSA: O método de chaves públicas e assinaturas digitais"'
                          className="-ml-3 flex items-center rounded-lg px-3 py-2 text-lg hover:bg-slate-100"
                        >
                          <ImageIcon className="mr-3 size-5 flex-shrink-0" />{" "}
                          Poster do Artigo
                        </a>
                      </li>
                      <li>
                        <a
                          href={PPM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          title="17º edição do Prémio Pedro de Matos • Instituto Politécnico de Leiria"
                          className="-ml-3 flex items-center rounded-lg px-3 py-2 text-lg hover:bg-slate-100"
                        >
                          <University className="mr-3 size-5 flex-shrink-0" />{" "}
                          Prémio Pedro de Matos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center py-8">
                <p className="text-slate-800">
                  Feito por{" "}
                  <a
                    href="https://www.miguelrocha.dev/pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-500"
                  >
                    Miguel Rocha
                  </a>
                </p>
              </div>
            </div>
          </DialogPanel>
        </Dialog>

        <div className="hidden flex-wrap items-center gap-6 md:flex">
          <ul className="flex flex-wrap items-center gap-6">
            <li>
              <Link
                href="/jogar"
                className="flex items-center justify-center hover:underline"
              >
                <BowArrowIcon className="mr-2 size-4 flex-shrink-0" />
                Jogar
              </Link>
            </li>
            <li>
              <Link
                href="/guia"
                className="flex items-center justify-center hover:underline"
              >
                <ScrollTextIcon className="mr-2 size-4 flex-shrink-0" />
                Como jogar?
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="flex items-center justify-center hover:underline"
              >
                <InfoIcon className="mr-2 size-4 flex-shrink-0" />
                Sobre o projeto
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-2">
            <li>
              <a
                href={ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title='Artigo "RSA: O método de chaves públicas e assinaturas digitais"'
                className="flex items-center justify-center rounded border p-2 hover:bg-slate-200"
              >
                <span className="sr-only">
                  Artigo &quot;RSA: O método de chaves públicas e assinaturas
                  digitais&quot;
                </span>

                <BookTextIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={POSTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                title='Poster do Artigo "RSA: O método de chaves públicas e assinaturas digitais"'
                className="flex items-center justify-center rounded border p-2 hover:bg-slate-200"
              >
                <span className="sr-only">
                  Poster do Artigo &quot;RSA: O método de chaves públicas e
                  assinaturas digitais&quot;
                </span>

                <ImageIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={PPM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="17º edição do Prémio Pedro de Matos • Instituto Politécnico de Leiria"
                className="flex items-center justify-center rounded border p-2 hover:bg-slate-200"
              >
                <span className="sr-only">
                  17º edição do Prémio Pedro de Matos • Instituto Politécnico de
                  Leiria
                </span>

                <University className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
