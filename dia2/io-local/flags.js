const fs = require('fs').promises;

fs.writeFile('io-local/meu-arquivo-novo.txt', 'I was here :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Saved');
  })
  .catch((err) => {
    console.error(err);
  });