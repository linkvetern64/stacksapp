<?php
/**
 * Created by:
 * User: Josh
 * Date: 4/29/2017
 * Time: 6:58 PM
 */
session_start();
require_once(dirname(__FILE__) . '/../load.php');

function populate(){
    $db = new DB();
    $db->testConnection();
    $file = "stacks/LIB1.txt";
    $handle = fopen($file, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {

            echo "<div class=\"entry\">
                     <div class=\"pc-id\">$line</div>
                     <div id=\"right\">
                        <button  type=\"button\" class=\"btn btn-danger btn-sm inline-btn\">Bad</button>
                        <button  type=\"button\" class=\"btn btn-success btn-sm inline-btn rej\">Good</button>
                    </div>
                 </div>";
        }
        fclose($handle);
    } else {
        // error opening the file.
    }
}

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


    <script type="text/javascript">
        //var JQ = $.noConflict(); //Need JQUERY.NOCONFLICT();  Otherwise prototypes methods will be overwritten
        jQuery(function ($) {
            // The dollar sign will equal jQuery in this scope
            $('.modal')
                .on('show.bs.modal', function() {
                    populate(this.id);
                });
        });
    </script>
</head>
<body>
<!-- Navigation Bar -->
<nav class="navbar navbar-fixed-top navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">LITS Stacks App</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#home">Home</a></li>
                <li><a href="#1st">1st</a></li>
                <li><a href="#2nd">2nd</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- End Nav. Bar -->

<!-- Title of page -->
<div id="floorTitle" style="width:100%;text-align:center;font-size:2em;">First Floor</div>
<br />

<!-- Display Content -->
<div id="container" class="container">
    <?php populate(); ?>
</div>

<!-- Load scripts at the end -->
<script src="js/parse.js"></script>
</body>


</html>