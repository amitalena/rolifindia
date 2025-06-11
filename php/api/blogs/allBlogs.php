<?php
// CORS headers - MUST be at the top
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle OPTIONS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection
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

// Handle GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT id, title, description, date, image FROM blogs ORDER BY id DESC";
    $result = $conn->query($query);

    if ($result) {
        $blogs = [];

        while ($row = $result->fetch_assoc()) {
            $blogs[] = $row;
        }

        header('Content-Type: application/json');
        echo json_encode([
            "message" => "Blogs fetched successfully",
            "blogs" => $blogs
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Database query failed"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only GET method is allowed"]);
}

$conn->close();
?>
