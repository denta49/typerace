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
  updateFromInput: (sentence, input, elapsedMs) => {
    const len = sentence.length || 1;
    let correct = 0;
    for (let i = 0; i < Math.min(sentence.length, input.length); i++) {
      if (sentence[i] !== input[i]) break;
      correct++;
    }
    const words = correct / 5;
    const minutes = Math.max(0.001, elapsedMs / 60000);
    const wpm = words / minutes;
    const accuracy = Math.max(0, Math.min(1, correct / len));
    set({
      typed: input,
      correctChars: correct,
      totalChars: sentence.length,
      wpm,
      accuracy,
    });
  },
}));

export default useTypingStore;
