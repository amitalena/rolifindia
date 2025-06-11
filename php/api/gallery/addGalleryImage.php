<?php
// DB connection
$host = 'localhost';
$db = 'rolifindia';
$user = 'root';  // change if needed
$pass = '';      // change if needed

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit;
}

// Directory config
$uploadDir = __DIR__ . '/../uploads/gallery-images/';
$uploadUrlPath = 'uploads/gallery-images/';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_FILES['image'])) {
        http_response_code(400);
        echo json_encode(["message" => "Image file is required."]);
        exit;
    }

    $image = $_FILES['image'];
    $imageName = time() . '-' . basename($image['name']);
    $targetPath = $uploadDir . $imageName;
    $dbImagePath = $uploadUrlPath . $imageName;

    // Create directory if not exists
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Move uploaded file
    if (move_uploaded_file($image['tmp_name'], $targetPath)) {
        // Insert into DB
        $stmt = $conn->prepare("INSERT INTO gallery (image) VALUES (?)");
        $stmt->bind_param("s", $dbImagePath);

        if ($stmt->execute()) {
            echo json_encode([
                "message" => "Image uploaded and saved to database.",
                "imagePath" => $dbImagePath
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Database error: " . $stmt->error]);
        }

        $stmt->close();
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to upload image."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method is allowed."]);
}

$conn->close();
?>
