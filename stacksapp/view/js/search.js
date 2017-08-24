/**
 * pageSearch
 * @param value - The search string
 * @param container - the content section to be searched
 */
function pageSearch(value, container){
    let contain = document.getElementById(container);
    let children = contain.children[Symbol.iterator]();

    for(let child of children){
        if(child.innerHTML.indexOf(value)  !== -1){
            child.style.display = "";
        }
        else{
            child.style.display = "none";
        }
    }
}
