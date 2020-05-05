const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

//__dirname informa o caminho absoluto do diretório que contém o arquivo em execução no momento
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),err => {
    console.log(err || 'arquivo salvo!')
})