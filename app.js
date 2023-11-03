const express = require('express');
const app = express();
const appport = 3000;

app.listen(appport, () => {
    console.log(`Ton server nodeJS a démarré sur le http://localhost:${appport}`);
  });

// *** Connection à la base de donnée ***
const mysql= require('mysql2');
const datacnx=require('./databaseConnexion.json'); // ajoute tes informations de connexion dans le fichier databaseConnexion.json.
const { host, port, user, password, database } = datacnx.database;
const db = mysql.createConnection({ host, port, user, password, database });

db.connect(err=>{
    if(err) {
        console.log(err,'dberr');
        process.exit(err);
    } else {console.log(`Tu est connecté à la base de données: ${database} ...`);}    
});
