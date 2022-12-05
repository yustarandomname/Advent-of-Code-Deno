import { readLines } from '../utils/readLines.ts';

// This is a function that reads a file and splits it into lines.
const lines = await readLines(4);

// This is a class that represents a range of numbers.
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

// This code parses the input file, creating an array of objects
// Each object has a leftRange and a rightRange property
// Both are Range objects (see Range class below)
//
// The input file has one or more lines
// An empty line is ignored
// A line with a comma splits the line into two parts
// The left part is parsed into a Range object and assigned to the leftRange property
// The right part is parsed into a Range object and assigned to the rightRange property
export const pairs = lines
  .filter((line) => line.length)
  .map((line) => {
    const [left, right] = line.split(',');

    const leftRange = new Range(left);
    const rightRange = new Range(right);

    return { leftRange, rightRange };
  });
