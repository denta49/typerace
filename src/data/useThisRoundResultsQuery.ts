"use client";
import { ResultRow } from "@/validation/db";

const useThisRoundResultsQuery = (_roundId: string) => {
  // TODO: select results for this round, join players
  return {
    data: [] as Array<{
      playerId: ResultRow["player_id"];
      wpm: ResultRow["wpm"];
      accuracy: ResultRow["wpm"];
      sentenceText: ResultRow["sentence_text"];
      createdAt: string;
    }>,
    isLoading: false,
    error: null as unknown,
  };
};
export default useThisRoundResultsQuery;
