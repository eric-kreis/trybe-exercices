const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6, ...numbers];
console.log(newArray);
console.log(numbers);