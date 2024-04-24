<?php
require("functions.php");

$username = $_POST["uname"];
$email = $_POST["email"];
$ip = $_COOKIE["ip"];
$user = 1;
if($username!=""&&$email!=""&&$ip!=""){
    $user = getUser($username,$email);
    if($user["address"]==$ip&&$user["active"]==1){
        setcookie("login",true,time()+(86400),"/");
    }else{
        addToken($username,$email);
    }
}
header("Location: ../");
?>