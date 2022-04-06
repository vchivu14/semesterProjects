const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const beers = [
                {"id": 1,
                "name": "Carlsberg",
                "country": "Denmark",
                "rating": 5},
                {"id": 2,
                "name": "Tuborg",
                "country": "Denmark",
                "rating": 4},
                {"id": 3,
                "name": "Stella Artois",
                "country": "Belgium",
                "rating": 5},
                {"id": 4,
                "name": "For Loco",
                "country": "USA",
                "rating": 4},
                {"id": 5,
                "name": "Silva",
                "country": "Romania",
                "rating": 5}
            ]

app.use(express.json());

app.get("/beers", (req, res) => {
    res.send({beers});
});

const findBeer = (id) => {
    let beerFound;
    beers.forEach(beer => {
        if (beer.id == id) {
            beerFound = beer;
        }
    })
    return beerFound;
}

app.get("/beers/:id", (req, res) => {
    let beerFound = findBeer(req.params.id);
    if (beerFound != null) {
        res.send({beerFound});
    }
    else {
        res.send({"data": "Nothing found with this id"});
    }
});

app.post("/beers", (req, res) => {
    let idIndex = beers.length;

    const beersPosted = req.body.data;    
    beersPosted.map(beer => {
        beer.id = idIndex + 1;
        beers.push(beer);
        ++idIndex;
    })
    res.send({beers});
});

let updateBeer = (beerInDb, beerPosted) => {
    beerInDb.name = beerPosted.name;
    beerInDb.country = beerPosted.country;
    beerInDb.rating = beerPosted.rating;
}

app.put("/beers/:id", (req, res) => {
    const beerPosted = req.body.beer;
    let id = req.params.id;
    let beerFound = findBeer(id);
    if (beerFound == null) {
        res.send({"beer": "Nothing found with this id. Try again!"});
    } else {
        updateBeer(beerFound, beerPosted);
    }
    res.send(findBeer(id));
});


app.delete("/beers/:id", (req, res) => {
    const position = beers.findIndex(i => i.id == req.params.id);
    const name = beers[position].name;
    beers.splice(position, 1);
    res.send({"beer": name + " was removed."})
})

app.listen(8000);