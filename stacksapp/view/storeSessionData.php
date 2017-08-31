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
date_default_timezone_set('America/New_York'); 

/* Data sent from AJAX */
$tag = $_GET["tag"];
$type = $_GET["type"];
$floor = $_GET["floor"];
$comment = $_GET["comment"];

/* Populated from Shibboleth */
$firstName = $_SERVER['givenName'];
$lastName = $_SERVER['sn'];
$fullName = $_SERVER['displayName'];
$mail = $_SERVER['mail'];
$campusID = $_SERVER['umbccampusid'] = "test_user";


/* Data to send to Database */
$data["campusID"] = $campusID;
$data["date"] = date("Y-m-d");
$data["report"] = $comment;
$data["tag"] = $tag;
$data["floor"] = $floor;
$data["resolved"] = ($type === "resolved");

/* Debug Output */
//echo $date;

/* Submission to database */
$db->createReport($data);

