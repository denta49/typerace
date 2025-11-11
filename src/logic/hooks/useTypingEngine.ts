"use client";
import { useMemo } from "react";

import useTypingStore from "@/logic/stores/useTypingStore";
import compareProgress from "@/logic/utils/compareProgress";
import throttle from "@/logic/utils/throttle";
import wpmFromCorrect from "@/logic/utils/wpmFormCorrect";
import { ResultInsert } from "@/validation/db";

export const useTypingEngine = (opts: {
  sentence: ResultInsert["sentence_text"];
  round: { elapsedMs: number; totalMs: number };
  sendProgressAction?: (p: {
    progressText: ResultInsert["sentence_text"];
    correctChars: ResultInsert["correct_chars"];
    accuracy: ResultInsert["accuracy"];
    wpm: ResultInsert["wpm"];
  }) => void;
}) => {
  const { sentence, round, sendProgressAction } = opts;
  const { typed, updateFromInput } = useTypingStore();

  const throttledSend = useMemo(
    () =>
      throttle(
        (payload: {
          progressText: string;
          correctChars: number;
          accuracy: number;
          wpm: number;
        }) => {
          sendProgressAction?.(payload);
        },
        100,
      ),
    [sendProgressAction],
  );

  const onChange = (input: string) => {
    const { correctChars, accuracy } = compareProgress(sentence, input);
    const wpm = wpmFromCorrect(correctChars, round.elapsedMs);
    updateFromInput(sentence, input, round.elapsedMs);
    throttledSend({ progressText: input, correctChars, accuracy, wpm });
  };

  return { value: typed, onChange };
};
