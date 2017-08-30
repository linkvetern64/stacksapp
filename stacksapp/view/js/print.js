/**
 * Created by josh on 8/30/17.
 */

/**
 * pullReport
 * @param date - date echoed in from PHP
 * @desc
 */
function pullReport(date){
    //Date follows the standard MM/DD/YYYY
    date = date.split("/");

    //Will be converted to YYYY-MM-DD
    date = date[2] + "-" + date[0] + "-" + date[1];

    new Ajax.Request( "loadReport.php",
        {
            method: "get",
            parameters: {date : date},
            onSuccess: printSuccess,
            onFailure: printFailure
        }
    );
}

/**
 * printSuccess
 * @param ajax - JSON stream of report
 * @desc
 *
 */
function printSuccess(ajax){
    var json = JSON.parse(ajax.responseText);
    console.log(json);
}

function printFailure(ajax){
    console.log(ajax.responseText);
}