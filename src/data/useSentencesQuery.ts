"use client";
import { SentenceRow } from "@/validation/db";

const useSentencesQuery = () => {
  // TODO: select id,text,enabled,lang,difficulty from sentences where enabled=true
  return {
    data: [] as Array<{
      id: SentenceRow["id"];
      text: SentenceRow["text"];
      enabled: SentenceRow["enabled"];
      lang: SentenceRow["lang"];
      difficulty?: SentenceRow["difficulty"];
    }>,
    isLoading: false,
    error: null as unknown,
  };
};

export default useSentencesQuery;
