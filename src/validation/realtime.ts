import { z } from "zod";

export const ProgressPayloadSchema = z.object({
  playerId: z.string().min(1),
  clientId: z.string().min(1), // ⬅️ nowość
  username: z.string().min(1),
  roundId: z.string(),
  progressText: z.string().max(120),
  correctChars: z.number().int().min(0),
  accuracy: z.number().min(0).max(1),
  wpm: z.number().min(0),
});
export type ProgressPayload = z.infer<typeof ProgressPayloadSchema>;
