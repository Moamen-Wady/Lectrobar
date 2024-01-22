<?php
// Retrieve form data from $_POST superglobal
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Set recipient email address and email subject
$to = "info@lectrobar.com";
$subject = "New Website Message: $name";

// Build email body with form data
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Subject: $subject\n";
$body .= "Message: $message\n";

// Set email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
mail($to, $subject, $body, $headers);

// Redirect to thank-you page


header("Location: thankyou.html");

exit();
?>