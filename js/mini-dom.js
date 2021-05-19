function showAllPTags(){
    console.log(document.getElementsByTagName("p"));
}
function showDivWithRedBorder(){
    console.log(document.getElementsByClassName("border-danger"));
}
function showElementWithTextDarkGreen(){
    console.log(document.getElementsByClassName("text-success"));
}

//function call

showAllPTags();

showDivWithRedBorder();

showElementWithTextDarkGreen();
