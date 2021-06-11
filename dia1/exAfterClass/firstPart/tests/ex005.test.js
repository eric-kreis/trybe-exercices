describe('Exercício 05 Primeira Parte', () => {
  const { obj1, obj2, obj3 } = require('../exercices/ex005');

  it('Verify if "obj1" is equal to "obj2"', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Verify if "obj1" and "obj2" are different from obj3', () => {
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });

});