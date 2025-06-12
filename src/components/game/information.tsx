import { PATTERN } from "@/services/rsa/pattern";

interface InformationProps {
  e: string;
  n: string;
}

export function Information({ e, n }: InformationProps) {
  return (
    <section className="mx-auto w-full max-w-screen-lg py-4">
      <h1 className="mb-4 text-xl font-bold">Chave Pública de Encriptação</h1>

      <div className="mb-6 rounded-lg border border-amber-400 bg-amber-200 p-4 text-lg text-amber-950">
        <ul>
          <li>
            e: <span className="text-xl font-bold">{e}</span>
          </li>
          <li>
            n: <span className="text-xl font-bold">{n}</span>
          </li>
        </ul>
      </div>

      <h1 className="mb-4 text-xl font-bold">Tabela de Correspondência</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-300 shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
              >
                Caractere
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
              >
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {Object.entries(PATTERN).map(([char, value]) => (
              <tr
                key={char}
                className="transition-colors duration-200 hover:bg-gray-50"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {char !== " " ? char : "⎵ (ESPAÇO)"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
