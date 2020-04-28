function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('bem vindo', 123)
const aula2 = new Aula('até breve', 456)

console.log(aula1, aula2)

//simulando o operador new

function novo(f, ...params) {
    const obj = {}
    obj._proto_ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)