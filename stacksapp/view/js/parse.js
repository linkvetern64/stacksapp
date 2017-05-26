/**
 * Created by josh on 5/25/17.
 */
var FLOOR;

function getStacksByFloor(floor){
    FLOOR = floor
    new Ajax.Request( "getStacks.php",
        {
            method: "get",
            parameters: {floor : floor},
            onSuccess: stackSuccess,
            onFailure: stackFailure
        }
    );
}

/*
* This function populates the index.php page with the computers
*
*/
function stackSuccess(ajax){

    window.scrollTo(0,0);

    var stacks = JSON.parse(ajax.responseText);

    //Gets container to populate entry listings
    var container = document.getElementById("container");

    /* Remove all previous entries from the list */
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    /* Creates the children to be added to the list */
    for(var i = 0; i < stacks.length; i++){
        var entry = document.createElement('div');

        entry.className = 'entry';
        entry.innerHTML = "<div class='pc-id'>" + stacks[i]["tag"] + "</div>" +
            "<div id='right'>" +
            "<button  type='button' class='btn btn-danger btn-sm inline-btn'>Bad</button>" +
            "<button  type='button' class='btn btn-success btn-sm inline-btn rej'>Good</button>" +
            "</div>";

        container.appendChild(entry);
    }

    //Add footer navigation
    var nav = document.createElement('div');

    if(FLOOR === 1){
        nav.id = "pageNav";
        nav.innerHTML = "<button onclick='getStacksByFloor(++FLOOR)'><span class='glyphicon glyphicon-arrow-right'></span></button>";
    }
    else if(FLOOR > 1 && FLOOR < 7){
        nav.id = "pageNav";
        nav.innerHTML = "<button onclick='getStacksByFloor(--FLOOR)'><span class='glyphicon glyphicon-arrow-left'></span></button>" +
            "<button onclick='getStacksByFloor(++FLOOR)'><span class='glyphicon glyphicon-arrow-right'></span></button>";
    }
    else if(FLOOR === 7){
        nav.id = "pageNav";
        nav.innerHTML = "<button onclick='getStacksByFloor(--FLOOR)'><span class='glyphicon glyphicon-arrow-left'></span></button>";
    }

    container.appendChild(nav);

    changePageTitle();

}

/**
 * stackFailure
 * @param ajax - Response text from php file
 * @desc:
 * Calls if the AJAX fails to run, console output is printed
 */
function stackFailure(ajax){
    console.log("Error!");
    console.log(ajax.responseText);
}

function changePageTitle(){
    /*Change the page title*/
    var title = document.getElementById("floorTitle");
    var name = "";
    switch(FLOOR){
        case 1: name = "First"; break;
        case 2: name = "Second"; break;
        case 3: name = "Third"; break;
        case 4: name = "Fourth"; break;
        case 5: name = "Fifth"; break;
        case 6: name = "Sixth"; break;
        case 7: name = "Seventh"; break;
    }
    name += " Floor";
    title.innerHTML = name;
}