/* function checkMajority(age) {
  if (age >= 18) {
    return `Você têm ${age} anos, pode dirigir (ser preso também).`;
  } else {
    return `Você têm ${age} anos, não pode dirigir (nem ser preso também :D).`;
  }
} */

const checkMajority = (age) => (
  age >= 18 ? `Você têm ${age} anos, pode dirigir (ser preso também).` : 
  `Você têm ${age} anos, não pode dirigir (nem ser preso também :D).`
);

console.log(checkMajority(19));
