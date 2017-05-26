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
    console.log("Success!");
    console.log(ajax.responseText);
    JSON.parse()

}

function stackFailure(ajax){
    console.log("Error!");
    console.log(ajax.responseText);
}