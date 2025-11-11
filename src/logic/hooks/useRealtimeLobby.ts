"use client";
import { useEffect, useMemo, useRef, useState } from "react";

import { createLobbyChannel } from "@/logic/realtime/createLobbyChannel";
import usePresenceStore from "@/logic/stores/usePresenceStore";
import LivePlayerType from "@/types/StoresTypes/LivePlayerType";

import type { ProgressPayload } from "@/validation/realtime";

export default function useRealtimeLobby(opts: {
  clientId: LivePlayerType["clientId"];
  playerId: LivePlayerType["playerId"];
  username: LivePlayerType["username"];
}) {
  const { clientId, username } = opts;
  const upsert = usePresenceStore((s) => s.upsertPlayer);
  const remove = usePresenceStore((s) => s.removePlayer);

  const [status, setStatus] = useState<
    "SUBSCRIBED" | "CLOSED" | "CHANNEL_ERROR" | "TIMED_OUT" | "PENDING"
  >("PENDING");

  const [onlineCount, setOnlineCount] = useState(0);

  const joinedRef = useRef(false);
  const pendingRef = useRef<ProgressPayload | null>(null);
  const usernameRef = useRef(username);

  useEffect(() => {
    usernameRef.current = username;
  }, [username]);

  const lobby = useMemo(() => createLobbyChannel(clientId), [clientId]);

  useEffect(() => {
    lobby.onPresenceSync((state) => setOnlineCount(Object.keys(state).length));
    lobby.onPresenceLeave((leftId) => remove(leftId));

    lobby.onProgress((p) => {
      upsert(p.clientId, {
        clientId: p.clientId,
        playerId: p.playerId,
        username: p.username ?? "Unknown",
        progressText: p.progressText,
        wpm: p.wpm,
        accuracy: p.accuracy,
        updatedAt: Date.now(),
      });
    });

    lobby.join((s) => {
      setStatus(s);
      if (s === "SUBSCRIBED") {
        joinedRef.current = true;
        lobby.channel.track({ username: usernameRef.current });
        if (pendingRef.current) {
          lobby.sendProgress(pendingRef.current);
          pendingRef.current = null;
        }
      }
      if (s === "CLOSED") joinedRef.current = false;
    });

    return () => {
      joinedRef.current = false;
      lobby.unsubscribe();
    };
  }, [lobby, upsert, remove]);

  const sendProgress = async (payload: Omit<ProgressPayload, "clientId">) => {
    upsert(clientId, {
      clientId,
      playerId: payload.playerId,
      username: usernameRef.current,
      progressText: payload.progressText,
      wpm: payload.wpm,
      accuracy: payload.accuracy,
      updatedAt: Date.now(),
    });

    const full: ProgressPayload = { ...payload, clientId };
    if (!joinedRef.current) {
      pendingRef.current = full;
      return;
    }
    await lobby.sendProgress(full);
  };

  return { sendProgress, onlineCount, status };
}
