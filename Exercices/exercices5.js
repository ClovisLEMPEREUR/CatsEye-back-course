// **********************************
// *** EXEMPLE de requête d'ajout ***
// **********************************

app.post('/createMateriel', async (req,res)=>{
    let code = req.body.code;
    let modele = req.body.modele;
    let marque = req.body.marque;
    let dateAchat = req.body.dateAchat;
    let prixAchat = req.body.prixAchat;
    let type = req.body.type;

    /* 
    L'url ci-dessous et les variables permetent de réaliser une requête HTTP POST afin d'ajouter un nouvel enregistrement dans la table materiels
    Ci-dessous la requête d'ajout de données dans la table materiels pour les champs (code,modele,marque,dateAchat,prixAchat,type)
    */
    let qr=`INSERT INTO catsEye.materiels 
                (code,modele,marque,dateAchat,prixAchat,type) 
            VALUES 
                ('${code}','${modele}','${marque}','${dateAchat}','${prixAchat}',${type});`;

    /*
    Référence : https://sql.sh/cours/insert-into
    Remarque de cohérence :
    Le champ (colonne) type de la table materiels attend une valeur de type numérique correcpondant à un identifiant de la table typeMateriel.
    Cet identifiant est retourné par la liste déroulante dans l'application catseye.sio.local.
    */

    await db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if (result.affectedRows>0){
            res.send({
                message:'data inserted',
                id:result.insertId
            });
        }else{
            res.send({
                message:'update aborded'
            });
        }  
    });
});

// *************************************
// *** EXERCICES 5 - REQUÊTE D'AJOUT ***
// *************************************

// QUESTION 9) 
app.post('/createAdherent', async (req,res)=>{
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let dateNaissance = req.body.dateNaissance;
    let email = req.body.email;
    let telephone  = req.body.telephone;
    let mobile = req.body.mobile;
    let adresse = req.body.adresse;
    let ville = req.body.ville;
    
    /*
    D'après la liste des variables prévues ci-dessus.
    => Ecrivez la requête d'ajout d'un enregistrement pour la table adherents dans le code ci-dessous entre les quotes ` => [Alt Gr + 7].
    */
    let qr=`requête`;

    await db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if (result.affectedRows>0){
            res.send({
                message:'data inserted',
                id:result.insertId
            });
        }else{
            res.send({
                message:'update aborded'
            });
        }  
    });
});


