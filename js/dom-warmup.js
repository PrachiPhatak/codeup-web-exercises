$('#btnChangeColor').click(function () {
    $('h1').css("background-color", "#FFC300")
})

$('p').dblclick(function () {
    $(this).css("font-size", "18px")
})

let hoverIn = function () {
    $(this).css("color", "red")
};
let hoverOut = function () {
    $(this).css("color", "black")
};
$('li').hover(hoverIn, hoverOut);
