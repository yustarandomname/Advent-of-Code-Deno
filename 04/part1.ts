import { pairs } from './getPairs.ts';

const score = pairs.reduce((prevScore, currPair) => {
  const { leftRange, rightRange } = currPair;

  // We don't care about pairs with zero values
  if (leftRange.max == 0 && rightRange.max == 0) return prevScore;

  // We give a point if either range fully encloses the other
  if (leftRange.encloses(rightRange) || rightRange.encloses(leftRange))
    return prevScore + 1;

  return prevScore;
}, 0);

export default score;
