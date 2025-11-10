"use client";
import { create } from "zustand";

import LivePlayerType from "@/types/StoresTypes/LivePlayerType";
import PresenceStateType from "@/types/StoresTypes/PresenceStateType";

const usePresenceStore = create<PresenceStateType>((set, get) => ({
  players: new Map<string, LivePlayerType>(),
  upsertPlayer: (playerId, data) => {
    const map = new Map(get().players);
    map.set(playerId, data);
    set({ players: map });
  },
  removePlayer: (playerId) => {
    const map = new Map(get().players);
    map.delete(playerId);
    set({ players: map });
  },
  resetAll: () => set({ players: new Map() }),
}));

export default usePresenceStore;
