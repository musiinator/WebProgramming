<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$board = $_POST["board"];
$index = makeComputerMove($board);
echo $index;

function makeComputerMove($board) {
    $cells = getFreeCells($board);
    $index = $cells[array_rand($cells)];
    return $index;
}

function getFreeCells($board) {
    $freeCells = [];
    for ($i = 0; $i < strlen($board); $i++) {
        if ($board[$i] === "-") {
            $freeCells[] = $i;
        }
    }
    return $freeCells;
}
?>
