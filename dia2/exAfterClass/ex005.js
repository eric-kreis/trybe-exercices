let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let heigherValue = numbers[0];
for (let number of numbers) {
  if (heigherValue < number) {
    heigherValue = number;
  }
}
console.log(heigherValue);