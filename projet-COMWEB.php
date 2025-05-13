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

    // Lecture du JSON envoyé

    $identifiant = $_GET['identifiant'];
    $mdp = $_GET['mdp'];
    $role = $_GET['role']; // "eleve" ou "professeur"

    if (!$identifiant || !$mdp || !$role) {
        echo json_encode(['success' => false, 'message' => 'Paramètres manquants.']);
        exit();
}

    try {
    // Choix de la base en fonction du rôle
    if ($role === 'professeur') {
        $bdd = new PDO('mysql:host=' . $host . ';dbname=profs;charset=utf8', $username, $password);
        $requete = $bdd->prepare("SELECT * FROM profs WHERE identifiant : \"$identifiant\" AND mdp = $mdp");
    } elseif ($role === 'eleve') {
        $bdd = new PDO('mysql:host=' . $host . ';dbname=eleves;charset=utf8', $username, $password);
        $requete = $bdd->prepare("SELECT * FROM eleves WHERE identifiant = $identifiant AND mdp = $mdp");
    } 

    $requete->execute([$identifiant, $mdp]);
    $utilisateur = $requete->fetch(PDO::FETCH_ASSOC);

    if ($utilisateur) {
        if ($role === 'eleve') {
            // Récupérer les notes si c'est un élève
            $idEleve = $utilisateur['Id_eleve'];

            // Connexion à la BDD des notes
            $bddNotes = new PDO("mysql:host=$host;dbname=$dbnameNotes;charset=utf8", $username, $password);
            $noteQuery = $bddNotes->prepare("SELECT Matiere, Note FROM notes WHERE Id_eleve : $identifiant");
            $noteQuery->execute([$idEleve]);
            $notes = $noteQuery->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode([
                'success' => true,
                'role' => 'eleve',
                'nom' => $utilisateur['Nom'],
                'prenom' => $utilisateur['Prenom'],
                'notes' => $notes
            ]);
        } else {
            echo json_encode([
                'success' => true,
                'role' => 'professeur',
                'nom' => $utilisateur['Nom'],
                'prenom' => $utilisateur['Prenom']
            ]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Identifiants invalides.']);
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Erreur de connexion : ' . $e->getMessage()]);
}



    // echo "<h2> Notes de l'élève : ID".$identifiant."</h2>";

    // $requete ='SELECT Matiere, Note FROM notes WHERE Id_eleve : identifiant';
    // $resultat = $bdd->query($requete);
    // $tableau = $resultat->fetchall();

    // foreach($tableau as $cellule){
    //     echo $cellule['Note']."     ".$cellule['Matiere']."<br>";
    // }

    
    ?>

</body>
</html>

