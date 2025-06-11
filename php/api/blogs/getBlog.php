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

// Check if GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if id is passed in query string
    if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid or missing blog ID"]);
        exit;
    }

    $id = intval($_GET['id']);

    // Prepare and execute query
    $stmt = $conn->prepare("SELECT id, title, description, date, image FROM blogs WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $blog = $result->fetch_assoc();

        if ($blog) {
            header('Content-Type: application/json');
            echo json_encode([
                "message" => "Blog fetched successfully",
                "blog" => $blog
            ]);
        } else {
            http_response_code(404);
            echo json_encode(["message" => "Blog not found"]);
        }
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Database error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Only GET method is allowed"]);
}

$conn->close();
?>
