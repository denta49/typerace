import { LiveRowType } from "@/types/uiTypes/LiveRowType";

import type { OnChangeFn, SortingState } from "@tanstack/react-table";

type LiveResultsType = {
  rows: LiveRowType[];
  page: number;
  pageSize: number;
  sorting: SortingState;
  onSortingChange: OnChangeFn<SortingState>;
  onPageChange: (p: number) => void;
  onPageSizeChange: (s: number) => void;
};

export default LiveResultsType;
