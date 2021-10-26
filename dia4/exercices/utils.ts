import fs from 'fs/promises';

interface ISimpons {
  id: string,
  name: string,
}

const simpsonsPath = 'simpsons.json';

export const readJSON = async (file: string) => {
  try {
    const data = await fs.readFile(`exercices/${file}`, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    throw { message: 'Error to read file' };
  }
};

export const writeJSON = async (file: string, data: string) => {
  try {
    return fs.writeFile(`exercices/${file}`, data);
  } catch(e) {
    throw { message: 'Error to write file' };
  }
};

export const readSimpsons = async (): Promise<ISimpons[]> => (
  readJSON(simpsonsPath)
);

export const writeSimpson = async (data: ISimpons[]) => {
  writeJSON(simpsonsPath, JSON.stringify(data));
};

