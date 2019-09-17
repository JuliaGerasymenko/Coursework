'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name;

// rl.on('line', line => {
//   name = line.split('\n');
//   console.log(line);
// }).on('close', () => {process.exit(0);});
console.log(rl.input());
