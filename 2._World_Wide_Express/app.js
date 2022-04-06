const express = require("express");
const app = express();

app.use(express.static("public"));   

// IMPORTS - EXPORTS
// console.log(require("./dinosaurs/dinosaurs.json"));
// const dinosaurs = require("./dinosaurs/dinosaurs.js");
// console.log(dinosaurs.calculateAmountOfDinos());
// const {calculateAmountOfDinos} = require("./dinosaurs/dinosaurs.js");
// console.log(calculateAmountOfDinos());

const dinosaursrouter = require("./routers/dinosaurrouter.js");
app.use(dinosaursrouter.router);

const fetch = require("node-fetch");
const { response } = require("express");
// const data = "";
// fetch('https://www.google.com')
// .then(response => {
//     data == response
// })
// app.get("/proxy", (req, res) => {
//     res.send(data)
// })

// app.get("/proxy", (req, res) => {
//     fetch("https://www.google.com")
//     .then(response => response.text())
//     .then(res.send(response));
// })
app.get("/proxy", async (req, res) => {
    const response = await fetch("https://www.google.com");
    const homepage = await response.text();
    res.send(homepage);
})



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/welcome", (req, res) => {
    res.send(`
        <h1>Welcome to my website</h1>
        <h2>Take a look ${true}</h2>
    `);
});

app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
});

const PORT = process.env.PORT || 9000;
// const PORT = undefined;

const serverX = app.listen(PORT, () => { 
    console.log("The server is running on port", serverX.address().port);
});