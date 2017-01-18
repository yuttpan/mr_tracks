<?php
header('Access-Control-Allow-Origin: * ' );

include_once 'DB.php';


$_POST = json_decode(file_get_contents('php://input'),TRUE);
//print_r($_POST);
 $d = $_POST["an"] ;
// $villagecode = isset($_GET['village_code']) ? $_GET['village_code'] : null;
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
 $sql="INSERT INTO doctor (doctor_name) VALUES ('$d')  ";

if ($link->query($sql) === TRUE) {
   $resp['data'] = 'success' ;
} else {
   $resp['data'] = 'error' ;
}



$result = json_encode($resp);

echo  $result

?>
