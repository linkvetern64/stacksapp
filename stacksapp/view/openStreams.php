<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 6/6/17
 * Time: 11:24 AM
 */
$PAGE_SIZE = 4096;
$context = stream_context_create(array('http' => array('header'=>'Connection: close\r\n', 'timeout' => '5')));

$streams[0] = 'http://library.umbc.edu/signage/availability/computer_availability.php?json';





$json = file_get_contents($streams[0], null, null, 0, 8888888);



$curlSession = curl_init();
curl_setopt($curlSession, CURLOPT_URL, $streams[0]);
curl_setopt($curlSession, CURLOPT_BINARYTRANSFER, true);
curl_setopt($curlSession, CURLOPT_RETURNTRANSFER, true);

$jsonData = curl_exec($curlSession);
curl_close($curlSession);

echo strip_tags($jsonData);


if(!$json){
    echo "TOO BIG";
}
else {
    echo strip_tags($json);
}