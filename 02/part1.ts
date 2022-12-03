import { choices, OpponentChoice, YourChoice } from './getChoicesPerMatch.ts';

let score = 0;

function hasWon(opponent: OpponentChoice, you: YourChoice): boolean {
  if (opponent == 'A' && you == 'Y') return true;
  if (opponent == 'B' && you == 'Z') return true;
  if (opponent == 'C' && you == 'X') return true;

  return false;
}

function isDraw(opponent: OpponentChoice, you: YourChoice): boolean {
  if (opponent == 'A' && you == 'X') return true;
  if (opponent == 'B' && you == 'Y') return true;
  if (opponent == 'C' && you == 'Z') return true;

  return false;
}

// shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
for (const { opponent, you } of choices) {
  if (you == 'X') score += 1;
  if (you == 'Y') score += 2;
  if (you == 'Z') score += 3;

  if (isDraw(opponent, you)) score += 3;
  if (hasWon(opponent, you)) score += 6;
}

console.log(score);
