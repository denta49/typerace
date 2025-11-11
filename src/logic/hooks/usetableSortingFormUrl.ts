"use client";
import { type SortingState, type OnChangeFn } from "@tanstack/react-table";
import { useMemo } from "react";

import useUrlState from "@/logic/hooks/useUrlState";

export default function useTableSortingFromUrl() {
  const { readLiveParams, writeLiveParams, readAllParams, writeAllParams } = useUrlState();

  const liveParams = readLiveParams();
  const allParams = readAllParams();

  const liveSorting: SortingState = useMemo(
    () => [{ id: liveParams.sort, desc: liveParams.dir === "desc" }],
    [liveParams.sort, liveParams.dir],
  );

  const allSorting: SortingState = useMemo(
    () => [{ id: allParams.sort, desc: allParams.dir === "desc" }],
    [allParams.sort, allParams.dir],
  );

  const handleLiveSortChange: OnChangeFn<SortingState> = (updater) => {
    const next = typeof updater === "function" ? updater(liveSorting) : updater;
    const head = next[0];
    if (head) {
      writeLiveParams({ sort: head.id as any, dir: head.desc ? "desc" : "asc", page: 1 });
    }
  };

  const handleAllSortChange: OnChangeFn<SortingState> = (updater) => {
    const next = typeof updater === "function" ? updater(allSorting) : updater;
    const head = next[0];
    if (head) {
      writeAllParams({ sort: head.id as any, dir: head.desc ? "desc" : "asc", page: 1 });
    }
  };

  return {
    readLiveParams,
    writeLiveParams,
    readAllParams,
    writeAllParams,
    liveSorting,
    handleLiveSortChange,
    allSorting,
    handleAllSortChange,
  };
}
