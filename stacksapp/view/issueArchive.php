<?php
/**
 * Created by IntelliJ IDEA.
 * User: josh
 * Date: 6/13/17
 * Time: 3:16 PM
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
                getArchives();
                generateNewReport();
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
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="index.php">Dashboard</a></li>
                <li><a href="inv-manager.php">Update Inventory</a></li>
                <li><a href="tickets.php">Tickets</a></li>
                <li><a href="issueArchive.php">Archive</a></li>
                <li><a href="https://helix.lib.umbc.edu/schedule" target="_blank">Scheduler</a></li>
            </ul>
            <div class="col-sm-3 col-md-3" style="position:relative;display:inline-block;float:right;">
                <form class="navbar-form" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" onkeyup="pageSearch(this.value,'container-stack-reports');" name="q">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div><!-- /.nav-collapse -->
        <div id="sub" class="collapse">
            <ul class="nav navbar-nav">
                <li class="center"><a href="index.php">Dashboard</a></li>
                <li class="center"><a href="inv-manager.php">Update Inventory</a></li>
                <li class="center"><a href="tickets.php">Tickets</a></li>
                <li class="center"><a href="issueArchive.php">Archive</a></li>
            </ul>
        </div><!-- /.nav-collapse -->
    </div><!-- /.container -->
</nav><!-- /.navbar -->
<!-- End Nav. Bar -->

<!-- Title of page -->
<div id="floorTitle">
    Stack Reports
</div>
<br />

<!-- Display Content -->
<div id="container-stack-reports" class="container">
    <!-- Content populates here... -->
</div>
<button class="btn btn-success btn-center-long" onclick="getAllArchives()">
Load Old Reports
</button>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="modalLabel"><!-- Report Title Date --></h4>
            </div>
            <!-- Add Scroll Style -->
            <div id="report-body" class="modal-body scroll-style scrollbar">
                <!-- Reports populate from reports.js -->
            </div>
            <div class="modal-footer">
                <div id="report-by"></div>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
<script src="js/reports.js"></script>
<script src="js/search.js"></script>

</body>


</html>