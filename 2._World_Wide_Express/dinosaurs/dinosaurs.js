const dinosaurs = require("./dinosaurs.json");

// destructuring
const { coolDinos } = require("./dinosaurs.json");
console.log(coolDinos);

function amountOfCoolDinos() {
    return dinosaurs.coolDinos.length;
}

// console.log(module);
module.exports = {
    calculateAmountOfDinos: amountOfCoolDinos
}