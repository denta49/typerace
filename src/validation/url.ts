import { z } from "zod";

export const LiveTableParamsSchema = z.object({
  sort: z.enum(["progress", "username", "wpm", "accuracy"]).default("wpm"),
  dir: z.enum(["asc", "desc"]).default("desc"),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().positive().default(10),
});
export type LiveTableParams = z.infer<typeof LiveTableParamsSchema>;

export const AllTimeParamsSchema = z.object({
  sort: z.enum(["games", "avgWpm", "bestWpm", "avgAccuracy"]).default("bestWpm"),
  dir: z.enum(["asc", "desc"]).default("desc"),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().positive().default(10),
});
export type AllTimeTableParams = z.infer<typeof AllTimeParamsSchema>;
