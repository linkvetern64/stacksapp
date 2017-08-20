<?php
/**
 * Created by IntelliJ IDEA.
 * User: Josh
 * Date: 8/20/2017
 * Time: 2:25 AM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

$month = $_GET["month"];
$year = $_GET["year"];

$start = "2017" . "-" . "01" . "-01";
$end = $year . "-" . $month . "-31";

$results = $db->getArchivesFrom($start, $end);
$JSON = json_encode($results);
echo $JSON;