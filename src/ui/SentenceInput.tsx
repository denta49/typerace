"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";

const SentenceInput = React.forwardRef<HTMLInputElement, SentenceInputPropsType>(
  ({ value, onChange, disabled = false, placeholder = "Start typing here…" }, ref) => {
    return (
      <Input
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode="text"
        aria-label="Typing input"
      />
    );
  },
);

SentenceInput.displayName = "SentenceInput";
export default SentenceInput;
