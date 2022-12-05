import Stack from './Stack.ts';

interface Move {
  from: number;
  to: number;
  amount: number;
}

//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
export const testStacks: Stack[] = [
  new Stack('NZ'),
  new Stack('MCD'),
  new Stack('P'),
];

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
export const testMoves: Move[] = [
  { amount: 1, from: 2, to: 1 },
  { amount: 3, from: 1, to: 3 },
  { amount: 2, from: 2, to: 1 },
  { amount: 1, from: 1, to: 2 },
];
