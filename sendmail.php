<?php
header("Access-Control-Allow-Origin: https://crazymerchants.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
 
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "invalid_method";
    exit;
}
 
// Common field
$email = isset($_POST['email']) ? trim($_POST['email']) : "";
 
// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "invalid_email";
    exit;
}
 
// Check whether it is FOOTER FORM or FULL CONTACT FORM
$businessname = $_POST['businessname'] ?? "";
$fullname     = $_POST['fullname'] ?? "";
$phone        = $_POST['phone'] ?? "";
$message      = $_POST['message'] ?? "";
 
$to = "leads@crazymerchants.com";
$headers  = "From: Crazy Merchants <leads@crazymerchants.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
 
// -------------------------
// CASE 1: FOOTER FORM ONLY 
// -------------------------
if ($fullname === "" && $phone === "" && $businessname === "" && $message === "") {
 
    $subject = "New Footer Lead - CrazyMerchants.com";
    $body  = "A new email subscription came from the footer form:\n\n";
    $body .= "Email: $email\n";
 
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
    exit;
}
 
// -------------------------
// CASE 2: FULL CONTACT FORM
// -------------------------
 
$subject = "New Lead Submission - CrazyMerchants.com";
 
$body  = "New Lead Submission:\n\n";
$body .= "Business Name: $businessname\n";
$body .= "Full Name: $fullname\n";
$body .= "Phone Number: $phone\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n\n";
 
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}