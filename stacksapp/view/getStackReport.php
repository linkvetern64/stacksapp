<?php
/**
 * Created by IntelliJ IDEA.
 * User: Josh
 * Date: 8/23/2017
 * Time: 5:17 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();
$tag = $_GET["tag"];
echo json_encode($db->getStackReports($tag));