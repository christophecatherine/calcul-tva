
// REQUETE VERS EXPRESS
const express = require("express");
// REQUETE VERS BODYPARSER
const bodyParser = require("body-parser");
// DEFINIR LE FICHIER APP VERS LA FONCTION EXPRESS
const app = express();
// DEMANDE DE CHARGER A UTILISATEUR LE FICHEIR bodyParser ET DE REPONDRE true  
app.use(bodyParser.urlencoded({ extended: true }))

// Route
// DEMANDE DE CHARGER LA REQUETE GET VERS URL ET DEMANDE D'EXECUTER LA FONCTION REQUIRE ET DE REPONDRE
app.get("/", function(req, res) {
    console.log(__dirname + "/index.html")
    res.sendFile(__dirname + "/index.html");
})
// DEMANDE DE POSTER SUR URL LA REQUTE ET LA REPONSE 
app.post('/', function(req, res) {

   // DECLARATION DES VARIABLES VAUT LA REQUETE BODY CORRESPONDANTE
    var salaire = req.body.salaire;
    var statut = req.body.statut;

    // DACLARATION DU CALCUL 
    var salaireNet = salaire * statut;
   // REPONSE DU RESULTAT 
    res.send("Votre salaire net sera d'environ" + salaireNet)

})
// DEMANDE L'ECOUTE DE URL 3000
app.listen(3000, function() {
    console.log("Le serveur tourne su le port 3000");
})
