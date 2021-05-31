const product = {
  name: 'Notebook DELL, I15 3000',
  price: '2899.05',
  seller: 'TrybeStore',
  customer: 'Eric',
};

const printProductDetails = ({ name, price, seller, customer }) => {
  console.log(`Obrigado, ${customer}! Você comprou ${name} por apenas ${price} na ${seller}.`);
};

printProductDetails(product);