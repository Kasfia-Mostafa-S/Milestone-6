const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  owner: "Alia",
  address: {
    street : "road-2",
    city: 'dhaka',
    country : 'Bangladesh',
  },
  product: ['laptop', 'mic','monitor', 'keyboard'],
  revenue: 450000,
  isOpen: true,
  isNew: false
}

console.log(shop)
const shopJSON =JSON.stringify(shop); // to convert in string
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON); // to convert in obj
console.log(shopObj);