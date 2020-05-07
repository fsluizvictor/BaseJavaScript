//não aceita repetição e não possui indexação
const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmeiras').add('corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)