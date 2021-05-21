const assert = require('assert');

const wordLengths = (array) => {
  const wordsNumbers = new Array;
  for (const word of array) {
    const letters = word.length;
    wordsNumbers.push(letters);
  }
  return wordsNumbers;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);