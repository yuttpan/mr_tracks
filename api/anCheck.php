<?php
header('Access-Control-Allow-Origin: * ' );

include_once 'DB.php';


$_POST = json_decode(file_get_contents('php://input'),TRUE);

// $villagecode = isset($_GET['village_code']) ? $_GET['village_code'] : null;
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;

 $sql="select p.hn,an,concat(pname,fname,'  ',lname) as ptname,a.dchdate,thaidates(dchdate) tdchdate
 from ipt a
LEFT outer JOIN patient p  on a.hn = p.hn
where an = '$_POST'  ";
$resource = mysqli_query($linkhos, $sql);
$num = mysqli_num_rows($resource);
//$row = mysqli_fetch_assoc($resource);
if($num > 0) {
 while ($result = mysqli_fetch_assoc($resource)) {
//$rows[]=$result;
   $resp[] = $result;

 }
}



$results = json_encode($resp);

echo  $results ;

?>
