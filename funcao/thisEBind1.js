const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito ente paradgimas: funcional e orientado a onjeto

const falarDePessoa = pessoa.falar.bind(pessoa)