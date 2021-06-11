describe('Exercício 02', () => {
  const myRemove = require('../exercices/ex002');

  it('Test if "myRemove" returns the expected Array', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('Test if "myRemove" not returns the unexpected Array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Test if the parameter array in "myRemove" stills the same', () => {
    const list = [1, 3, 5, 6];
    myRemove(list, 3);
    expect(list).toEqual([1, 3, 5, 6]);
  });

});