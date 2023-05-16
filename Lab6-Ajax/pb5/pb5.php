<?php
header("Access-Control-Allow-Origin: *");

$mysqli = new mysqli("localhost", "root", "", "lab6");

if ($mysqli->connect_error) {
    exit('Could not connect');
}

$sql = "SELECT id, nume FROM Structure WHERE idParinte = 0;";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($id, $nume);

echo '<ul>';
while ($stmt->fetch()) {
    echo '<li id="' . $id . '" onclick="openDirectory(' . $id . ')">' . $nume . '</li>';
}
echo '</ul>';

$stmt->close();

$mysqli->close();
?>
