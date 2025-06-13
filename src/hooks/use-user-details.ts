import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

type Body = {
  user: {
    name: string;
    password: string;
  };
};

async function getUserDetails(user: string) {
  const res = await fetch(`${BASE_URL}/api/user/details`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({ user }),
  });

  const body = (await res.json()) as Body;

  return body.user;
}

export function useUserDetails(isEnabledToFetch: boolean, user: string) {
  return useQuery({
    queryKey: ["USER_DETAILS"],
    queryFn: async () => await getUserDetails(user),
    enabled: isEnabledToFetch,
    staleTime: Infinity,
  });
}
