<?php
session_unset();
session_destroy();
var_dump($_SESSION);
setcookie("login", "", time() - 3600);
header("Location: index.php");
?>