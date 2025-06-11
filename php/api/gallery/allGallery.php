<?php
header('Content-Type: application/json');

// DB connection
$host = 'localhost';
$db = 'rolifindia';
$user = 'root';  // change as needed
$pass = '';      // change as needed

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit;
}

// Only allow GET method
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT id, image FROM gallery ORDER BY id DESC";
    $result = $conn->query($query);

    $images = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $images[] = $row;
        }
    }

    echo json_encode([
        "message" => "Gallery images fetched successfully.",
        "data" => $images
    ]);
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only GET method is allowed."]);
}

$conn->close();
?>
