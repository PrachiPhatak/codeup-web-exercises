// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values

(function () {
    "use strict";


    let me = {
        name: "prachi",
        kids: [
            {name: "Aarya", age: 10},
            {name: "Shreya", age: 7}
        ],
        challenges: {
            one: "noSchool",
            two: "noSummerCamp",
            three: "playdateDropOff"
        },
        schedule: {
            upto8: "walk",
            upto9: "Get Ready",
            upto930: "Breakfast",
            upto12: "finishToDos",
            upto1: "lunch",
            upto4: "own time",
            upto6: "chores",
            upto715: "family Time",
            upto815: "read",
            upto830: "prayer",
            upto845: "sleep"

        },
        plans: {
            one: "moreToDos",
            two: "Art Project",
            three: "studyGoals",
            four: "lookBook",
            five: "beKind"
        }
    }
    // TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.


    $("#showData").click(function () {

        let jsonObj = $.ajax("https://jsonplaceholder.typicode.com/comments",
            {
                type: "GET",
            });
        console.log(jsonObj);

        let jsonPostObj = $.ajax("https://jsonplaceholder.typicode.com/posts",
            {
                type: "POST",
                data: {
                    "userId": 10,
                    "id": 101,
                    "title": "Prachi",
                    "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\n" +
                        "sequi ducimus vel quasi\nveritatis est dolores"
                }
            });
        console.log(jsonPostObj);
        $("#data").text(`<br>Checkout console`)
    });
})();