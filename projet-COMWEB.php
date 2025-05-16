<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    $host='localhost'; //variables de connexion
    $dbname='hcauzid'; //mettre nom de la table sql
    $username='hcauzid'; //pourquoi on met root là ?
    $password='simple'; 
    //tentative de connexion à la base de données
    $bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

    // Lecture du JSON envoyé

    $identifiant = $_GET['identifiant'];
    $mdp = $_GET['mdp'];
    $role = $_GET['role']; // "eleve" ou "professeur"

    if (!$identifiant || !$mdp || !$role) {
        // Test de présence des variables 
        // Si une des variables est undefined ou manquante on sort en mettant success à false
        echo json_encode(['success' => false, 'message' => 'Paramètres manquants.']);
        exit();
    }

    try {
    // Choix de la base en fonction du rôle
    if ($role === 'profs') {
        // $bdd = new PDO('mysql:host=' . $host . ';dbname=profs;charset=utf8', $username, $password);
        $requete = $bdd->prepare("SELECT * FROM profs WHERE identifiant = :identifiant AND mdp = :mdp");
        // Requête préparée avec : (voir cours 2 p28)
    } elseif ($role === 'eleves') {
        // $bdd = new PDO('mysql:host=' . $host . ';dbname=eleves;charset=utf8', $username, $password);
        $requete = $bdd->prepare("SELECT * FROM eleves WHERE identifiant = :identifiant AND mdp = :mdp");
    } 
    
    $requete->execute(['identifiant' => $identifiant, 'mdp' => $mdp]);
    // Éxécution de la requête en replaçant avec les bonnes valeurs
    $utilisateur = $requete->fetch(PDO::FETCH_ASSOC);
    // cours 2 p32

    if ($utilisateur) {
        if ($role === 'eleves') {
            // Récupérer les notes si c'est un élève
            $idEleve = $utilisateur['Id_eleve'];

            // Connexion à la BDD des notes
            // $bddNotes = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
            $noteQuery = $bdd->prepare("SELECT Matiere, Note FROM notes WHERE Id_eleve = :id");
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
            // Récupérer les notes si c'est un élève
            $idProf = $utilisateur['Id_prof'];
            
            // Connexion à la BDD des notes
            $bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
            $noteQuery = $bdd->prepare("SELECT Matiere, Note, Nom, Prenom FROM notes JOIN eleves ON notes.Id_eleve = eleves.Id_eleve WHERE Id_prof = :id");
            $noteQuery->execute(['id' => $idProf]);
            $notes = $noteQuery->fetchAll(PDO::FETCH_ASSOC);
            
            echo json_encode([
                'success' => true,
                'role' => 'professeur',
                'nom' => $utilisateur['Nom'],
                'prenom' => $utilisateur['Prenom'],
                'notes' => $notes
            ]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Identifiants invalides.']);
    }

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erreur de connexion : ' . $e->getMessage()]);
    }

?>

