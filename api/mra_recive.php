<?php
header('Access-control-Allow-origin:*');
include_once 'DB.php';

// Check connection
$_POST = json_decode(file_get_contents('php://input'),TRUE);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

$user_r = $_POST['user_r'] ;
$id = $_POST['id'];
$status_recive = 'Y' ;

//$date = now();
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
  $sql = "UPDATE  mr_track set  user_r = '$user_r',recivedate = now(),status_recive = '$status_recive'
  where id = '$id' ";

if ($link->query($sql) === TRUE) {
   $resp['data'] = 'success' ;
} else {
   $resp['data'] = 'error' ;
}



$result = json_encode($resp);

echo  $result

?>
