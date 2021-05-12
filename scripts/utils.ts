import { createInterface } from 'readline';

import { log } from 'fp-ts/lib/Console';
import { pipe, flow } from 'fp-ts/lib/function';
import { Task, chain, fromIO } from 'fp-ts/lib/Task';

// read from standard input
export const getStreamLine: Task<string> = () =>
  new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('> ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });

// write to standard output
export const putStrLn = flow(log, fromIO);

// ask something and get the answer
export const ask = (question: string): Task<string> => {
  return pipe(
    putStrLn(question),
    chain(() => getStreamLine),
  );
};
