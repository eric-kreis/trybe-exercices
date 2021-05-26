const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find(name => name.length >= 5);
}

console.log(findNameWithFiveLetters());