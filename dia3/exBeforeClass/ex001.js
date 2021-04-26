//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;
for (let fruit of fruits) {
  sum += fruit;
};
if (sum > 15) {
  console.log(sum);
} else {
  console.log('Valor menor que 16');
};