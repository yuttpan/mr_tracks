<?php
header('Access-Control-Allow-Origin: * ' );

include_once 'DB.php';

$_POST = json_decode(file_get_contents('php://input'),TRUE);

//print_r($_POST) ;

$resp['status'] = 'error';
// $username = isset($_GET['var_username']) ? $_GET['var_username'] : null;
 //$password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;

$username = $_POST['txt_usr'] ;
$password = $_POST['txt_pwd'];
if($username != null && $password != null){
  $sql="select loginname,name from opduser where loginname ='$username' and passweb= md5('$password')   ";
$resource = mysqli_query($link, $sql);
 $num = mysqli_num_rows($resource);
$row = mysqli_fetch_assoc($resource);

if($num > 0 ){




$resp['data'] = $row ;
$resp['status'] = 'success' ;

}

} else {
 // $resp['status'] = 'required' ;
}

$result = json_encode($resp);

echo  $result


?>
