"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import IdentityState from "@/types/StoresTypes/IdentityStateType";

const initialData: Omit<
  IdentityState,
  "hydrateFromPlayer" | "setUsername" | "setGuest" | "setUser" | "reset"
> = {
  playerId: null,
  kind: "guest",
  userId: null,
  guestId: null,
  username: "Guest",
};

const useIdentityStore = create<IdentityState>()(
  persist(
    (set) => ({
      ...initialData,

      hydrateFromPlayer: (row) =>
        set({
          playerId: row.id,
          kind: row.kind,
          userId: row.user_id,
          guestId: row.guest_id,
          username: row.username,
        }),

      setUsername: (username) => set({ username }),

      setGuest: (guestId) => set({ guestId, kind: "guest", userId: null }),

      setUser: (userId) => set({ userId, kind: "user", guestId: null }),

      reset: () => set(initialData),
    }),
    {
      name: "identity",
      // zapisujemy tylko to, co ma sens w localStorage
      partialize: (s) => ({
        kind: s.kind,
        guestId: s.guestId,
        username: s.username,
      }),
    },
  ),
);

export default useIdentityStore;
