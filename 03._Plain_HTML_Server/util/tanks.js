const { tanks } = require("./tanks.json")
// console.log(tanks)


function getTanks(){
    return tanks
}

function addTank(tank) {
    tanks.push(tank)
    return tank
}


module.exports = {
    getTanks,
    addTank
}




