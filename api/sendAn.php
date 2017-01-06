<?php
header('Access-control-Allow-origin:*');
include_once 'DB.php';
date_default_timezone_set('America/Los_Angeles');
// Check connection
$_POST = json_decode(file_get_contents('php://input'),TRUE);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}
 $u = $_POST['user'] ;
 $an = $_POST['an'] ;
 $act = $_POST['action'] ;
 $u_recive = $_POST['userRecive'];
//$date = now();
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
 $sql = "INSERT INTO send (an, user_send,user_recive, action,action_date)
VALUES ('$an', '$u', '$u_recive','$act',now())";

if ($link->query($sql) === TRUE) {
   $resp['data'] = 'success' ;
} else {
   $resp['data'] = 'error' ;
}



$result = json_encode($resp);

echo  $result

?>
