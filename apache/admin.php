<?php
require("./api/functions.php");
$tokens = getToken();
if(isset($_GET["token"])){
    echo "dahd";
    $target = sendMail($_GET["token"]);
    header("Location: ./mail/index.php?username=".$target["username"]."&email=".$target["email"]."&token=".$target["token"]."&ip=".$target["address"]);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="container">
    <table class="table">
        <thead>
            <tr>
                <th>UserName</th>
                <th>Token</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($tokens as $token):?>
                <tr>                    
                    <td><?=$token['userName']?></td>
                    <td><?=$token['token']?></td>
                    <td><a href="./admin.php?token=<?=$token['token']?>">Send</a></td>
                </tr>
                <?php endforeach?>
            </tbody>
            
        </table>
        <script src="style.js"></script>
    </body>
    </html>