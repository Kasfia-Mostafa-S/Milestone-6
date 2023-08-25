let x = 5;
let y = x;
console.log(x,y)
y = 7;
console.log(x,y)

const p = {job: 'web developer'}
let q = p;
// q = {job: 'Backend developer'}
q.job = "full stack"
console.log(p,q)