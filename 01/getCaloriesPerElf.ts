import { readLines } from '../utils/readLines.ts';

const lines = await readLines(1);

const calories = [0];

for (const line of lines) {
  if (line == '') {
    calories.push(0);
  } else {
    calories[calories.length - 1] += parseInt(line);
  }
}

export default calories;
