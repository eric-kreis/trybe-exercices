const assert = require('assert');

const division = (x, y) => {
  if (y === 0) throw new Error('O segundo paramêtro não pode ser igual a 0');
  return x / y;
}
const expected = division(9, 3);

assert.strictEqual(typeof division, 'function', 'É uma função.');
assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três.');