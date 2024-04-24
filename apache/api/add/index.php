<?php
require("../functions.php");
if(addUser($_POST["uname"],$_POST["email"])){
    echo "<script>alert('Registrasi Berhasil');window.location.href='../../'</script>";
}else{
    echo "<script>alert('Username atau email anda telah digunakan');window.location.href='../../'</script>";
}
?>