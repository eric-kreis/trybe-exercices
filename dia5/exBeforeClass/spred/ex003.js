const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [65, 1.8];

console.log(imc(...patientInfo));