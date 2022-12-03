import { readLines } from '../utils/readLines.ts';

export type Compartment = string;

const lines = await readLines(3);

export function charToValue(char: string) {
  const charCode = char.charCodeAt(0);

  return charCode >= 97 && charCode <= 122 ? charCode - 96 : charCode - 38;
}

export const compartments = lines.map((line) => {
  const lineLength = line.length;
  const left = new Set(line.slice(0, lineLength / 2));
  const right = new Set(line.slice(lineLength / 2));

  return { left, right };
});

// Split lines into groups of 3
function getElfGroups() {
  const groups: (readonly [Set<string>, Set<string>, Set<string>])[] = [];

  for (let i = 0; i < lines.length; i += 3) {
    const group = [
      new Set(lines[i]),
      new Set(lines[i + 1]),
      new Set(lines[i + 2]),
    ] as const;
    groups.push(group);
  }

  return groups;
}

export const elfGroups = getElfGroups();
