import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  defaultRightAnswers,
  useRightAnswersLocalStorage,
} from "./use-right-answers-local-storage";
import { useVerifyAnswersMutation } from "./use-verify-answers-mutation";

type FormValues = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
};

const formSchema = z.object({
  "0": z.string().toUpperCase(),
  "1": z.string().toUpperCase(),
  "2": z.string().toUpperCase(),
  "3": z.string().toUpperCase(),
  "4": z.string().toUpperCase(),
  "5": z.string().toUpperCase(),
  "6": z.string().toUpperCase(),
  "7": z.string().toUpperCase(),
  "8": z.string().toUpperCase(),
  "9": z.string().toUpperCase(),
  "10": z.string().toUpperCase(),
  "11": z.string().toUpperCase(),
});

const defaultFormValues: FormValues = {
  "0": "",
  "1": "",
  "2": "",
  "3": "",
  "4": "",
  "5": "",
  "6": "",
  "7": "",
  "8": "",
  "9": "",
  "10": "",
  "11": "",
};

export function useVerifyAnswersForm(history: string) {
  const { register, handleSubmit, setValue, formState } = useForm<FormValues>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const { parseRightAnswers, setRightAnswers } = useRightAnswersLocalStorage();

  useEffect(() => {
    const parsedRightAnswers = parseRightAnswers();

    for (const key in parsedRightAnswers) {
      const answer = parsedRightAnswers[
        key as keyof typeof parsedRightAnswers
      ] as boolean | string;

      if (answer && typeof answer === "string" && answer !== "") {
        setValue(key as keyof FormValues, answer as string);
      }
    }
  }, [parseRightAnswers, setValue]);

  const { mutateAsync: verify, data: verification } =
    useVerifyAnswersMutation();

  const onSubmit = handleSubmit(async (data) => {
    const given_answers = [];

    for (const key in data) {
      given_answers.push(data[key as keyof typeof data]);
    }

    const result = await verify({ history, answers: given_answers });

    const answersToPersist: { [key: string]: string | boolean } =
      defaultRightAnswers;

    for (let i = 0; i < result.verdict.length; i++) {
      if (result.verdict[i]) {
        answersToPersist[String(i) as keyof typeof answersToPersist] =
          given_answers[i];
      }
    }

    setRightAnswers(JSON.stringify(answersToPersist));
  });

  return { register, onSubmit, verification, formState };
}
