"use client";

import React, { FunctionComponent, useMemo } from "react";

import { Progress } from "@/components/ui/progress";

import type TimerPropsType from "@/types/uiTypes/TimerPropsType";

const Timer: FunctionComponent<TimerPropsType> = ({ secondsLeft, total }) => {
  const left = Math.max(0, Math.floor(secondsLeft ?? 0));
  const full = Math.max(1, Math.floor(total ?? 1));
  const elapsed = Math.min(full, full - left);
  const pct = Math.round((elapsed / full) * 100);

  const timeLabel = useMemo(() => {
    const m = Math.floor(left / 60);
    const s = left % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }, [left]);

  const leftRatio = left / full;
  const isEnding = leftRatio <= 0.1 || left <= 5;

  const progressColorClass =
    leftRatio > 0.66
      ? "[&>div]:bg-emerald-500"
      : leftRatio > 0.33
        ? "[&>div]:bg-amber-500"
        : "[&>div]:bg-rose-500";

  return (
    <section
      className="bg-muted/50 min-w-[220px] rounded-lg border px-3 py-2"
      aria-labelledby="round-timer-label"
      role="timer"
      aria-live="polite"
    >
      <div className="mb-1 flex items-center justify-between">
        <span
          id="round-timer-label"
          className="text-muted-foreground text-xs font-medium tracking-wide uppercase"
        >
          Next round in
        </span>
        <span className="text-muted-foreground text-[10px]">{full}s total</span>
      </div>

      <div className="mb-2 flex items-baseline justify-between">
        <span
          className={`font-mono text-2xl tabular-nums ${
            isEnding ? "text-red-600 dark:text-red-500" : "text-foreground"
          }`}
          aria-label={`${left} seconds left`}
        >
          {timeLabel}
        </span>
        <span className="text-muted-foreground text-xs">{pct}%</span>
      </div>

      <Progress value={pct} className={`h-2 ${progressColorClass}`} />
    </section>
  );
};

export default Timer;
