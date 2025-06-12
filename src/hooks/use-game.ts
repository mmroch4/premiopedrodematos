import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useGameLocalStorage } from "./use-game-local-storage";
import { useGenerateGame } from "./use-generate-game";
import { useIsPlayingLocalStorage } from "./use-is-playing-local-storage";
import { useRightAnswersLocalStorage } from "./use-right-answers-local-storage";

export function useGame() {
  const queryClient = useQueryClient();

  const [isEnabledToFetch, setIsEnabledToFetch] = useState<boolean>(false);

  const { isPlaying, setIsPlaying, resetIsPlaying } =
    useIsPlayingLocalStorage();

  const { setGame, parseGame, resetGame } = useGameLocalStorage();

  const { resetRightAnswers } = useRightAnswersLocalStorage();

  const { isPending: isCreating, data: generatedGame } =
    useGenerateGame(isEnabledToFetch);

  function startGame() {
    setIsEnabledToFetch(true);
  }

  function stopGame() {
    resetIsPlaying();
    resetGame();
    resetRightAnswers();
    setIsEnabledToFetch(false);
    queryClient.invalidateQueries({ queryKey: ["GAME"] });
  }

  useEffect(() => {
    if (isEnabledToFetch && !isCreating) {
      setIsEnabledToFetch(false);
      setIsPlaying(true);
      setGame(JSON.stringify(generatedGame));
      resetRightAnswers();
    }
  }, [
    isEnabledToFetch,
    isCreating,
    setIsEnabledToFetch,
    setIsPlaying,
    setGame,
    generatedGame,
    resetRightAnswers,
  ]);

  return {
    game: generatedGame || parseGame(),
    isPlaying,
    startGame,
    stopGame,
    parseGame,
  };
}
