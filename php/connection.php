<?php
$servername = "localhost";
$username = "calvrix";
$password = "Calvrix!7!";
$dbname = "smilemiddle";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>
