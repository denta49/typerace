import { z } from "zod";

export const PlayerKindSchema = z.enum(["guest", "user"]);

export const PlayerRowSchema = z.object({
  id: z.string(),
  kind: PlayerKindSchema,
  user_id: z.string().uuid().nullable(),
  guest_id: z.string().uuid().nullable(),
  username: z.string(),
  color: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});
export type PlayerRow = z.infer<typeof PlayerRowSchema>;

export const PlayerInsertSchema = z.object({
  kind: PlayerKindSchema,
  user_id: z.string().uuid().optional().nullable(),
  guest_id: z.string().uuid().optional().nullable(),
  username: z.string().min(1),
  color: z.string().min(1),
});
export type PlayerInsert = z.infer<typeof PlayerInsertSchema>;

export const ResultRowSchema = z.object({
  id: z.string().uuid(),
  round_id: z.string(),
  player_id: z.string().uuid(),
  wpm: z.coerce.number(),
  accuracy: z.coerce.number().min(0).max(1),
  correct_chars: z.coerce.number().int().min(0),
  total_chars: z.coerce.number().int().min(0),
  sentence_id: z.string().uuid().nullable(),
  sentence_text: z.string(),
  created_at: z.string(),
});
export type ResultRow = z.infer<typeof ResultRowSchema>;

export const ResultInsertSchema = z.object({
  round_id: z.string(),
  player_id: z.string().uuid(),
  wpm: z.number().min(0),
  accuracy: z.number().min(0).max(1),
  correct_chars: z.number().int().min(0),
  total_chars: z.number().int().min(0),
  sentence_id: z.string().uuid().optional(),
  sentence_text: z.string().min(1),
});
export type ResultInsert = z.infer<typeof ResultInsertSchema>;

export const SentenceRowSchema = z.object({
  id: z.string().uuid(),
  text: z.string(),
  enabled: z.boolean(),
  lang: z.string(),
  difficulty: z.string().nullable().optional(),
  created_at: z.string(),
  updated_at: z.string(),
});
export type SentenceRow = z.infer<typeof SentenceRowSchema>;

export const SentenceInsertSchema = z.object({
  text: z.string().min(1),
  enabled: z.boolean().default(true),
  lang: z.string().default("en"),
  difficulty: z.string().optional().nullable(),
});
export type SentenceInsert = z.infer<typeof SentenceInsertSchema>;

export const GameSettingsRowSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  round_length_sec: z.coerce.number().int().positive(),
  selection_mode: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});
export type GameSettingsRow = z.infer<typeof GameSettingsRowSchema>;
export const ThisRoundJoinedRowSchema = ResultRowSchema.pick({
  round_id: true,
  player_id: true,
  wpm: true,
  accuracy: true,
  sentence_text: true,
  created_at: true,
}).extend({
  username: z.string(),
  color: z.string(),
});
export type ThisRoundJoinedRow = z.infer<typeof ThisRoundJoinedRowSchema>;

export const LeaderboardAggRowSchema = z.object({
  player_id: z.string().uuid(),
  username: z.string(),
  games: z.coerce.number().int().min(0),
  avg_wpm: z.coerce.number(),
  best_wpm: z.coerce.number(),
  avg_accuracy: z.coerce.number(),
  last_played: z.string().nullable().optional(),
});
export type LeaderboardAggRow = z.infer<typeof LeaderboardAggRowSchema>;
