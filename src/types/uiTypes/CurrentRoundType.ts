import LivePlayerType from "@/types/StoresTypes/LivePlayerType";
import { ResultInsert } from "@/validation/db";

type CurrentRoundType = {
  secondsLeft: number;
  totalSeconds: number;
  sentencePending: boolean;
  sentenceError?: string;
  sentenceText: ResultInsert["sentence_text"];
  typingProps: {
    sentence: ResultInsert["sentence_text"];
    round: {
      roundId: ResultInsert["round_id"];
      leftMs: number;
      elapsedMs: number;
      totalMs: number;
    };
    sendProgress: (p: {
      playerId: ResultInsert["player_id"];
      username: LivePlayerType["username"];
      roundId: ResultInsert["round_id"];
      progressText: string;
      correctChars: ResultInsert["correct_chars"];
      accuracy: ResultInsert["accuracy"];
      wpm: ResultInsert["wpm"];
    }) => void;
  };
};

export default CurrentRoundType;
