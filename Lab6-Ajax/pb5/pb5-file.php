<?php
header("Access-Control-Allow-Origin: *");

$mysqli = new mysqli("localhost", "root", "", "lab6");

if ($mysqli->connect_error) {
    exit('Could not connect');
}

if (isset($_GET['id'])) {
    $idFisier = $_GET['id'];
    $sql = "SELECT continut, idParinte FROM structure WHERE id = ?;";

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("i", $idFisier);
    $stmt->execute();
    $stmt->bind_result($continut, $idParinte);
    if ($stmt->fetch()) {
        echo  $continut;
    } else {
        echo 'openDirectory(' . $idFisier . ')';
    }

    $stmt->close();
}

$mysqli->close();

?>
