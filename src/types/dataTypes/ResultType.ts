type ResultType = {
  id: string;
  roundId: string;
  playerId: string;
  wpm: number;
  accuracy: number;
  correctChars: number;
  totalChars: number;
  sentenceId: string;
  sentenceText: string;
};

export default ResultType;
