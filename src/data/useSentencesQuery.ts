"use client";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

import { supabase } from "@/lib/supabase";
import { SentenceRowSchema } from "@/validation/db";

const SentencesArraySchema = z.array(
  SentenceRowSchema.pick({ id: true, text: true, enabled: true, lang: true, difficulty: true }),
);

export function useSentencesQuery() {
  return useQuery({
    queryKey: ["sentences", "enabled"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sentences")
        .select("id,text,enabled,lang,difficulty")
        .eq("enabled", true);

      if (error) {
        console.error("Supabase sentences error:", error);
        throw new Error(error.message);
      }

      const parsed = SentencesArraySchema.safeParse(data ?? []);
      if (!parsed.success) {
        console.error("Zod sentences error:", parsed.error.format());
        throw new Error("Invalid sentences shape");
      }

      return parsed.data;
    },
    staleTime: 60_000,
    gcTime: 5 * 60_000,
  });
}
