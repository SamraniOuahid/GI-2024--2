const os = require("os")
let cpus = os.cpus()
console.table(cpus)
let system = os.machine()
console.log(system)
let platform = os.platform()
console.log(platform)