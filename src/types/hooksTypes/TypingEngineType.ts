import { SentenceRow } from "@/validation/db";

type TypingEngineType = {
  sentence: SentenceRow["text"];
  round: {
    elapsedMs: number;
    totalMs: number;
  };
};

export default TypingEngineType;
