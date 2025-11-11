const compareProgress = (target: string, typed: string) => {
  const len = Math.min(target.length, typed.length);
  let correct = 0;
  for (let i = 0; i < len; i++) if (target[i] === typed[i]) correct++;
  const accuracy = target.length === 0 ? 1 : Math.max(0, Math.min(1, correct / target.length));
  return { correctChars: correct, accuracy };
};

export default compareProgress;
