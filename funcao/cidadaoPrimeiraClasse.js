// Função JS é FIRST-CLASS OBJECT (CITIZENS)
// HIGHER-ORDER function

//criando funão de forma literal
function fun1(){}

//armazenar em uma variável
const fun2 = function(){}

//armazenar em um array
const array = [function(a,b){return a + b },fun1,fun2]

//armazenar m um atributo de um objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passar uma função como parâmetro 
function run(fun){
    fun()
}

run(function() {console.log('executando...')})

//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)