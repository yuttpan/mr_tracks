<?php
header('Access-Control-Allow-Origin: * ' );

include_once 'DB.php';
// $_POST = json_decode(file_get_contents('php://input'),TRUE);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}
//$dep = $_POST['dep'] ;

 $sql="select  id,an,hn,ptname,thaidates(dchdate) tdchdate,thaidates(send_date) tsend_date,dchdate,user_s,send_date,
 user_r ,recivedate,deprecive,status_recive ,depart_name from mr_track m left outer join
 depart on m.deprecive = depart_id order by id desc";
$resource = mysqli_query($link, $sql);
$num = mysqli_num_rows($resource);
//$row = mysqli_fetch_assoc($resource);
if($num > 0) {
 while ($result = mysqli_fetch_assoc($resource)) {
//$rows[]=$result;
   $resp[] = $result;
//print_r($resp) ;
 }
}



$result1 = json_encode($resp);

echo  $result1 ;

?>
