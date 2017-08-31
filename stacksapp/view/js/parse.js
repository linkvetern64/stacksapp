/**
 * Created by josh on 5/25/17.
 */
var FLOOR;
var data = [];

function submitReport(){
    if(confirm("Are you sure?")){
        console.log("Submitting report...");
        window.location.href = "issueArchive.php";
    }
}

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
        var tag = stacks[i]["tag"];
        entry.className = 'entry';
        entry.innerHTML = "<div class='pc-id'>" + tag + "</div>" +
            "<div id='right'>" +
            "<button  type='button' onclick='setData(\"" + tag + "\",\"" + FLOOR + "\");' class='btn btn-danger btn-sm inline-btn btn-align-right' data-toggle='modal' data-target='#myModal'>Report</button>" +
            //"<button  type='button' class='btn btn-danger btn-sm inline-btn  rej btn-align-right'><span class='glyphicon glyphicon-remove'></span></button>" +
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
        nav.innerHTML = "<button class='navBtnMargin' onclick='getStacksByFloor(--FLOOR)'><span class='glyphicon glyphicon-arrow-left'></span></button>" +
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

/**
 * Changes the title of the page for stacksCheck.php
 */
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

/**
 * setData
 * @param tag - tag of computer being reported
 * @param floor - floor of computer being reported
 * @desc
 * This function sets local data for user in other functions
 */
function setData(tag, floor){
    data = [];
    data["tag"] = tag;
    data["floor"] = floor;
}

/**
 * submit
 * @param type - Either resolved or reported
 * @returns {boolean} If the comment is empty, nothing will be submitted to the database
 * @desc
 * This function will check the comment box from the report modal.  Then the report
 * is sent to the DB via Ajax.
 */
function submit(type){
    if(!document.getElementById("comment").value.length){
        return false;
    }

    var tag = data["tag"];
    var floor = data["floor"];

    data = [];
    var comment = document.getElementById("comment").value;
    document.getElementById("comment").value = "";
    new Ajax.Request( "storeSessionData.php",
        {
            method: "get",
            parameters: {tag : tag,
                         type : type,
                         floor : floor,
                         comment : comment},
            onSuccess: submitSuccess,
            onFailure: submitFailure
        }
    );
}

/**
 * submitSuccess
 * @param ajax
 * @desc
 * debug function from submit function
 */
function submitSuccess(ajax){
    /* Used for debug statements */
    //console.log("Submitted successfully");
    console.log(ajax.responseText);
}

/**
 * submitFailure
 * @param ajax
 * @desc
 * debug function from submit function
 */
function submitFailure(ajax){
    /* Used for debug statements */
    console.log("Error");
    console.log(ajax.responseText);
}


/**
 * getDate
 * @returns {Date} - associate array with day, month, year indexs
 * @desc
 * Creates SQL Date style numbers.  An array is returned
 * of day, month and year.
 * Months go from 01 - 12
 * Days go from 01 - 31
 * Years will be like 2XXX
 * ---Unless this is still used 1,000 years in the future (most likely).  Then obviously
 * the years will be like 3XXX and so on.----
 */
function getDate(){
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    (month < 10 && month > 0) ? (month = "0" + month) : month;
    (day < 10 && day > 0) ? (day = "0" + day) : day;

    date["day"] = day;
    date["month"] = month;
    date["year"] = year;

    return date;
}

/**
 *
 */
function reportMissing(){
    var tag = data["tag"];
    var date = getDate();
    var year = date["year"];
    var month = date["month"];
    var day = date["day"];

    date = year + "-" + month + "-" + day;
    new Ajax.Request( "reportMissing.php",
        {
            method: "get",
            parameters: {tag : tag,
                        date : date},
            onSuccess: missingSuccess
        }
    );
}

//Beta function
function missingSuccess(ajax){
    console.log(ajax.responseText);
}