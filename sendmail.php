<?php
// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: text/plain");

// Ensure request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "error";
    exit;
}

// Sanitize input
function clean_input($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Receive fields
$businessname = isset($_POST['businessname']) ? clean_input($_POST['businessname']) : "";
$fullname     = isset($_POST['fullname']) ? clean_input($_POST['fullname']) : "";
$phone        = isset($_POST['phone']) ? clean_input($_POST['phone']) : "";
$email        = isset($_POST['email']) ? clean_input($_POST['email']) : "";
$message      = isset($_POST['message']) ? clean_input($_POST['message']) : "";

// Validate email
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "invalid_email";
    exit;
}

/*
------------------------------------------------------
 Detect which form was submitted
------------------------------------------------------
*/

// Footer form (email only)
$is_footer_form = empty($businessname) && empty($fullname) && empty($phone) && empty($message);

// Big form
$is_full_form = !empty($businessname) && !empty($fullname) && !empty($phone) && !empty($message);

// If neither is valid → error
if (!$is_footer_form && !$is_full_form) {
    echo "error";
    exit;
}

// Email Receiver
$to = "leads@crazymerchants.com";
$subject = $is_footer_form 
    ? "New Email Subscription – CrazyMerchants.com"
    : "New Lead From CrazyMerchants.com Website";

// Email Body
$body = "";

if ($is_footer_form) {
    $body .= "New email subscription received:\n\n";
    $body .= "Email: $email\n\n";
} else {
    $body .= "New Lead Submission:\n\n";
    $body .= "Business Name: $businessname\n";
    $body .= "Full Name: $fullname\n";
    $body .= "Phone Number: $phone\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n\n";
}

// Headers
$headers  = "From: Crazy Merchants <no-reply@crazymerchants.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send Email
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>
