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

function populateSuccess(ajax){

    var floors = ["floorOne", "floorTwo", "floorThree", "floorFour", "floorFive", "floorSix", "floorSeven"];
    var stacks = JSON.parse(ajax.responseText);

    /* Deletes all entries from the current table groupings */
    for(var i = 0; i < floors.length; i++){
        //Gets container to populate entry listings
        var container = document.getElementById(floors[i]);

        /* Remove all previous entries from the list */
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    for (var j = 0; j < stacks.length; j++) {
        var floor = stacks[j]["floor"] - 1;
        container = document.getElementById(floors[floor]);

        var entry = document.createElement('div');
        var tag = stacks[j]["tag"];
        entry.className = 'stackLabel';
        entry.innerHTML = tag;

        container.appendChild(entry);

    }
}

function populateFailure(ajax){
    console.log("ERROR");
    console.log(ajax.responseText);
}