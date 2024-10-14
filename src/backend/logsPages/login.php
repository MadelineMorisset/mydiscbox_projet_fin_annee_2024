<?php
session_start();

// Configurer l'en-tête de réponse en JSON
header('Content-Type: application/json');

// Connexion à la base de données (MySQL)
$host = 'localhost';
$user = 'root';
$pass = 'V3nDta!';
$db = 'mydiscbox';

$db_connection = new mysqli($host, $user, $pass, $db);

if ($db_connection->connect_error) {
    http_response_code(500); // Internal Server Error - Le serveur informe qu’il y a un problème, mais il n’est pas sûr de la cause du problème
    echo json_encode(["success" => false, "message" => "La connexion à la base de données a échouée."]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Lecture des données JSON envoyées
    $data = json_decode(file_get_contents("php://input"), true);

    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        http_response_code(400); // Bad Request - Erreur côté client
        echo json_encode(["success" => false, "message" => "Email et mot de passe requis. "]);
        exit();
    }

    $connection_request = $db_connection->prepare('SELECT password_user
                                                   FROM utilisateur 
                                                   WHERE email_user = ?');
    $connection_request->bind_param("s", $email);
    $connection_request->execute();
    $connection_user = $connection_request->get_result();

    if ($connection_user->num_rows > 0) {
        $user = $connection_user->fetch_assoc();
        $hash = $user['password_user'];
    
        if (password_verify($password, $hash)) {
            $_SESSION['logged_in'] = true;
            $_SESSION['login'] = $email;
        
            echo json_encode(["success" => true, "message" => "Connexion réussie"]);
        } else {
            http_response_code(401); // Unauthorized - Informations d’identification invalides
            echo json_encode(["success" => false , "message" => "Mot de passe incorrect"]);
        }
    } else {
        http_response_code(404); // Not found – Le serveur ne peut pas trouver la ressource demandée
        echo json_encode(["success" => false , "message" => "Email non trouvé"]);
    }
} else {
    http_response_code(405); // Method Not Allowed – Le serveur comprend la méthode demandée, mais la ressource cible ne la prend pas en charge
    echo json_encode(["success" => false , "message" => "Méthode non autorisée"]);
}

$db_connection->close();

// // Lecture des données JSON envoyées
// $data = json_decode(file_get_contents("php://input"), true);

// $email = $db_connection->real_escape_string($data->email);
// $password = $data->password;

// Requête pour vérifier les idenfiants
// $query = "SELECT * FROM utilisateur WHERE email='$email'";
// $result = $db_connection->query($query);²

// if ($result->num_rows > 0) {
//     $user = $result->fetch_assoc();

//     // Vérifier mot de passe
//     if (password_verify($password, $user['password'])) {
//         echo json_encode(["success" => true, "message" => "Connexion réussie", "user" => $user['username']]);
//     } else {
//         echo json_encode(["success" => false, "message" => "Mot de passe invalide"]);
//     }
// } else {
//     echo json_encode(["success" => true, "message" => "Identifiant invalide"]);
// }


// // Si l'utilisateur a cliqué sur le bouton Valider
// if (!empty($email) && !empty($password)) {

//     // Préparation d'une requête pour vérifier le login et le mot de passe saisis existent
//     $insertion = $db_connection->prepare("SELECT *
//                                           FROM utilisateur
//                                           WHERE email_user=?");

//     // Exécution de la requête avec l'email et le mot de passe fournis
//     $insertion->execute([$email]);
//     // Récupèration des résultats de la requête sous forme de tableau
//     $user = $insertion->fetch(PDO::FETCH_ASSOC);
    
//     // Vérifier la connexion
//     if ($user && password_verify($password, $user["password_user"])) {
//         // Connexion réussie
//          $_SESSION["email_user"] = ($data["email_user"]);
//          $_SESSION["authorize"] = "oui";

//         // Redirection vers la page de connexion (si l'insertion du nouvel utilisateur est réussie)
//         echo json_encode(["validation" => true]);
//     } else {      
//         // Connexion échouée
//         echo json_encode([
//             "validation" => false, 
//             "errorMessage" => "L'adresse mail ou le mot de passe est incorrect."
//         ]);
//     }
// } else {
//     echo json_encode([
//         "validation" => false, 
//         "errorMessage" => "Veuillez saisir une adresse mail et un mot de passe."
//     ]);
// }
?>