import { PlayerRow } from "@/validation/db";

type LeaderRowType = {
  playerId: PlayerRow["id"];
  username: PlayerRow["username"];
  games: number;
  avgWpm: number;
  bestWpm: number;
  avgAccuracy: number;
  lastPlayed?: string;
};

export default LeaderRowType;
