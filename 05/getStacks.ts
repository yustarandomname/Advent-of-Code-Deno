import { readLines } from '../utils/readLines.ts';
import { readStacks } from './readStacks.ts';
import Stack from './Stack.ts';

export type Compartment = string;

const lines = await readLines(5);

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
export const stacks: Stack[] = readStacks(lines);

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
