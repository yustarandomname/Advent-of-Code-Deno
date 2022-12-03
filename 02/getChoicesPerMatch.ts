import { readLines } from '../utils/readLines.ts';

export type OpponentChoice = 'A' | 'B' | 'C';

export type YourChoice = 'X' | 'Y' | 'Z';

const lines = await readLines(2);
export const choices: { opponent: OpponentChoice; you: YourChoice }[] = lines
  .map((line) => line.split(' ') as [OpponentChoice, YourChoice])
  .map(([opponent, you]) => ({ opponent, you }));
