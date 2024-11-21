<?php
session_start();
include 'conex.inc'; 

$user = $_POST['user'];
$password = md5($_POST['password']); 


$stmt = $db->prepare("SELECT * FROM usuarios WHERE user = ? AND password = ?");
$stmt->bind_param("ss", $user, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result && $result->num_rows > 0) {
    $_SESSION['user'] = $user;
    header("Location: index.php");
    exit();
} else {
    header("Location: login.php?error=1");
    exit();
}

$stmt->close();
$db->close();
?>
