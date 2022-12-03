import { readLines } from '../utils/readLines.ts';

export type Compartment = string;

const lines = await readLines(3);

export function charToValue(char: string) {
  const charCode = char.charCodeAt(0);

  return charCode >= 97 && charCode <= 122 ? charCode - 96 : charCode - 38;
}

export const compartments: { left: Compartment; right: Compartment }[] =
  lines.map((line) => {
    const lineLength = line.length;
    const left = line.slice(0, lineLength / 2);
    const right = line.slice(lineLength / 2);

    return { left, right };
  });

export function getElfGroups() {
  const groups: [string, string, string][] = [];

  for (let i = 0; i < lines.length; i += 3) {
    const group = [lines[i], lines[i + 1], lines[i + 2]] as [
      string,
      string,
      string
    ];
    groups.push(group);
  }

  return groups;
}
