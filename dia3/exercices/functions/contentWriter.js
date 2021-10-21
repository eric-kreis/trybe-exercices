const fs = require('fs');

const contentWriter = (archive, content) => {
  try {
    fs.writeFileSync(`io-local/${archive}`, content);
    return 'ok';
  } catch (e) {
    return 'informe parâmetros corretos';
  }
};

module.exports = contentWriter;
