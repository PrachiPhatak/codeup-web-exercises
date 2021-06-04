let jqElements = $('.jqClass');
let backgroundBlue = 'lightblue';
let backgroundReset = '';
function addHoverEvents(elementsToBind, color1, color2){
    let handlerBlueBckGnd = function(){
        elementsToBind.css('background-color', color1);
        $(this).css('background-color', color2);
    }
    let handlerReset = function(){
        elementsToBind.css('backgroundReset', color1);
        $(this).css('backgroundReset', color2);
    }
    elementsToBind.hover(handlerBlueBckGnd,handlerReset);
}

function addImageChangeEvents(){
    let handlerBlueBckGnd = function(){
        $(this).attr("src", "cover/jazz-music-rubber-duck.jpg");
    }
    let handlerReset = function(){
        $(this).attr("src", "cover/question.png");
    }
    alert(handlerBlueBckGnd)
    $('.col-md-3').find('.card-img-top').hover(handlerBlueBckGnd,handlerReset);
}


// make sure the DOM is loaded first
$(document).ready(function() {
    addHoverEvents(jqElements, backgroundReset, backgroundBlue);
    addHoverEvents($(".card"), backgroundReset, backgroundBlue);
    addImageChangeEvents();
});