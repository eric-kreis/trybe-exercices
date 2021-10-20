const fs = require('fs').promises;

const nomeDoArquivo = 'io-local/meu-arquivo.txt';

fs.writeFile(nomeDoArquivo, 'My awesome text!')
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.log(`Error writing the archive: ${err.message}`);
  });
