let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let NumbersOdd = [];
for (let number of numbers) {
  if (number % 2 != 0) {
    NumbersOdd.push(number);
  }
}
if (NumbersOdd.length <= 0) {
  console.log('nenum valor ímpar encontrado');
} else {
  console.log(`Existem ${NumbersOdd.length} valores ímpares`);
}