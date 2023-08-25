function greetings(greetingsHandler,name){
  greetingsHandler(name)
}
// const name = {price: 45000, brand: 'hp', memory: '8gb'}

function greetingsHandler(name){
  console.log('good morning',name)
}
function greetingsEvening(name){
  console.log('good evening',name)
}
function greetingsNight(name){
  console.log('good night',name)
}
greetings(greetingsHandler, 'tom hanks')
greetings(greetingsHandler, 'tom brady')
greetings(greetingsHandler, 'tom cruse')
greetings(greetingsEvening, 'tom holland')
greetings(greetingsEvening, 'tom jerry')
greetings(greetingsNight, 'tom hanks')
greetings(greetingsNight, 'tom brady')

function submitHAndler(){
  console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click',submitHAndler)