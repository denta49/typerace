import PlayerType from "@/types/dataTypes/PlayerType";
import TypingStateType from "@/types/StoresTypes/TypingStateType";

type LivePlayerType = {
  username: PlayerType["username"];
  progressText: TypingStateType["typed"];
  wpm: TypingStateType["wpm"];
  accuracy: TypingStateType["accuracy"];
  updatedAt: number;
};

export default LivePlayerType;
