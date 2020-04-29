const alunos = [
    { nome: 'joao', nota: 7.3, bolsita: false },
    { nome: 'maria', nota: 9.2, bolsita: true },
    { nome: 'pedro', nota: 9.8, bolsita: false },
    { nome: 'ana', nota: 8.7, bolsita: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)