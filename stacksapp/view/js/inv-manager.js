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
        entry.innerHTML = tag;

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
 * updateListings
 * @param value - Passed in HTML Element
 * @description Will be used for adding new elements to the inventory management table
 */
function updateListings(value){
    console.log("Floor : " + value.dataFloor + " ID = " + value.id + " Parent : " + value.parentNode.id)
}