const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

/* let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000); */
let myVar;

function myFunction() {
  myVar = setInterval(() => console.log("Hello"), 2000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

myFunction();
setTimeout(() => myStopFunction(), 6100);