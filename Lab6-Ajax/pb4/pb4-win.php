<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$board = $_POST["board"];
$winner = checkForWin($board);

if ($winner !== null) {
    echo $winner;
} else {
    echo "";
}

function checkForWin($board) {
    $lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    foreach ($lines as $line) {
        $cell1 = $board[$line[0]];
        $cell2 = $board[$line[1]];
        $cell3 = $board[$line[2]];
        if ($cell1 !== "-" && $cell1 === $cell2 && $cell2 === $cell3) {
            return json_encode($line);
        }
    }
    return null;
}

?>
