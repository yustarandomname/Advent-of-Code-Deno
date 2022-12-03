import { getElfGroups, charToValue } from './getCompartments.ts';

let score = 0;

// O(n^2)
for (const [one, two, three] of getElfGroups()) {
  const oneSet = new Set(one);
  const twoSet = new Set(two);
  const threeSet = new Set(three);

  oneSet.forEach((char) => {
    if (twoSet.has(char) && threeSet.has(char)) {
      score += charToValue(char);
    }
  });
}

console.log(score);
