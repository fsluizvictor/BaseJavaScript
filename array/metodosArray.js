const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop()//massa quebrou o carro!
console.log(pilotos)

pilotos.push('vestappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//massa quebrou :(

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)