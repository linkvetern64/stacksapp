<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 5/30/17
 * Time: 1:03 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');
$db = new DB();



$type =  $_GET["type"];
$tag = $_GET["ID"];
$name = $_GET["name"];
$tags = json_decode(stripslashes($_GET['tags']));
$floor = $_GET["floor"];
//Works
if(strtolower($type) === "delete"){
    $db->removeItem($tag);
}
else if(strtolower($type) === "update"){
//$db->
}
else if(strtolower($type) === "add"){
    if(!isset($tags)){
        $data["tag"] = $tag;
        $data["floor"] = $floor;
        $db->addItem($data);
    }
    else {
        foreach ($tags as $t) {
            if (strlen($t)) {
                $data["tag"] = $t;
                $data["floor"] = $floor;
                $db->addItem($data);
            }
        }
    }
}
else{
    echo "Not a valid command from EditInventory.php";
}