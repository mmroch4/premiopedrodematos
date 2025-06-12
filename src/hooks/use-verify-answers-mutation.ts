import { useMutation } from "@tanstack/react-query";

type VerifyAnswersParams = {
  history: string;
  answers: string[];
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

async function verifyAnswers({ history, answers }: VerifyAnswersParams) {
  const response = await fetch(`${BASE_URL}/api/game/check-answers`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      history,
      answers,
    }),
  });

  const responseBody = (await response.json()) as {
    all_right: boolean;
    counter: number;
    verdict: boolean[];
  };

  return responseBody;
}

export function useVerifyAnswersMutation() {
  return useMutation({
    mutationFn: verifyAnswers,
  });
}
