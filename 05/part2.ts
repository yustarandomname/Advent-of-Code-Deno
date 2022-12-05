import { stacks, moves } from './getStacks.ts';

for (const move of moves) {
  const popN = stacks[move.from - 1].popN(move.amount);

  stacks[move.to - 1].pushN(popN);
}

const result = stacks.map((s) => s.top()).join('');

export default result;
