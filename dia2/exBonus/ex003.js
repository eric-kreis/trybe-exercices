let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let number = null;
for (let index = 0; index < numbers.length; index++) {
  let position = [];
  for (let secondIndex = 1; secondIndex < numbers.length; secondIndex++) {
    position.push(numbers[secondIndex]);
  };
  if (numbers[index] != numbers[numbers.length - 1]) {
    number = numbers[index] * position[index];
    newNumbers.push(number);
  } else {
    number = numbers[index] * 2;
    newNumbers.push(number);
  };
};

console.log(newNumbers);
