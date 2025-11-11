"use client";
import { useEffect, useMemo } from "react";

import { useTypingEngine } from "@/logic/hooks/useTypingEngine";
import useIdentityStore from "@/logic/stores/useIdentityStores";
import useTypingStore from "@/logic/stores/useTypingStore";
import TypingInputType from "@/types/uiTypes/TypingInputType";
import SentenceInput from "@/ui/SentenceInput";

export default function TypingInput({ sentence, round, sendProgress }: TypingInputType) {
  const { playerId, guestId, username } = useIdentityStore();
  const effectivePlayerId = useMemo(() => playerId ?? guestId ?? null, [playerId, guestId]);
  const identityReady = !!effectivePlayerId;

  const { value, onChange } = useTypingEngine({
    sentence,
    round: { elapsedMs: round.elapsedMs, totalMs: round.totalMs },
    sendProgressAction: (p) => {
      if (!identityReady) return;
      sendProgress({
        ...p,
        roundId: round.roundId,
        playerId: effectivePlayerId!,
        username,
      });
    },
  });

  const reset = useTypingStore((s) => s.reset);
  useEffect(() => {
    reset();
  }, [round.roundId, reset]);

  const disabled = !sentence || round.leftMs <= 0 || !identityReady;

  return (
    <SentenceInput
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={
        !identityReady
          ? "Preparing player…"
          : round.leftMs <= 0
            ? "Wait for next round…"
            : "Start typing here…"
      }
    />
  );
}
