<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "list";

$conn = mysqli_connect($servername, $username, $password, $dbname);


$upit = "SELECT * FROM names";
$rezultat = mysqli_query($conn, $upit);
while($red = mysqli_fetch_assoc($rezultat)){
    echo "Name: " . $red['name'] . ' ' . $red['surname'] . "<br>";
    echo "Age: " . $red['age'] . "<br>";
    echo "<br><br>";
}


mysqli_close($conn);
?>