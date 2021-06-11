describe('Exercício 01', () => {
  const sum = require('./ex001');
  it('Test if sum has error when "typeof" a parameter is not a number', () => {
    expect(() => { sum('1', 2) }).toThrow();
  });
  it('Test error message is "parameters must be numbers"', () => {
    expect(() => { sum('5', 2) }).toThrowError(new Error('parameters must be numbers'));
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
});