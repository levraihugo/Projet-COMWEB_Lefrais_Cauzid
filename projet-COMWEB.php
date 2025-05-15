<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    $host='localhost'; //variables de connexion
    $dbname='notes'; //mettre nom de la table sql
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
    if ($role === 'profs') {
        $bdd = new PDO('mysql:host=' . $host . ';dbname=profs;charset=utf8', $username, $password);
        $requete = $bdd->prepare("SELECT * FROM profs WHERE identifiant = :identifiant AND mdp = :mdp");
    } elseif ($role === 'eleves') {
        $bdd = new PDO('mysql:host=' . $host . ';dbname=eleves;charset=utf8', $username, $password);
        $requete = $bdd->prepare("SELECT * FROM eleves WHERE identifiant = :identifiant AND mdp = :mdp");
    } 

    $requete->execute(['identifiant' => $identifiant, 'mdp' => $mdp]);
    $utilisateur = $requete->fetch(PDO::FETCH_ASSOC);

    if ($utilisateur) {
        if ($role === 'eleves') {
            // Récupérer les notes si c'est un élève
            $idEleve = $utilisateur['Id_eleve'];

            // Connexion à la BDD des notes
            $bddNotes = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
            $noteQuery = $bddNotes->prepare("SELECT Matiere, Note FROM notes WHERE Id = :id");
            $noteQuery->execute(['id' => $idEleve]);
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

?>

