// *** REQUETES AVEC PARAMETRES ***
// :code est le parametre qui sera envoyé à la requête.
app.get('/detailMateriels/:code',(req,res)=>{
    // on récupére le paramétre dans une variable gCode.
    let gCode=req.params.code;
    // La variable est inséré dans la requête.
    // Remarquez les quotes ' autour du paramétre et le slash \ pour échaper le caractère(').
    let qr = `SELECT code, modele, marque, dateAchat, prixAchat, photo, type FROM catsEye.materiels WHERE code = \'${gCode}\'`
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Detail d\'un matériel',
                data:result
            });
        }
    });
});

// *** EXERCICES 3 - PROJECTIONS AVEC PARAMETRES ***
app.get('/detailAdherents/:id',(req,res)=>{
    let gId=req.params.id;
    // Ajoute ta requête SQL entre les quotes ` => [Alt Gr + 7]
    let qr = `requete`; 
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Détail d\'un adhérent',
                data:result
            });
        }
    });
});

app.get('/listeMateriels/:minAge-:maxAge',(req,res)=>{
    let gMinAge=req.params.minAge;
    let gMaxAge=req.params.maxAge;
    // Ajoute ta requête SQL entre les quotes ` => [Alt Gr + 7]
    let qr = 'requere'
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:`Liste des matériels achetés entre ${gMinAge} et ${gMaxAge} ans`,
                data:result
            });
        }
    });
});