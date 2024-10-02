<?php
// Démarrer une session
session_start();
// Récupération des données du formulaire
$email=$_POST["email"];
$password=md5($_POST["password"]);
$validation=$_POST["validation"];

// Création d'une variable erreur (pour stockage des message)
$error = "";
 
// Si l'utilisateur a cliqué sur le bouton Valider
if (isset($validation)) {
    // Inclut le fichier de connexion à la base de données
    include("db_connection.php");

    // Préparation d'une requête pour vérifier le login et le mot de passe saisis existent
    $insertion = $db_connection->prepare("SELECT *
                                          FROM utilisateur
                                          WHERE email_user=? 
                                          AND password_user=?");
    // Exécution de la requête avec l'email et le mot de passe fournis
    $insertion->execute(array($email, $password));
    // Récupèration des résultats de la requête sous forme de tableau
    $login_array = $insertion->fetchAll();

    // Si un utilisateur correspondant est trouvé
    if (count($login_array) > 0) {
        // Stocke le pseudonyme de cet utilisateur dans la session :
         $_SESSION["nickname"] = ($login_array[0]["nickname_user"]);

         // Définit une variable de session "autoriser" pour indiquer que l'utilisateur est authentifié
         $_SESSION["authorize"] = "oui";

        // Redirection vers la page de connexion 
        // (si l'insertion du nouvel utilisateur est réussie)
        header("location:session.php");
    } else {      
        // Si aucune correspondance n'est trouvée
        $error = "L'adresse mail ou le mot de passe est incorrect.";
    }
}