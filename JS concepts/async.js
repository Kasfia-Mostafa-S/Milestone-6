console.log(1)
console.log(2)
setTimeout(() => {
  console.log('lazy log')
}, 4000)
console.log(4)
console.log(5)
console.log(6)
console.log(7)


function doSomething(){
  console.log(3)
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

let num = 0
const intervalId = setInterval(() => {
  console.log(num++)
}, 1000)