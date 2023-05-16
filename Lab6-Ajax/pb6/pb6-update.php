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

    $component = json_decode($data, true);

    $producatorReceived = $component['producator'];
    $procesorReceived = $component['procesor'];
    $memorieReceived = $component['memorie'];
    $capacitateReceived = $component['capacitate'];
    $placavideoReceived = $component['placavideo'];

    $sql = "SELECT producator, model, procesor, memorie, capacitate, placavideo from components where producator=? and procesor=? and memorie=? and capacitate=? and placavideo=?;";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sssss", $producatorReceived, $procesorReceived, $memorieReceived, $capacitateReceived, $placavideoReceived);
    $stmt->execute();
    $stmt->bind_result($producator, $model, $procesor, $memorie, $capacitate, $placavideo);

    echo '<tr> <th>Producator</th> <th>Model</th> <th>Procesor</th> <th>Memorie</th> <th>Capacitate</th> <th>Placa Video</th> </tr>';
    while ($stmt -> fetch()) {
        echo '<tr> <td>' . $producator . '</td> <td>' . $model . '</td>  <td>' . $procesor . '</td> <td>' . $memorie . '</td> <td>' . $capacitate . '</td> <td>' . $placavideo . '</td> </tr>';
    }

    $stmt->close();
}

$mysqli->close();
?>
