import { ProgressPayload } from "@/validation/realtime";

export const createLobbyChannel = (_username: string, _playerId: string) => {
  // TODO: supabase.channel("typerace:lobby"), presence, broadcast
  return {
    join: async (_meta?: Record<string, unknown>) => {},
    onProgress: (_cb: (p: ProgressPayload) => void) => {
      return () => {}; // unsubscribe
    },
    sendProgress: async (_payload: ProgressPayload) => {},
    close: async () => {},
  };
};
