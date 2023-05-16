<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");



$mysqli = new mysqli("localhost", "root", "", "lab6");

if ($mysqli->connect_error) {
    exit('Could not connect');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');

    $userData = json_decode($data, true);

    $id = $userData['id'];
    $nume = $userData['nume'];
    $prenume = $userData['prenume'];
    $telefon = $userData['telefon'];
    $email = $userData['email'];
    $sql = "UPDATE users SET nume = ?, prenume = ?, telefon = ?, email = ? WHERE id = ?;";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ssssi", $nume, $prenume, $telefon, $email, $id);
    $stmt->execute();
    $stmt->close();

} elseif (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT nume, prenume, telefon, email FROM users WHERE id = ?;";

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($nume, $prenume, $telefon, $email);

    $user = null;

    if ($stmt->fetch()) {
        $user = array(
            'nume' => $nume,
            'prenume' => $prenume,
            'telefon' => $telefon,
            'email' => $email
        );
    }
    $stmt->close();

    echo json_encode($user);
}

$mysqli->close();
?>
