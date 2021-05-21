const assert = require('assert');

const greetPeople = (people) => {
  const peopleList = new Array;
  
  for (const person in people) {
    let greeting = `Hello ${people[person]}`;
    peopleList.push(greeting);
  }
  return peopleList;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter), result);