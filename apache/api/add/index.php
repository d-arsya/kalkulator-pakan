<?php 
require("../functions.php");
if(isset($_POST)){
    if(addUser($_POST["username"],$_POST["email"])){
        setcookie("username",$_POST["username"],time()+3600,"/");
        header("Location: ../../");
    }else{
        echo "<script>alert('GAGAL');window.location.href='../../'</script>";
    }
}
?>