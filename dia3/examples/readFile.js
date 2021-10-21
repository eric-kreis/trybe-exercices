const fs = require('fs');

const readFile = (archive = '') => {
  try {
    return fs.readFileSync(archive, 'utf8');
  } catch (e) {
    return null;
  }
};

module.exports = readFile;
