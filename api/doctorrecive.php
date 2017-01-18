<?php
header('Access-control-Allow-origin:*');
include_once 'DB.php';

// Check connection
$_POST = json_decode(file_get_contents('php://input'),TRUE);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}
$an = $_POST['an'] ;
 $hn = $_POST['hn'] ;
 $ptname = $_POST['ptname'] ;
 $dchdate = $_POST['dchdate'];
$user_r = $_POST['user_r'] ;
$id = $_POST['id'];
$status_recive = 'Y' ;
$user_s = $_POST['u_s'] ;
//$date = now();
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
  $sql = "UPDATE  mr_track_doctor set  user_r = '$user_r',recivedate = now()
  where id = '$id' ";

  $sql2 = "INSERT INTO mr_track (an,hn, ptname,dchdate, user_s,send_date,depsend,user_r,recivedate,deprecive,status_recive)
VALUES ('$an', '$hn', '$ptname','$dchdate','$user_s',now(),'$depsend','$user_r',now(),'$deprecive','$status_recive')";

if ($link->query($sql) === TRUE) {
   $resp['data'] = 'success' ;
} else {
   $resp['data'] = 'error' ;
}

if ($link->query($sql2) === TRUE) {
   $resp['data'] = 'success' ;
} else {
   $resp['data'] = 'error' ;
}

$result = json_encode($resp);

echo  $result

?>
