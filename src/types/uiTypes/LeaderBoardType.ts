import type LeaderRowType from "@/types/uiTypes/LeaderRowType";
import type { OnChangeFn, SortingState } from "@tanstack/react-table";

type LeaderboardType = {
  loading: boolean;
  rows: LeaderRowType[];
  page: number;
  pageSize: number;
  sorting: SortingState;
  onSortingChange: OnChangeFn<SortingState>;
  onPageChange: (p: number) => void;
  onPageSizeChange: (s: number) => void;
};

export default LeaderboardType;
