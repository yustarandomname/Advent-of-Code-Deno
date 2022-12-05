import { pairs } from './getPairs.ts';

let score = 0;

// O(n^2)
for (const { leftRange, rightRange } of pairs) {
  // if (leftRange.max == 0 && rightRange.max == 0) continue;

  if (leftRange.encloses(rightRange)) {
    score += 1;
  } else if (rightRange.encloses(leftRange)) {
    score += 1;
  }
}

export default score;
