const carrinho = [
    '{"nome": "borracha", "preco": 4.45 }',
    '{"nome": "caderno", "preco": 13.90 }',
    '{"nome": "kit de lapis", "preco": 41.22 }',
    '{"nome": "caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.apenasPreco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)