import { ColumnDef } from "@tanstack/react-table";

interface DataTablePropsType<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  page?: number;
  pageSize?: number;
}

export default DataTablePropsType;
