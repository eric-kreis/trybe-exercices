const newOnlyNumbers = require('./ex01');

const getParams = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

  return Array.from({ length: 3 }).map(getRandomNumber);
};

(async () => {
  try {
    const result = await newOnlyNumbers(...getParams());
    console.log(result);
  } catch(e) {
    console.log(e);
  }
})();
