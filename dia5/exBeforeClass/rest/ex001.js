function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], { }, undefined));