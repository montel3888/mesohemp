<?php
include('config.php');
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST){
    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $profession = implode(', ', $_POST["proffesion"]);    
    $message = $_POST["message"];
    $date = date("Y-m-d h:i:s A");
    
    $create_inquiry_sql = "INSERT INTO `meso_inquiries`(`name`, `email`, `phone`, `profession`, `message`, `date`) VALUES (?,?,?,?,?,?)";
    $dbConnection->prepare($create_inquiry_sql)->execute([ $name, $email, $phone, $profession, $message, $date ]);

    $data = $_POST;
    // print_r($data);
    // echo $name.'  '.$email.'  '.$phone;
    $url = 'https://h.albato.ru/wh/38/1lfpreg/WEUrTDAa1%252F7a8CZ2zPsrQQtQEfnpxeFIhRTvrPueZh4%253D/';

    $ch = curl_init( $url );
    // # Setup request to send json via POST.
    $payload = json_encode( array( "customer"=> $data ) );
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );
    curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
    // # Return response instead of printing.
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
    // # Send request.
    $result = curl_exec($ch);
    curl_close($ch);
    // # Print response.
    echo "<pre>$result</pre>";
    
    $ip = $_SERVER['REMOTE_ADDR'];
    $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));

    // Load Composer's autoloader
    require 'vendor/autoload.php';
  
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
  
    try {
        //Server settings
        $mail->SMTPDebug = 2;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'yevgeniy.bagatskiy@korupharma.com';                     // SMTP username
        $mail->Password   = 'Powqb150693';                               // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
  
        //Recipients
        $mail->setFrom('noreply@gmail.com', 'Koru Pharmaceuticals Co Ltd');
        $mail->addAddress('info@korupharma.com');     // Add a recipient
  
        // Content
        $bodytext = '
        <div style="width:90%;margin:10px auto">
            <div class="adM">
                </div><div style="text-align:center"><div class="adM">
                    </div><img src="https://ci4.googleusercontent.com/proxy/zzAAgDMVJ8_bUYbDBQL_qgq4YI94ere6a-3fUG4vUeEsLEDnf_QvWD48RYh8cv6sbtDk45IdrFjGoSR6CQ=s0-d-e1-ft#https://korupharma.com/assets/img/logo.png" alt="" class="CToWUd">
                </div>
                <hr>
                <table style="width:90%;margin:0 auto;font-size:1.1em">
                    <tbody>
                        <tr>
                            <td>Name - </td>
                            <td>'. $name.'</td>
                        </tr>
                        <tr>
                            <td>Email Address - </td>
                            <td><a href="mailto:'. $email.'" target="_blank">'. $email.'</a></td>
                        </tr>
                        <tr>
                            <td>Phone Number- </td>
                            <td>'. $phone.'</td>
                        </tr>
                        <tr>
                            <td>Profession - </td>
                            <td>'. $profession.'</td>
                        </tr>
                        <tr>
                            <td>Message - </td>
                            <td>'. $message.'</td>
                        </tr>
                        <tr>
                            <td>IP:  </td>
                            <td>'. $ip.'</td>
                        </tr>
                        <tr>
                            <td>Country:  </td>
                            <td>'. $details->country.'</td>
                        </tr>
                        <tr>
                            <td>City:  </td>
                            <td>'. $details->city.'</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <div style="width:100%;padding:10px 0;text-align:center">
                    <a href="https://mesohemp.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://korupharma.com/&amp;source=gmail&amp;ust=1585367068091000&amp;usg=AFQjCNEdbVXT7mZ8fG5DDytgJhVbew4BuA">https://mesohemp.com/</a><div class="yj6qo"></div><div class="adL">
                </div>
            </div>
        </div>';    
  
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Mesohemp Website Inquiry';
        $mail->Body    = $bodytext;
        $mail->AltBody = $bodytext;
  
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
