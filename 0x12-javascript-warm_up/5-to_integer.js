#!/usr/bin/node

const args = process.argv;

if (args.length < 3) {
  console.log('Not a number');
} else {
  const firstArg = Number(args[2]); // Convert the first argument to a number

  if (isNaN(firstArg)) {
    console.log('Not a number');
  } else {
    console.log(`My number: ${firstArg}`);
  }
}
