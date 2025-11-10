type Dir = "asc" | "desc";

export type LiveTableState = {
  liveSort: "progress" | "username" | "wpm" | "accuracy";
  liveDir: Dir;
  livePage: number;
  livePageSize: number;
};

export type AllTimeTableState = {
  allSort: "games" | "avgWpm" | "bestWpm" | "avgAccuracy";
  allDir: Dir;
  allPage: number;
  allPageSize: number;
};

export type UiState = LiveTableState &
  AllTimeTableState & {
    authOpen: boolean;

    setLiveSort: (col: UiState["liveSort"], dir: Dir) => void;
    setLivePage: (p: number) => void;
    setLivePageSize: (s: number) => void;

    setAllSort: (col: UiState["allSort"], dir: Dir) => void;
    setAllPage: (p: number) => void;
    setAllPageSize: (s: number) => void;

    setAuthOpen: (open: boolean) => void;
  };
