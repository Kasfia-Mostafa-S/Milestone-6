const products = [
  {id:1, name: 'lenovo', price: 65000},
  {id:2, name: 'dell', price: 45000},
  {id:3, name: 'hp', price: 4000},
  {id:4, name: 'mac', price: 150000},
]

const names = products.map(product => product.name);
const prices = products.map(product => product.price);


// products.forEach(p => console.log(p.id));

const expensive = products.filter(p => p.price > 5000)
const affordable = products.find(p => p.price < 5000)

const total = products.reduce((acum, current) => acum + current.price, 0 )
console.log(total);