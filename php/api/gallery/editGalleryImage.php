<?php

// Database connection
$host = 'localhost';
$db = 'rolifindia';
$user = 'root';  // Update with actual DB user
$pass = '';      // Update with actual DB password

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
        echo json_encode(["message" => "ID is required"]);
        exit;
    }

    // Get existing image path by ID
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

    // Handle image upload if provided
    $newImagePath = $imagePath; // Default to the existing image path

    if (isset($_FILES['image'])) {
        $image = $_FILES['image'];
        $imageName = time() . '-' . basename($image['name']);
        $uploadDir = __DIR__ . '/../uploads/gallery-images/';
        $newImagePath = 'uploads/gallery-images/' . $imageName;
        $uploadPath = $uploadDir . $imageName;

        // Create folder if it doesn't exist
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        // Move the uploaded file
        if (!move_uploaded_file($image['tmp_name'], $uploadPath)) {
            http_response_code(500);
            echo json_encode(["message" => "Failed to upload the image"]);
            exit;
        }

        // Delete the old image file if it exists
        if (file_exists(__DIR__ . '/../' . $imagePath)) {
            unlink(__DIR__ . '/../' . $imagePath);
        }
    }

    // Update the gallery entry with the new image path
    $updateStmt = $conn->prepare("UPDATE gallery SET image = ? WHERE id = ?");
    $updateStmt->bind_param("si", $newImagePath, $id);

    if ($updateStmt->execute()) {
        echo json_encode(["message" => "Gallery image updated successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to update gallery image"]);
    }

    $updateStmt->close();
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method is allowed"]);
}

$conn->close();
?>
