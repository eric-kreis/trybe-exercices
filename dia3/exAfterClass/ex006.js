let numero = 10;
let divisoes = 0;
for (let divisor = 1; divisor <= numero; divisor++) {
  if (numero % divisor === 0) {
    divisoes += 1;
  };
};
if (divisoes === 2) {
  console.log('O número é primo');
} else {
  console.log('O número não é primo');
};