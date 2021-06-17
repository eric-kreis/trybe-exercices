const script = require('./untilFive');
jest.mock('./untilFive');

describe('Exercício 04', () => {
  it('Nova implementação para a função "changeToUpper"', () => {
    script.changeToUpper
    .mockImplementation((word) => word.toLowerCase()); // Now it returns word in lower case.

    expect(script.changeToUpper('Trybe')).toBe('trybe');
    expect(script.changeToUpper).toHaveBeenCalled();
    expect(script.changeToUpper).toHaveBeenCalledTimes(1);
    expect(script.changeToUpper).toHaveBeenCalledWith('Trybe');
  });

  it('New implementation for "firstLetter"', () => {
    script.firstLetter
    .mockImplementation((word) => word[word.length - 1]); // Now it returns the last letter.
  
    expect(script.firstLetter('Trybe')).toBe('e');
    expect(script.firstLetter).toHaveBeenCalled();
    expect(script.firstLetter).toHaveBeenCalledTimes(1);
    expect(script.firstLetter).toHaveBeenCalledWith('Trybe');
  });

  it('"concatenate" changes to recives three strings', () => {
    script.concatenate.mockImplementation((w1, w2, w3) => `${w1}${w2}${w3}`);
  
    expect(script.concatenate('Trybe', ' auxilia', ' vidas.')).toBe('Trybe auxilia vidas.');
    expect(script.concatenate).toHaveBeenCalled();
    expect(script.concatenate).toHaveBeenCalledTimes(1);
    expect(script.concatenate).toHaveBeenCalledWith('Trybe', ' auxilia', ' vidas.');
  });
})