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
    $depsend = '';
$deprecive = '4';
$doctor = $_POST['doctorRecive'];
$u_r = '' ;
$date_recive = '' ;
    $status_recive = 'Y';
$user_r = $_POST['doctorRecive'] ;



//$date = now();
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
  $sql = "INSERT INTO mr_track (an,hn, ptname,dchdate, user_s,send_date,depsend,user_r,recivedate,deprecive,status_recive)
VALUES ('$an', '$hn', '$ptname','$dchdate','$user_s',now(),'$depsend','$user_r',now(),'$deprecive','$status_recive')";

 $sql2 = "INSERT INTO mr_track_doctor (an,hn, ptname,dchdate, user_s,send_date,doctor,recivedate,user_r)
VALUES ('$an', '$hn', '$ptname','$dchdate','$user_s',now(),'$doctor','$date_recive','$u_r')";

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
