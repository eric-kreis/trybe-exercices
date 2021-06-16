const script = require('./script1to5');

describe('Exercício 01', () => {
  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    script.getRandomNumber = jest
    .fn()
    .mockReturnValue(10);

    expect(script.getRandomNumber()).toBe(10);
    expect(script.getRandomNumber).toHaveBeenCalled();
    expect(script.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(script.getRandomNumber).toHaveBeenCalledWith();
  });
});