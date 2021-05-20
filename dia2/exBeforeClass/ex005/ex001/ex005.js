const objeto1 = {
  fruta: 'banana',
  cor: 'preto',
  animal: 'tigre',
};
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

const destino = Object.assign(objeto1);

objeto1.fruta = 'melancia';

console.log(destino);
console.log(objeto1);