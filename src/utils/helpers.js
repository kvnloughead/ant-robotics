/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

export const processText = (str) => {
  const regex = /^(\*\*|__)/;
  const startsWithEmphasis = regex.test(str);
  const substrings = str
    .split(/(\*\*|__)/)
    .filter((v, i) => !(i % 2))
    .filter((v) => v.length > 0);
  const result = substrings.map((s, i) => {
    if (i % 2 === 0) {
      return [substrings[i], substrings[i + 1]];
    }
  });
  return { processedText: result.filter((v) => v), startsWithEmphasis };
};