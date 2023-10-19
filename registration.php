<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['mobile'];
$org = $_POST['company'];
$designation = $_POST['designation'];
$year = date('Y');

$servername = "localhost";
$username = "root";
$password = "password";
$db = "summit";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}

$sql = "insert into registration(name,email,mobile,organization,designation,year) values('$name','$email','$number','$org','$designation','$year')";

if ($conn->query($sql) === TRUE) {
	header("Location: thank-you.html");
} else {
	echo "Error: ".$sql."<br>".$conn->error;
}

$conn->close();

?>