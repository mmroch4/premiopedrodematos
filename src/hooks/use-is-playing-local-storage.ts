import { useLocalStorage } from "usehooks-ts";

export function useIsPlayingLocalStorage() {
  const [isPlaying, setIsPlaying, removeIsPlaying] = useLocalStorage(
    "IS_PLAYING",
    false,
  );

  function resetIsPlaying() {
    setIsPlaying(false);
  }

  return {
    isPlaying,
    setIsPlaying,
    removeIsPlaying,
    resetIsPlaying,
  };
}
