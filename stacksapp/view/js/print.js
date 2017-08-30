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

    /*Bring up print window once the page has loaded*/
    window.print();
}

function printFailure(ajax){
    console.log(ajax.responseText);
}

