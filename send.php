<?php
    if(($_POST['name']!== null)&&($_POST['email']!== null)&&($_POST['tel']!== null))

    {

        $to = 'constantin09@yandex.ru';
        $subject = 'Заказ верстки';

        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                        <p>Телефон: '.$_POST['email'].'</p>
                    </body>
                </html>
        ';
        $headers = "Content-type: text/html; charset=utf-8 \r\n";
        $headers = "From: Отправитель <from@example.com>\r\n";
        mail($to,$subject, $message, $headers);

    }

    header ('Location: https://batrak-off.github.io/')



?>
