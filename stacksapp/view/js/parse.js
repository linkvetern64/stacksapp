/**
 * Created by josh on 5/25/17.
 */

function getStacksByFloor(floor){

    new Ajax.Request( "getStacks.php",
        {
            method: "get",
            parameters: {floor : floor},
            onSuccess: stackSuccess,
            onFailure: stackFailure
        }
    );
}

function stackSuccess(ajax){

    var stacks = JSON.parse(ajax.responseText);

    //Gets container to populate entry listings
    var container = document.getElementById("container");

    for(var i = 0; i < stacks.length; i++){
        console.log(stacks[i])
    }
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