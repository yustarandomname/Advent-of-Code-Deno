import { compartments, charToValue } from './getCompartments.ts';

let score = 0;

// O(n^2)
for (const { left, right } of compartments) {
  const leftSet = new Set(left);
  const rightSet = new Set(right);

  leftSet.forEach((char) => {
    if (rightSet.has(char)) {
      score += charToValue(char);
    }
  });
}

console.log(score);
