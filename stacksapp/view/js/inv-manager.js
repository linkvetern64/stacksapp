/**
 * Created by josh on 5/30/17.
 */

/**
 * populateInventory
 * @desc
 * On call this function will return the inventory of computers listed in the database
 * as AJAX responseText
 */
function populateInventory(){
    new Ajax.Request( "populateInventory.php",
        {
            method: "get",
            onSuccess: populateSuccess,
            onFailure: populateFailure
        }
    );
}

/**
 * populateSuccess
 * @param ajax - AJAX responseText
 * @desc
 *
 */
function populateSuccess(ajax) {

    var floors = ["floorOne", "floorTwo", "floorThree", "floorFour", "floorFive", "floorSix", "floorSeven"];
    var stacks = JSON.parse(ajax.responseText);

    /* Deletes all entries from the current table groupings */
    for (var i = 0; i < floors.length; i++) {
        //Gets container to populate entry listings
        var container = document.getElementById(floors[i]);

        /* Remove all previous entries from the list */
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    /* Appends the listings to each floor grouping */
    for (var j = 0; j < stacks.length; j++) {
        var floor = stacks[j]["floor"] - 1;
        container = document.getElementById(floors[floor]);

        var entry = document.createElement('div');
        var tag = stacks[j]["tag"];
        entry.className = 'stackLabel';
        entry.innerHTML =
            "<div class='underlay leftTopRed '>" +
            "<span class='glyphicon glyphicon-remove' onclick='deleteListing(\"" + tag + "\")'></span>" +
            "</div>" +
            "<div class='labelTitle'>" + tag + "</div>";

        container.appendChild(entry);
    }

    /* Adds append button to each section */
    for (i = 0; i < floors.length; i++) {
        container = document.getElementById(floors[i]);
        entry = document.createElement('div');
        entry.id = floors[i] + "Add";
        entry.dataFloor = (i + 1);
        entry.onclick = function(){updateListings(this)};
        entry.className = "ghostLabel";
        entry.innerHTML = "Add New " + "<span class='glyphicon glyphicon-plus s-gr'></span>";
        container.appendChild(entry);
    }
}

function populateFailure(ajax){
    console.log("ERROR");
    console.log(ajax.responseText);
}

/**
 * deleteListing
 * @param tag - the tag to be removed from the database
 * @desc:
 * The tag is passed into an edit function AJAX call which sends the tag and command
 * "delete" via GET to editInventory.php.  That file then removes the TAG from the database.
 */
function deleteListing(tag){
    if(confirm("Confirm delete for " + tag + "?")){
        edit(tag, "delete");
    }
}

/**
 * updateListings
 * @param value - Passed in HTML Element
 * @description Will be used for adding new elements to the inventory management table
 */
function updateListings(value){
    //Update modal here
    var floor = value.dataFloor;
    document.getElementById("myModalBtn").onclick = function() {submitNewLabels(floor)}
}

/**
 * @name edit
 * @param ID - TAG of computer you want to remove
 * @param type - Command you want to perform e.g. "delete"; "update"; "add"...
 * @desc
 * Once edit is called an AJAX call connects with editInventory.php where ID (tag) and type are sent.
 * The PHP file then interacts with the database.  On success editSuccess is called.
 */
function edit(ID, type){
    new Ajax.Request( "editInventory.php",
        {
            method: "get",
            parameters:{ID : ID,
                        type: type},
            onSuccess: editSuccess,
            onFailure: editFailure
        }
    );
}

/**
 * editSuccess
 * @param ajax - responseText from editInventory.php
 * @desc
 * On successful response the table is reloaded for inv-manager.php
 * allowing dynamic updates of the table.
 */
function editSuccess(ajax){
    console.log(ajax.responseText);
    populateInventory();
}

/**
 * editFailure
 * @param ajax - responseText from editInventory.php
 * @desc
 * On failure the error is printed to the console.
 */
function editFailure(ajax){
    console.log("FAILURE");
    console.log(ajax.responseText);
}

/**
 * populateTickets
 * @desc
 * populateTickets will be used as an onload function for tickets.php
 * this will grab all the unresolved computer reports from the database
 * and populate this page with actionable listings.
 */
function populateTickets(){
    new Ajax.Request( "getReportedTickets.php",
        {
            method: "get",
            onSuccess: ticketSuccess,
        }
    );
}

function ticketSuccess(ajax){
    let json = JSON.parse(ajax.responseText);
    let container = document.getElementById("container-tickets");
    let reports = json[Symbol.iterator]();

    /*Clears the current populated container*/
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let report of reports){
        console.log(report);

        let entry = document.createElement('div');
        entry.className = 'ticket-listing';


        entry.innerHTML =
                "<div class=\"ticket-title\">"+ report["tag"] +"</div>" +
                "<div class=\"ticket-body\">"+ report["report"] +"</div>" +
                "<div class=\"ticket-actions\">"+
                    "<button class=\"btn btn-info btn-align-left\">Assign</button>" +
                    "<button class=\"btn btn-success btn-align-right\">Resolve</button>" +
                "</div>";

        container.appendChild(entry);
    }

    /*

    * */


}

/**
 * submitNewLabels
 * @param floor - The floor you want to update the labels for
 * @desc
 * The tags are removed from the inv-manager popup modal and parsed for ';'
 * if a single entry is added then that is simply sent to editInventory.php
 * for addition.  If however the list is separated by (;) then that's is parsed and
 * each entry is added independently.
 */
function submitNewLabels(floor){
    var labels = document.getElementById("newLabel").value;
    var tags;

    /**
     * Change this to make it more robust
     */

    if(labels.includes(";")){
        tags = labels.split(";");
    }
    else if(labels.includes(",")){
        tags = labels.split(",");
    }
    else if(labels.includes(" ")){
        tags = labels.split(" ");
    }
    else{
        new Ajax.Request( "editInventory.php",
            {
                method: "get",
                parameters:{floor : floor,
                    type: "add",
                    ID : labels},
                onSuccess: submitSuccess,
                onFailure: submitFailure
            }
        );
        return;
    }

    new Ajax.Request( "editInventory.php",
        {
            method: "get",
            parameters:{floor : floor,
                        type: "add",
                        tags : JSON.stringify(tags)},
            onSuccess: submitSuccess,
            onFailure: submitFailure
        }
    );
}

/**
 * submitSuccess
 * @param ajax - responseText from editInventory.php
 * @desc
 * On success inventory is reloaded on the page.
 */
function submitSuccess(ajax){
    console.log("Success!");
    populateInventory();
}

function submitFailure(ajax){
    console.log("ERROR");
    console.log(ajax.responseText);
}