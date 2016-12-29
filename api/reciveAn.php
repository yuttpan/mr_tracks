<?php
header('Access-control-Allow-origin:*');
include_once 'DB.php';
// Check connection
$_POST = json_decode(file_get_contents('php://input'),TRUE);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}
 print_r($_POST) ;

// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
 /* $sql="select an,concat(pname,fname,'  ',lname) ptname,ThaiDateS(dchdate)  from ipt a
LEFT JOIN patient p  on a.hn = p.hn
where an = '590002258'  ";
$resource = mysqli_query($link, $sql);
 $num = mysqli_num_rows($resource);
$row = mysqli_fetch_assoc($resource);

if($num > 0 ){




$resp['data'] = $row ;
$resp['status'] = 'success' ;

}



$result = json_encode($resp);

echo  $result
*/
?>
