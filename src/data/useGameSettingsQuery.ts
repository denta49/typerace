"use client";
import { useQuery } from "@tanstack/react-query";

import { supabase } from "@/lib/supabase";

const useGameSettings = () => {
  return useQuery({
    queryKey: ["gameSettings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("game_settings")
        .select("round_length_sec")
        .limit(1)
        .maybeSingle();
      if (error) {
        throw new Error(error.message);
      }
      return { roundLengthSec: data?.round_length_sec ?? 60 };
    },
  });
};

export default useGameSettings;
