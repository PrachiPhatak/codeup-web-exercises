$("form").submit(function (event) {
    $("#post-container").text($("input").first().val());
    alignText();
    event.preventDefault();
});



function alignText(){
    $("#post-container").css({
            "font-size": "64px",
            "color": "blue",
            "font-weight": "bold"
        }
    );
}