const { getListAnimals } = require('./ex001')

describe('Quando o tipo do animal existe', () => {
  // With then;
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then((listDogs) => {
      const [first, second] = listDogs;
      expect(first.name).toEqual('Dorminhoco');
      expect(second.name).toEqual('Soneca');
    });
  });

  // With async and await;
  test('Return the animals list', async () => {
    const listCats = await getListAnimals('Cat');
    const [first] = listCats;
    expect.assertions(1);
    expect(first.name).toBe('Preguiça');
  });

  it('Return error', async () => {
    expect.assertions(1);
    try {
      await getListAnimals('Monkey');
    } catch (error) {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    }
  });
});