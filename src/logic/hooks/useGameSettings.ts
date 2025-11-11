"use client";

import useGameSettingsQuery from "@/data/useGameSettingsQuery";

const useGameSettings = () => {
  const { data, isLoading, error } = useGameSettingsQuery();
  const roundMs = data?.roundLengthSec * 1000;
  return { roundMs, isLoading, error };
};
export default useGameSettings;
