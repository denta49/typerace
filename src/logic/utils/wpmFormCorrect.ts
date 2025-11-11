const wpmFromCorrect = (correctChars: number, elapsedMs: number) => {
  if (elapsedMs <= 0) return 0;
  return correctChars / 5 / (elapsedMs / 60000);
};
export default wpmFromCorrect;
