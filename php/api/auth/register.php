<?php
// register.php

// Set headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Database configuration
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rolifindia";

try {
    // Handle preflight OPTIONS request
    if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
        http_response_code(200);
        exit;
    }

    // Create database connection
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Extract fields from $_POST (form data)
        $email = $_POST['email'] ?? '';
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';

        // Validate required fields
        if (!empty($email) && !empty($username) && !empty($password)) {
            // Check if email or username already exists
            $sql_check = "SELECT id FROM users WHERE email = :email OR username = :username";
            $stmt_check = $conn->prepare($sql_check);
            $stmt_check->bindParam(':email', $email);
            $stmt_check->bindParam(':username', $username);
            $stmt_check->execute();

            if ($stmt_check->rowCount() > 0) {
                http_response_code(409); // Conflict
                echo json_encode(["message" => "Email or username already exists"]);
                exit;
            }

            // Hash the password
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Prepare SQL statement to insert user
            $sql = "INSERT INTO users (email, username, password) 
                    VALUES (:email, :username, :password)";
            $stmt = $conn->prepare($sql);
            
            // Bind parameters
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':password', $hashed_password);

            // Execute the query
            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode([
                    "message" => "User registered successfully",
                    "user" => [
                        "id" => $conn->lastInsertId(),
                        "email" => $email,
                        "username" => $username
                    ]
                ]);
            } else {
                http_response_code(503);
                echo json_encode(["message" => "Failed to register user"]);
            }
        } else {
            http_response_code(400);
            echo json_encode([
                "message" => "Incomplete data provided",
                "received" => $_POST
            ]);
        }
    } else {
        http_response_code(405);
        echo json_encode(["message" => "Method not allowed"]);
    }
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "message" => "Database error: " . $e->getMessage()
    ]);
}
?>