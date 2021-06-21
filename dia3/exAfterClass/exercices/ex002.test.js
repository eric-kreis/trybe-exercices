const script = require('./untilFive');

describe('Exercício 02', () => {
  it(`Crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
    Essa implementação deve ocorrer uma única vez. Faça os testes necessários.`, () => {
    script.getRandomNumber = jest
    .fn()
    .mockImplementation((a, b) => a / b);

    expect(script.getRandomNumber(10, 2)).toBe(5);  
    expect(script.getRandomNumber).toHaveBeenCalled();
    expect(script.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(script.getRandomNumber).toHaveBeenCalledWith(10, 2);
  });
});