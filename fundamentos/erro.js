function tratarErroElancar(erro){
    throw new Error('...')
}

function imprimirNome(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroElancar(e)
    }finally{
        console.log('final')
    }
}

const obj = { nome: 'victor'}
imprimirNome(obj)