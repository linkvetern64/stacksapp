<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 5/30/17
 * Time: 10:22 AM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

echo json_encode($db->getStacks());