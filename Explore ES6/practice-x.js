// Problem - 1
/* const numbers = [ 1, 3, 5, 7, 9 ];
for( i = 0; i <= numbers; i++){
  return numbers;
}
const x = numbers.map(number => number + 1);
console.log(x) */

// Problem - 2
/* const numbers = [33, 50, 79, 78, 90, 101, 30 ];
const x = numbers.filter(num => num%10 === 0);
console.log(x) */

// Problem - 3
/* const numbers = [33, 50, 79, 78, 90, 101, 30 ];
const x = numbers.find(num => num%10 === 0);
console.log(x)  */

// Problem - 3
const numbers = [ 1, 9, 17, 22 ];
const x = numbers.reduce((a,b) => a+b , 0);
console.log(x)
