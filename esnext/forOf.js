for (let letras of "coder") {
    console.log(letras)
}

const assuntoEcma = ['map', 'set', 'promise']

for (let i in assuntoEcma) {
    console.log(i)
}

for (let asssunto of assuntoEcma) {
    console.log(asssunto)
}

const assuntosMap = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['promise', { abordado: false }]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap)