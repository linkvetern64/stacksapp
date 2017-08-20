<?php
/**
 * Created by IntelliJ IDEA.
 * User: Josh
 * Date: 8/20/2017
 * Time: 1:16 AM
 */

session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

$date = $_GET["date"];

$results = $db->getReport($date);

$JSON = json_encode($results);
echo $JSON;