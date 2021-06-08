// Older version.

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => console.log(`Oi ${name}, ouve essa: ${joke}`))
    .catch((err) => console.log(err));
}

sendJokeToFriend("Anna");