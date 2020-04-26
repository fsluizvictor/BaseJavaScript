function soma(){
    let soma = 0
    for(i in arguments){
        //arguments é o array interno de uma função
        soma+=arguments[i]
    }
    return soma
}


console.log(soma)
console.log(soma(1))
console.log(soma(1,1,2,30,"teste"))
console.log(soma('a','b'))