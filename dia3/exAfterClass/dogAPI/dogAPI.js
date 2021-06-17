const fetch = require('node-fetch');

const randomDogPicture = async () => {
  const API_LINK = 'https://dog.ceo/api/breeds/image/random';
  const apiFetch = await fetch(API_LINK);
  const apiJson = await apiFetch.json();
  return apiJson;
};


module.exports = { randomDogPicture };