<?php
header('Content-Type: application/json');

// DB Connection
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? '';

    if (!$id) {
        http_response_code(400);
        echo json_encode(["message" => "Banner ID is required."]);
        exit;
    }

    // Get image path
    $result = $conn->query("SELECT image FROM homebanners WHERE id = $id");
    if ($result->num_rows === 0) {
        http_response_code(404);
        echo json_encode(["message" => "Banner not found."]);
        exit;
    }

    $row = $result->fetch_assoc();
    $imagePath = '../' . $row['image'];

    // Delete from DB
    $delete = $conn->query("DELETE FROM homebanners WHERE id = $id");

    if ($delete) {
        // Delete image file if it exists
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }

        echo json_encode(["message" => "Banner deleted successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to delete banner."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method is allowed."]);
}

$conn->close();
?>
