<?php
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? '';

    if (!$id) {
        http_response_code(400);
        echo json_encode(["message" => "Banner ID is required."]);
        exit;
    }

    // Fetch existing banner
    $result = $conn->query("SELECT image FROM homebanners WHERE id = $id");
    if ($result->num_rows === 0) {
        http_response_code(404);
        echo json_encode(["message" => "Banner not found."]);
        exit;
    }

    $row = $result->fetch_assoc();
    $oldImagePath = '../' . $row['image']; // assuming relative path

    // If a new image is uploaded
    if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
        $newImage = $_FILES['image'];
        $newImageName = time() . '-' . basename($newImage['name']);
        $uploadDir = __DIR__ . '/../uploads/banner-images/';
        $newImagePath = 'uploads/banner-images/' . $newImageName;
        $uploadFullPath = $uploadDir . $newImageName;

        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        if (!move_uploaded_file($newImage['tmp_name'], $uploadFullPath)) {
            http_response_code(500);
            echo json_encode(["message" => "Image upload failed."]);
            exit;
        }

        // Delete old image
        if (file_exists($oldImagePath)) {
            unlink($oldImagePath);
        }

        // Update DB
        $stmt = $conn->prepare("UPDATE homebanners SET image = ? WHERE id = ?");
        $stmt->bind_param("si", $newImagePath, $id);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Banner updated successfully.", "image" => $newImagePath]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Database error: " . $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(["message" => "No image uploaded."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method allowed."]);
}

$conn->close();
?>
