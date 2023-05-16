<?php
header("Access-Control-Allow-Origin: *");

$mysqli = new mysqli("localhost", "root", "", "lab6");

if ($mysqli->connect_error) {
    exit('Could not connect');
}

$sql = "SELECT nume, prenume, telefon, email FROM clients;";

$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($nume, $prenume, $telefon, $email);

$clients = array();

while ($stmt->fetch()) {
    $client = array(
        'nume' => $nume,
        'prenume' => $prenume,
        'telefon' => $telefon,
        'email' => $email
    );

    $clients[] = $client;
}

$stmt->close();
$mysqli->close();

echo json_encode($clients);
?>
