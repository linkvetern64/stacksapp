<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 5/25/17
 * Time: 7:49 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

$floor = $_GET["floor"];
$result = $db->getStacksByFloor($floor);

echo json_encode($result);


/* Print the tables from the given floor
foreach ($result as $k => $v) {
    echo $v["tag"] . "\n";
}
*/