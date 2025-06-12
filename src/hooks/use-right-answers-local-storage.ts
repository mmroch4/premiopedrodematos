import { useLocalStorage } from "usehooks-ts";

export const defaultRightAnswers = {
  "0": false,
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
  "6": false,
  "7": false,
  "8": false,
  "9": false,
  "10": false,
  "11": false,
};

export const jsonDefaultRightAnswers = JSON.stringify(defaultRightAnswers);

export type DefaultRightAnswersKeys = keyof typeof defaultRightAnswers;


export function useRightAnswersLocalStorage() {
  const [rightAnswers, setRightAnswers, removeRightAnswers] = useLocalStorage(
    "RIGHT_ANSWERS",
    jsonDefaultRightAnswers,
  );

  function parseRightAnswers() {
    return JSON.parse(rightAnswers);
  }

  function resetRightAnswers() {
    setRightAnswers(jsonDefaultRightAnswers);
  }

  function getRightAnswersCount() {
    const parsedRightAnswers = parseRightAnswers();

    let count = 0;

    for (const key in parsedRightAnswers) {
      if (!!parsedRightAnswers[key as keyof typeof parsedRightAnswers]) {
        count++;
      }
    }

    return count;
  }

  return {
    rightAnswers,
    setRightAnswers,
    removeRightAnswers,
    parseRightAnswers,
    getRightAnswersCount,
    resetRightAnswers,
  };
}
