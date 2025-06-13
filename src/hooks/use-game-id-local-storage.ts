import { useLocalStorage } from "usehooks-ts";

export function useGameIdLocalStorage() {
  const [gameId, setGameId, removeGameId] = useLocalStorage("GAME_ID", "");

  function resetGameId() {
    setGameId("");
  }

  return {
    gameId,
    setGameId,
    removeGameId,
    resetGameId,
  };
}
