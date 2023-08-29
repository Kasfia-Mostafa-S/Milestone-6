const getData = new Promise((resolve, reject) => {

  const num = Math.random()*10;
  console.log(num);
  if(num < 5){
    resolve(56666);
  }
  else{
    reject('No data')
  }
})

getData
  .then(data => console.log(data + 22))
  .catch(error => console.log("Error:", error))