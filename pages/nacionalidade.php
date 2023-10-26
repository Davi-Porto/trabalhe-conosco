<?php

include('cnx.php');

$query="SELECT cd_id, nm_nacionalidade FROM tb_nacionalidade ORDER BY nm_nacionalidade";

$result = $conn->prepare($query);

$result->execute();

if($result && $result->rowCount() > 0){
    $rowResult = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($rowResult);
}