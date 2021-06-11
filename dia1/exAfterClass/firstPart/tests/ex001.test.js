describe('Exercício 01', () => {
  const sum = require('../exercices/ex001');

  it('Test if sum has error when "typeof" a parameter stills not a number', () => {
    expect(() => { sum('1', 2) }).toThrow();
  });

  it('Test error message is "parameters must be numbers"', () => {
    expect(() => { sum('5', 2) })
    .toThrowError(new Error('parameters must be numbers'));
  });

  it('Test if the sum is returning a correct number', () => {
    expect(9).toBe(sum(4, 5));
    expect(sum(0, 0)).toBe(0);
  });

});