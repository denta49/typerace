"use client";

import React, { FunctionComponent } from "react";

import type SentencePropsType from "@/types/uiTypes/SentencePropsType";

const Sentence: FunctionComponent<SentencePropsType> = ({ sentence }) => {
  const hasText = Boolean(sentence?.trim());

  return (
    <section
      className="bg-muted/50 rounded-lg border p-4"
      aria-labelledby="current-sentence-label"
      data-testid="current-sentence"
    >
      <div
        id="current-sentence-label"
        className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase"
      >
        Current sentence
      </div>

      <p className="font-mono text-base leading-relaxed break-words sm:text-lg" aria-live="polite">
        {hasText ? sentence : <span className="text-muted-foreground">No sentence configured</span>}
      </p>
    </section>
  );
};

export default Sentence;
