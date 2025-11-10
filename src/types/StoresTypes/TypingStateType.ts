import ResultType from "@/types/dataTypes/ResultType";
import SentenceType from "@/types/dataTypes/SentenceType";

type TypingStateType = {
  typed: string;
  correctChars: ResultType["correctChars"];
  totalChars: ResultType["totalChars"];
  wpm: ResultType["wpm"];
  accuracy: ResultType["accuracy"];
  reset: () => void;
  updateFromInput: (sentence: SentenceType["text"], input: string, elapsedMs: number) => void;
};

export default TypingStateType;
