// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency — the power to choose and to act, and what passes between a
// person and an agent when one acts for the other — to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white
// space, and the judge reads exactly the bytes written, line ends included,
// so the poem is written exactly as shown, with no trailing line end.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: three movements. A door left unopened; the quiet weight of
// choosing; one room taken back from the agent that runs the mornings.
const POEM_LINES = [
  'The morning I stopped asking permission,',
  'the kettle still boiled. The bus still came.',
  'Nothing in the world had been waiting for my courage —',
  'only my hand, hovering',
  'over the handle of the door.',
  '',
  'I used to think choosing was a lightning strike,',
  'a voice from somewhere higher saying go.',
  'It is quieter than that: the small weight',
  'of a key, the yes you say to yourself',
  'before anyone else can hear it.',
  '',
  'I gave the agent my mornings once —',
  'let it book, remind, decide, reply —',
  'and my days grew smooth and strange,',
  'like a house where someone else',
  'has hung the pictures on the walls.',
  '',
  'So I took one room back. Just one.',
  'I choose the window. I choose the hour.',
  'The agent keeps the keys; I keep the door.',
  'Agency is not doing everything yourself.',
  'It is knowing which yes is yours.',
];

const POEM = POEM_LINES.join('\n');

// Gate guardrails, checked before writing so a bad poem never ships:
// 1 to 1,000 Unicode code points, and at least one non-whitespace char.
const length = [...POEM].length;
if (length < 1 || length > 1000) {
  throw new Error(`poem is ${length} characters, must be 1 to 1,000`);
}
if (!/\S/.test(POEM)) {
  throw new Error('poem must contain at least one non-whitespace character');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
