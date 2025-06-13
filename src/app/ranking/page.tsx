import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { xata } from "@/services/xata";
import { secondsToTimeSpan } from "@/utils/seconds-to-time-span";
import { TrophyIcon } from "lucide-react";
import { Metadata } from "next";
import { metadata as m } from "../metadata";

export const revalidate = 300; // Revalidate every 5 minutes

export const metadata: Metadata = {
  ...m,
  title: "Ranking • Shh...",
  description:
    "Estes são os melhores dos melhores 🥸. Consegues fazer mais acertos em menos tempo?",
};

export default async function RankingPage() {
  const ranking = await xata.db.leaderboard
    .sort("points", "desc")
    .sort("period", "asc")
    .getMany({ pagination: { size: 10 } });

  return (
    <div className="default-grid">
      <Navigation />

      <main className="overflow-x-hidden px-6">
        <div className="mx-auto max-w-screen-md py-12">
          <div className="mb-6 flex items-center">
            <TrophyIcon className="mr-3 size-10 text-amber-500" />
            <h1 className="text-4xl font-bold">Ranking</h1>
          </div>

          <p className="mb-6 text-justify text-lg text-slate-800">
            Estes são os melhores dos melhores 🥸. Consegues fazer mais acertos
            em menos tempo?
          </p>

          <div className="w-full max-w-full overflow-x-auto">
            <table className="w-full min-w-[28rem] divide-y divide-amber-200 rounded-lg border border-amber-300 shadow-sm">
              <thead className="bg-amber-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
                  >
                    Posição
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
                  >
                    Acertos
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
                  >
                    Tempo decorrido
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700"
                  >
                    Utilizador
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {ranking.map((p, i) => {
                  return (
                    <tr
                      key={"ranking-p-" + i}
                      className="transition-colors duration-200 hover:bg-gray-50"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {i + 1}º
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {p.points}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {secondsToTimeSpan(Number(p.period))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {p.user ? p.user : "😶‍🌫️"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
