(function (){
    "use strict";
    // TODO: Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
    //  -> This will involve multiple switch statements
    //      -> Orchestrate the statements in a central function that is responsible for calling and checking for errors
    //      -> each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
    //      -> ie: function getBodyStyle(input){return input}
    //  -> The user should be able to enter their
    //      -> Body style (2D, 4D, etc)
    //      -> Vehicle type (sports car, sedan, compact, truck, etc)
    //      -> Vehicle color
    //  -> Each switch statement should confirm the user's choice in a logging statement
    //  -> The point of this is to validate what the user enters. If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
    //      -> ie: default: "error: " + vehicleType + " not recognized";
    //      -> If this occurs, call the related function again (see: recursion) until the user enters a correct choice
    //      -> HINT: a way you can check for errors is to see if the string contains the word "error"
    //  -> After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user
    //      endregion

    function getBodyStyle(input){
        switch (input) {
            case "2D":
                console.log("Customer chose: 2D")
                return input
            case "4D":
                console.log("Customer chose: 4D")
                return input
            case "AWD":
                console.log("Customer chose: AWD")
                return input
            case "sports":
                console.log("Customer chose: sports");
                return input;
            case "sedan":
                console.log("Customer chose: sedan");
                return input;
            case "compact":
                console.log("Customer chose: compact");
                return input;
            case "truck":
                console.log("Customer chose: truck");
                return input;
            case "white":
                console.log("Customer chose: white");
                return input;
            case "red":
                console.log("Customer chose: red");
                return input;
            case "yellow":
                console.log("Customer chose: yellow");
                return input;
            case "black":
                console.log("Customer chose: black");
                return input;
            default:
                return "Error";
        }
    }

    function validateSpecs(){
        let input = prompt("Enter the details");
        if(getBodyStyle(input) !== "Error"){
            validateSpecs();
        }
    }

    validateSpecs();

})()