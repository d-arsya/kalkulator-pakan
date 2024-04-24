<?php
require("./api/functions.php");

session_start();
if(isset($_COOKIE["login"])){
    $_SESSION["login"]= true;
    setcookie("login", "", time() - 3600);
    setcookie("email", "", time() - 3600);
    setcookie("uname", "", time() - 3600);
}
if(isset($_GET["logout"])){
    session_unset();
    session_destroy();
    header("Location: ./");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Pakan</title>
    <script type="module" crossorigin src="./assets/index-DYWk_gCd.js"></script>
    <link rel="stylesheet" crossorigin href="./assets/index-CXlQ_1Pk.css">
    <link rel="apple-touch-icon" sizes="180x180" href="./icon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="./icon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./icon/favicon-16x16.png">
<link rel="manifest" href="./icon/site.webmanifest">
</head>
<body class="container">
<?php if(isset($_GET["login"])):?>
    <h1>Login</h1>
    <form action="./api/login.php" method="post">
        <input class="form-control mb-3 m-auto" required type="text" name="uname" placeholder="Username">
        <input class="form-control mb-3 m-auto" required type="text" name="email" placeholder="Email">
        <input class="btn btn-primary" type="submit" value="Login">
    </form>
<?php else:?>
    <?php if(isset($_SESSION["login"])):?>
        <div id="root"></div>
    <?php else:?>
        <?php if(!isset($_COOKIE["email"])):?>
            <a class="btn btn-success mb-3" href="./?login">LOGIN</a>
        <form action="./api/add/index.php" method="post">
            <input class="form-control mb-3" required type="text" placeholder="Username" name="uname">
            <input class="form-control mb-3" required type="text" placeholder="Email" name="email">
            <input class="btn btn-primary" type="submit" value="Registrasi">
        </form>
        <?php elseif(isActive($_COOKIE["uname"])-1):?>
            <form action="./api/token/index.php" method="post">
                <input type="text" class="form-control mb-3" required placeholder="Username" value="<?=$_COOKIE['uname']?>" name="username">
                <input type="text" class="form-control mb-3" required placeholder="Email" value="<?=$_COOKIE['email']?>" name="email">
                <input type="text" class="form-control mb-3" required placeholder="Token" name="token" id="">
                <input class="btn btn-primary" type="submit" value="Verifikasi">
            </form>
    <?php endif?>
    <?php endif?>   
<?php endif?>
<script src="style.js"></script>
</body>
</html>