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

    pullExistReport(date);

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
    var table = document.getElementById("print-table");
    var header = document.createElement('tr');

    header.innerHTML =  "<th class='tag'>Tag</th>" +
                        "<th class='report'>Report</th></tr>";

    table.appendChild(header);

    for(var i = 0; i < json.length; i++){
        console.log(json[i]);
        var entry = document.createElement('tr');
        entry.innerHTML = "<td>"+ json[i]["tag"] +"</td><td>"+ json[i]["report"] +"</td>";

        table.appendChild(entry);
    }


}

function printFailure(ajax){
    console.log(ajax.responseText);
}

function pullExistReport(date){
    new Ajax.Request( "populateInventory.php",
        {
            method: "get",
            parameters: {date : date},
            onSuccess: pullExistSuccess
        }
    );
}

function pullExistSuccess(ajax){
    var json = JSON.parse(ajax.responseText);
    var iter = Math.ceil(json.length / 60);
    var COL_RESULTS = 63;
    var table;

    var section = 0;
    for(var j = 0; j < json.length; j++){
        //Loads 60 results per column
        if(!(j % COL_RESULTS)){
            ++section;
            id = "exists-table-" + section;
            table = document.getElementById(id);
        }

        var entry = document.createElement('tr');
        entry.innerHTML = "<td>"+ json[j]["tag"] +"</td><td>"+ "<span class='glyphicon glyphicon-ok'></span>" +"</td>";
        table.appendChild(entry);
    }
}