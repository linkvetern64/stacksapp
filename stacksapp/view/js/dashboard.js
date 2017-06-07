/**
 * Created by Josh on 6/1/2017.
 */
function loadData(){
    new Ajax.Request( "openStreams.php",
        {
            method: "get",
            onSuccess: dataSuccess,
            onFailure: dataFailure
        }
    );
}

function dataSuccess(ajax){
    console.log(ajax.responseText);
    var stacks = JSON.parse(ajax.responseText);
    document.getElementById("broken").innerHTML += "Inactive computers : " + stacks.length;
}

function dataFailure(ajax){
    console.log("Failure");
    console.log(ajax.responseText);
}