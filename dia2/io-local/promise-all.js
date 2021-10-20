const fs = require('fs').promises;

(async () => {
  try {
    const [file1, file2, file3] = await Promise.all([
      fs.readFile('io-local/files/file1.txt'),
      fs.readFile('io-local/files/file2.txt'),
      fs.readFile('io-local/files/file3.txt'),
    ]);
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`3 archives readed totaling ${fileSizeSum} bytes`);
  } catch (err) {
    console.error(`Error to read archives: ${err.message}`);
  }
})();