import { readLines } from '../utils/readLines.ts';

export type Compartment = string;

const lines = await readLines(5);

class Stack {
  s: string[] = [];

  constructor(stack: string) {
    if (!stack) return;

    this.s = stack.split('');
  }

  pop() {
    return this.s.pop();
  }

  popN(n: number) {
    return this.s.splice(this.s.length - n);
  }

  push(value: string) {
    this.s.push(value);
  }

  pushN(values: string[]) {
    this.s = [...this.s, ...values];
  }

  top() {
    return this.s[this.s.length - 1];
  }
}

interface Move {
  from: number;
  to: number;
  amount: number;
}

// [P]     [C]         [M]
// [D]     [P] [B]     [V] [S]
// [Q] [V] [R] [V]     [G] [B]
// [R] [W] [G] [J]     [T] [M]     [V]
// [V] [Q] [Q] [F] [C] [N] [V]     [W]
// [B] [Z] [Z] [H] [L] [P] [L] [J] [N]
// [H] [D] [L] [D] [W] [R] [R] [P] [C]
// [F] [L] [H] [R] [Z] [J] [J] [D] [D]
//  1   2   3   4   5   6   7   8   9
export const stacks: Stack[] = [
  new Stack('FHBVRQDP'),
  new Stack('LDZQWV'),
  new Stack('HLZQGRPC'),
  new Stack('RDHFJVB'),
  new Stack('ZWLC'),
  new Stack('JRPNTGVM'),
  new Stack('JRLVMBS'),
  new Stack('DPJ'),
  new Stack('DCNWV'),
];

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

let startReading = false;
export const moves: Move[] = lines
  .map((line) => {
    if (line == '') startReading = true;

    if (startReading) {
      const moveSplit = line.split(' ').map((p) => parseInt(p) || 0);

      return {
        amount: moveSplit[1],
        from: moveSplit[3],
        to: moveSplit[5],
      } as Move;
    }

    return { amount: 0, from: 0, to: 0 } as Move;
  })
  .filter((move) => move.amount > 0);
