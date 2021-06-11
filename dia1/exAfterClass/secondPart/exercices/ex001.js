const encodeDecodeExec = (word, rules) => {
  const wordArr = word.split('');
  const newWord = wordArr.map((letter) => {
    if (rules[letter]) {
      return rules[letter];
    } else {
      return letter;
    }
  });
  return newWord.join('');
};

// função de criptografar;
function encode(word) {
  const rules = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  return encodeDecodeExec(word, rules);
}

//  função de decifrar;
function decode(word) {
  const rules = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return encodeDecodeExec(word, rules);
}

module.exports = { encode, decode };