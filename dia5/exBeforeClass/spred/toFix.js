const orderDetails = { 
  order: ['Açai', '700ml'],
  additionalItems: ['Leite em pó', 'Leite Condensado'],
};

const returnOrdered = (details) => {
  return [...details.order, ...details.additionalItems];
};

console.log(returnOrdered(orderDetails));