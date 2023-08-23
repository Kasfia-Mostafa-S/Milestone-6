const data = [{id: 1, name: 'abul', address: 'kochu khet'}];

// console.log(data[0].address);

const products = {
  count : 5000,
  data : [
    {id: 1, name: 'lenovo', price: 65000 },
    {id: 1, name: 'mac', price: 165000 },
  ]
}

// console.log(products.data[1].price);


const user1 = { 
  id: 5001,
  name: 'shoriful raj',
  address: {
    street: {
      first: '54/1 uttor dise',
      second: 'proibar er goli',
      third: 'no dorai',
    },
    city: 'dhaka'
  }
}
const user2 = {
  id: 5002,
  name: 'pori bibir majar',
  address: {
    city: 'chittagong',
    country: "Bangladesh"
  }
}
console.log(user2.address.street?.second)
console.log(user1.address.street?.second)