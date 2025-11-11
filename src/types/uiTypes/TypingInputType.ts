import { PlayerInsert, ResultInsert } from "@/validation/db";

type TypingInputProps = {
  sentence: SentenceInputPropsType["value"];
  round: { roundId: string; leftMs: number; elapsedMs: number; totalMs: number };
  sendProgress: (p: {
    playerId: ResultInsert["player_id"];
    username: PlayerInsert["username"];
    roundId: ResultInsert["round_id"];
    progressText: ResultInsert["sentence_text"];
    correctChars: ResultInsert["correct_chars"];
    accuracy: ResultInsert["accuracy"];
    wpm: ResultInsert["wpm"];
  }) => void;
};

export default TypingInputProps;
