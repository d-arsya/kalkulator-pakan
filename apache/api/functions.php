<?php 
$conn = mysqli_connect("localhost","root","","kalkulator_pakan",3306);
$ip = $_SERVER["REMOTE_ADDR"];
function addUser($uname,$email){
    global $conn,$ip;
    $query = "INSERT INTO datauser VALUES('$uname','$email','',0)";
    try {
        mysqli_query($conn,$query);
        addToken($uname);
        return true;
    }catch (Exception $e){
        return false;
    }
}
function getUser($uname){
    global $conn,$ip;
    $query = "SELECT active FROM datauser WHERE userName='$uname' AND address='$ip'";
    if(mysqli_fetch_assoc(mysqli_query($conn,$query))["active"]){
        return true;
    }
    return false;    
}
function addToken($uname){
    global $conn,$ip;
    $token = "";
    while(strlen($token)<6){
        $token = $token.(string)rand(11,99);
    }
    $query = "INSERT INTO datatoken VALUES ('$token','$uname',0)";
    mysqli_query($conn,$query);
    $query = "UPDATE datauser SET address='$ip' WHERE userName='$uname'";
    mysqli_query($conn,$query);
    addDevice($uname);
}
function addDevice($uname){
    global $conn,$ip;
    $tanggal = date("Y-m-d H:i");
    $query = "INSERT INTO dataperangkat VALUES ('','$uname','$ip','$tanggal')";
    mysqli_query($conn,$query);
}
function cekToken($uname,$token){
    global $conn;
    $query = "SELECT token FROM datatoken WHERE username='$uname'";
    return $token==mysqli_fetch_assoc(mysqli_query($conn,$query))["token"];
}
function setActive($uname){
    global $conn;
    $query = "UPDATE datauser SET active=1 WHERE userName='$uname'";
    mysqli_query($conn,$query);
    $query = "DELETE FROM datatoken WHERE userName='$uname'";
    mysqli_query($conn,$query);
}
?>