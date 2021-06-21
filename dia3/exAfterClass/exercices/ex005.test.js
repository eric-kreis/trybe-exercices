const script = require('./untilFive');

describe('Exercício 05', () => {
  it('Changing "changeToUpper" to lower case then restoring', () => {
    const changeToLower = jest.spyOn(script, 'changeToUpper')
    .mockImplementation((word) => word.toLowerCase());

    expect(changeToLower('Trybe')).toBe('trybe');
    expect(changeToLower).toHaveBeenCalled();
    expect(changeToLower).toHaveBeenCalledTimes(1);
    expect(changeToLower).toHaveBeenCalledWith('Trybe');

    // Restoring to the original
    script.changeToUpper.mockRestore();
    
    const changeToUpper = jest.spyOn(script, 'changeToUpper');
    expect(changeToUpper('Trybe')).toBe('TRYBE');
    expect(changeToUpper).toHaveBeenCalled();
    expect(changeToUpper).toHaveBeenCalledTimes(1);
    expect(changeToUpper).toHaveBeenCalledWith('Trybe');
  });
});