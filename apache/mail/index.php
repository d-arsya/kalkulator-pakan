<?php
if(isset($_GET["email"])){
    $email_penerima = $_GET["email"];
    $username = $_GET["username"];
    $token = $_GET["token"];
    $ip = $_GET["ip"];
}else{
    header("Location: ../index.php");
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include('./Exception.php');
include('./PHPMailer.php');
include('./SMTP.php');

$email_pengirim = "kamaluddin.arsyad17@gmail.com";
$nama_pengirim = "Kalkulator Pakan";
$subjek = "Registrasi Aplikasi";
$pesan = "<body style='color:black;'><h1 style='text-align:center;'>Registrasi Kalkulator Pakan</h1><p>Terimakasih telah melakukan registrasi aplikasi kalkulator pakan. Berikut adalah data login anda</p><br><b>Email :</b><span>".$email_penerima."</span><br><b>Username :</b><span>".$username."</span><br><b>IP Address :</b><span>".$ip."</span><br><b>Token :</b><span>".$token."</span></body>";

$mail = new PHPMailer;
$mail -> isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->Username = $email_pengirim;
$mail->Password = "gbvhpihvfwmrflvb";
$mail->SMTPAuth= true;
$mail->Port= 465;
$mail->SMTPSecure= "ssl";
$mail->SMTPDebug= 2;
$mail->setFrom($email_pengirim,$nama_pengirim);
$mail->addAddress($email_penerima);
$mail->isHTML(true);
$mail->Subject= $subjek;
$mail->Body = $pesan;
$send = $mail->send();
header("Location: ../")
?>