"use client";
import { create } from "zustand";

import TypingStateType from "@/types/StoresTypes/TypingStateType";

const useTypingStore = create<TypingStateType>((set) => ({
  typed: "",
  correctChars: 0,
  totalChars: 0,
  wpm: 0,
  accuracy: 0,
  reset: () => set({ typed: "", correctChars: 0, totalChars: 0, wpm: 0, accuracy: 0 }),
  updateFromInput: (_sentence, input, _elapsedMs) => {
    // TODO: calc
    set({ typed: input });
  },
}));

export default useTypingStore;
