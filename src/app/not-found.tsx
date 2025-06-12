import { Footer } from "@/components/footer";
import { HouseIcon } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="not-found-grid">
      <main className="flex flex-col items-center justify-center px-6 py-4">
        <div className="mb-4 flex items-center justify-center">
          <img
            src="/images/not-found.svg"
            alt="Shh... • Prémio Pedro de Matos"
            className="mr-3 size-16"
          />
          <h1 className="text-4xl font-bold">Oops...</h1>
        </div>

        <p className="mb-6 text-center text-lg text-slate-800">
          Desculpe, a página que procuras não existe.
        </p>

        <Link
          href="/"
          className="flex items-center justify-center rounded bg-amber-500 px-3 py-2 text-amber-950 hover:bg-amber-600"
        >
          <HouseIcon className="mr-2 size-5" /> Ir à página principal
        </Link>
      </main>

      <Footer />
    </div>
  );
}
