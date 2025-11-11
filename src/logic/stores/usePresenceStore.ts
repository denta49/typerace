"use client";
import { create } from "zustand";

import PresenceStateType from "@/types/StoresTypes/PresenceStateType";

const usePresenceStore = create<PresenceStateType>((set, get) => ({
  players: new Map(),
  upsertPlayer: (clientId, data) => {
    const map = new Map(get().players);
    map.set(clientId, data);
    set({ players: map });
  },
  removePlayer: (clientId) => {
    const map = new Map(get().players);
    map.delete(clientId);
    set({ players: map });
  },
  resetAll: () => set({ players: new Map() }),
}));
export default usePresenceStore;
