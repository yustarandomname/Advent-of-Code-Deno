import { stacks, moves } from './getStacks.ts';

for (const move of moves) {
  for (let i = 0; i < move.amount; i++) {
    const popFrom = stacks[move.from - 1].pop();

    if (!popFrom) {
      console.error('not found', stacks[move.from - 1]);
      continue;
    }

    stacks[move.to - 1].push(popFrom);
  }
}

const result = stacks.map((s) => s.top()).join('');

export default result;
