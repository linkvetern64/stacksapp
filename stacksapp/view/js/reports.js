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
 * @name getArchives
 * @param month - current month as int
 * @param year - current year as int
 * @desc
 * This function ajax calls to getStackArchives.php and returns the
 * reports for the current month / year
 * On success: archiveSuccess is called
 * On failure: archiveFailure is called, prints to console the error
 */
function getArchives(month, year){
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