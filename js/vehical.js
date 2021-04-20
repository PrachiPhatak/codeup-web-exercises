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
        console.log("getBodyStyle: " +input);
        switch (input) {
            case "2D":
                console.log("2D")
                return input
            case "4D":
                console.log("4D")
                return input
            case "AWD":
                console.log("AWD")
                return input
            default:
                console.log(`ERROR: BodyStyle ${input} not available.`)
        }
    }

    function getVehicleType(input) {
        console.log("getVehicleType: " +input);
        switch (input){
            case "sports":
                console.log("sports");
                return input;
            case "sedan":
                console.log("sedan");
                return input;
            case "compact":
                console.log("compact");
                return input;
            case "truck":
                console.log("truck");
                return input;
            default:
                console.log(`ERROR: The vehicle type ${input} is not available.`)
        }
        return input;
    }

    function getVehicleColor(input) {
        console.log("getVehicleColor: " +input);
        switch (input){
            case "white":
                console.log("white");
                return input;
            case "red":
                console.log("red");
                return input;
            case "yellow":
                console.log("yellow");
                return input;
            case "truck":
                console.log("truck");
                return input;
            default:
                console.log(`ERROR: The color ${input} is not available`)
        }
        return input;
    }
    function validateSpecs(){
        var input = "2D";
        switch (input) {

            case getBodyStyle(input):
                console.log("2");
            case getVehicleColor(input):
                console.log("3");
            case getVehicleType(input):
                console.log("1");
            case "Exit":
                break;
            default:
                console.log("validate final: " + input);
                validateSpecs();
        }
    }
    validateSpecs();


})()