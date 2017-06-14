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
            "-- <a>New Report</a> --" +
            "</hr>";

        container.insertBefore(entry, container.firstChild);
    }
}

function reportFailure(ajax){
    console.log("ERROR");
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

/**
 * @name archiveSuccess
 * @param ajax - response text from getStackArchives.php
 * @desc
 * populates archives on stackReports.php for the month and year provided
 * to getArchives function
 */
function archiveSuccess(ajax){
    console.log(ajax.responseText);
}

function archiveFailure(ajax){

}