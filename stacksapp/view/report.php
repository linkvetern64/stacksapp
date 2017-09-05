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

$date = $_GET["date"];



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

    <!-- BootStrap Glyphicons only -->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">

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
                    getMissingReports("<?php echo $date ?>");
                    pullReport("<?php echo $date ?>");
                    pullExistReport("<?php echo $date ?>");
            });
        });
    </script>
</head>
<body>

<div id="title">Stacks Report - <?php echo $_GET["date"];?> - By: Josh</div>

<table id="print-table">
<!-- Reports populated here... -->
</table>


<!-- Page break only works with block objects.  Will put content below on new page -->
<div id="print-table-container" class="page-break">
    <div id="title">Stacks Check - <?php echo $_GET["date"];?> - By: Josh</div>

    <table id="exists-table-1" class="table-col" >
        <tr>
            <th class="exist-tag">Tag</th>
            <th class="checked">Checked</th>
        </tr>
    </table >
    <table id="exists-table-2" class="table-col" >
        <tr>
            <th class="exist-tag">Tag</th>
            <th class="checked">Checked</th>
        </tr>
    </table >
    <table id="exists-table-3" class="table-col" >
        <tr>
            <th class="exist-tag">Tag</th>
            <th class="checked">Checked</th>
        </tr>
    </table >
    <table id="exists-table-4" class="table-col" >
        <tr>
            <th class="exist-tag">Tag</th>
            <th class="checked">Checked</th>
        </tr>
    </table >
    <table id="exists-table-5" class="table-col" >
        <tr>
            <th class="exist-tag">Tag</th>
            <th class="checked">Checked</th>
        </tr>
    </table >
</div>

<!-- Load scripts after page is loaded -->
<script src="js/print.js"></script>

</body>
</html>

