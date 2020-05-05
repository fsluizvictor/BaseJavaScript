const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getMilliseconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
}, 20000)

//setImmediate e setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2', new Date().getSeconds())
})