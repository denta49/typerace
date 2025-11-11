"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import {
  LiveTableParamsSchema,
  AllTimeParamsSchema,
  type LiveTableParams,
  type AllTimeTableParams,
} from "@/validation/url";

export default function useUrlState() {
  const sp = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const readLiveParams = useCallback((): LiveTableParams => {
    const raw: Record<string, unknown> = {};
    const map = { sort: "lt_sort", dir: "lt_dir", page: "lt_page", pageSize: "lt_size" } as const;
    for (const [k, key] of Object.entries(map)) {
      const v = sp.get(key as keyof typeof map);
      if (v !== null) raw[k] = v;
    }
    return LiveTableParamsSchema.parse(raw);
  }, [sp]);

  const writeLiveParams = useCallback(
    (partial: Partial<LiveTableParams>) => {
      const current = new URLSearchParams(sp.toString());
      if (partial.sort !== undefined) current.set("lt_sort", String(partial.sort));
      if (partial.dir !== undefined) current.set("lt_dir", String(partial.dir));
      if (partial.page !== undefined) current.set("lt_page", String(partial.page));
      if (partial.pageSize !== undefined) current.set("lt_size", String(partial.pageSize));
      router.replace(`${pathname}?${current.toString()}`);
    },
    [sp, router, pathname],
  );

  const readAllParams = useCallback((): AllTimeTableParams => {
    const raw: Record<string, unknown> = {};
    const map = { sort: "at_sort", dir: "at_dir", page: "at_page", pageSize: "at_size" } as const;
    for (const [k, key] of Object.entries(map)) {
      const v = sp.get(key as keyof typeof map);
      if (v !== null) raw[k] = v;
    }
    return AllTimeParamsSchema.parse(raw);
  }, [sp]);

  const writeAllParams = useCallback(
    (partial: Partial<AllTimeTableParams>) => {
      const current = new URLSearchParams(sp.toString());
      if (partial.sort !== undefined) current.set("at_sort", String(partial.sort));
      if (partial.dir !== undefined) current.set("at_dir", String(partial.dir));
      if (partial.page !== undefined) current.set("at_page", String(partial.page));
      if (partial.pageSize !== undefined) current.set("at_size", String(partial.pageSize));
      router.replace(`${pathname}?${current.toString()}`);
    },
    [sp, router, pathname],
  );

  return { readLiveParams, writeLiveParams, readAllParams, writeAllParams };
}
