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

// make sure the DOM is loaded first
$(document).ready(function () {
    addHoverEvents(jqElements, backgroundReset, backgroundBlue);
    addHoverEvents($(".card"), backgroundReset, backgroundBlue);
    addImageChangeEvents();
    changeCardText();
});