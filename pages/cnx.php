<?php

$host = "191.252.205.109";
$user = "tgnDavi";
$pass = "olucirruC2022";
$dbname = "db_trabalhe_conosc";

try{
    $conn = new PDO("mysql:host=$host;dbname=".$dbname, $user, $pass);
    // echo "SERVER CONNECTION SUCCESS";
}catch(PDOException $err){
    echo "SERVER CONNECTION ERROR | ERROR CODE: " . $err->getMessage();
}