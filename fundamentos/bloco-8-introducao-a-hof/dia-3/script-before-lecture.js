const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const update = (listProducts, listPrices) => listProducts.map((prod, index) => (
  { [prod]: listPrices[index] }
)
);

let newList = update(products, prices);

console.log(newList);