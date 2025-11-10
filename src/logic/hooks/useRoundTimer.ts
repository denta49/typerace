"use client";
const useRoundTimer = (opts: { roundMs: number }) => {
  const totalMs = opts.roundMs ?? 60_000;
  // TODO: calc
  const roundId = String(Math.floor(Date.now() / totalMs));
  const elapsedMs = 0;
  const leftMs = totalMs - elapsedMs;
  return { roundId, leftMs, elapsedMs, totalMs };
};

export default useRoundTimer;
