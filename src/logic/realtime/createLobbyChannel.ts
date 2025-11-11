"use client";
import { supabase } from "@/lib/supabase";
import { ProgressPayloadSchema, type ProgressPayload } from "@/validation/realtime";

export function createLobbyChannel(clientId: string) {
  const channel = supabase.channel("typerace:lobby", {
    config: { presence: { key: clientId } },
  });

  const join = (
    onStatus?: (s: "SUBSCRIBED" | "CLOSED" | "CHANNEL_ERROR" | "TIMED_OUT") => void,
  ) => {
    channel.subscribe((s) => {
      console.log("[realtime] status:", s);
      onStatus?.(s as any);
    });
  };

  const onPresenceSync = (
    cb: (state: Record<string, Array<{ username?: string; color?: string }>>) => void,
  ) => {
    channel.on("presence", { event: "sync" }, () => cb(channel.presenceState() as any));
  };

  const onPresenceLeave = (cb: (clientId: string) => void) => {
    channel.on("presence", { event: "leave" }, ({ key }) => key && cb(key));
  };

  const onProgress = (cb: (payload: ProgressPayload) => void) => {
    channel.on("broadcast", { event: "progress", self: true } as any, ({ payload }) => {
      const parsed = ProgressPayloadSchema.safeParse(payload);
      if (parsed.success) cb(parsed.data);
      else console.warn("[recv invalid progress]", parsed.error?.issues);
    });
  };

  const sendProgress = async (payload: ProgressPayload) => {
    await channel.send({ type: "broadcast", event: "progress", payload });
  };

  const unsubscribe = () => channel.unsubscribe();

  return { channel, join, onPresenceSync, onPresenceLeave, onProgress, sendProgress, unsubscribe };
}
