// *** EXERCICES 1 - PROJECTIONS SIMPLE ***

//1) Liste des matériels par prix croissant : code, marque, modele, prixAchat
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

//2) Liste des adhérents ordonnés par nom et prénom : id, nom, prenom, mail
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

// Bonus : Fournir le chemin et le nom du logo.
app.get('/retrieveSourceImages',(req,res)=>{
    // Ajoute ta requête SQL entre les quotes ` =>[Alt Gr + 7]
    let qr = `requete`; 
    
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'retourne le chemin du logo',
                data:result
            });
        }
    });
});