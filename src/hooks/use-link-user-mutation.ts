import { useMutation } from "@tanstack/react-query";

type LinkUserParams = {
  name: string;
  password: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

async function linkUser({ name, password }: LinkUserParams) {
  const response = await fetch(`${BASE_URL}/api/user/link`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      password,
    }),
  });

  const responseBody = (await response.json()) as {
    isOk: boolean;
    token: string;
    error?: string;
  };

  return responseBody;
}

export function useLinkUserMutation() {
  return useMutation({
    mutationFn: linkUser,
  });
}
