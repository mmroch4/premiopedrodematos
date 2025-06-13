import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useGameIdLocalStorage } from "./use-game-id-local-storage";
import { useGameLocalStorage } from "./use-game-local-storage";
import { useGenerateGame } from "./use-generate-game";
import { useIsPlayingLocalStorage } from "./use-is-playing-local-storage";
import { useRightAnswersLocalStorage } from "./use-right-answers-local-storage";
import { useStartedAtLocalStorage } from "./use-started-at-local-storage";

export function useGame() {
  const queryClient = useQueryClient();

  const [isEnabledToFetch, setIsEnabledToFetch] = useState<boolean>(false);

  const { isPlaying, setIsPlaying, resetIsPlaying } =
    useIsPlayingLocalStorage();

  const { setGame, parseGame, resetGame } = useGameLocalStorage();

  const { resetRightAnswers } = useRightAnswersLocalStorage();

  const { resetStartedAt, setStartedAt } = useStartedAtLocalStorage();

  const { resetGameId, setGameId } = useGameIdLocalStorage();

  const { isFetching: isCreating, data: generatedGame } =
    useGenerateGame(isEnabledToFetch);

  function startGame() {
    setIsEnabledToFetch(true);
  }

  function stopGame() {
    resetIsPlaying();
    setIsEnabledToFetch(false);
    queryClient.invalidateQueries({ queryKey: ["GAME"] });
    resetGame();
    resetRightAnswers();
    resetGameId();
    resetStartedAt();
  }

  useEffect(() => {
    if (isEnabledToFetch && !isCreating) {
      setIsEnabledToFetch(false);
      setIsPlaying(true);
      setGame(JSON.stringify(generatedGame));
      resetRightAnswers();
      setGameId(generatedGame!.gameId || "");
      setStartedAt(generatedGame!.startedAt || "");
    }
  }, [
    isEnabledToFetch,
    isCreating,
    setIsEnabledToFetch,
    setIsPlaying,
    setGame,
    generatedGame,
    resetRightAnswers,
    setGameId,
    setStartedAt,
  ]);

  return {
    isCreating,
    game: generatedGame || parseGame(),
    isPlaying,
    startGame,
    stopGame,
    parseGame,
  };
}
