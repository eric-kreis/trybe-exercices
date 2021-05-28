const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const times = names.reduce((acc, curr) => {
    const arrayOfCurr = curr.split('');
    arrayOfCurr.forEach(char => {
      if (char.toLowerCase() === 'a') {
        acc += 1;
      }
    })
    return acc;
  }, 0)
  return times;
}

assert.deepStrictEqual(containsA(), 20);