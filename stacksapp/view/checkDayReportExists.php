<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 6/14/17
 * Time: 1:14 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

echo $db->reportExists($_GET["date"]);