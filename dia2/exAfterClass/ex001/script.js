const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const phoneNumber = order.phoneNumber;
  const address = order.address;
  const adressValues = Object.values(address).join(', ');
  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${phoneNumber}, ${adressValues}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  const addPizzas = (object, pizza, amount, price) => {
    object[pizza] = { 
      amount: amount,
      price: price,
    };
  }
  const orderClone = Object.assign({}, order);
  orderClone.name = 'Luiz Silva';
  orderClone.payment.total = 50;
  const pizzas = orderClone.order.pizza;
  addPizzas(pizzas, 'muzzarella', 1, 20);
  addPizzas(pizzas, 'calabresa', 1, 20);
  const pizzasArray = Object.keys(pizzas);
  const drink =  orderClone.order.drinks.coke.type;
  const customerName = orderClone.name;
  const totalValue =  orderClone.payment.total;
  console.log(`Olá ${customerName}, o total do seu pedido de ${pizzasArray[2]}, ${pizzasArray[3]} e ${drink} é R$${totalValue},00.`);
}

orderModifier(order);