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


// **************************************************
// *** EXEMPLE de requête intégrée avec paramètre ***
// **************************************************

// L'url ci-dessous permet de fournir les données du détail d'un matériel choisi dans l'application catseye.sio.local
app.get('/detailMateriel/:code', async(req,res)=>{
    /* :code est le parametre qui sera envoyé à la requête.
    on récupére ce paramétre dans une variable gCode. */
    let gCode=req.params.code;

    // Ajoutez cet exemple à votre fichier 'app.js' et vérifiez les changements sur le site - page materiels puis detail.
    let qr = `SELECT m.code, 
                m.created_at AS date_Creation, 
                m.modele, m.marque,
                m.dateAchat AS date_Achat, 
                m.prixAchat, m.photo, m.type
            FROM catsEye.materiels m 
            WHERE m.code = $1`;

    /* 
    Référence : https://sql.sh/cours/where
                https://sql.sh/cours/alias
    La variable est inséré dans la requête.
    Remarquez le renommage des champs grâce au mot clés 'AS'. 
    L'utilisation de la section WHERE <condition> pour mettre en place le filtrage: 
    ici le choix du matériels au travers son code.
    On remplace la valeur de code par la variable envoyée par l'application
    */

    console.log(qr);

    await db.query(qr, [gCode], (err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount >0){
            res.send({
                message:'Detail d\'un matériel',
                data:result.rows
            });
        } else {
            res.send({
                message:`Il n'y a aucun matériel avec un code = ${gCode} `,
            });
        }     
    });
});