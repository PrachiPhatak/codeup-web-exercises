//TODO: add 3 images to your HTML page. give the element with an id of pink, a pink background using jQuery.
// give the element with an id of “orange” an orange background using jQuery.
// Once the window has finished loading, hide the div with a pink background color.
// Once the DOM has finished loading hide the div with the orange background color.

console.time("test");

$("#pink").css("border", "3px solid pink")
$("#orange").css("border", "3px solid orange")


window.onload = function (){
    console.time("window")
    $("#pink").hide();
    console.log("Window loaded")
}



$(document).ready(function (){
    console.time("document")
    $("#orange").hide();
    console.log("Document loaded")
})


console.timeEnd("test")
console.timeEnd("document")
console.timeEnd("window")