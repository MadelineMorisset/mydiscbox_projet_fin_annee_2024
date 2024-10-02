<?php
require_once 'db_connection.php';

     $stmt = $db_connection->prepare("SELECT * FROM article");
     $stmt->execute();

     $resultat=[];
     foreach($stmt as $value) {
          $resultat[]=array("titre" => $value['title_item']);
     }

     echo json_encode($resultat);
?>