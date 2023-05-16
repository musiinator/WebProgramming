<?php
header("Access-Control-Allow-Origin: *");

$mysqli = new mysqli("localhost", "root", "", "lab6");

if ($mysqli->connect_error) {
    exit('Could not connect');
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT id, nume FROM Structure WHERE idParinte = ?;";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($id, $nume);

    echo '<ul>';
    while ($stmt->fetch()) {
        echo '<li id="' . $id . '" onclick="openFile(' . $id . ')">' . $nume . '</li>';
    }
    echo '</ul>';

    $stmt->close();
}

$mysqli->close();
?>
