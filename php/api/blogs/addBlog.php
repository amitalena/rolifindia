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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['title'] ?? '');
    $description = trim($_POST['description'] ?? '');
    $date = trim($_POST['date'] ?? '');

    if (!$title || !$description || !$date || !isset($_FILES['image'])) {
        http_response_code(400);
        echo json_encode(["message" => "All fields are required."]);
        exit;
    }

    // Handle image upload
    $image = $_FILES['image'];
    $imageName = time() . '-' . basename($image['name']);
    $uploadDir = realpath(__DIR__ . '/../uploads/blog-images');

    if (!$uploadDir) {
        $uploadDir = __DIR__ . '/../uploads/blog-images/';
    }

    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $uploadPath = rtrim($uploadDir, '/') . '/' . $imageName;

    if (!move_uploaded_file($image['tmp_name'], $uploadPath)) {
        http_response_code(500);
        echo json_encode(["message" => "Image upload failed."]);
        exit;
    }

    $imagePath = '/uploads/blog-images/' . $imageName;

    $stmt = $conn->prepare("INSERT INTO blogs (title, description, date, image) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $title, $description, $date, $imagePath);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Blog added successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Database error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method is allowed."]);
}

$conn->close();
?>
