// *** REQUETES AVEC CALCULS ET FONCTIONS *** 
app.get('/listAdherentsParAge',(req,res)=>{
    // On utilise les fonction YEAR() et NOW() pour déterminer l'age d'un adhérent.
    // Remarque on utilise la date de naissance pour l'ordonnancement ce qui permet d'être exact.
    let qr = 'SELECT id, nom, prenom, year(now())- year(dateNaissance) as age '
            +'FROM catsEye.adherents '
            +'ORDER BY dateNaissance DESC;';
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Liste des adhérents ordonnés par age décroissant',
                data:result
            });
        }
    });
});

// *** EXERCICES 2 - PROJECTIONS AVEC CALCULS ET FONCTIONS ***