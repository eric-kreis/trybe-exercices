const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  // https://nodejs.org/api/readline.html#readlinepromisescreateinterfaceoptions
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // https://nodejs.org/api/readline.html#rlquestionquery-options-callback
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
  
      resolve(answer);
    });
  })
};

const readUserFile = async () => {
  try {
    const fileName = await question('Digite o nome do arquivo você deseja ler: ');
    const data = await fs.readFile(fileName, 'utf8');
    return data;
  } catch (e) {
    throw 'Arquivo inexistente';
  }
};

const askWordToChange = async () => {
  try {
    const file = await readUserFile();
    const words = file.split(' ');
    const questionFormat = words.map((word, index) => `[${index + 1}] - ${word}`).join('\n');
    const selectedNumber = await question(`Digite um número para informar a palavra: \n${questionFormat}\n`);

    if (!(+selectedNumber)) return console.log('[ERROR]: Não é um número!');
    const newWord = await question('Digite a nova palavra: ');

    words[+selectedNumber - 1] = newWord;
    const newPhrase = words.join(' ');
    console.log(`Resultado: ${newPhrase}`);

    const fileLocal = await question('Onde deseja salvar o arquivo (Escreva o tipo do arquivo também): ');
    await fs.writeFile(fileLocal, newPhrase);
  } catch (e) {
    console.log(e);
  }
};

askWordToChange();
