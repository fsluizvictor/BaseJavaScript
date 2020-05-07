// operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spred com objeto
const funcionario = {nome:'maria',salario:1234}
const clone = {ativo:true,...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['joao','pedro','gloria']
const grupoFinal = ['Maria',...grupoA,'rafaela']
console.log(grupoFinal)