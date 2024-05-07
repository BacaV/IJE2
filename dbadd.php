<!DOCTYPE html>
<html>

<head>

	<meta charset="utf-8">
	<title>Status Check</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
	<body>


    <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "list";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$age = $_REQUEST['age'];



$sql = "INSERT INTO names(name, surname, age)
VALUES('$name', '$surname', '$age')";



if(mysqli_query($conn, $sql)){
    echo "sucessfull!";
} else{
    echo "unsucessfull!";
};


mysqli_close($conn);
?>



	</body>
</html>
