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
                m.dateCreation AS date_Creation, 
                m.modele, m.marque,
                m.dateAchat AS date_Achat, 
                m.prixAchat, m.photo, m.type
            FROM catsEye.materiels m 
            WHERE m.code = '${gCode}';`;

    /* 
    Référence : https://sql.sh/cours/where
                https://sql.sh/cours/alias
    La variable est inséré dans la requête.
    Remarquez le renommage des champs grâce au mot clés 'AS'. 
    L'utilisation de la section WHERE <condition> pour mettre en place le filtrage: 
    ici le choix du matériels au travers son code.
    On remplace la valeur de code par la variable envoyée par l'application
    */


    await db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount>0){
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

// *************************************************
// *** EXERCICES 2 - PROJECTIONS AVEC PARAMETRES ***
// *************************************************

// QUESTION 3) 
app.get('/detailAdherents/:id', async (req,res)=>{
    let gId=req.params.id;
/*
L'url ci-dessus permet de fournir les données du détail d'un adhérent choisi dans l'application catseye.sio.local 
Il est nécessaire d'afficher les champs (colonnes) : id, dateCreation renommage-> 'date_Creation', nom, prenom, dateNaissance renommage-> 'date_Naissance', mail, telephone, mobile, adresse, ville
=> Ecrivez la requête et insérez là dans le code ci-dessous entre les quotes ` => [Alt Gr + 7].
*/
    let qr = `requête`; 

    await db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount>0){
            res.send({
                message:'Détail d\'un adhérent',
                data:result.rows
            });
        } else {
            res.send({
                message:`Il n'y a aucun adhérent avec un ID = ${gId}`,
            });
        }
    });
});

// QUESTION 4)
app.get('/listeMateriels/prix=:maxPrix', async (req,res)=>{
    let gMaxPrix=req.params.maxPrix;
/* 
L'url ci-dessus permet de fournir les données de la liste des matériels filtrés par la valeur prix maximum fourni dans le formulaire de l'application cateye.sio.local
Reprenez la requête de la question 1 et modifiez là pour permettre un filtrage sur le prix.
=> Ecrivez la requête et insérez là dans le code ci-dessous entre les quotes ` =>[Alt Gr + 7].
*/
    let qr = `requête`; 
    
    await db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount>0){
            res.send({
                message:`Matériels avec un prix inférieur à ${gMaxPrix}`,
                data:result.rows
            });
        } else {
            res.send({
                message:`Il n'y a aucun matériel avec un prix inférieur à ${gMaxPrix}€`,
            });
        }
    });
});

// QUESTION Bonus) 
app.get('/retrieveSourceImages', async (req,res)=>{
/*
L'url ci-dessus permet de retourner les données de la table parametre : chemin et logo
=> Ecrivez la requête et insérez là dans le code ci-dessous entre les quotes ` =>[Alt Gr + 7].
*/
    let qr = `requete`; 
    
    await db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.rowCount>0){
            res.send({
                message:'retourne le chemin du logo',
                data:result.rows
            });
        } else {
            res.send({
                message:`Il n'y a rien à afficher`,
            });
        }
    });
});