const newOnlyNumbers = require('./ex01');

const getParams = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

  return Array.from({ length: 3 }).map(getRandomNumber);
};

newOnlyNumbers(...getParams())
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

module.exports = getParams;
