<?php
header('Content-Type: application/json');

// DB connection
$host = 'localhost';
$db = 'rolifindia';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit;
}

// Fetch all banners
$sql = "SELECT id, image FROM homebanners ORDER BY id DESC";
$result = $conn->query($sql);

$banners = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $banners[] = $row;
    }
    echo json_encode($banners);
} else {
    echo json_encode([]);
}

$conn->close();
?>
