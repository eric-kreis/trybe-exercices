const assert = require('assert');

function myRemove(arr, item) {
  const newArr = [];
  if (typeof(arr) !== 'object' || typeof(item) !== 'number') {
    throw new Error('O parâmetro possui o tipo errado');
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

/* const expected = myRemove([1, 2, 3, 4], 3);
const equals = (array1, array2) => {
  if (typeof(array1) !== 'object' || typeof(array2) !== 'object') {
    throw new Error('O parâmetro deve ser um array')
  }
  return JSON.stringify(array1) === JSON.stringify(array2);
}; */

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 4), [1, 2, 3]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const list = [1, 2, 3, 4];
myRemove(list, 4);
assert.deepStrictEqual(list, [1, 2, 3, 4]);

assert.throws(() => {
  myRemove([1, 2, 4], '3');
});