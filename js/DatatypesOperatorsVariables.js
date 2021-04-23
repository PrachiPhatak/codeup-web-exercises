"use strict";
// what is the value of a, b, and c?
let a = 1;
console.log("Value of a : "+ a);
let b = a++;
console.log(`Value of a : ${a}  Value of b: ${b}`);
let c = ++a;
console.log("Value of a : "+ a + "  Value of c: "+ c);
//-------------------------------------------------------

let d = "hello";
let e = false;
d++;
e++;
console.log("Value of d: "+ d);
console.log("Value of e: "+ e);
//---------------------------------------------------------

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log("Value of perplexed: "+ perplexed);
//---------------------------------------------------------

var price = 2.7;
console.log("Value of Price: "+ price.toFixed(2));
//--------------------------------------------------------------

console.log("isNaN(0) " + isNaN(0));

console.log("isNaN(1) " + isNaN(1));

console.log("isNaN(\"\") " + isNaN(""));

console.log("isNaN(\"string\") " + isNaN("string"));

console.log("isNaN(\"0\") " + isNaN("0"));

console.log("isNaN(\"1\") " + isNaN("1"));

console.log("isNaN(\"3.145\") " + isNaN("3.145"));

console.log("isNaN(Number.MAX_VALUE) " + isNaN(Number.MAX_VALUE));

console.log("isNaN(Infinity) " + isNaN(Infinity));

console.log("isNaN(\"true\") " + isNaN("true"));

console.log("isNaN(true) " + isNaN(true));

console.log("isNaN(\"false\") " + isNaN("false"));

console.log("isNaN(false) " + isNaN(false));

console.log("NaN == NaN " + (NaN == NaN));
//------------------------------------------------------------------
console.log("!true is : " + !true);

console.log("!false is : " + !false);

console.log("!!true is : " + !!true);

console.log("!!false is : " + !!false);

console.log("!!0 is : " + !!0);

console.log("!!-0 is : " + !!-0);

console.log("!!1 is : " + !!1);

console.log("!!-1 is : " + !!-1);

console.log("!!0.1 is : " + !!0.1);

console.log("!!\"hello\" is : " + !!"hello");

console.log("!!\"\" is : " + !!"");

console.log("!!\'\' is : " + !!'');

console.log("!!\"false\" is : " + !!"false");

console.log("!!0 is : " + !!0);
//----------------------------------------------------------------------------------
//TODO Use .length to find the number of characters in the string.
// Try to make the sample string all upper or all lower case.
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
// Replace "Students" with "Class".
// Find the index of "c" using .indexOf(). What do you observe?
// Find the index of "C" using .indexOf().
// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().

let sample = "Hello Codeup";
console.log("\"Hello Codeup\" length is " + sample.length);
sample += " "+"Students";
console.log("Sample is :"+ sample);
sample = sample.replace("Students", "Class");
console.log("Sample is :"+ sample);
console.log("index of c :"+ sample.indexOf("c"));
console.log("index of C :"+ sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"),
    sample.indexOf("C") + 6));

//--------------------------------------------------------------------------------------
//TODO You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day),
// you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
let movie1 = {
    name:"The little mermaid",
    days: 3,
    price:3,
    totalPrice: function(){ return this.days * this.price}
};
let movie2 = {
    name:"Brother Bear",
    days: 5,
    price:3,
    totalPrice: function(){ return this.days * this.price}
};
let movie3 = {
    name:"Hercules",
    days: 1,
    price:3,
    totalPrice: function(){ return this.days * this.price}
};

let totalBill = movie1.totalPrice() + movie2.totalPrice() +movie3.totalPrice();

console.log("Your total for today is "+ totalBill);
//--------------------------------------------------------------------------------------

//TODO Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


let company1 = {
    name:"Google",
    hours: 6,
    pays:400,
    payment: function(){ return this.pays * this.hours}
};
let company2 = {
    name:"Amazon",
    hours: 4,
    pays:380,
    payment: function(){ return this.pays * this.hours}
};
let company3 = {
    name:"Facebook",
    hours: 10,
    pays:350,
    payment: function(){ return this.pays * this.hours}
};

let totalPayment = company1.payment() +company2.payment() + company3.payment();
console.log("I got paid "+ totalPayment);

//-----------------------------------------------------------------------------------
//TODO A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.
let isClassFull = false;
let isConflict_with_other = false;

function enroll(){
    return  !(isClassFull || isConflict_with_other);
}

console.log("The student can enroll in the class " + enroll());
//-----------------------------------------------------------------------------------
//TODO A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a
// specific amount of products.
let isMoreThanTwoItems = true;
let isOfferExpired = false;
let isPremiumMember = false;

function applyOffer(){
    console.log("Apply Offer: "+ (!(isOfferExpired) &&
        (isMoreThanTwoItems || isPremiumMember)));
}
applyOffer();
//-----------------------------------------------------------------------------------
//TODO Create a variable that holds a boolean value for each of the following conditions:
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
let isPwdLessThanFiveCharacters = false;
let isUserNameLong = true;
let isUserNameIncluded = false;
let userNameStartsEndsWithSpace = true;
let pwdStartsEndsWithSpace = true;

function validatePassword(){
    let msg = "";
    if(isPwdLessThanFiveCharacters === true) {
        msg = msg + ("The password must be at least 5 characters\n");
    }
    if(isUserNameIncluded){
        msg = msg + ("The password must not include the username\n");
    }
    if(isUserNameLong) {
        msg = msg + ("The username must be no more than 20 characters\n");
    }
    if(pwdStartsEndsWithSpace){
        msg = msg + ("The password can not start or end with whitespace\n");
    }
    if(userNameStartsEndsWithSpace){
        msg = msg + ("The username can not start or end with whitespace\n");
    }
    if(msg === ""){
        msg = msg + ("Successfully Done!");
    }
    return msg;
}
console.log(validatePassword());
//--------------------------------------------------------------------------------------