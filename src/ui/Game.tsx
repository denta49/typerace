"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import columnsAllTime from "@/ui/ColumnsAllTime";
import columnsLive from "@/ui/ColumnsLive";
import DataTable from "@/ui/DataTable";
import Sentence from "@/ui/Sentence";
import SentenceInput from "@/ui/SentenceInput";
import Timer from "@/ui/Timer";

const emptyLive: any[] = [];
const emptyLeader: any[] = [];

export const Game = () => {
  // const { roundMs } = useGameSettings();
  // const { roundId, leftMs, elapsedMs, totalMs } = useRoundTimer({ roundMs });
  // const { sentence } = useMemo(() => pickSentence(roundId), [roundId]);
  // const { readLiveParams, writeLiveParams, readAllParams, writeAllParams } = useUrlState();
  // const liveParams = readLiveParams(); const allParams = readAllParams();
  // const liveRows = usePresenceStore(selectLiveRowsMemoized); // realtime
  // const { data: leaderRows, isLoading: leaderLoading } = useAllTimeLeaderboardQuery(...);

  const totalMs = 60_000;
  const leftMs = 60_000;
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const leaderLoading = false;

  return (
    <div className="w-full space-y-8">
      <Card className="p-4 sm:p-6">
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Current round</h2>
          <Timer
            secondsLeft={Math.max(0, Math.round(leftMs / 1000))}
            total={Math.round(totalMs / 1000)}
          />
        </header>

        <div className="mb-4">
          <Sentence sentence={sentence} />
        </div>

        {/*<div className="mb-3">*/}
        {/*  <State wpm={0} accuracy={0} />*/}
        {/*</div>*/}

        <div className="mb-6">
          <SentenceInput
            value={""}
            onChange={(_v) => {
              // TODO: useTypingEngine().onChange(v)
            }}
            disabled={false}
            placeholder="Start typing here…"
          />
        </div>

        <Separator className="my-4" />

        <section aria-label="Live results this round" className="mt-4">
          <h3 className="text-muted-foreground mb-3 text-sm font-medium">Live results</h3>

          {/* TODO: useUrlState + useUiStore */}
          <DataTable
            columns={columnsLive}
            data={emptyLive}
            page={1}
            pageSize={10}
            onPageChange={() => {}}
            onPageSizeChange={() => {}}
          />
        </section>
      </Card>

      <Card className="p-4 sm:p-6">
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">All-time leaderboard</h2>
        </header>

        {leaderLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        ) : (
          <DataTable
            columns={columnsAllTime}
            data={emptyLeader}
            page={1}
            pageSize={10}
            onPageChange={() => {}}
            onPageSizeChange={() => {}}
          />
        )}
      </Card>
    </div>
  );
};

export default Game;
