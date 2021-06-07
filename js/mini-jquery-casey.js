let jqElements = $('.jqClass');
let backgroundBlue = 'lightblue';
let backgroundReset = '';

function addHoverEvents(elementsToBind, color1, color2) {
    let handlerBlueBckGnd = function () {
        elementsToBind.css('background-color', color1);
        $(this).css('background-color', color2);
    }
    let handlerReset = function () {
        elementsToBind.css('backgroundReset', color1);
        $(this).css('backgroundReset', color2);
    }
    elementsToBind.hover(handlerBlueBckGnd, handlerReset);
}

function addImageChangeEvents() {
    let handlerDuck = function () {
        $(this).find('.card-img-top').attr("src", "cover/jazz-music-rubber-duck.jpg");
    }
    let handlerReset = function () {
        $(this).find('.card-img-top').attr("src", "cover/question.png");
    }
    $('.col-md-3').hover(handlerDuck, handlerReset);
}

function changeCardText() {
    let handlerDuck = function () {
        $(this).find('.card-title').text("Here");
    }
    let handlerReset = function () {
        $(this).find('.card-title').text("Card");
    }
    $('.col-md-3').hover(handlerDuck, handlerReset);
}
// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

function addClickForLi(){
    $('.list-group-item').click(function (){
        $(this).toggleClass("upperCase");
        $(this).toggleClass("backgroundColor")
    })
}

// make sure the DOM is loaded first
$(document).ready(function () {
    addHoverEvents(jqElements, backgroundReset, backgroundBlue);
    addHoverEvents($(".card"), backgroundReset, backgroundBlue);
    addImageChangeEvents();
    changeCardText();
    addClickForLi();
});