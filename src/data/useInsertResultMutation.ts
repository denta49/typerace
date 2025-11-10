"use client";
import { ResultInsert } from "@/validation/db";

export const useInsertResultMutation = () => {
  // TODO: insert  results, onSuccess -> invalidate ThisRound/Leaderboard
  return {
    mutate: (_payload: {
      roundId: ResultInsert["round_id"];
      playerId: ResultInsert["player_id"];
      wpm: ResultInsert["wpm"];
      accuracy: ResultInsert["accuracy"];
      correctChars: ResultInsert["correct_chars"];
      totalChars: ResultInsert["total_chars"];
      sentenceText: ResultInsert["sentence_text"];
      sentenceId?: ResultInsert["sentence_id"];
    }) => {},
    isPending: false,
    error: null as unknown,
  };
};
