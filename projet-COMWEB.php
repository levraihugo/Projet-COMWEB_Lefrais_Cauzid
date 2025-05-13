<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    $host='localhost'; //variables de connexion
    $dbname='Notes'; //mettre nom de la table sql
    $username='root'; //pourquoi on met root là ?
    $password=''; 
    //tentative de connexion à la base de données

    try{
        $bdd = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8',$username,$password);
        echo 'connexion établie <br>'; //vérifie la connexion

    }catch (PDOException $e) {
        die("Erreur de connexion : " . $e->getMessage());
    }



    echo "<h2> Notes de l'élève : ID".$identifiant."</h2>";

    $requete ='SELECT Matiere, Note FROM notes WHERE Id_eleve : identifiant';
    $resultat = $bdd->query($requete);
    $tableau = $resultat->fetchall();

    foreach($tableau as $cellule){
        echo $cellule['Note']."     ".$cellule['Matiere']."<br>";
    }

    
    ?>

</body>
</html>

