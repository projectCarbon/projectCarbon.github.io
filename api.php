<?php

//connect to database
// name of the database is "bms"
$db = mysqli_connect('localhost', 'root', '', 'bms');
if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
}

// get data from the table
$query = "SELECT * FROM `battery`";
$result = mysqli_query($db, $query);
// check if the query is successful
if (!$result) {
    die("Query failed: " . mysqli_error($db));
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
// print the data
while ($row = mysqli_fetch_assoc($result)) {
    $id = $row['id'];
    $voltage = $row['voltage'];
    $current = $row['temperature'];
    $percentage = $row['percentage'];
    //convert to json format
    $json = json_encode(array(
        'id' => $id,
        'voltage' => $voltage,
        'temperature' => $current,
        'percentage' => $percentage
    ));
}

echo $json;

?>