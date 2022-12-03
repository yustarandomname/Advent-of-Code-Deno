import { elfGroups, charToValue } from './getCompartments.ts';

// O(n^2)
const score = elfGroups.reduce((acc, [one, two, three]) => {
  one.forEach((char) => {
    if (two.has(char) && three.has(char)) {
      acc += charToValue(char);
    }
  });

  return acc;
}, 0);

console.log(score);
