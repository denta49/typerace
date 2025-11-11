"use client";

import { type ColumnDef } from "@tanstack/react-table";

import { LiveRowType } from "@/types/uiTypes/LiveRowType";

const columnsLive: ColumnDef<LiveRowType>[] = [
  {
    id: "progress",
    header: "Live progress",
    accessorKey: "progressText",
    cell: ({ row }) => {
      const text = row.original.progressText ?? "";
      return <code className="text-xs">{text}</code>;
    },
    enableSorting: false,
  },
  {
    id: "username",
    header: "Player name",
    accessorKey: "username",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full" />
          <span>{row.original.username}</span>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    id: "wpm",
    header: "Words per minute",
    accessorKey: "wpm",
    cell: ({ row }) => Math.round(row.original.wpm),
    enableSorting: true,
  },
  {
    id: "accuracy",
    header: "Accuracy",
    accessorKey: "accuracy",
    cell: ({ row }) => `${Math.round(row.original.accuracy * 100)}%`,
    enableSorting: true,
  },
];

export default columnsLive;
