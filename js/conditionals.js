"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){
    if(color.toUpperCase() === "BLUE"){
        console.log("Blue is the color of sky.");
    }else if(color.toUpperCase() === "RED"){
        console.log("Strawberries are red.");
    }else if(color.toUpperCase() === "CYAN"){
        console.log("I don't know anything about cyan");
    }else{
       alert("You entered "+ color);
    }
}
//var color = prompt("Enter color : ")
let color = "Red";
analyzeColor(color);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function logTheColor(randomColor) {
    switch (randomColor) {
        case "red":
            console.log("Red is color of an apple");
            break;
        case "orange":
            console.log("Orange is color of an orange");
            break;
        case "yellow":
            console.log("Yellow is color of an sunflower");
            break;
        case "green":
            console.log("Green is color of an grass");
            break;
        case "blue":
            console.log("Blue is color of the sky");
            break;
        case "indigo":
            console.log("Indigo is color of something");
            break;
        case "violet":
            console.log("Violet is color of an stability");
            break;
        default:
            console.log("The color is " + randomColor);
    }
}
logTheColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function  calculateTotal(luckyNumber, totalBill){
    switch (luckyNumber){
        case 1:
            return totalBill * ( 1 - 0.1);
        case 2:
            return totalBill * ( 1 - 0.25);
        case 3:
            return totalBill * ( 1 - 0.35);
        case 4:
            return totalBill * ( 1 - 0.5);
        case 5:
            return 0;
        case 0:
        default:
            return totalBill;
    }
}

// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100));// returns 50
// console.log(calculateTotal(5, 100)); // returns 0
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
console.log("Your lucky number is " + luckyNumber);
console.log("Your bill is " +calculateTotal(luckyNumber, 100));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function isEven(num) {
    return num % 2 == 0;
}
function isPositive(num) {
    return num >= 0;
}
function numberFun(){
    let num ;
    if(confirm("Would you like to enter a number?")){
        num = parseInt(prompt("Enter a number"));
    }
    if(typeof num === "undefined" || isNaN(num)){
        alert("You did not enter a number");
    } else {
        if(isEven(num)){
            alert(num + " is even.")
        }else{
            alert(num + " is odd.")
        }

        alert(num + " + 100 = "+ (num + 100));

        if(isPositive(num)){
            alert(num +" is Positive");
        }else{
            alert(num + " is Negative");
        }
    }

}
numberFun();