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
    $username=''; //on met quoi là ?
    $password='simple'; 
    //tentative de connexion à la base de données

    try{
        $bdd = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8',$username,$password);
        echo 'connexion établie<br>'; //vérifie la connexion
    }

    ?>

</body>
</html>

