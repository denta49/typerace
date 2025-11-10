"use client";
import PlayerMetaType from "@/types/hooksTypes/PlayerMetaType";

const useRealtimeLobby = (opts: { playerMeta: PlayerMetaType }) => {
  // TODO: sup realtime, presence, broadcast
  const sendProgress = (_payload: unknown) => {
    // TODO: send broadcast
  };
  const onlineCount = 0; // TODO: presence
  return { sendProgress, onlineCount };
};
export default useRealtimeLobby;
