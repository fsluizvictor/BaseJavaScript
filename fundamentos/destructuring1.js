//novo recurso introduzido no ES2015

const Pessoa = {
    nome:'Luiz',
    idade: 20,
    endereco:{
        logradouro: 'rua b',
        numero: 100
    }
}

const{ nome,idade} = Pessoa
console.log(nome,idade)

const{nome: n,idade:i} = Pessoa
console.log(n,i)

const {sobrenome,bemHumorado = true} = Pessoa
console.log(sobrenome,bemHumorado)

const { endereco:{logradouro,numero,cep}} = Pessoa
console.log(logradouro,numero,cep)

const {conta:{ag,num}} = Pessoa
console.log(ag,numero)




