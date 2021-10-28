const os = require("os");

// info about current user
const user = os.userInfo()
console.log("user:", user)

// system uptime, secs
const uptime = os.uptime()
console.log(`System uptime is ${uptime/60/60} hours.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
