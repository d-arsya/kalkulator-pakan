<?php
require("../functions.php");
if(cekToken($_POST["username"],$_POST["token"])){
    setcookie("login",true,time()+(86400),"/");
}
header("Location: ../../")
?>