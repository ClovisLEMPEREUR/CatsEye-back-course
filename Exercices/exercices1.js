// Ajoutez le contenu ci-dessous à la fin du fichier app.js
// Procédez d'abord avec l'exemple, puis avec l'exercice.

// ***********************************
// *** EXEMPLE de requête intégrée ***
// ***********************************
app.get('/', async (req,res)=>{
    // Voici un exemple de requête intégrer au code.
    // Cette requête retourne les informations de la table paramétres.
    // Ajoutez cet exemple à votre fichier 'app.js' et vérifiez les changements sur le site - page parametre.
    let qr = `SELECT p.id, p.keyword, p.value 
            FROM catsEye.parametres p;`;

    /*
    Référence : https://sql.sh/cours/select
                https://sql.sh/cours/alias

    */
    
    await db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount >0){
            res.send({
                message:'Liste des informations de la table parametres',
                data:result.rows
            });
        } else {
            res.send({
                message:`Il n'y a aucun paramètre à afficher`,
            });
        }
    });
});

// ****************************************
// *** EXERCICES 1 - PROJECTIONS SIMPLE ***
// ****************************************

// QUESTION 1) 
app.get('/listeMateriels', async (req,res)=>{
/*
l'url suivante '/listeMateriels' doit fournir les données de la liste des matériels visible dans l'application catseye.sio.local
Il est nécéssaire d'afficher via cette API les champs (colonnes) : code, marque, modele, prixAchat de la table materiels.
Le resultat sera trié par ordre croissant dex prix.
Conceil de BONNES PRATIQUES : utiliser un alias de table.
=> Ecrivez la requête et insérez là dans le code ci-dessous entre les quotes ` =>[Alt Gr + 7].
*/
    let qr = `requete`;

    await db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount>0){
            res.send({
                message:'Materiels ordonnés par prix croissant',
                data:result.rows
            });
        } else {
            res.send({
                message:`Il n'y a aucun matériel à afficher`,
            });
        }
    });
});

// QUESTION 2)
app.get('/listeAdherents', async (req,res)=>{
/* 
L'url suivante '/listeAdherents' doit fournir la liste des adhérents de l'association visible dans l'application catseye.sio.local
Il est nécéssaire d'afficher via cette API les champs (colonnes) : id, nom, prenom, mail de la table adherents.
Le resultat sera trié par ordre croissant des noms puis des prénoms.
=> Ecrivez la requête et insérez là dans le code ci-dessous entre les quotes ` =>[Alt Gr + 7].
*/
    let qr = 'requere';

    await db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount>0){
            res.send({
                message:'Liste des adhérents ordonnés par nom et prénom',
                data:result.rows
            });
        } else {
            res.send({
                message:`Il n'y a aucun adhérent à afficher`,
            });
        }
    });
});