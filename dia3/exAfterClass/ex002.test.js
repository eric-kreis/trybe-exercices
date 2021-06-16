const script = require('./script1to5');

describe('Exercício 02', () => {
  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    script.getRandomNumber = jest
    .fn()
    .mockImplementation((a, b) => a / b);

    expect(script.getRandomNumber(4, 2)).toBe(2);
    expect(script.getRandomNumber(10, 2)).toBe(5);

    expect(script.getRandomNumber).toHaveBeenCalledTimes(2);
  });
});