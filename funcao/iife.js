//IIFE - Immediately Invoked Function Expression

//Não utiliza o escopo global
(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()

//Utiliza o escopo global
console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente')
