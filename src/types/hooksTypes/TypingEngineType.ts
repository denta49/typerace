import SentenceType from "@/types/dataTypes/SentenceType";

type TypingEngineType = {
  sentence: SentenceType["text"];
  round: {
    elapsedMs: number;
    totalMs: number;
  };
};

export default TypingEngineType;
