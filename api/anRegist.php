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
  $user_s = $_POST['user_s'];
   $send_date = $_POST['send_date'];
    $depsend = $_POST['depsend'];
$deprecive = $_POST['depRecive'];


    $status_recive = $_POST['status_recive'];
$user_r = '' ;
$recivedate = '' ;


//$date = now();
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
  $sql = "INSERT INTO mr_track (an,hn, ptname,dchdate, user_s,send_date,depsend,user_r,recivedate,deprecive,status_recive)
VALUES ('$an', '$hn', '$ptname','$dchdate','$user_s',now(),'$depsend','$user_r','$recivedate','$deprecive','$status_recive')";

if ($link->query($sql) === TRUE) {
   $resp['data'] = 'success' ;
} else {
   $resp['data'] = 'error' ;
}



$result = json_encode($resp);

echo  $result

?>
