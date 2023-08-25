// primitives pass by value
let num1 = 5
let num2 = 7
function multiply(a,b){
  a =27
  const result = a * b;
  return result;
}

const output = multiply(num1,num2);
// console.log(output)



// non-primitives pass by reference
let student1 = {name: 'jalil', partner: 'borsah'}
let student2 = {name: 'raj', partner: 'simran'}

function makeMovie(couple1, couple2){
  couple1.name = 'ononto'
  couple2.partner = 'kajol'
}

console.log(student1,student2);
makeMovie(student1,student2)
console.log(student1,student2);