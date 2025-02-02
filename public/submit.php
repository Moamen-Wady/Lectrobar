<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$activity = $_POST['activity'];
$residence = $_POST['residence'];
$notes = $_POST['notes'];

$to = " moamen.wady@gmail.com";
$subject = "New Daman profile form submission: $name";

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Activity: $activity\n";
$body .= "Residence: $residence\n";
$body .= "Notes: $notes\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
} else {
    echo "Failed to send message.";
}
exit();
?>