<?php
$conn = new mysqli("localhost", "root", "", "mzantsi_sounds");
$q = $_GET['q'];
$result = $conn->query("SELECT title FROM songs WHERE title LIKE '%$q%' LIMIT 5");

$suggestions = [];
while ($row = $result->fetch_assoc()) {
  $suggestions[] = $row;
}
echo json_encode($suggestions);
?>
