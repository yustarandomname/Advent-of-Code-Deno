import { line, nextFourDistict } from './nextNDistinct.ts';

let index = 0;

for (let i = 0; i < line.length; i++) {
  const isDistinct = nextFourDistict(i);

  if (isDistinct) {
    index = i + 4;
    break;
  }
}

export default index;
