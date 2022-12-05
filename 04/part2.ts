import { pairs, Range } from './getPairs.ts';

let score = 0;

// const pairs = [
//   { leftRange: new Range('2-4'), rightRange: new Range('6-8') },
//   { leftRange: new Range('2-3'), rightRange: new Range('4-5') },
//   { leftRange: new Range('5-7'), rightRange: new Range('7-9') },
//   { leftRange: new Range('2-8'), rightRange: new Range('3-7') },
//   { leftRange: new Range('6-6'), rightRange: new Range('4-6') },
//   { leftRange: new Range('2-6'), rightRange: new Range('4-8') },
// ];

// O(n^2)
for (const { leftRange, rightRange } of pairs) {
  if (leftRange.overlaps(rightRange)) {
    score += 1;
    console.log(leftRange, 'overlaps', rightRange);
  }
}

export default score;
