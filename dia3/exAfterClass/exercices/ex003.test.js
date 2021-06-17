const script = require('./untilFive');

describe('Exercício 03', () => {
  it('Crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.', () => {
    script.getRandomNumber = jest
    .fn()
    .mockImplementation((a, b, c) => a * b * c);

    expect(script.getRandomNumber(2, 5, 10)).toBe(100);
    expect(script.getRandomNumber).toHaveBeenCalled();
    expect(script.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(script.getRandomNumber).toHaveBeenCalledWith(2, 5, 10);
  });

  it('Resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.', () => {
    script.getRandomNumber.mockReset();
    script.getRandomNumber
    .mockImplementation((number) => number * 2);
  
    expect(script.getRandomNumber(3)).toBe(6);
    expect(script.getRandomNumber).toHaveBeenCalled();
    expect(script.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(script.getRandomNumber).toHaveBeenCalledWith(3);
  });
});