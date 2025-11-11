import { ResultInsert } from "@/validation/db";
import { SentenceRow } from "@/validation/db";

type TypingStateType = {
  typed: string;
  correctChars: ResultInsert["correct_chars"];
  totalChars: ResultInsert["total_chars"];
  wpm: ResultInsert["wpm"];
  accuracy: ResultInsert["accuracy"];
  reset: () => void;
  updateFromInput: (sentence: SentenceRow["text"], input: string, elapsedMs: number) => void;
};

export default TypingStateType;
