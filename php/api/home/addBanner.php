<?php
// Database connection
$host = 'localhost';
$db = 'rolifindia';
$user = 'root'; // update if needed
$pass = '';     // update if needed

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit;
}

// Only allow POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate image upload
    if (!isset($_FILES['image']) || $_FILES['image']['error'] !== 0) {
        http_response_code(400);
        echo json_encode(["message" => "Image is required"]);
        exit;
    }

    $image = $_FILES['image'];
    $imageName = time() . '-' . basename($image['name']);
    $uploadDir = __DIR__ . '/../uploads/banner-images/';
    $imagePath = 'uploads/banner-images/' . $imageName;
    $uploadPath = $uploadDir . $imageName;

    // Create directory if it doesn't exist
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Upload image
    if (!move_uploaded_file($image['tmp_name'], $uploadPath)) {
        http_response_code(500);
        echo json_encode(["message" => "Failed to upload image"]);
        exit;
    }

    // Insert into DB
    $stmt = $conn->prepare("INSERT INTO homebanners (image) VALUES (?)");
    $stmt->bind_param("s", $imagePath);

    if ($stmt->execute()) {
        echo json_encode([
            "message" => "Banner added successfully",
            "id" => $stmt->insert_id,
            "image" => $imagePath
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Database error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    http_response_code(405); // Method not allowed
    echo json_encode(["message" => "Only POST method allowed"]);
}

$conn->close();
?>
