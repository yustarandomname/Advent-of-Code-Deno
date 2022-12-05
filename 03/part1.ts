import { compartments, charToValue } from './getCompartments.ts';

let score = 0;

// O(n^2)
for (const { left, right } of compartments) {
  left.forEach((char) => {
    if (right.has(char)) {
      score += charToValue(char);
    }
  });
}

export default score;
