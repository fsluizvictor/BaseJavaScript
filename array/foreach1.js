const aprovados = ['agatha', 'alfo', 'daniel', 'raquel']

aprovados.forEach(function (nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(x)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovado)
aprovados.forEach(exibirAprovados)