const { getUserName } = require('./script');

describe('When ID exists', () => {

  it('When ID is 4 or 5', async () => {
    expect.assertions(2)
    expect(await getUserName(4)).toEqual('Mark');
    expect(await getUserName(5)).toEqual('Paul');
  });

});

describe("When ID doesn't exist", () => {

  it('When ID is "1"', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch(error) {
      expect(error).toEqual({ 'error': 'User with 1 not found.' });
    }
  });

});