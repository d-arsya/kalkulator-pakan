<?php
$conn = mysqli_connect("localhost","root","","kalkulator_pakan",3306);
$ipdata = json_decode(file_get_contents("https://api.ipify.org/?format=json#"))->ip;
setcookie("ip", $ipdata, time() + 3600,"/");
function getUsers(){
    global $conn;
    $result = mysqli_query($conn,"SELECT * FROM datauser");
    $allData = [];
    while($ini=mysqli_fetch_assoc($result)){
        $allData[]=$ini;
    }
    return $allData;
}
function getUser($uname,$email){
    global $conn;
    $result = mysqli_query($conn,"SELECT * FROM datauser WHERE username='$uname' OR email='$email'");        
    return mysqli_fetch_assoc($result);
}
function addUser($uname,$email){
    global $conn;
    global $ipdata;
    $exist = getUser($uname,$email);
    if($exist){
        return false;
    }
    $query = "INSERT INTO datauser VALUES ('$uname','$email','$ipdata',0)";
    mysqli_query($conn,$query);
    addToken($uname,$email);
    return true;
}
function addToken($uname,$email){
    global $conn;
    global $ipdata;
    $token = "";
    while(strlen($token)<6){
        $token = $token.(string)rand(11,99);
    }
    $query = "INSERT INTO datatoken VALUES ('$token','$uname')";
    mysqli_query($conn,$query);
    setcookie("email",$email,time()+(86400),"/");
    setcookie("uname",$uname,time()+(86400),"/");
    setcookie("ip",$ipdata,time()+(86400),"/");
    updateAddress($uname);
}
function getToken(){
    global $conn;
    $result = mysqli_query($conn,"SELECT * FROM datatoken");
    $allData = [];
    while($ini=mysqli_fetch_assoc($result)){
        $allData[]=$ini;
    }
    return $allData;
}
function sendMail($token){
    global $conn;
    $query = "SELECT u.*, t.* FROM datauser u INNER JOIN datatoken t ON u.username = t.username WHERE t.token = '$token'";
    $res = mysqli_fetch_assoc(mysqli_query($conn,$query));
    return $res;
}
function isActive($uname){
    global $conn;
    $query = "SELECT active FROM datauser WHERE username='$uname'";
    $result = mysqli_query($conn,$query);
    $allData = [];
    while($ini=mysqli_fetch_assoc($result)){
        $allData[]=$ini;
    }
    return (int)$allData[0]["active"]-1;
    
}
function cekToken($uname,$token){
    global $conn;
    $query = "SELECT * FROM datatoken WHERE username='$uname' AND token='$token'";
    $result = mysqli_query($conn,$query);
    $allData = [];
    deleteToken($token);
    while($ini=mysqli_fetch_assoc($result)){
        $allData[]=$ini;
    }
    return $allData;
}
function deleteToken($token){
    global $conn;
    activateAccount($token);
    $query = "DELETE FROM datatoken WHERE token='$token'";
    mysqli_query($conn,$query);
}
function updateAddress($uname){
    global $conn;
    global $ipdata;
    $query = "UPDATE datauser SET address='$ipdata' WHERE username='$uname'";
    mysqli_query($conn,$query);
}
function activateAccount($token){
    global $conn;
    $query = "UPDATE datauser SET active = 1 WHERE username IN (SELECT u.username FROM datauser u INNER JOIN datatoken t ON u.username = t.username WHERE t.token = '$token')";
    mysqli_query($conn,$query);
}
?>