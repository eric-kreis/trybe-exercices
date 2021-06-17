const bonus = require('./bonus');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('Exercício Bônus', () => {
  fetch.mockImplementation(async () => {
    return {
      json: async () => {
        return {
          id: 'lqWgFlyPusc',
          joke: 'What do you call an Argentinian with a rubber toe? Roberto',
          status: 200,
        };
      },
    };
  });

  it('Verify the API call for a specific result', async () => {
    expect.assertions(4);

    const simFetchJoke = jest.spyOn(bonus, 'fetchJoke')
    expect(await simFetchJoke()).toEqual('What do you call an Argentinian with a rubber toe? Roberto');
    expect(simFetchJoke).toHaveBeenCalled();
    expect(simFetchJoke).toHaveBeenCalledTimes(1);
    expect(simFetchJoke).toHaveBeenCalledWith();
  });

});