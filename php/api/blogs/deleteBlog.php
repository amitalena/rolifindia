<?php
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

// Allow only DELETE method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if ID is provided
    $id = $_POST['id'] ?? null;

    if (!$id || !is_numeric($id)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid or missing blog ID"]);
        exit;
    }

    // Fetch image path before deletion
    $stmt = $conn->prepare("SELECT image FROM blogs WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $blog = $result->fetch_assoc();
    $stmt->close();

    if (!$blog) {
        http_response_code(404);
        echo json_encode(["message" => "Blog not found"]);
        exit;
    }

    $imagePath = $blog['image'];

    // Delete blog from database
    $stmt = $conn->prepare("DELETE FROM blogs WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        // Delete the image file
        $fullImagePath = __DIR__ . '/../' . $imagePath;
        if (file_exists($fullImagePath)) {
            unlink($fullImagePath); // delete image
        }

        echo json_encode(["message" => "Blog deleted successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to delete blog"]);
    }

    $stmt->close();
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method is allowed"]);
}

$conn->close();
?>
