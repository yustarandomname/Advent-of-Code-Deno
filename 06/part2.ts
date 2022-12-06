import { line, nextFourteenDistict } from './nextNDistinct.ts';

let index = 0;

for (let i = 0; i < line.length; i++) {
  const isDistinct = nextFourteenDistict(i);

  if (isDistinct) {
    index = i + 14;
    break;
  }
}

export default index;
