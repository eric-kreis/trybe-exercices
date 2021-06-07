const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const calcExpenses = (myExpenses) => {
  const expensesArr = myExpenses.map((expense) => Object.values(expense)[0]);
  const total = expensesArr.reduce((acc, number) => acc + number);
  return total;
};

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
Recebido: R$${myIncome},00
Gasto: R$${totalExpenses},00
Saldo: R$${totalAfterExpenses},00`);
};

monthlyBudget(myIncome, myExpenses, calcExpenses);