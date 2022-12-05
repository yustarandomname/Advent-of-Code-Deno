import 'https://deno.land/x/dotenv/load.ts';

export async function readLines(day: number): Promise<string[]> {
  const session = Deno.env.get('SESSION') || '';
  if (!session) {
    console.log(
      '\nPlease set the %cSESSION %cenvironment variable in the %c.env file \n',
      'color: #06b6d4',
      'color: unset',
      'color: #60a5fa'
    );
  }

  const url = `https://adventofcode.com/2022/day/${day}/input`;
  const res = await fetch(url, {
    headers: {
      Cookie: `session=${session}`,
    },
  });

  if (res.ok) {
    const textData = await res.text();
    return textData.split('\n');
  } else {
    console.log(
      '\n%cSession is not valid (set in .env file)',
      'color: red; text-decoration: underline'
    );
    console.log({ session });
    return [];
  }
}
