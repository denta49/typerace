import LivePlayerType from "@/types/StoresTypes/LivePlayerType";

type PresenceStateType = {
  players: Map<string, LivePlayerType>;
  upsertPlayer: (playerId: string, data: LivePlayerType) => void;
  removePlayer: (playerId: string) => void;
  resetAll: () => void;
};

export default PresenceStateType;
