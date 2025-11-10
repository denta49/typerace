"use client";
const useAllTimeLeaderboardQuery = (_opts?: {
  range?: "all" | "24h" | "7d";
  minGames?: number;
}) => {
  // TODO: aggr  player_id
  return {
    data: [] as Array<{
      playerId: string;
      username: string;
      games: number;
      avgWpm: number;
      bestWpm: number;
      avgAccuracy: number;
      lastPlayed?: string;
    }>,
    isLoading: false,
    error: null as unknown,
  };
};

export default useAllTimeLeaderboardQuery;
