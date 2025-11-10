"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import IdentityStateType from "@/types/StoresTypes/IdentityStateType";

const useIdentityStore = create<IdentityStateType>()(
  persist(
    (set) => ({
      id: null,
      kind: "guest",
      guestId: null,
      userId: null,
      username: "Guest",
      setUsername: (username) => set({ username }),
      setGuest: (guestId) => set({ guestId, kind: "guest", userId: null }),
      setUser: (userId) => set({ userId, kind: "user", guestId: null }),
    }),
    { name: "identity" },
  ),
);
export default useIdentityStore;
