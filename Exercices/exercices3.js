// ****************************************************
// *** EXEMPLE de requêtes avec calculs et fontions ***
// ****************************************************

// L'url ci-dessous permet de fournir les données de la liste des adhérents ordonnés par leur age.
app.get('/listAdherentsParAge',(req,res)=>{
/*
On utilise les fonction YEAR() et NOW() pour déterminer l'age d'un adhérent.
Remarque on utilise la date de naissance pour l'ordonnancement ce qui permet d'être exact.
*/
    let qr = `SELECT id, nom, prenom, 
                year(now())- year(dateNaissance) as age
            FROM catsEye.adherents
            ORDER BY dateNaissance DESC;`;

    /*
    Référence : https://sql.sh/fonctions/year
                https://sql.sh/fonctions/now
    Remarque d'écriture :
    - Il est possible de réaliser des opérations arithmétiques (+,-,*,/) entre des champs.
    Bonnes partiques :
    - On renomme ('AS') toujours un calcul ou un champ utilisant une fonction.
    */

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:'Liste des adhérents ordonnés par age décroissant',
                data:result
            });
        } else {
            res.send({
                message:`Il n'y a aucun adhérents à afficher`,
            });
        }
    });
});

// ***********************************************************
// *** EXERCICES 3 - PROJECTIONS AVEC CALCULS ET FONCTIONS ***
// ***********************************************************

//QUESTION 5) Filtrer la liste de matériels par un prix avec l'opérateur supérieur.
app.get('/listeMateriels/ageEntre=:minAge-:maxAge',(req,res)=>{
    let gMinAge=req.params.minAge;
    let gMaxAge=req.params.maxAge;
/* 
L'url ci-dessus permet de fournir les données de la liste des adhérents filtrés par les valeurs minAge et maxAge fourni dans le formulaire de l'application cateye.sio.local
Reprenez la requête de la question 2 et modifiez là pour permettre un filtrage sur une tranche d'age.
=> Ecrivez la requête et insérez là dans le code ci-dessous entre les quotes ` =>[Alt Gr + 7].
*/
    let qr = `requête`; 

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'err');
        }
        if(result.length>0){
            res.send({
                message:`Liste des matériels achetés entre ${gMinAge} et ${gMaxAge} ans`,
                data:result
            });
        } else {
            res.send({
                message:`Il n'y a aucun matériel compris entre ${gMinAge} et ${gMaxAge} ans`,
            });
        }
    });
});

// QUESTION 6)
/*
Modifier les requêtes de l'exercice 2 : url '/detailMateriel/:id' et url '/detailAdherent/:id'
pour proposer une amélioration de l'affichage des dates tel que:
-> date de création : 09/01/2001 10:11:52
-> date achat et anniversaire : 09/01/2001 
*/