const obj = { value1: 10, value2: 11 };
const cloneObj = Object.assign({}, obj);

cloneObj.value1 = 20;

console.log(obj, cloneObj);


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);

newPerson.name = 'Eric';
newPerson.lastName = 'Kreis';

console.log(newPerson);
console.log(person);
console.log(lastName);