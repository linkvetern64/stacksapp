<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 6/13/17
 * Time: 4:58 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

$month = $_GET["month"];
$year = $_GET["year"];

echo $month . " / " . $year;