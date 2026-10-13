'use strict';

const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.join(__dirname, '..');

function greet(...args) {
  return spawnSync(process.execPath, ['greet.js', ...args], {
    cwd: root,
    encoding: 'utf8',
  });
}

test('greets the given name', () => {
  const r = greet('Ada');
  assert.strictEqual(r.status, 0);
  assert.strictEqual(r.stdout, 'Hello, Ada!\n');
  assert.strictEqual(r.stderr, '');
});

test('uses only the first argument', () => {
  const r = greet('Ada', 'Lovelace');
  assert.strictEqual(r.status, 0);
  assert.strictEqual(r.stdout, 'Hello, Ada!\n');
});

for (const [label, args] of [
  ['no arguments', []],
  ['an empty name', ['']],
]) {
  test(`prints usage and exits 1 with ${label}`, () => {
    const r = greet(...args);
    assert.strictEqual(r.status, 1);
    assert.strictEqual(r.stdout, '');
    assert.strictEqual(r.stderr, 'Usage: node greet.js <name>\n');
  });
}
