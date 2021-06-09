const generateRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

// Exercício 02 //
new Promise((resolve, reject) => {
  const tenRandomNumbers = Array.from(
    { length: 10 },
    () => generateRandomNumber(50, 1)
  );
  const numbersSum = tenRandomNumbers
  .map((number) => number ** 2)
  .reduce((acc, number) => acc + number);

  if (numbersSum < 8000) {
    resolve();
  }
  reject();
})
.then(() => console.log('Promisse resolvida.'))
.catch(() => console.log('Promisse rejeitada.'));

// Exercício 03 //
new Promise((resolve, reject) => {
  const tenRandomNumbers = Array.from(
    { length: 10 },
    () => generateRandomNumber(50, 1)
  );
  const sum = tenRandomNumbers
  .map((number) => number ** 2)
  .reduce((acc, number) => acc + number);

  if (sum < 8000) {
    resolve(sum);
  }
  reject();
})
.then((sum) => [2, 3, 5, 10].map((divisor) => sum / divisor))
.catch(() => console.log('Promisse rejeitada.'));

// Exercício 04 //
new Promise((resolve, reject) => {
  const tenRandomNumbers = Array.from(
    { length: 10 },
    () => generateRandomNumber(50, 1)
  );
  const sum = tenRandomNumbers
  .map((number) => number ** 2)
  .reduce((acc, number) => acc + number);

  if (sum < 8000) {
    resolve(sum);
  }
  reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
.then((sum) => [2, 3, 5, 10].map((divisor) => sum / divisor))
.catch((msg) => console.log(msg));

// Exercício 05 //
const finalVersion = async () => {
  const tenRandomNumbers = Array.from(
    { length: 10 },
    () => generateRandomNumber(50, 1)
  );
  const sum = tenRandomNumbers
  .map((number) => number ** 2)
  .reduce((acc, number) => acc + number);

  if (sum < 8000) {
    return sum;
  }
  throw new Error('É mais de oito mil! Essa promise deve estar quebrada!');
}

const finalSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await finalVersion();
    finalSum(sum);
  } catch (error) {
    console.log(error);
  }
}

fetchPromise();
