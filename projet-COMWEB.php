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



    // $id_eleve = $_GET['id_eleve']; // ou via POST si vous préférez

    // $sql = "SELECT matiere, note FROM Notes WHERE id_eleve = ?";
    // $stmt = $bdd->prepare($sql);
    // $stmt->execute([$id_eleve]);
    // $Notes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // echo json_encode($Notes);

    $requete ='SELECT matiere, note FROM Notes WHERE matiere like "Anglais"';
    $resultat = $bdd->query($requete);
    $tableau = $resultat->fetchall();

    
    ?>

</body>
</html>

