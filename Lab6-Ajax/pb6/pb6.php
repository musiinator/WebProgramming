<?php
header("Access-Control-Allow-Origin: *");

$mysqli = new mysqli("localhost", "root", "", "lab6");

if ($mysqli->connect_error) {
    exit('Could not connect');
}

$sql = "SELECT distinct producator, procesor, memorie, capacitate, placavideo from components;";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($producator, $procesor, $memorie, $capacitate, $placavideo);

$components = array();

while ($stmt->fetch()) {
    $component = array(
        'producator' => $producator,
        'procesor' => $procesor,
        'memorie' => $memorie,
        'capacitate' => $capacitate,
        'placavideo' => $placavideo
    );
    $components[] = $component;
}

$stmt->close();

$mysqli->close();

echo json_encode($components);
?>
