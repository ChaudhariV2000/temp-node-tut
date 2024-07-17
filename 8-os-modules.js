const { log } = require('console')
const os = require('os')

//user info
const user = os.userInfo()
//sytem uptime
console.log(`The syetem uptime is ${os.uptime()}`);

const currentos = {
    name: os.type(),
    relase: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),

}
console.log(currentos)