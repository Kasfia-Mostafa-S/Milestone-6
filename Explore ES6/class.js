const products = [
  {id:1, name: 'lenovo', price: 65000},
  {id:2, name: 'dell', price: 45000},
  {id:3, name: 'hp', price: 4000},
  {id:4, name: 'mac', price: 150000},
]

class Product{
     country = 'Bangladesh';
     constructor(name){
      this.name = name;
     }
      speak(talk){
        console.log(`talking about ${talk}`)
      }
}

const lenovo = new Product("le le lenovo")
// console.log(lenovo)
// lenovo.speak('oba kita kou')


class Teacher{
  constructor(name,subject){
    this.name = name ;
    this.subject = subject
  }
  lecture(){
    console.log('sir is teaching math')
  }
}

const tapan = new Teacher("Tapan sir", "physics")
console.log(tapan);
const roshid = new Teacher("Roshid", "English")
console.log(roshid);