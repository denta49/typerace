"use client";

import { Skeleton } from "@/components/ui/skeleton";
import LeaderBoardType from "@/types/uiTypes/LeaderBoardType";
import columnsAllTime from "@/ui/ColumnsAllTime";
import DataTable from "@/ui/DataTable";

export default function Leaderboard({
  loading,
  rows,
  page,
  pageSize,
  sorting,
  onSortingChange,
  onPageChange,
  onPageSizeChange,
}: LeaderBoardType) {
  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">All-time leaderboard</h2>
      </header>

      {loading ? (
        <div className="space-y-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
      ) : (
        <DataTable
          columns={columnsAllTime}
          data={rows}
          page={page}
          pageSize={pageSize}
          sorting={sorting}
          onSortingChange={onSortingChange}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      )}
    </>
  );
}
