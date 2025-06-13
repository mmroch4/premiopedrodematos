import { useLocalStorage } from "usehooks-ts";

export function useStartedAtLocalStorage() {
  const [startedAt, setStartedAt, removeStartedAt] = useLocalStorage(
    "STARTED_AT",
    "",
  );

  function resetStartedAt() {
    setStartedAt("");
  }

  return {
    startedAt,
    setStartedAt,
    removeStartedAt,
    resetStartedAt,
  };
}
