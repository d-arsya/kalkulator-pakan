<?php 
require("./../functions.php");
if(isset($_POST["username"])&&isset($_POST["token"])){
    $res = cekToken($_POST["username"],$_POST["token"]);
    var_dump($res);
    if($res){
        setActive($_POST["username"]);
        $uname = $_POST["username"];
        $ip = $_POST["ip"];
        header("Location: ../login?username=$uname");
    }
}
header("Location: ../..");
?>