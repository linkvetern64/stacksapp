/**
 * Created by josh on 8/30/17.
 * @author Joshua Standiford
 * @desc
 * This file is used to manage report.php.  And used in handling logic for printing
 */

var MISSING;

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
        }
    );

}

/**
 * printSuccess
 * @param ajax - JSON stream of report
 * @desc
 * This function is the success function call for pullReport
 * This function will populate the first side of the page with the errors listed
 *
 */
function printSuccess(ajax){
    var json = JSON.parse(ajax.responseText);
    var table = document.getElementById("print-table");
    var header = document.createElement('tr');

    header.innerHTML =  "<th class='tag'>Tag</th>" +
                        "<th class='report'>Report</th></tr>";

    table.appendChild(header);

    for(var i = 0; i < json.length; i++){
        var entry = document.createElement('tr');
        entry.innerHTML = "<td>"+ json[i]["tag"] +"</td><td>"+ json[i]["report"] +"</td>";

        table.appendChild(entry);
    }


}

/**
 * pullExistReport
 * @param date - the date requested
 * @desc
 * This function grabs the report that checks what computers didn't exist on this date.
 */
function pullExistReport(date){
    new Ajax.Request( "populateInventory.php",
        {
            method: "get",
            parameters: {date : date},
            onSuccess: pullExistSuccess
        }
    );
}

/**
 * pullExistSuccess
 * @param ajax - Response text containing stacks to populate printer page
 * @desc
 * This function will populate the tables for report.php.  This uses
 * 60 entries per table.  To change the page size, see printing.css.
 * to adjust the amount of entries per table, change COL_RESULTS to the
 * preferred number.
 */
function pullExistSuccess(ajax){
    var json = JSON.parse(ajax.responseText);
    var COL_RESULTS = 60;
    var table;
    var glyph;
    var section = 0;
    for(var j = 0; j < json.length; j++){
        //Loads 60 results per column
        if(!(j % COL_RESULTS)){
            ++section;
            id = "exists-table-" + section;
            table = document.getElementById(id);
        }

        var entry = document.createElement('tr');

        if(MISSING.indexOf(json[j]["tag"]) !== -1){
            glyph = "<span class='glyphicon glyphicon-remove'></span>";

        }
        else{
            glyph = "<span class='glyphicon glyphicon-ok'></span>";
        }

        entry.innerHTML = "<td>" + json[j]["tag"] + "</td><td>" + glyph + "</td>";


        table.appendChild(entry);
    }

    window.print();
    window.close();
}

/**
 * getMissingReports
 * @param date - The date requested
 * @desc
 * This function queries the DB for the missing computer reports
 */
function getMissingReports(date){
    new Ajax.Request( "getMissingReport.php",
        {
            method: "get",
            parameters: {date : date},
            onSuccess: getMissingSuccess
        }
    );
}

/**
 * getMissingSuccess
 * @param ajax - responsetext containing missing computers
 * @desc
 * This function will populate a global array with tags that are missing on the floor per date.
 */
function getMissingSuccess(ajax){
    MISSING = [];
    var json = JSON.parse(ajax.responseText);
    for(var i = 0; i < json.length; i++){
        MISSING.push(json[i]["tag"]);
    }
    console.log(MISSING);
}