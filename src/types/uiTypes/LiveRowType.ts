import { PlayerRow, ResultRow } from "@/validation/db";

export interface LiveRowType {
  playerId: ResultRow["id"];
  username: PlayerRow["username"];
  progressText: ResultRow["sentence_text"];
  wpm: ResultRow["wpm"];
  accuracy: ResultRow["accuracy"];
  updatedAt: number;
}
