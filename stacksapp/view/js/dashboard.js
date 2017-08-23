/**
 * Created by Josh on 6/1/2017.
 */

var STREAMS = [];
var REPORT = "";

function loadData(){
    new Ajax.Request( "openStreams.php",
        {
            method: "get",
            onSuccess: dataSuccess,
            onFailure: dataFailure
        }
    );

}

/**
 *
 * @param ajax
 * @desc
 * Populates the interactive computers
 */
function dataSuccess(ajax){
    //console.log(ajax.responseText);
    var stacks = JSON.parse(ajax.responseText);
    document.getElementById("broken").innerHTML += "Inactive computers : " + stacks.length;

    //Populate streams
    for(var i = 0; i < stacks.length; i++){
        STREAMS[i] = stacks[i]["label"];
    }
    driveFeed();
}

/**
 * @name DataFailure
 * @param ajax
 */
function dataFailure(ajax){
    console.log("Failure");
    console.log(ajax.responseText);
}

/**
 * @name driveFeed
 * @desc
 * This will populate the feed panel on the dashboard
 */
function driveFeed(){
    var feed = document.getElementById("inactive-feed");

    //check if local storage is initiated
    if(typeof(Storage) !== "undefined") {
        if(sessionStorage.index){
            sessionStorage.index = Number(sessionStorage.index)+1;
        }
        else{
            sessionStorage.index = 0;
        }
    }

    //This drives the feed, refreshes the stream with a new computer every second
    setInterval(function()
    {
            feed.innerHTML = STREAMS[++sessionStorage.index];

            sessionStorage.index >= STREAMS.length ? sessionStorage.index = 1 : 0;

        //Lasts for 1 second per new computer
    }, 1000);
}

/**
 * populateInventory
 * @desc
 * On call this function will return the inventory of computers listed in the database
 * as AJAX responseText
 */
function getStacks(){
    new Ajax.Request( "populateInventory.php",
        {
            method: "get",
            onSuccess: getStacksSuccess,
        }
    );

}

function getStacksSuccess(ajax){
    var stacks = JSON.parse(ajax.responseText);
    var data = [];
    eStacks = stacks[Symbol.iterator]();
    for(let stack of eStacks){
        getStackReport(stack["tag"]);
        data[stack["tag"]] = REPORT;
    }
    console.log(data);
}

function getStackReport(tag){
    new Ajax.Request( "getStackReport.php",
        {
            method: "get",
            parameters:{tag: tag},
            onSuccess: stackReportSuccess,
        }
    );
}

function stackReportSuccess(ajax){
    var json = JSON.parse(ajax.responseText);
    REPORT =  "";
    if(json.length){
       for(var i = 0; i < json.length; i++){
           REPORT += json[i]["report"] + " ";
       }
       console.log(REPORT);
    }
}