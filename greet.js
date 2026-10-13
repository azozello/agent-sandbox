#!/usr/bin/env node
'use strict';

const name = process.argv[2];

if (!name) {
  console.error('Usage: node greet.js <name>');
  process.exit(1);
}

console.log(`Hello, ${name}!`);
