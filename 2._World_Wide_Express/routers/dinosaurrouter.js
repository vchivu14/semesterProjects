const router = require("express").Router();

const { calculateAmountOfDinos } = require("../dinosaurs/dinosaurs.js");

router.get("/calculatecooldinos", (req, res) => {
    res.send({data: calculateAmountOfDinos()});
})

module.exports = {
    router
};