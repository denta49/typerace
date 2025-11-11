const deterministicSentenceIndex = (roundId: string, sentencesCount: number) => {
  let h = 5381;
  for (let i = 0; i < roundId.length; i++) h = (h << 5) + h + roundId.charCodeAt(i);
  return Math.abs(h) % Math.max(1, sentencesCount);
};
export default deterministicSentenceIndex;
