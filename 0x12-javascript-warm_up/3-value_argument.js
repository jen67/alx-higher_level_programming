#!/usr/bin/node

// Get arguments passed to the script
const args = process.argv[2];

if (args !== undefined) {
  console.log(args);
} else {
  console.log('No argument');
}
