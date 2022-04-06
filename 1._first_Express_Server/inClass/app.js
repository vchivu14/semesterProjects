const express = require("express");
// console.log(express);

const app = express();
// console.log(express);

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "wow"});
});

app.get("/welcome", (req, res) => {
    res.send({message: "Welcome!"})
});

app.post("/mirror", (req, res) => {
    res.send(req.body);
});

app.listen(8080);