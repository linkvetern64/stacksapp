<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 5/31/17
 * Time: 10:14 AM
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

    <!-- Bootstrap Core CSS -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Theme CSS -->
    <!--<link href="css/styles.css" type="text/css" rel="stylesheet">-->
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
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
               getStacksByFloor(1);
            });

            $(document).ready(function () {
                $('[data-toggle="offcanvas"]').click(function () {
                    $('.row-offcanvas').toggleClass('active')
                });
            });
        });
    </script>
</head>
<body>
<!-- Navigation Bar -->
<nav class="navbar navbar-fixed-top navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sub" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">LITS Stacks App</a>
        </div>
        <div id="sub" class="collapse">
            <ul class="nav navbar-nav">
                <li class="center" data-toggle="collapse" data-target="#sub" onclick="getStacksByFloor(1);"><a >1st Floor</a></li>
                <li class="center" data-toggle="collapse" data-target="#sub" onclick="getStacksByFloor(2);"><a >2nd Floor</a></li>
                <li class="center" data-toggle="collapse" data-target="#sub" onclick="getStacksByFloor(3);"><a >3rd Floor</a></li>
                <li class="center" data-toggle="collapse" data-target="#sub" onclick="getStacksByFloor(4);"><a >4th Floor</a></li>
                <li class="center" data-toggle="collapse" data-target="#sub" onclick="getStacksByFloor(5);"><a >5th Floor</a></li>
                <li class="center" data-toggle="collapse" data-target="#sub" onclick="getStacksByFloor(6);"><a >6th Floor</a></li>
                <li class="center" data-toggle="collapse" data-target="#sub" onclick="getStacksByFloor(7);"><a >7th Floor</a></li>
            </ul>
        </div><!-- /.nav-collapse -->
    </div><!-- /.container -->
</nav><!-- /.navbar -->
<!-- End Nav. Bar -->

<!-- Title of page -->
<div id="floorTitle">
    <!-- Floor Title goes here... -->
</div>
<br />

<!-- Display Content -->
<div id="container" class="container">
    <!-- Content populates here... -->
    <!-- Ajax to update session variable. Confirming on last page submits it all -->
    
</div>
<button class="btn-center-long btn btn-success" onclick="submitReport()">Submit Report</button>
<!-- Modal -->
<div class="modal fade sticky-top" id="myModal" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Describe the issue:</h4>
            </div>
            <div class="modal-body">
                <span class="glyphicon glyphicon-play animation-rotate" data-toggle="collapse" data-target="#comment"></span>&nbsp; Open TextArea <br/>
                <textarea id="comment" placeholder="Enter text here..." class="collapse"></textarea>
                <span class="glyphicon glyphicon-play animation-rotate" data-toggle="collapse" data-target="#commonReports"></span>&nbsp; Common Responses <br/>
                <div id="commonReports" class="collapse">
                    Network, HDD, Power, Image
                </div>
            </div>
            <div class="modal-footer" style="text-align:center;">
                <button type="button" onclick="return submit('resolved');" class="btn btn-success" data-dismiss="modal">Resolved</button>
                <button type="button" onclick="return submit('reported');" class="btn btn-info" data-dismiss="modal">Report</button>
                <button type="button" onclick="reportMissing();" class="btn btn-warning" data-dismiss="modal">Missing</button>
            </div>
        </div>
    </div>
</div>


<!-- Footer Content -->
<hr>
<footer style="text-align:center;font-size:.8em;">
    <p>Created By: Joshua Standiford</p>
</footer>


<!-- Load scripts at the end -->
<script src="js/parse.js"></script>
</body>


</html>