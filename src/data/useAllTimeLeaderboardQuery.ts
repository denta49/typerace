"use client";
import { useQuery } from "@tanstack/react-query";

import { supabase } from "@/lib/supabase";

type Opts = { range?: "all" | "24h" | "7d"; minGames?: number };

export default function useAllTimeLeaderboardQuery(opts: Opts = {}) {
  return useQuery({
    queryKey: ["leaderboard", opts.range ?? "all", opts.minGames ?? 0],
    queryFn: async () => {
      const { data, error } = await supabase.from("results").select(`
          player_id,
          wpm,
          accuracy,
          created_at,
          players:player_id ( username )
        `);
      if (error) throw error;

      const since =
        opts.range === "24h"
          ? Date.now() - 24 * 3600 * 1000
          : opts.range === "7d"
            ? Date.now() - 7 * 24 * 3600 * 1000
            : 0;

      const rows = (data ?? []).filter((r: any) =>
        since ? new Date(r.created_at).getTime() >= since : true,
      );

      const byPlayer = new Map<
        string,
        {
          username: string;
          games: number;
          sumWpm: number;
          bestWpm: number;
          sumAcc: number;
          lastPlayed?: string;
        }
      >();

      for (const r of rows as any[]) {
        const id = r.player_id as string;

        const playersField = (r as any).players;
        const name = Array.isArray(playersField)
          ? playersField[0]?.username
          : playersField?.username;

        const username = name ?? "Unknown";

        const prev = byPlayer.get(id) ?? {
          username,
          games: 0,
          sumWpm: 0,
          bestWpm: 0,
          sumAcc: 0,
          lastPlayed: undefined,
        };
        prev.games += 1;
        prev.sumWpm += Number(r.wpm);
        prev.bestWpm = Math.max(prev.bestWpm, Number(r.wpm));
        prev.sumAcc += Number(r.accuracy);
        prev.lastPlayed =
          !prev.lastPlayed || prev.lastPlayed < r.created_at ? r.created_at : prev.lastPlayed;
        byPlayer.set(id, prev);
      }

      let agg = Array.from(byPlayer.entries()).map(([playerId, v]) => ({
        playerId,
        username: v.username,
        games: v.games,
        avgWpm: v.games ? v.sumWpm / v.games : 0,
        bestWpm: v.bestWpm,
        avgAccuracy: v.games ? v.sumAcc / v.games : 0,
        lastPlayed: v.lastPlayed,
      }));

      if (opts.minGames) {
        // @ts-ignore
        agg = agg.filter((x) => x.games >= opts.minGames);
      }
      agg.sort((a, b) => b.bestWpm - a.bestWpm);

      return agg;
    },
  });
}
