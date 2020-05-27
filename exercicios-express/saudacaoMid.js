function saudacao() {
    return function (res, req, next) {
        console.log('Seja Bem Vindo')
        next()
    }
}

module.exports = saudacao
