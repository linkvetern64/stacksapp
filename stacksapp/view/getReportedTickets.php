<?php
/**
 * Created by IntelliJ IDEA.
 * User: Josh
 * Date: 8/24/2017
 * Time: 1:13 AM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

echo json_encode($db->getReportedComputers());