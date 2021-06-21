const { getAnimalByAge } = require('./ex006-2');

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe um animal com a idade', () => {
    it('Retorne um array com o objeto do animal', async () => {
      expect(await getAnimalByAge(2)).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      expect(await getAnimalByAge(5)).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
    });
  });
});