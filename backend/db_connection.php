<?php 
// connexion à la base mydiscbox
try {
    $db_connection = new PDO("mysql:host=localhost;dbname=mydiscbox", 
        "root", 
        "V3nDta!"
    );
    $db_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    // "setAttribute()" est utilisé pour configurer des options PDO :
    // "ATTR_ERRMODE" est définit sur "ERRMODE_EXCEPTION" pour que les erreurs de DB lancent automatiquement des exceptions 
    // Définition => Un exception est un mécanisme pour gérer les erreurs de manière contrôlée)
} catch (PDOException $e) {
    echo "La connexion a échouée ..." . $e->getMessage();
}
?>