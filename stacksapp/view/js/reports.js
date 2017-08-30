/**
 * Created by josh on 6/13/17.
 */
/**
 * @name upDate
 * @param date - SQL Date format string
 * @returns {string|*} - string formatted for MM/DD/YYYY
 * @desc - function accepts parameter date, it then explodes the string
 * by '-' and returns a date format of MM/DD/YYYY
 */
function upDate(date){
    var parts = date.split("-");
    date = parts[1] + "/" + parts[2] + "/" + parts[0];
    return date;
}

/**
 * generateNewReport
 * @param day - int
 * @param month - int
 * @param year - int
 * @desc
 * Check the database if the entry exists.  If it doesn't
 * make a new entry at the top of stackReports.php
 */
function generateNewReport(){
    var date = getDate();
    var year = date["year"];
    var month = date["month"];
    var day = date["day"];

    date = year + "-" + month + "-" + day;
    new Ajax.Request( "checkDayReportExists.php",
        {
            method: "get",
            parameters: {date : date},
            onSuccess: reportSuccess,
            onFailure: reportFailure
        }
    );
}

/**
 * getDate
 * @returns {Date} - associate array with day, month, year indexs
 * @desc
 * Creates SQL Date style numbers.  An array is returned
 * of day, month and year.
 * Months go from 01 - 12
 * Days go from 01 - 31
 * Years will be like 2XXX
 * ---Unless this is still used 1,000 years in the future (most likely).  Then obviously
 * the years will be like 3XXX and so on.----
 */
function getDate(){
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    (month < 10 && month > 0) ? (month = "0" + month) : month;
    (day < 10 && day > 0) ? (day = "0" + day) : day;

    date["day"] = day;
    date["month"] = month;
    date["year"] = year;

    return date;
}

/**
 * reportSuccess
 * @param ajax - response text that should be either "0" or "1"
 */
function reportSuccess(ajax){
    var date = getDate();
    date = upDate(date["year"] + "-" + date["month"] + "-" + date["day"]);
    if(ajax.responseText === "0"){
        var container = document.getElementById("container-stack-reports");

        var entry = document.createElement('div');
        entry.className = 'report-date';

        entry.innerHTML =
            date +
            "<hr class='hr-higher'>" +
            "-- <a href='stacksCheck.php'>New Report</a> --" +
            "</hr>";

        container.insertBefore(entry, container.firstChild);
    }
}

function reportFailure(ajax){
    console.log(ajax.responseText);
}


/**
 * @name getArchives
 * @param month - current month as int
 * @param year - current year as int
 * @desc
 * This function ajax calls to getStackArchives.php and returns the
 * reports for the current month / year
 * On success: archiveSuccess is called
 * On failure: archiveFailure is called, prints to console the error
 */
function getArchives(){
    var date = getDate();

    var month = date["month"];
    var year = date["year"];

    new Ajax.Request( "getStackArchives.php",
        {
            method: "get",
            parameters: {month : month,
                         year : year},
            onSuccess: archiveSuccess,
            onFailure: archiveFailure
        }
    );
}

function getAllArchives(){
    var date = getDate();

    var month = date["month"];
    var year = date["year"];

    new Ajax.Request( "getAllArchives.php",
        {
            method: "get",
            parameters: {month : month,
                year : year},
            onSuccess: archiveSuccess,
            onFailure: archiveFailure
        }
    );
}


/**
 * @name archiveSuccess
 * @param ajax - response text from getStackArchives.php
 * @desc
 * populates archives on stackReports.php for the month and year provided
 * to getArchives function
 */
function archiveSuccess(ajax){
    var data = JSON.parse(ajax.responseText);
    var container = document.getElementById("container-stack-reports");

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    var tmpDate = "";
    for(var i = data.length - 1; data.length >= 0; i--){

        var entry = document.createElement('div');
        entry.className = 'report-date';

        tmpDate = upDate(data[i]["date"]);
        entry.innerHTML =
            tmpDate +
            "<hr class='hr-higher'>" +
            "-- <a data-toggle=\"modal\" data-target=\"#myModal\" onclick='loadReport(\"" + data[i]["date"] + "\")'>View Report</a> --" +
            dateCheckEditable(tmpDate) + "<br/>" +
            "-- <a href='report.php?date="+ tmpDate +"'>Print</a> --" +
            "</hr>";
        console.log(tmpDate);
        container.appendChild(entry);
    }
}

/* This function will allow editing on application if the dates match */
function dateCheckEditable(dateTmp){
    var date = getDate();
    date = upDate(date["year"] + "-" + date["month"] + "-" + date["day"]);
    if(dateTmp === date){
        return "<br/>--<a href='stacksCheck.php'>Edit</a>--";
    }
    return "";
}

function archiveFailure(ajax){
    console.log("Failure");
}

/**
 * loadReport
 * @param date - String of the date to load report of.
 */
function loadReport(date){
    new Ajax.Request( "loadReport.php",
        {
            method: "get",
            parameters: {date : date},
            onSuccess: loadSuccess
        }
    );
}

/**
 * @name loadSuccess
 * @param ajax response text from loadReport.php
 * @desc
 * Populates modal on reports page with listings
 */
function loadSuccess(ajax){
    var reports = JSON.parse(ajax.responseText);
    var by = document.getElementById("report-by");
    var container = document.getElementById("report-body");
    var title = document.getElementById("modalLabel");

    //Removes the children from the container
    /*
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }*/

    title.innerHTML = "Report: " + upDate(reports[0]["date"]);

    /* Creates listings for modal */
    for(var i = 0; i < reports.length; i++){
        var entry = document.createElement('div');
        var tag = reports[i]["tag"];
        var report = reports[i]["report"];
        var user = reports[0]["user"];

        entry.className = 'report-listing';
        entry.innerHTML =
            "<div class=\"report-title\">"+ tag +"</div>" +
            "<div class=\"report-desc\">"+ report +"</div>" +
            //"<div class=\"report-status\">Report Status: "+ status +"</div>" +
            "</div>";
        container.appendChild(entry);
    }

    /* Sets who wrote the report */
    by.innerHTML = "By: " + reports[0]["user"];
}