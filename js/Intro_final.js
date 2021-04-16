"use strict";
// what is the value of a, b, and c?
var a = 1;
console.log("Value of a : "+ a);
var b = a++;
console.log(`Value of a : ${a}  Value of b: ${b}`);
var c = ++a;
console.log("Value of a : "+ a + "  Value of c: "+ c);
//-------------------------------------------------------

var d = "hello";
var e = false;
d++;
e++;
console.log("Value of d: "+ d);
console.log("Value of e: "+ e);
//---------------------------------------------------------

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log("Value of perplexed: "+ perplexed);
//---------------------------------------------------------

var price = 2.7;
console.log("Value of Price: "+ price.toFixed(2));
//--------------------------------------------------------------

// var price1 = "2.7";
// console.log("Value of Price: "+ price1.toFixed(2));
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
//---------------------------------------------------------