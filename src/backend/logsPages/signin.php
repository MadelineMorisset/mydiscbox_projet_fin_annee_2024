<?php 
    // Démarrer une session
    session_start();

    // Configurer l'en-tête de réponse en JSON
    header('Content-Type: application/json');
    // Permet toutes les origines (CORS)
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, GET");
    header("Access-Control-Allow-Headers: Content-Type");

    // Inclut le fichier de connexion à la base de données
    require_once("../db_connection.php");
    
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Récupération des données du formulaire
        $email=$_POST["email"] ?? '';
        $nickname=$_POST["nickname"] ?? '';
        $password=$_POST["password"] ?? '';
        $repassword=$_POST["repassword"] ?? '';
    
        // Création d'une variable erreur (pour stockage des message)
        $error = "";
     
        // Si le champs email n'est pas remplit
        if (empty($email)) {
            // Envoie message d'erreur
            $error = "Veuillez renseigner une adresse mail.";
        // Si le champs password n'est pas remplit
        } elseif (empty($password)) {
            // Envoie message d'erreur
            $error = "Veuillez renseigner un mot de passe.";
        // Si le champs repassword n'est pas identique au champs password
        } elseif ($password != $repassword) {
            // Envoie message d'erreur
            $error = "Mot de passe non identique.";
        } else {
            // Vérifier si l'email existe déjà dans la DB
            $login_exists = $db_connection->prepare("SELECT id_user 
                                                     FROM utilisateur 
                                                     WHERE email_user=?");
                                                     
            // Exécution de la requête précédente avec l'email fourni par l'utilisateur
            $login_exists->execute([$email]);
            // Récupèration des résultats de la requête sous forme de tableau
            $login_array = $login_exists->fetchAll();
    
            // Si un utilisateur avec le même email existe déjà
            if (count($login_array) > 0) {
                $error = "Cette adresse mail est déjà utilisée.";
            } else {
                // On hash le mot de passe
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                
                // Préparation d'une requête pour insérer un nouvel utilisateur dans la DB
                $insertion = $db_connection->prepare("INSERT INTO utilisateur(email_user, nickname_user, password_user, admin_user)
                                                      VALUES(?, ?, ?, ?)");
                try {
                    // Exécution de la requête avec les valeurs fournies
                    if ($insertion->execute([$email, $nickname, $hashed_password, 0])) {
                        // Redirection vers la page de connexion 
                        // (si l'insertion du nouvel utilisateur est réussie)
                        echo json_encode(["success" => true, "message" => "Compte créé avec succès."]);
                        exit();
                    } else {
                        echo json_encode(["success" => false, "message" => "Erreur lors de la création du compte."]);
                    }
                } catch (PDOException $e) {
                    echo json_encode(["success" => false, "message" => "Erreur d'insertion : " . $e->getMessage()]);
                }  
            }
        }
    }

    if (!empty($error)) {
        echo json_encode(["success" => false, "message" => $error]);
    }
?>