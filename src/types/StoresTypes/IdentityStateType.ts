import type { PlayerRow } from "@/validation/db";

type IdentityState = {
  playerId: PlayerRow["id"] | null;
  kind: PlayerRow["kind"];
  userId: PlayerRow["user_id"] | null;
  guestId: PlayerRow["guest_id"] | null;
  username: PlayerRow["username"];

  hydrateFromPlayer: (row: PlayerRow) => void;
  setUsername: (username: PlayerRow["username"]) => void;
  setGuest: (guestId: NonNullable<PlayerRow["guest_id"]>) => void;
  setUser: (userId: NonNullable<PlayerRow["user_id"]>) => void;
  setPlayerId: (playerId: NonNullable<PlayerRow["id"]>) => void;
  reset: () => void;
};

export default IdentityState;
