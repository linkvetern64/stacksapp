/**
 * Created by josh on 5/30/17.
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

function editSuccess(ajax){
    console.log(ajax.responseText);
    populateInventory();
}

function editFailure(ajax){
    console.log("FAILURE");
    console.log(ajax.responseText);
}

/* get the labels from the modal in inv-manager */
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

function submitSuccess(ajax){
    console.log("Success!");
    populateInventory();
}

function submitFailure(ajax){
    console.log("ERROR");
    console.log(ajax.responseText);
}