<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "list";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$pretraga = $_REQUEST['search'];

$upit = "SELECT * FROM names WHERE name= '$pretraga'";
$rezultat = mysqli_query($conn, $upit);
while($red = mysqli_fetch_assoc($rezultat)){
    echo "Name: " . $red['name'] . ' ' . $red['surname'] . "<br>";
    echo "Age: " . $red['age'] . "<br>";
    echo "<br><br>";
}


mysqli_close($conn);
?>