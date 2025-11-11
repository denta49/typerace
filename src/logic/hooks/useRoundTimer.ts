"use client";
import { useEffect, useMemo, useState } from "react";

const useRoundTimer = ({ roundMs }: { roundMs: number }) => {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(id);
  }, []);

  const roundId = useMemo(() => String(Math.floor(now / roundMs)), [now, roundMs]);
  const elapsedMs = now - Math.floor(now / roundMs) * roundMs;
  const leftMs = Math.max(0, roundMs - elapsedMs);

  return { roundId, leftMs, elapsedMs, totalMs: roundMs };
};

export default useRoundTimer;
