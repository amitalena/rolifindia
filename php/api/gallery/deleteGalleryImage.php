<?php
// Database connection
$host = 'localhost';
$db = 'rolifindia';
$user = 'root'; // Change if necessary
$pass = '';     // Change if necessary

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit;
}

// Only allow POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;

    if (!$id) {
        http_response_code(400);
        echo json_encode(["message" => "Image ID is required"]);
        exit;
    }

    // Get image path
    $stmt = $conn->prepare("SELECT image FROM gallery WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        http_response_code(404);
        echo json_encode(["message" => "Gallery image not found"]);
        exit;
    }

    $stmt->bind_result($imagePath);
    $stmt->fetch();
    $stmt->close();

    // Delete image file
    $filePath = __DIR__ . '/../' . $imagePath;
    if (file_exists($filePath)) {
        unlink($filePath);
    }

    // Delete record from DB
    $deleteStmt = $conn->prepare("DELETE FROM gallery WHERE id = ?");
    $deleteStmt->bind_param("i", $id);

    if ($deleteStmt->execute()) {
        echo json_encode(["message" => "Gallery image deleted successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to delete from database"]);
    }

    $deleteStmt->close();
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method is allowed"]);
}

$conn->close();
