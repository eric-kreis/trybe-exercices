const { describe, it, expect } = require('@jest/globals');

describe('Exercício 01', () => {
  const sum = require('./ex001');

  it('Test if sum has error when "typeof" a parameter is not a number', () => {
    expect(() => { sum('1', 2) }).toThrow();
  });

  it('Test error message is "parameters must be numbers"', () => {
    expect(() => { sum('5', 2) })
    .toThrowError(new Error('parameters must be numbers'));
  });

  it('Test if the sum is returning a correct number', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('Test if the sum is returning a correct number', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Exercício 02', () => {
  const myRemove = require('./ex002');

  it('Test if "myRemove" returns the expected Array', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Test if "myRemove" not returns the unexpected Array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Test if the parameter array in "myRemove" is the same', () => {
    const list = [1, 3, 5, 6];
    myRemove(list, 3);
    expect(list).toEqual([1, 3, 5, 6]);
  });

  it('Test if "myRemove" returns the expected Array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercício 03', () => {
  const myRemoveWithoutCopy = require('./ex003');

  it('Test if "myRemoveWithoutCopy" return the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Test if "myRemoveWithoutCopy" not returns the unexpected Array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Test if the parameter array in "myRemoveWithoutCopy" is not the same', () => {
    const list = [1, 3, 5, 6];
    myRemoveWithoutCopy(list, 3);
    expect(list).not.toEqual([1, 3, 5, 6]);
  });

  it('Test if "myRemoveWithoutCopy" return the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});