const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Função de somar mais lenta do mundo.
const somar = async (a, b) => { await sleep(10000); return a + b };
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };