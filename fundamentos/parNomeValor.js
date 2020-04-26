// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'falaa'// contexto léxico2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 92,
    endereco:{
        logradouro:'rua b',
        numero: 123
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)