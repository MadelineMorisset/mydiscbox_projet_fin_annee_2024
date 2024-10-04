<?php
// Démarrer une session
session_start();

// Inclut le fichier de connexion à la base de données
include("db_connection.php");

// Lecture des données recupérées avec requête AJAX
$data = json_decode(file_get_contents("php://input"), true);
// Vérifier si les données sont null / undifined
$email = $data['email'] ?? '';
$password = ['password'] ?? '';

// Si l'utilisateur a cliqué sur le bouton Valider
if (!empty($email) && !empty($password)) {

    // Préparation d'une requête pour vérifier le login et le mot de passe saisis existent
    $insertion = $db_connection->prepare("SELECT *
                                          FROM utilisateur
                                          WHERE email_user=?");

    // Exécution de la requête avec l'email et le mot de passe fournis
    $insertion->execute($email);
    // Récupèration des résultats de la requête sous forme de tableau
    $user = $insertion->fetch(PDO::FETCH_ASSOC);

    // Vérifier la connexion
    if ($user && $user["password_user"]) {
        // Connexion réussie
         $_SESSION["nickname"] = ($user["nickname_user"]);
         $_SESSION["authorize"] = "oui";

        // Redirection vers la page de connexion 
        // (si l'insertion du nouvel utilisateur est réussie)
        echo json_encode(["validation" => true]);
    } else {      
        // Connexion échouée
        echo json_encode([
            "validation" => false, 
            "errorMessage" => "L'adresse mail ou le mot de passe est incorrect."
        ]);
    }
} else {
    echo json_encode([
        "validation" => false, 
        "errorMessage" => "Veuillez saisir une adresse mail et un mot de passe."
    ]);
}