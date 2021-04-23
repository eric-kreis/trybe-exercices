let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minimumValue = numbers[0];
for (let number of numbers) {
  if (minimumValue > number) {
    minimumValue = number;
  }
}
console.log(minimumValue);