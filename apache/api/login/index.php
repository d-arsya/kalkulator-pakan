<?php
require("./../functions.php");
if(isset($_GET["username"])){
    if(getUser($_GET["username"])){
        setcookie("login",true,time()+1,"/");
    }else{
        setcookie("username",$_GET["username"],time()+100,"/");
    }
}
header("Location: ../..");
?>