<?php
header('Access-control-Allow-origin:*');
include_once 'DB.php';
date_default_timezone_set('America/Los_Angeles');
// Check connection
$_POST = json_decode(file_get_contents('php://input'),TRUE);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}
 $u = $_POST['users'] ;
 $p = $_POST['position'] ;
//$date = now();
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
$sql = "INSERT INTO users (u_name,u_position)
VALUES ('$u', '$p')";

if ($link->query($sql) === TRUE) {
   $resp['data'] = 'success' ;
} else {
   $resp['data'] = 'error' ;
}



$result = json_encode($resp);

echo  $result

?>
