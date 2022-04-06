const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const gallery = fs.readFileSync("./public/pages/gallery/gallery.html").toString();

const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to the zone") + frontpage + footer;
const galleryPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the gallery") + gallery + footer;

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/pages/frontpage/frontpage.html");
// });

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/gallery", (req, res) => {
    res.send(galleryPage)
});

app.listen(3000, () => console.log("Server is running on", 3000));