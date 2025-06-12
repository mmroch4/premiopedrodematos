import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

type Body = {
  story: {
    history: string;
    e: string;
    n: string;
    count: number;
    html: string;
    encrypted_prompts: string[][];
  };
};

async function generateGame() {
  const res = await fetch(`${BASE_URL}/api/game/generate`, {
    cache: "no-store",
  });

  const body = (await res.json()) as Body;

  return body.story;
}

export function useGenerateGame(isEnabledToFetch: boolean) {
  return useQuery({
    queryKey: ["GAME"],
    queryFn: generateGame,
    enabled: isEnabledToFetch,
    staleTime: Infinity,
  });
}
