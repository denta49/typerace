"use client";

import { Skeleton } from "@/components/ui/skeleton";
import CurrentRoundType from "@/types/uiTypes/CurrentRoundType";
import Sentence from "@/ui/Sentence";
import Timer from "@/ui/Timer";
import TypingInput from "@/ui/TypingInput";

export default function CurrentRound({
  secondsLeft,
  totalSeconds,
  sentencePending,
  sentenceError,
  sentenceText,
  typingProps,
}: CurrentRoundType) {
  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Current round</h2>
        <Timer secondsLeft={secondsLeft} total={totalSeconds} />
      </header>

      <div className="mb-4">
        {sentencePending ? (
          <Skeleton className="h-6 w-2/3" />
        ) : sentenceError ? (
          <div className="text-red-600">Error loading sentences: {sentenceError}</div>
        ) : (
          <Sentence sentence={sentenceText} />
        )}
      </div>

      <div className="mb-6">
        <TypingInput {...typingProps} />
      </div>
    </>
  );
}
