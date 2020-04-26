//pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa <- 456 -> {...}
//pesssoa = {nome: 'Ana'}

//congela o objeto
Object.freeze(pessoa)

pessoa.nome =  'maria'
pessoa.end =   'rua abc'
delete pessoa.nome

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome:'joao'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)