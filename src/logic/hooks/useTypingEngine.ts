"use client";
import TypingEngineType from "@/types/hooksTypes/TypingEngineType";

const useTypingEngine = (opts: TypingEngineType) => {
  // TODO: useTypingStore, correct/accuracy/wpm, throttle sendProgress
  return {
    onChange: (_v: string) => {},
  };
};

export default useTypingEngine;
