import { readLines } from '../utils/readLines.ts';

const lines = await readLines(6);
export const line = lines[0];

export function nextNDistict(index: number, n: number) {
  const result = new Set<string>();
  for (let i = index; i < Math.min(index + n, line.length); i++) {
    result.add(line[i]);
  }

  return result.size === n;
}

export function nextFourDistict(index: number) {
  return nextNDistict(index, 4);
}

export function nextFourteenDistict(index: number) {
  return nextNDistict(index, 14);
}
