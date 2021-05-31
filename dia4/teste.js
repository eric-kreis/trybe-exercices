const numbers = [1, 10, 20, 2, 30, 50, 3, 5];

/* const evenNumbers = numbers.map((number) => number);
console.log(evenNumbers); */

const existe = numbers.find((number) => number === 100);
console.log(!existe);

/* for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */
