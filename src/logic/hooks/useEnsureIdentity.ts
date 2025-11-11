"use client";
import { useEffect, useRef } from "react";

import useUpsertPlayerMutation from "@/data/useUpsertPlayerMutation";
import useIdentityStore from "@/logic/stores/useIdentityStores";

export default function useEnsureIdentity() {
  const { playerId, guestId, username, setGuest, setPlayerId } = useIdentityStore();
  const upsert = useUpsertPlayerMutation();
  const didUpsertRef = useRef(false);

  useEffect(() => {
    if (!guestId) setGuest(crypto.randomUUID());
  }, [guestId, setGuest]);

  useEffect(() => {
    if (!playerId && guestId && !didUpsertRef.current) {
      didUpsertRef.current = true;
      upsert.mutate(
        { kind: "guest", guest_id: guestId, user_id: null, username },
        { onSuccess: (d) => setPlayerId(d.id) },
      );
    }
  }, [playerId, guestId, username, upsert, setPlayerId]);

  return { playerId, guestId, username };
}
