const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (animalName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(({ name }) => name === animalName);
      if (animal) {
        return resolve(animal);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
};

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
};

module.exports = { getAnimal };
