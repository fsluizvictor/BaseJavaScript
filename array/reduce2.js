const alunos = [
    { nome: 'joao', nota: 7.3, bolsita: false },
    { nome: 'maria', nota: 9.2, bolsita: true },
    { nome: 'pedro', nota: 9.8, bolsita: false },
    { nome: 'ana', nota: 8.7, bolsita: true }
]

//todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsita).reduce(todosBolsistas))

//algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
