// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.
import { choices, OpponentChoice } from './getChoicesPerMatch.ts';

let score = 0;

function pickLosing(opponent: OpponentChoice) {
  if (opponent == 'A') return 3; // Z
  if (opponent == 'B') return 1; // X
  if (opponent == 'C') return 2; // Y

  return 0;
}

function pickTie(opponent: OpponentChoice) {
  if (opponent == 'A') return 1; // X
  if (opponent == 'B') return 2; // Y
  if (opponent == 'C') return 3; // Z

  return 0;
}

function pickWinning(opponent: OpponentChoice) {
  if (opponent == 'A') return 2; // Y
  if (opponent == 'B') return 3; // Z
  if (opponent == 'C') return 1; // X

  return 0;
}

for (const { opponent, you } of choices) {
  if (you == 'X') {
    score += 0;
    score += pickLosing(opponent);
  } else if (you == 'Y') {
    score += 3;
    score += pickTie(opponent);
  }
  if (you == 'Z') {
    score += 6;
    score += pickWinning(opponent);
  }
}

console.log(score);
