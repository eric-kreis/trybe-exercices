const getRandomNumber = () => Math.ceil(Math.random() * 100);

const changeToUpper = (word) => word.toUpperCase();

const firstLetter = (word) => word[0];

const concatenate = (word1, word2) => `${word1}${word2}`;

module.exports = { 
  getRandomNumber,
  changeToUpper,
  firstLetter,
  concatenate,
};