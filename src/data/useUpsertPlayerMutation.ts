"use client";
import { PlayerInsert } from "@/validation/db";

const useUpsertPlayerMutation = () => {
  // TODO: upsert  players (guest/user)
  return {
    mutate: (_payload: {
      kind: PlayerInsert["kind"];
      userId?: PlayerInsert["user_id"];
      guestId?: PlayerInsert["guest_id"];
      username: PlayerInsert["username"];
    }) => {},
    isPending: false,
    error: null as unknown,
  };
};

export default useUpsertPlayerMutation;
