// *** PREMIERES REQUETES ***
app.get('/',(req,res)=>{
    // Voici un exemple de requête intégrer au code.
    // Cette requête retourne les informations de la table paramétres.
    let qr = `SELECT p.key, p.value FROM catsEye.parametres p LIMIT 3;`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Liste des informations de la table parametres',
                data:result
            });
        }
    });
});


// *** EXERCICES 1 - PROJECTIONS SIMPLE ***
app.get('/listMaterielsParPrix',(req,res)=>{
    // Ajoute ta requête SQL entre les quotes ` =>[Alt Gr + 7]
    let qr = `requete`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Materiels ordonnés par prix croissant',
                data:result
            });
        }
    });
});

app.get('/listAdherentOrdonne',(req,res)=>{
    // Ajoute ta requête SQL entre les quotes ` =>[Alt Gr + 7]
    let qr = 'requere';
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Liste des adhérents ordonnés par nom et prénom',
                data:result
            });
        }
    });
});

app.get('/listMaterielsPrixSuperieur1000',(req,res)=>{
    // Ajoute ta requête SQL entre les quotes ` =>[Alt Gr + 7]
    let qr = `requete`; 
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Matériels avec un prix supérieur à 1000€',
                data:result
            });
        }
    });
});