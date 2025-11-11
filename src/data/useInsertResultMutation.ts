"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/lib/supabase";
import { ResultInsert } from "@/validation/db";

export default function useInsertResultMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: {
      roundId: ResultInsert["round_id"];
      playerId: ResultInsert["player_id"];
      wpm: ResultInsert["wpm"];
      accuracy: ResultInsert["accuracy"];
      correctChars: ResultInsert["correct_chars"];
      totalChars: ResultInsert["total_chars"];
      sentenceText: ResultInsert["sentence_text"];
      sentenceId?: ResultInsert["sentence_id"];
    }) => {
      const { error } = await supabase.from("results").insert({
        round_id: payload.roundId,
        player_id: payload.playerId,
        wpm: payload.wpm,
        accuracy: payload.accuracy,
        correct_chars: payload.correctChars,
        total_chars: payload.totalChars,
        sentence_text: payload.sentenceText,
        sentence_id: payload.sentenceId ?? null,
      });
      if (error) throw error;
    },
    onSuccess: (_d, v) => {
      qc.invalidateQueries({ queryKey: ["results", v.roundId] });
      qc.invalidateQueries({ queryKey: ["leaderboard", "all"] });
    },
  });
}
