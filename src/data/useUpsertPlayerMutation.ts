"use client";
import { useMutation } from "@tanstack/react-query";

import { supabase } from "@/lib/supabase";
import { PlayerInsert } from "@/validation/db";

export default function useUpsertPlayerMutation() {
  return useMutation({
    mutationFn: async (p: PlayerInsert) => {
      const onConflict = p.kind === "guest" ? "guest_id" : "user_id";
      const row = {
        kind: p.kind,
        guest_id: p.guest_id ?? null,
        user_id: p.user_id ?? null,
        username: p.username,
      };
      const { data, error } = await supabase
        .from("players")
        .upsert(row, { onConflict, ignoreDuplicates: false })
        .select("id")
        .single();

      if (error) throw error;
      return data as { id: string };
    },
  });
}
