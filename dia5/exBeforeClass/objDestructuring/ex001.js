// Without Object Destructuring.

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const keys = Object.keys(product);

keys.forEach((key) => console.log(product[key]));