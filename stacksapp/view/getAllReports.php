<?php
/**
 * Created by IntelliJ IDEA.
 * User: Josh
 * Date: 8/21/2017
 * Time: 5:17 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');

$db = new DB();

$result = json_encode($db->getAllReports());

echo $result;