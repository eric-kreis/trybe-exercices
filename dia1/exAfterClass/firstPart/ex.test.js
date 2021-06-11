const sum = require('./ex001');

describe('exercicio 01', () => {
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