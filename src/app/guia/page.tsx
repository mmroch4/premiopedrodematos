import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ScrollTextIcon } from "lucide-react";
import { Metadata } from "next";
import { metadata as m } from "../metadata";

export const metadata: Metadata = {
  ...m,
  title: "Como jogar? • Shh...",
  description:
    "Aprende a jogar aqui! Se não conseguires, me deves um gelado 🍦",
};

export default function GuidePage() {
  return (
    <div className="default-grid">
      <Navigation />

      <main className="px-6">
        <div className="mx-auto max-w-screen-md py-12">
          <div className="mb-6 flex items-center">
            <ScrollTextIcon className="mr-3 size-10 text-amber-500" />
            <h1 className="text-4xl font-bold">Como jogar?</h1>
          </div>

          <p className="mb-4 text-justify text-lg text-slate-800">
            Vais acompanhar uma história em que alguns trechos foram encriptados
            com o algoritmo RSA. O teu desafio é{" "}
            <span className="font-bold">
              quebrar a criptografia e descobrir o que está escrito
            </span>
            .
          </p>

          <p className="mb-4 text-justify text-lg text-slate-800">
            A chave pública usada para encriptar as mensagens estará disponível
            juntamente com uma tabela de correspondência de caracteres.
          </p>

          <p className="mb-6 text-justify text-lg text-slate-800">
            <strong>Cada letra foi encriptada à parte</strong> — ou seja, um
            número encriptado <strong>X</strong>, depois de desencriptado,
            retorna um número <strong>Y</strong> que, com a ajuda de uma tabela
            de correspondência, te diz qual é a letra certa.
          </p>

          <h2 className="mb-4 text-2xl font-bold">
            Como desencriptar as mensagens?
          </h2>

          <p className="mb-4 text-justify text-lg text-slate-800">
            Para desencriptar as mensagens, deves seguir os seguintes passos:
          </p>

          <ol className="space-y-4 text-lg">
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-500">1.</span>
              <div>
                <h3 className="text-xl font-medium">Fatorizar n</h3>

                <p className="text-slate-800">
                  Descubra os dois primos <code className="font-bold">p</code> e{" "}
                  <code className="font-bold">q</code> tal que:
                </p>

                <code className="mt-2 block w-fit rounded-md border bg-slate-100 px-3 py-2 font-bold">
                  n = p × q
                </code>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-500">2.</span>
              <div>
                <h3 className="text-xl font-medium">Calcular φ(n)</h3>

                <code className="mt-2 block w-fit rounded-md border bg-slate-100 px-3 py-2 font-bold">
                  φ(n) = (p − 1) × (q − 1)
                </code>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-500">3.</span>
              <div>
                <h3 className="text-xl font-medium">
                  Calcular d (chave privada)
                </h3>

                <p className="text-slate-800">
                  Encontre <strong>d</strong> tal que:
                </p>

                <code className="mt-2 block w-fit rounded-md border bg-slate-100 px-3 py-2 font-bold">
                  d ≡ e⁻¹ (mod φ(n))
                </code>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-500">4.</span>
              <div>
                <h3 className="text-xl font-medium">Desencriptar a mensagem</h3>

                <p className="text-slate-800">
                  Para cada letra <code className="font-bold">c</code> da
                  mensagem encriptada, calcule:
                </p>

                <code className="mt-2 block w-fit rounded-md border bg-slate-100 px-3 py-2 font-bold">
                  m = cᵈ mod n
                </code>

                <p className="mt-2 text-slate-800">
                  <code className="font-bold">m</code> será a forma numérica da
                  letra. Use a tabela de correspondência para converter o número
                  em letra.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  );
}
