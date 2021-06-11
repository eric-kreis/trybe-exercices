const { expect, it } = require('@jest/globals');

describe('Exercício Bônus!', () => {
  const searchEmployee = require('./script')

  it('Test if the "searchEmployee"  exists', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Test if "searchEmployee" has the ID ERROR', () => {
    expect(() => { searchEmployee('4678-222', 'firstName') }).toThrow();
  });

  it('Test if "searchEmployee" has the information ERROR', () => {
    expect(() => { searchEmployee('9852-2-2', 'ericName') }).toThrow();
  });

  it('Test if ID ERROR return a correct message', () => {
    expect(() => { searchEmployee('34478-222', 'firstName') })
    .toThrowError(new Error('ID não identificada'));
  });

  it('Test if information ERROR return a correct message', () => {
    expect(() => { searchEmployee('9852-2-2', 'ericName') })
    .toThrowError(new Error('Informação indisponível'));
  });

  it('Test if "searchEmployee" by firstName returns the expected', () => {
    expect(searchEmployee('4678-2', 'firstName'))
    .toEqual('Paul');
  });

  it('Test if "searchEmployee" by lastName returns the expected', () => {
    expect(searchEmployee('5569-4', 'lastName'))
    .toEqual('Jobs');
  });

  it('Test if "searchEmployee" by specialities returns the expected', () => {
    expect(searchEmployee('1256-4','specialities'))
    .toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });

});


    