<?php
/**
 * Created by IntelliJ IDEA.
 * User: Josh
 * Date: 5/26/2017
 * Time: 1:11 AM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();

$tag = $_GET["tag"];
$type = $_GET["type"];
$floor = $_GET["floor"];
$comment = $_GET["comment"];

if(!isset($_SESSION[$floor])){
    $_SESSION[$floor] = [];
}

array_push($_SESSION[$floor], [$tag, $type, $comment]);

foreach($_SESSION[$floor] as $k=>$v) {
    print_r($v);
    foreach($v as $l){
        echo $l;
    }
}