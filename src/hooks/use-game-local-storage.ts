import { useLocalStorage } from "usehooks-ts";

export function useGameLocalStorage() {
  const [game, setGame, removeGame] = useLocalStorage("GAME", "{}");

  function parseGame() {
    return JSON.parse(game);
  }

  function resetGame() {
    setGame("{}");
  }

  return {
    game,
    setGame,
    removeGame,
    parseGame,
    resetGame
  };
}
