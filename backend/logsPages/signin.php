<?php 
    // Démarrer une session
    session_start();
    // Récupération des données du formulaire
    $email=$_POST["email"];
    $nickname=$_POST["nickname"];
    $password=$_POST["password"];
    $repassword=$_POST["repassword"];
    $validation=$_POST["validation"];

    // Création d'une variable erreur (pour stockage des message)
    $error = "";
 
    // Si l'utilisateur a cliqué sur le bouton Valider
    if (isset($validation)) {
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
            // Sinon on inclut le fichier de connexion à la DB
            include("login.php");
        }

        // Vérifier si l'email existe déjà dans la DB
        $login_exists = $db_connection->prepare("SELECT id_user 
                                                 FROM utilisateur 
                                                 WHERE email_user=?");
        // Exécution de la requête précédente avec l'email fourni par l'utilisateur
        $login_exists->execute(array($email));
        // Récupèration des résultats de la requête sous forme de tableau
        $login_array = $login_exists->fetchAll();

        // Si un utilisateur avec le même email existe déjà
        if (count($login_array) > 0) {
            $error = "Cette adresse mail est déjà utilisée.";
        } else {
            // Inclut le fichier de connexion à la base de données
            include("db_connection.php");

            // Préparation d'une requête pour insérer un nouvel utilisateur dans la DB
            $insertion = $db_connection->prepare("INSERT INTO utilisateur(email_user, nickname_user, password_user)
                                                   VALUES(?,?)");
                                                   
            // Exécution de la requête avec les valeurs fournies, 
            // et hashage du mot de passe avec md5
            if ($insertion->execute(array($email, $nickname, md5($password)))) {
                // Redirection vers la page de connexion 
                // (si l'insertion du nouvel utilisateur est réussie)
                header("location:login.php");
            }
        }
    }
?>