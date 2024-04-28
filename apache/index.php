<?php
require("./api/functions.php");
var_dump($_SERVER["REMOTE_ADDR"]);
session_start();
if (isset($_COOKIE["login"]) && $_COOKIE["login"]) {
    setcookie("login", "", time() - 10, "/");
    setcookie("username", "", time() - 10, "/");
    $_SESSION["login"] = true;
}
if (isset($_GET["logout"])) {
    $_SESSION["login"] = false;
    setcookie("username", "", time() - 10, "/");
    header("Location: ./");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Pakan</title>
    <script src="./a/pakan/style.js"></script>
    <link rel="stylesheet" href="./a/pakan/style.css">
    <script type="module" crossorigin src="./assets/index-DYWk_gCd.js"></script>
    <link rel="stylesheet" crossorigin href="./assets/index-CXlQ_1Pk.css">
    <link rel="apple-touch-icon" sizes="180x180" href="./icon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="./icon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./icon/favicon-16x16.png">
<link rel="manifest" href="./icon/site.webmanifest">
</head>

<body class="container">
    <h1>KALKULATOR PAKAN</h1>
    <?php if (isset($_SESSION["login"]) && $_SESSION["login"]) : ?>
        <div id="root"></div>
        <?php else : ?>
        <?php if (isset($_COOKIE["username"])) : ?>
            <form action="./api/token/index.php" method="post">
                <input type="text" name="username" placeholder="Username" value="<?= $_COOKIE['username'] ?>" class="form-control my-4">
                <input type="text" name="token" placeholder="Token" class="form-control my-4">
                <input type="submit" class="btn btn-primary" value="Verifikasi">
                <a href="https://wa.me/6289636055420?text=Permisi, saya ingin meminta token verifikasi untuk akun <?=$_COOKIE['username']?>" target="_blank" class="btn btn-success">Admin</a>
            </form>
            <?php elseif(isset($_GET["login"])) : ?>
            <a class="btn btn-primary my-4 float-end" href="./">Registrasi</a>
            <form action="./api/login/index.php" method="get">
                <input type="text" name="username" placeholder="Username" class="form-control my-4">
                <input type="submit" class="btn btn-success" value="Login">
            </form>
        <?php else : ?>
            <a class="btn btn-success my-4 float-end" href="?login">Login</a>
            <form action="./api/add/index.php" method="post">
                <input type="text" name="username" placeholder="Username" class="form-control my-4">
                <input type="text" name="email" placeholder="Email" class="form-control my-4">
                <input type="submit" class="btn btn-primary" value="Registrasi">
            </form>
        <?php endif; ?>
    <?php endif; ?>
    
</body>

</html>