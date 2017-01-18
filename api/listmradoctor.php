<?php
header('Access-Control-Allow-Origin: * ' );

include_once 'DB.php';




// $villagecode = isset($_GET['village_code']) ? $_GET['village_code'] : null;
// $password = isset($_GET['var_password']) ? $_GET['var_password'] : null;
//$resp['status'] = $username;

 $sql="select id, an,hn,ptname,thaidates(dchdate) tdchdate,thaidates(send_date) tsend_date,dchdate,user_s,send_date,
 user_r ,recivedate,doctor from mr_track_doctor";
$resource = mysqli_query($link, $sql);
$num = mysqli_num_rows($resource);
//$row = mysqli_fetch_assoc($resource);
if($num > 0) {
 while ($result = mysqli_fetch_assoc($resource)) {
//$rows[]=$result;
   $resp[] = $result;

 }
}



$result = json_encode($resp);

echo  $result ;

?>
