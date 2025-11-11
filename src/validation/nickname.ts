"use client";
import { z } from "zod";

export const NicknameSchema = z.object({
  username: z
    .string()
    .trim()
    .min(2, "At least 2 characters")
    .max(20, "Max 20 characters")
    .regex(/^[A-Za-z0-9 _-]+$/, "Only letters, numbers, space, _ and -"),
});

export type NicknameForm = z.infer<typeof NicknameSchema>;
