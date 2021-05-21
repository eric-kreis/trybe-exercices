const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50, 'Os valores não são estritamente iguais'); // Sem erros: 50 == 50
assert.notStrictEqual(50, 60, 'Os valores são estritamente iguais'); // AssertionError: 50 == 70