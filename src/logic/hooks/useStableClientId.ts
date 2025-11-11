"use client";
import { useMemo } from "react";

export default function useStableClientId() {
  return useMemo(() => {
    if (typeof window === "undefined") return crypto.randomUUID();
    const KEY = "tr_client_id";
    const existing = sessionStorage.getItem(KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    sessionStorage.setItem(KEY, id);
    return id;
  }, []);
}
