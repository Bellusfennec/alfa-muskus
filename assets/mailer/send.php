<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$phone = $_POST['phone'];
$email = $_POST['email'];
$title = $_POST['title'];
$name = $_POST['name'];
$text = $_POST['text'];

//1. Выберите что Вам необходимо:
$mainch = $_POST['main'];
$main = implode(", ", $mainch);


// $langSt = $_POST['select'];
// $zapis = implode(", ", $langSt);



$qw1 = $_POST['quiz1'];
$qw2 = $_POST['quiz-2-text'];
if($_POST['quiz2']) {
    $qw2 = 'Не знаю';
}
$qw3 = $_POST['quiz-3-text'];
if($_POST['quiz3']) {
    $qw3 = 'Не знаю';
}
$qw4 = $_POST['quiz4'];
$qw333 = $_POST['quiz333'];
$qw5 = $_POST['quiz5'];
$qw6 = $_POST['quiz6'];
$qw7 = $_POST['quiz7'];

if($_POST['quiz4-no']) {
    $qw41w = 'Не знаю';
    $qw41h = 'Не знаю';
    $qw42w = 'Не знаю';
    $qw42h = 'Не знаю';
}

$qw5 = $_POST['quiz5'];
$qw6 = $_POST['quiz6'];
$zapis = implode(", ", $qw6);
$social = $_POST['social'];


//$service = " <br> Какие строительные услуги вам необходимы - ".$_POST['service'];
//$area = " <br> Какая площадь Вашего объекта, кв.м. - ".$_POST['area'];
//$place = " <br> Где вы будете делать стяжку - ".$_POST['place'];
//$time = " <br> Когда вам необходимо выполнить работы - ".$_POST['time'];
//$position = " <br> Удаленность от МКАД, км - ".$_POST['position'];
//$date = " <br> Удобная дата и время - ".$_POST['date'];
//$name = " <br> Имя - ".$_POST['name'];
//$text = " <br> Текст - ".$_POST['text'];





//$soc = " <br> Куда нужно видеонаблюдение - ".$_POST['video'];
//$why = " <br> Сколько вам потребуется камер - ".$_POST['cam'];
//$tms = " <br> Сколько дней требуется хранить запись - ".$_POST['days'];
//$types = " <br> Что для Вас важнее - ".$zapis;
//$usl = " <br> Где находится объект - ".$_POST['object'];
//$usl2 = " <br> В какое время вам удобно - ".$_POST['time'];

//$q1 =  ( $_POST['service'] ? $service : ' ' );
//$q2 = ( $_POST['area'] ? $area : ' ');
//$q3 = ( $_POST['place'] ? $place : ' ');
//$q4 = ( $_POST['time'] ? $time : ' ');
//$q5 = ( $_POST['position'] ?  $position : ' ');
//$q6 = ( $_POST['date'] ?  $date : ' ');
//$q7 = ( $_POST['name'] ?  $name : ' ');
//$q8 = ( $_POST['email'] ?  $email : ' ');
//$q9 = ( $_POST['text'] ?  $text : ' ');


// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'formsajt987@gmail.com'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = '473-Ghd-%sasd121'; // Ваш пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('formsajt987@gmail.com', 'Форма с сайта'); // Ваш Email
//$mail->addAddress('apkby@tut.by'); // Email получателя
$mail->addAddress('pr877@mail.ru'); // Email получателя
// $mail->addAddress('example@gmail.com'); // Еще один email, если нужно.


// Прикрепление файлов
// for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
//       $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
//       $filename = $_FILES['userfile']['name'][$ct];
//       if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
//           $mail->addAttachment($uploadfile, $filename);
//       } else {
//           $msg .= 'Failed to move file to ' . $uploadfile;
//       }
//   }

// Письмо
$mail->isHTML(true);
$mail->Subject = 'Форма с сайта '; // Заголовок письма
if($_POST['formname'] == 'test'){

$mail->Body    = '
Пользователь прошёл тест: <br>
1. В каком состоянии ваш катализатор? ' . $qw1 . ' <br>
2. Какое количество? ' . $qw2 . ' <br>
3. Введите марку автомобиля или номер катализатора ' . $qw333 . ' <br>
4. Как вам удобнее чтобы мы выкупили? ' . $qw4 . ' <br>
5. В какой пункт приема вам удобнее приехать?: ' . $qw5 . ' <br>
Выберите мессенджер: ' . $social . ' <br>
Телефон: ' . $phone .' <br>
E-mail: ' . $email . ' ';
}
else if($_POST['formname'] == 'test2') {
		$mail->Body    = '';
	}
else{

$mail->Body    =
$title . ' <br>' .
$email .
$text .
$q4 .
$q5 .
$q6 .
$q7 .
$q8 .
$social .
$main .

'<br>Телефон: ' . $phone . ' ';


}

// Результат
if(!$mail->send()) {
echo 'Message could not be sent.';
echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
echo 'ok';
}

?>