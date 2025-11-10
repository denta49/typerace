"use client";
const useUrlState = () => {
  // TODO: read, write, zod
  const readLiveParams = () => ({ sort: "wpm", dir: "desc", page: 1, pageSize: 10 });
  const writeLiveParams = (
    _partial: Partial<{ sort: string; dir: string; page: number; pageSize: number }>,
  ) => {};
  const readAllParams = () => ({ sort: "bestWpm", dir: "desc", page: 1, pageSize: 10 });
  const writeAllParams = (
    _partial: Partial<{ sort: string; dir: string; page: number; pageSize: number }>,
  ) => {};
  return { readLiveParams, writeLiveParams, readAllParams, writeAllParams };
};

export default useUrlState;
