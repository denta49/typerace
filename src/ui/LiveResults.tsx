"use client";

import LiveResultsType from "@/types/uiTypes/LiveResultsType";
import columnsLive from "@/ui/ColumnsLive";
import DataTable from "@/ui/DataTable";

export default function LiveResults({
  rows,
  page,
  pageSize,
  sorting,
  onSortingChange,
  onPageChange,
  onPageSizeChange,
}: LiveResultsType) {
  return (
    <section aria-label="Live results this round" className="mt-4">
      <h3 className="text-muted-foreground mb-3 text-sm font-medium">Live results</h3>
      <DataTable
        columns={columnsLive}
        data={rows}
        page={page}
        pageSize={pageSize}
        sorting={sorting}
        onSortingChange={onSortingChange}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </section>
  );
}
