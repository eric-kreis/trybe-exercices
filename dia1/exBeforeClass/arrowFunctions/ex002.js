/* function createPerson(name, age, city) {
  return { 
    name: name,
    age: age,
    city: city
  };
} */

const createPerson = (name, age, city) => ({name: name, age: age, city: city});

console.log(createPerson('Eric', 19, 'Brasília'));