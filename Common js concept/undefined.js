// 1
let first;
// console.log(first)

// 2 function with no return 
function second(a,b){
  const total = a + b;
}
const result = second()
// console.log(result)

// 3 parameter that will pass
function third(a,b,c,d){
  const total = a+b+c+d;
  // console.log(a,b,c,d)
}
third(2,3)

// 4 nothing on right side
function noNegative(a,b){
  if(a<0 || b<0){
    return;
  }
  return a+b;
}
const total = noNegative(-2,5);
// console.log(total)

// 5
const fifth ={id:2,name:"pochom",age:40};
// console.log(fifth.age,fifth.salary);

// 6 outside of index range
// const sixth = [4,5,6,7,8];
// console.log(sixth[1], sixth[5], sixth[8])

// 7 use instead splice
const sixth = [4,5,6,7,8];
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[8]);
// console.log(sixth)

// 8 set a value
const eight = undefined;
const night = null;
const data = {result:[], updated:null}
console.log(typeof undefined)
console.log(typeof null)