/**
 * Imports the folder and file if they exist
 * @param day day number between 1-25
 * @param part file name of part1.ts or part2.ts
 * @returns aswer for the day or throws an error and returns null
 */
async function getAnswer(day: number, part: `part${number}.ts`) {
  const folder = day < 10 ? `./0${day}` : `./${day}`;

  try {
    const { default: answer } = await import(`./${folder}/${part}`);

    return answer;
  } catch {
    console.log(
      `File for day: %c${day}/${part}%c is not found`,
      'color: red; text-decoration: underline',
      'color: unset; text-decoration: unset'
    );
    return null;
  }
}

/**
 * Print the answer for both days
 * @param day day number between 1-25
 */
async function printAnswer(day: number) {
  const part1 = await getAnswer(day, 'part1.ts');
  const part2 = await getAnswer(day, 'part2.ts');

  if (part1) {
    console.log(
      `Answer day ${day} %cpart 1: %c${part1}`,
      'color: #06b6d4',
      'color: #4ade80'
    );
  }
  if (part2) {
    console.log(
      `Answer day ${day} %cpart 2: %c${part2}`,
      'color: #06b6d4',
      'color: #4ade80'
    );
  }

  askForDay();
}

/**
 * Ask for a day number between 1-25 and print the answer if it exists
 * repeatedly ask for a day number until the user enters a valid number or exits
 */
function askForDay() {
  let dayNumber;

  while (!dayNumber) {
    const day = prompt('\nPlease enter a day between 1-25:');

    if (day?.toLowerCase() === 'exit' || day?.toLowerCase() === 'quit') {
      console.log('Bye');
      return;
    }

    if (day === null) {
      console.error('PLEASE ENTER A NUMBER BETWEEN 1-25');
      continue;
    }

    dayNumber = parseInt(day, 10);

    if (dayNumber < 1 || dayNumber > 25) {
      console.error('PLEASE ENTER A NUMBER BETWEEN 1-25');
      dayNumber = undefined;
      continue;
    }

    printAnswer(dayNumber);
  }
}

console.log('Type "exit" to quit');
askForDay();
