const assert = require('assert');

const sumAllNumbers = (array) => {
  let result = new Number;
  for (const number of array) {
    result += number;
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);