const express = require('express');
const cors = require('cors');
const app = express();
const appPort = 3000;

app.use(cors());

app.listen(appPort, () => {
    console.log(`Ton server nodeJS CatsEye a démarré sur le http://localhost:${appPort}`);
  });


// **************************************
// *** Connection à la base de donnée ***
// **************************************

/*
Configurer le fichier databaseConnexion.json 
puis vérifiez le bon démarrage de l'API avec la commande "npm start" dans le terminal.
*/
const pg = require('pg'); // PostgreSQL version
const datacnx=require('./databaseConnexion.json'); // ajoute tes informations de connexion dans le fichier databaseConnexion.json.
const { host, port, user, password, database } = datacnx.database;
const db = new pg.Client({ host, port, user, password, database });

if (host!= "" && port!="" && user!="" && password!="" && database!=""){
    db.connect(err=>{
        if(err) {
            console.log(err,'dberr');
            process.exit(err);
        } else {console.log(`Tu es connecté à la base de données: ${database} ... GOOD JOB !`);}    
    });
}else{
    console.log("FATAL ERROR:","T'as oublié quelque chose !? - Ton fichier de databaseConnexion.json n'est pas correcte. :( ");
    process.exit(1);
}        

// **************************************
// AJOUTER LES EXEMPLES ET EXERCICES CI-APRES.
// il est conseillé d'ajouter le code correspondant à 1 seul URL à la fois.
// **************************************