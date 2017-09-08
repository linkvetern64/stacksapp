<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 8/31/17
 * Time: 6:15 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();
date_default_timezone_set('America/New_York');

$date = $_GET["date"];

$result = json_encode($db->getMissingReport($date));
echo $result;