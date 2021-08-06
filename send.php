<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];


if ($email != "" && $name == "" && $phone = ""){
  $title = "Запрос на подписку - Universal";
  $body = "
  <h2>Новое обращение от пользователя.</h2>
  <b>$email</b> хочет подписаться на обновления новостного портала <b>Universal</b>
  ";
  header('location: subscribe.html');
}
else {
  header('location: index.html');
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'best.tour.plan.lashchev.dev@gmail.com'; // Логин на почте
    $mail->Password   = 'cYI1HkHp2D@Z#0Ew&&lS4GEXiu'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('best.tour.plan.lashchev.dev@gmail.com', 'Universal'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('andrew.lashchev15@gmail.com');


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}



?>