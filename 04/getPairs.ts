import { readLines } from '../utils/readLines.ts';

const lines = await readLines(4);

console.log(lines[lines.length - 2], lines[lines.length - 1]);

export class Range {
  min = 0;
  max = 0;

  constructor(range: string) {
    if (!range) return;

    const minMax = range.split('-');
    this.min = parseInt(minMax[0], 10);
    this.max = parseInt(minMax[1], 10);
  }

  includes(value: number) {
    return value >= this.min && value <= this.max;
  }

  encloses(range: Range) {
    return this.includes(range.min) && this.includes(range.max);
  }

  overlaps(range: Range) {
    return (
      this.includes(range.min) ||
      this.includes(range.max) ||
      range.includes(this.min) ||
      range.includes(this.max)
    );
  }

  toString() {
    return `${this.min}-${this.max}`;
  }
}

export const pairs = lines.map((line) => {
  const [left, right] = line.split(',');

  const leftRange = new Range(left);
  const rightRange = new Range(right);

  return { leftRange, rightRange };
});
