// 1: true
// 2: any positive num truth, negative false ,0 false
// 3: any string is truth, empty string false, empty string with space truth
// 4: undefined is falsy
// 5: null is falsy
// 6: empty object truthy
// 7: empty array truthy

const x = false;
if(x){
  // console.log('value of x is truthy')
}
else{
  // console.log('value of x is falsy')
}

const y = null;
if(!y){
  console.log('value is falsy')
}
const z = ' ';
if(!!z){
  console.log('value is truthy')
}