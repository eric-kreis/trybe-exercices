describe('Exercício 03', () => {
  const myRemoveWithoutCopy = require('../exercices/ex003');

  it('Test if "myRemoveWithoutCopy" return the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('Test if "myRemoveWithoutCopy" not returns the unexpected Array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Test if the parameter array in "myRemoveWithoutCopy" was not the same', () => {
    const list = [1, 3, 5, 6];
    myRemoveWithoutCopy(list, 3);
    expect(list).not.toEqual([1, 3, 5, 6]);
  });

});