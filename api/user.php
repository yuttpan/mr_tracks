<?php
header('Access-control-Allow-origin:*');
include_once 'DB.php';
// Check connection

if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}
 //$an = isset($_GET['var_an']) ? $_GET['var_an'] : null;
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;
  $sql="select an,concat(pname,fname,'  ',lname) ptname,ThaiDateS(dchdate)  from an_stat a
LEFT JOIN patient p  on a.hn = p.hn  ";
$resource = mysqli_query($link, $sql);
 $num = mysqli_num_rows($resource);
$row = mysqli_fetch_assoc($resource);

if($num > 0 ){




$resp['data'] = $row ;


}



$result = json_encode($resp); 

echo  $result
?>
