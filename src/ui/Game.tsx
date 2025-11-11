"use client";

import { useEffect, useMemo, useRef } from "react";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useAllTimeLeaderboardQuery from "@/data/useAllTimeLeaderboardQuery";
import useInsertResultMutation from "@/data/useInsertResultMutation";
import { useSentencesQuery } from "@/data/useSentencesQuery";
import useEnsureIdentity from "@/logic/hooks/useEnsureIdentity";
import useGameSettings from "@/logic/hooks/useGameSettings";
import useRealtimeLobby from "@/logic/hooks/useRealtimeLobby";
import useRoundTimer from "@/logic/hooks/useRoundTimer";
import useStableClientId from "@/logic/hooks/useStableClientId";
import useTableSortingFromUrl from "@/logic/hooks/usetableSortingFormUrl";
import usePresenceStore from "@/logic/stores/usePresenceStore";
import useTypingStore from "@/logic/stores/useTypingStore";
import useUiStore from "@/logic/stores/useUiStore";
import deterministicSentenceIndex from "@/logic/utils/deterministicSentenceIndex";
import CurrentRound from "@/ui/CurrentRound";
import Leaderboard from "@/ui/Leaderboard";
import LiveResults from "@/ui/LiveResults";

export default function Game() {
  const { roundMs } = useGameSettings();
  const { roundId, leftMs, elapsedMs, totalMs } = useRoundTimer({ roundMs });

  const { data: sentences, isPending: sentencesPending, isError, error } = useSentencesQuery();
  const sentence =
    sentences && sentences.length
      ? sentences[deterministicSentenceIndex(roundId, sentences.length)].text
      : "";

  const { playerId, guestId, username } = useEnsureIdentity();

  const clientId = useStableClientId();
  const effectivePlayerId = playerId ?? guestId ?? "guest-temp";
  const { sendProgress } = useRealtimeLobby({
    clientId,
    playerId: effectivePlayerId,
    username,
  });

  const playersMap = usePresenceStore((s) => s.players);
  const liveRows = useMemo(
    () =>
      Array.from(playersMap.values()).map((p) => ({
        playerId: p.playerId,
        username: p.username,
        progressText: p.progressText,
        wpm: p.wpm,
        accuracy: p.accuracy,
        updatedAt: p.updatedAt,
      })),
    [playersMap],
  );

  const {
    allPage,
    allPageSize,
    livePage,
    livePageSize,
    setAllPage,
    setAllPageSize,
    setLivePage,
    setLivePageSize,
  } = useUiStore();

  const {
    readLiveParams,
    writeLiveParams,
    readAllParams,
    writeAllParams,
    liveSorting,
    handleLiveSortChange,
    allSorting,
    handleAllSortChange,
  } = useTableSortingFromUrl();

  useEffect(() => {
    const lp = readLiveParams();
    const ap = readAllParams();
    if (livePage !== lp.page) setLivePage(lp.page);
    if (livePageSize !== lp.pageSize) setLivePageSize(lp.pageSize);
    if (allPage !== ap.page) setAllPage(ap.page);
    if (allPageSize !== ap.pageSize) setAllPageSize(ap.pageSize);
  }, [
    readLiveParams,
    readAllParams,
    allPage,
    allPageSize,
    livePage,
    livePageSize,
    setAllPage,
    setAllPageSize,
    setLivePage,
    setLivePageSize,
  ]);

  const { data: leaderRows = [], isPending: leaderLoading } = useAllTimeLeaderboardQuery({
    range: "all",
  });

  const insertResult = useInsertResultMutation();
  const { correctChars, totalChars, wpm, accuracy } = useTypingStore();
  const submittedRoundRef = useRef<string | null>(null);

  useEffect(() => {
    if (leftMs > 0) return;
    if (!roundId || !sentence || !playerId) return;
    if (submittedRoundRef.current === roundId) return;
    submittedRoundRef.current = roundId;

    insertResult.mutate({
      roundId,
      playerId,
      wpm,
      accuracy,
      correctChars,
      totalChars,
      sentenceText: sentence,
    });
  }, [leftMs, roundId, sentence, playerId, wpm, accuracy, correctChars, totalChars, insertResult]);

  return (
    <div className="w-full space-y-8">
      <Card className="p-4 sm:p-6">
        <CurrentRound
          secondsLeft={Math.max(0, Math.round(leftMs / 1000))}
          totalSeconds={Math.round(totalMs / 1000)}
          sentencePending={sentencesPending}
          sentenceError={isError ? (error as Error).message : ""}
          sentenceText={sentence || "No sentences configured"}
          typingProps={{
            sentence,
            round: { roundId, leftMs, elapsedMs, totalMs },
            sendProgress,
          }}
        />

        <Separator className="my-4" />

        <LiveResults
          rows={liveRows}
          page={livePage}
          pageSize={livePageSize}
          sorting={liveSorting}
          onSortingChange={handleLiveSortChange}
          onPageChange={(p) => {
            setLivePage(p);
            writeLiveParams({ page: p });
          }}
          onPageSizeChange={(s) => {
            setLivePageSize(s);
            writeLiveParams({ pageSize: s, page: 1 });
          }}
        />
      </Card>

      <Card className="p-4 sm:p-6">
        <Leaderboard
          loading={leaderLoading}
          rows={leaderRows}
          page={allPage}
          pageSize={allPageSize}
          sorting={allSorting}
          onSortingChange={handleAllSortChange}
          onPageChange={(p) => {
            setAllPage(p);
            writeAllParams({ page: p });
          }}
          onPageSizeChange={(s) => {
            setAllPageSize(s);
            writeAllParams({ pageSize: s, page: 1 });
          }}
        />
      </Card>
    </div>
  );
}
