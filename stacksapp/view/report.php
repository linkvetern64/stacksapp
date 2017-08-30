<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 8/30/17
 * Time: 2:16 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');

//these variables come in through Shibboleth
$firstName = $_SERVER['givenName'];
$lastName = $_SERVER['sn'];
$fullName = $_SERVER['displayName'];
$mail = $_SERVER['mail'];
$campusID = $_SERVER['umbccampusid'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Stacks App</title>
    <link rel='shortcut icon' href='img/favicon.ico' type='image/x-icon'/ >

    <!-- Theme CSS -->
    <!--<link href="css/styles.css" type="text/css" rel="stylesheet">-->
    <link rel="stylesheet" href="css/printing.css" type="text/css" media="all">

    <!-- Custom Fonts -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- jQuery -->
    <!--<script src="vendor/jquery/jquery.min.js"></script>
    -->

    <!-- AJAX Prototype Import -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">jQuery.noConflict();</script>
    <script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js"></script>

    <!-- Boostrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script type="text/javascript">
        //var JQ = $.noConflict(); //Need JQUERY.NOCONFLICT();  Otherwise prototypes methods will be overwritten
        jQuery(function ($) {
            // The dollar sign will equal jQuery in this scope
            $( window ).on( "load", function() {
                /* Pull report of date and populate the page with styles */
                pullReport("<?php echo $_GET["date"]; ?>");
            });
        });
    </script>
</head>
<body>

<table id="print-table">
    <tr>
        <th class="tag">Tag</th>
        <th class="report">Report</th>
    </tr>
    <tr>
        <td>Test</td>
        <td>Test</td>
    </tr>
    <tr>
        <td>Test</td>
        <td>Test</td>
    </tr>
    <tr>
        <td>Test</td>
        <td>Test</td>
    </tr>
    <tr>
        <td>Test</td>
        <td>Test</td>
    </tr>
</table>

<script src="js/print.js"></script>
</body>
</html>
