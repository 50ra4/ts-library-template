import { pipe } from 'fp-ts/lib/function';
import { chainFirst } from 'fp-ts/lib/Task';

import { ask, putStrLn } from './utils';

const main = pipe(
  ask('What is your name?'),
  chainFirst((name) => putStrLn(`${name}, Welcome to TypeScript!`)),
);

main();
