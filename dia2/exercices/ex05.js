const fs = require('fs').promises;

(async () => {
  const contents = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const filePromises = contents.map((content, index) => (
    fs.writeFile(`./file${index + 1}.txt`, content)
  ));

  const readPromises = contents.map((_, index) => (
    fs.readFile(`file${index + 1}.txt`, 'utf8')
  ));
    
  try {
    await Promise.all(filePromises);
    const readContent = await Promise.all(readPromises);
    await fs.writeFile('fileAll.txt', readContent.join(' '));
  } catch (e) {
    console.log(e);
  }
})();