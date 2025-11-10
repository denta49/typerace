"use client";
const useGameSettingsQuery = () => {
  // TODO: select round_length_sec from game_settings limit 1
  return { data: { roundLengthSec: 60 }, isLoading: false, error: null as unknown };
};
export default useGameSettingsQuery;
