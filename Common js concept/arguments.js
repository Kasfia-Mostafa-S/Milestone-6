function sum(a,b,c){
  console.log(...arguments)
  const result = a+b+c;
  return result;
}
const total = sum(45,89,12,45,89,56);
console.log(total)
console.log(sum.length)