import TypingStateType from "@/types/StoresTypes/TypingStateType";
import { PlayerRow } from "@/validation/db";
type LivePlayerType = {
  username: PlayerRow["username"];
  progressText: TypingStateType["typed"];
  wpm: TypingStateType["wpm"];
  accuracy: TypingStateType["accuracy"];
  updatedAt: number;
};

export default LivePlayerType;
