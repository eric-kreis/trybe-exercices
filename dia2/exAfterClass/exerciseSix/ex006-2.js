const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = async (animalAge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existis = Animals.some(({ age }) => age === animalAge);
      if(existis) {
        return resolve(Animals.filter(({ age }) => age === animalAge));
      }
      return reject('Nenhum animal com esse idade!');
    }, 1000);
  });
};

const getAnimalByAge = async (age) => {
  return await findAnimalByAge(age);
};

module.exports = { getAnimalByAge };