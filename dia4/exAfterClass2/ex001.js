function verificaPalindromo(palavra) {
  let palindromo = '';
  for (let index = palavra.length - 1; index >= 0; index--) {
      palindromo += palavra[index];
  }; 
  if (palavra === palindromo) {
    return (console.log(true));
  } else {
    return (console.log(false));
  };
};
verificaPalindromo('arara');