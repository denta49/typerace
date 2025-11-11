import type { ColumnDef } from "@tanstack/react-table";

export interface DataTablePropsType<TData, TValue = unknown> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}
