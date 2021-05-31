const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const keys = Object.keys(product);

keys.map((key) => console.log(product[key]));

// Object Destructuring.

const { name, seller } = product;
console.log(`${name}, ${seller}.`);