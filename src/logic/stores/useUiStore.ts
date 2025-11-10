"use client";
import { create } from "zustand";

import { UiState } from "@/types/StoresTypes/UiStateType";

export const useUiStore = create<UiState>((set) => ({
  liveSort: "wpm",
  liveDir: "desc",
  livePage: 1,
  livePageSize: 10,

  allSort: "bestWpm",
  allDir: "desc",
  allPage: 1,
  allPageSize: 10,

  authOpen: false,

  setLiveSort: (liveSort, liveDir) => set({ liveSort, liveDir, livePage: 1 }),
  setLivePage: (livePage) => set({ livePage }),
  setLivePageSize: (livePageSize) => set({ livePageSize, livePage: 1 }),

  setAllSort: (allSort, allDir) => set({ allSort, allDir, allPage: 1 }),
  setAllPage: (allPage) => set({ allPage }),
  setAllPageSize: (allPageSize) => set({ allPageSize, allPage: 1 }),

  setAuthOpen: (authOpen) => set({ authOpen }),
}));

export default useUiStore;
