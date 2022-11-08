const functions = require('./Functions')

for(let i = 0 ; i < 15; i++){
    console.log("i = ", i, " -> ", functions.convertMonthNtoS(i.toString()))
}