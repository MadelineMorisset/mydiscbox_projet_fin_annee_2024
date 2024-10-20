<?php
session_start();

// Inclut le fichier de connexion à la base de données
require_once("../db_connection.php");

// Configurer l'en-tête de réponse en JSON
header('Content-Type: application/json');
// Permet toutes les origines (CORS)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Si la requête est une pré-vérification
    http_response_code(204); // No Content
    exit();
}

// Connexion à la base de données (MySQL)
class Connection {
    private $host = 'localhost';
    private $user = 'root';
    private $pass = 'V3nDta!';
    private $db = 'mydiscbox';
    private $connection;

    public function getConnection() {
        $this->connection = null;

        try {
            $this->connection = new PDO("mysql:host=". $this->host .";dbname=".$this->db, $this->user, $this->pass);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
            // "setAttribute()" est utilisé pour configurer des options PDO :
            // "ATTR_ERRMODE" est définit sur "ERRMODE_EXCEPTION" pour que les erreurs de DB lancent automatiquement des exceptions 
            // Définition => Un exception est un mécanisme pour gérer les erreurs de manière contrôlée)
        } catch (PDOException $e) {
            echo json_encode(["success" => false, "message" => "Erreur de connexion : ".$e->getMessage()]);
        }
        return $this->connection;
    }
}

$db_connection = (new Connection())->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer le JSON de la requête
    $input = file_get_contents('php://input');
    // True pour obtenir un tableau associatif
    $data = json_decode($input, true);

    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';

    if (empty($email) || empty($password)) {
        http_response_code(400); // Bad Request - Erreur côté client
        echo json_encode(["success" => false, "message" => "Email et mot de passe requis. "]);
        exit();
    }

    $connection_request = $db_connection->prepare('SELECT password_user
                                                   FROM utilisateur 
                                                   WHERE email_user = ?');
    $connection_request->execute([$email]);
    $user = $connection_request->fetch(PDO::FETCH_ASSOC);

    if ($user) {
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