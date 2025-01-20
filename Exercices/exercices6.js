// ****************************************************
// *** EXEMPLE de requête de suppression de données ***
// ****************************************************

app.delete('/detailMateriel/:code', async (req,res)=>{
    let gCode=req.params.code;
    /*
EXEMPLE de requête de suppression d'un matériel
    */
    let qr=`delete from materiels \
        where code='${gCode}'`;

    /*
    Référence : https://sql.sh/cours/delete
    Remarque d'écriture :
    - Une clause WHERE est exigé afin de selectionner l'enregistrement à supprimer
    Remarque de BONNES PRATIQUES :
    - On utilise de préférence le champ (colonne) de clés primaire dans la clause WHERE afin de sélectionner avec précision et sans ambiguîté
    l'enregistrement à supprimer.
    */
    
    await db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if(result.affectedRows>0){
            res.send({
                message: `data with code ${gCode} was deleted`,
            });
        }else{
            res.send({
                message:'delete aborded'
            }); 
        }
    });
});

// ********************************************
// *** EXERCICES 6 - REQUÊTE DE SUPPRESSION ***
// ********************************************

// QUESTION 9) 
//: écrire la requête de suppression d'un adhérent.
app.delete('/detailAdherents/:id', async (req,res)=>{
    let gId=req.params.id;

    // Ajoute ta requête SQL entre les quotes ` => [Alt Gr + 7]
    let qr=`requête`;
    
    await db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if(result.affectedRows>0){
            res.send({
                message: `data with code ${gId} was deleted`,
            });
        }else{
            res.send({
                message:'delete aborded'
            }); 
        }
    });
});


// *****************************************************
// *** EXEMPLE de requête de modification de données ***
// *****************************************************

// Exemple de requête de mise à jout d'un matériel
app.put('/detailMateriel/:code', async (req,res)=>{
    //console.log(req.body,'updatetdata');

    let gCode = req.params.code;
    // liste des champs que l'on permet de modifier
    let modele = req.body.modele;
    let marque = req.body.marque;
    let dateAchat = req.body.dateAchat;
    let prixAchat = req.body.prixAchat;
    let type = req.body.type;

    let qr=`update materiels set 
                modele='${modele}',
                marque='${marque}',
                dateAchat='${dateAchat}',
                prixAchat='${prixAchat}',
                type='${type}'
            where code='${gCode}'`;

    await db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if (result.affectedRows>0){
            res.send({
                message: `data ${gCode} was updated`,
                affectedrows:result.affectedRows
            });
        }else{
            res.send({
                message:'update aborded'
            });
        }       
    });
});

// *********************************************
// *** EXERCICES 6 - REQUÊTE DE MODIFICATION ***
// *********************************************

// QUESTION 11)
//écrire la requête de mise à jour d'un adhérent
app.put('/createAdherent/:id', async (req,res)=>{
    //console.log(req.body,'updatetdata');

    let gId = req.params.id;
    // liste des champs que l'on permet de modifier
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let dateNaissance = req.body.dateNaissance;
    let email = req.body.email;
    let telephone = req.body.telephone;
    let mobile = req.body.mobile;
    let adresse = req.body.adresse;
    let ville = req.body.ville;

    // Ajoute ta requête SQL entre les quotes ` => [Alt Gr + 7]
    let qr=`requête`;

    await db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if (result.affectedRows>0){
            res.send({
                message: `data ${gId} was updated`,
                affectedrows:result.affectedRows
            });
        }else{
            res.send({
                message:'update aborded'
            });
        }       
    });
});