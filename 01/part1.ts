import Calories from './getCaloriesPerElf.ts';

let maxCalories = 0;
for (const elfCalories of Calories) {
  if (elfCalories > maxCalories) maxCalories = elfCalories;
}
export default maxCalories;
