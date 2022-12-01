import Calories from './getCaloriesPerElf.ts';

const caloriesSorted = Calories.sort((a, b) => b - a);
const topThree = caloriesSorted.slice(0, 3);
const total = topThree.reduce((a, b) => a + b, 0);

console.log('Day 1 | part2: ', total);
