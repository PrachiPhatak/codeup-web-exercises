"use strict";
$(document).keyup(function (event) {
    console.log(event.keyCode);
    displayNoOfLives(event.keyCode);
});
function displayNoOfLives(keyStroke) {
    $("#lives").text(keyStroke)
    console.log()
}