<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 8/31/17
 * Time: 3:02 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();
date_default_timezone_set('America/New_York');


$data["campusID"] = $_SERVER['umbccampusid'] = "TEST099";
$data["tag"] = $_GET["tag"];
$data["date"] = $_GET["date"];

$db->reportMissing($data);