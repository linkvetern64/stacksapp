<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 6/6/17
 * Time: 11:24 AM
 */
$PAGE_SIZE = 4096;

$context = stream_context_create(array('http' => array('header'=>'Connection: close\r\n')));

$json = file_get_contents('http://library.umbc.edu/signage/availability/computer_availability.php?json', NULL, $context, 0, ($PAGE_SIZE) * 50);
echo strip_tags($json);