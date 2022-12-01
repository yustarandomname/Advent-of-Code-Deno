import 'https://deno.land/x/dotenv/load.ts';

export async function readLines(day: number): Promise<string[]> {
  const Cookie = Deno.env.get('COOKIE') || '';
  if (!Cookie) {
    console.log('Please set the COOKIE environment variable.');
    Deno.exit(1);
  }

  const url = `https://adventofcode.com/2022/day/${day}/input`;
  const res = await fetch(url, {
    headers: {
      Cookie,
    },
  });

  const textData = await res.text();
  return textData.split('\n');
}
