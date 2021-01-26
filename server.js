const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// Route

app.get("/", function(req, res) {
    console.log(__dirname + "/index.html")
    res.sendFile(__dirname + "/index.html");
})

app.post('/', function(req, res) {


    var salaire = req.body.salaire;
    var statut = req.body.statut;


    var salaireNet = salaire * statut;

    res.send("Votre salaire net sera d'environ" + salaireNet)

})

app.listen(3000, function() {
    console.log("Le serveur tourne su le port 3000");
})