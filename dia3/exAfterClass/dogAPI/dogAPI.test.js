const script = require('./dogAPI');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('Exercício 06', () => {
  fetch.mockImplementation(async () => {
    return {
      json: async () => {
        return {
          "message": "https://images.dog.ceo/breeds/shiba/shiba-1.jpg",
          "status": "success",
        };
      },
    };
  });

  afterEach(() => { script.randomDogPicture.mockReset(); });

  it('Success simulation from dog API', async () => {
    const { status } = await script.randomDogPicture();
    script.randomDogPicture = jest
    .fn(async () => {
      return `request ${status}`;
    });

    await expect(script.randomDogPicture()).resolves.toBe('request success');
    expect(script.randomDogPicture).toHaveBeenCalled();
    expect(script.randomDogPicture).toHaveBeenCalledTimes(1);
    expect(script.randomDogPicture).toHaveBeenCalledWith();
  });

  it('Failed simulation from dog API', async () => {
    script.randomDogPicture
    .mockImplementation(async () => {
      throw 'request failed';
    });

    await expect(script.randomDogPicture()).rejects.toBe('request failed');
    expect(script.randomDogPicture).toHaveBeenCalled();
    expect(script.randomDogPicture).toHaveBeenCalledTimes(1);
    expect(script.randomDogPicture).toHaveBeenCalledWith();
  });

});