const numero = 4;

const calculaFatorial = (numero) => (
  (numero <= 1) ? 1 : numero * calculaFatorial(numero - 1)
)

console.log(`O fatorial de ${numero} é: ${calculaFatorial(numero)}`);