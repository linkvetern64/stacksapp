<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 6/6/17
 * Time: 11:24 AM
 */
$streams[0] = 'http://library.umbc.edu/signage/availability/computer_availability.php?json';


$curlSession = curl_init();
curl_setopt($curlSession, CURLOPT_URL, $streams[0]);
curl_setopt($curlSession, CURLOPT_BINARYTRANSFER, true);
curl_setopt($curlSession, CURLOPT_RETURNTRANSFER, true);

$jsonData = curl_exec($curlSession);
curl_close($curlSession);

echo strip_tags($jsonData);