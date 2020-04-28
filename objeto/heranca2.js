//Cadeia de prototipos(prototype chain)
Object.prototype.attr0 = '0'//não faça isso em casa!
 
const avo = { attr: 'A' }
const pai = { _proto_: avo, attr2: 'B', attr3: '3' }
const filho = { _proto_: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//definir a relação de protótipo
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
