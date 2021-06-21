const list = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

const ShoppingList = list.map((item, index) => {
  console.log("item: ", item);
  return (<li key={ index }>{ item }</li>);
});

export default ShoppingList;