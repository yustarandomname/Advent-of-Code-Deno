import Stack from './Stack.ts';

/*
 * remove redundant whitespace and brackets
 * @param line a line of input
 * @returns santatised line
 */
function santatiseLine(line: string): string {
  return line
    .replaceAll(/\s{4}/g, '_')
    .replaceAll('[', '')
    .replaceAll(']', '')
    .replaceAll(' ', '');
}

// This function takes an array of strings as input and returns an array of stacks
// The function loops through each line in the array and loops through each character in the line
// If the character is not an underscore, it is prepended to a stack
// The function returns an array of stacks

export function readStacks(lines: string[]): Stack[] {
  // Create a stack for each character in the first line
  const stacks = santatiseLine(lines[0])
    .split('')
    .map((_) => Stack.default);

  // Loop through each line of input
  for (const line of lines) {
    const santatised = santatiseLine(line);

    // If the line contains a number, break
    if (parseInt(santatised)) break;

    // Loop through each character in the line
    for (let i = 0; i <= stacks.length; i++) {
      const char = santatised.charAt(i);

      // If the character is not an underscore, prepend it to the stack
      if (char !== '_') {
        stacks[i]?.prepend(char);
      }
    }
  }

  return stacks;
}
