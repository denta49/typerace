"use client";

import { type ColumnDef } from "@tanstack/react-table";

import LeaderRowType from "@/types/uiTypes/LeaderRowType";

const columnsAllTime: ColumnDef<LeaderRowType>[] = [
  {
    id: "username",
    header: "Player",
    accessorKey: "username",
    enableSorting: true,
  },
  {
    id: "games",
    header: "Games",
    accessorKey: "games",
    cell: ({ row }) => row.original.games,
    enableSorting: true,
  },
  {
    id: "bestWpm",
    header: "Best WPM",
    accessorKey: "bestWpm",
    cell: ({ row }) => Math.round(row.original.bestWpm),
    enableSorting: true,
  },
  {
    id: "avgWpm",
    header: "Avg WPM",
    accessorKey: "avgWpm",
    cell: ({ row }) => row.original.avgWpm.toFixed(1),
    enableSorting: true,
  },
  {
    id: "avgAccuracy",
    header: "Avg Accuracy",
    accessorKey: "avgAccuracy",
    cell: ({ row }) => `${Math.round(row.original.avgAccuracy * 100)}%`,
    enableSorting: true,
  },
];

export default columnsAllTime;
