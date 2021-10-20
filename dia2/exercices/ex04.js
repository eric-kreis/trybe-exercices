const fs = require('fs').promises;

const mainSimpsons = 'simpsons.json';
const simpsonsFamily = 'simpsonFamily.json';

const readJSON = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    throw e;
  }
};

const formatSimpsons = async () => {
  const simpsons = await readJSON(mainSimpsons);
  simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
};

// formatSimpsons();

const findSimpsonById = async (id) => {
  const simpsons = await readJSON(mainSimpsons);
  const simpson = simpsons.find(({ id: currId }) => currId === id);
  if (!simpson) throw new Error('id não encontrado');
  return simpson;
};

// findSimpsonById('1').then((response) => console.log(response)).catch((e) => console.log(e));

const removeSimpsons = async () => {
  const simpsons = await readJSON(mainSimpsons);
  const newSimpsons = simpsons.filter(({ id }) => !['10', '6'].includes(id));

  try {
    await fs.writeFile(fileName, JSON.stringify(newSimpsons));
    console.log('IDs 10 and 6 successfully removed!');
  } catch (e) {
    console.log(e);
  }
};

// removeSimpsons();

const createSimpsonsFamily = async () => {
  const simpsons = await readJSON(mainSimpsons);
  const family = simpsons.filter(({ id }) => +id <= 4);

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
    console.log('Simpson family successfully created!');
  } catch (e) {
    console.log(e);
  }
};

// createSimpsonsFamily();

const addNelsonToFamily = async () => {
  const simpsons = await readJSON(mainSimpsons);
  const family = await readJSON(simpsonsFamily);

  const nelson = simpsons.find(({ name }) => name === 'Nelson Muntz');
  family.push(nelson);

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
    console.log('Nelson successfully added!');
  } catch (e) {
    console.log(e);
  }
};

// addNelsonToFamily();

const changeNelsonForMaggie = async () => {
  const simpsons = await readJSON(mainSimpsons);
  const family = await readJSON(simpsonsFamily);

  const maggie = simpsons.find(({ name }) => name === 'Maggie Simpson');
  family.push(maggie);
  const realFamily = family.filter(({ id }) => id !== '8');

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(realFamily));
    console.log('Maggie added and Nelson removed!');
  } catch (e) {
    console.log(e);
  }
};

// changeNelsonForMaggie();
