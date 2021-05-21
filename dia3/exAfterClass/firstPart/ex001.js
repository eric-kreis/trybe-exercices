const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parâmetros devem ser números');
  }
  return a + b;
}
-
assert.strictEqual(sum(4, 5), 9, 'Quatro mais cinco é igual a nove.');
assert.strictEqual(sum(5, 5), 10);
assert.strictEqual(sum(2, 0), 2);
assert.strictEqual(sum(-5, 10), 5);
assert.throws(() => {
  sum(4, '5')
});