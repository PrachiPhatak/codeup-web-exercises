"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(str){
    return str === true;
}

function isFalse(str){
    return str === false;
}

function not(str){
    return !str;
}

function addOne(str){
    return (str === Infinity ? str + 1 : (parseInt(str) + 1));
}

function isEven(str){
    return parseInt(str) % 2 === 0;
}

function isIdentical(num1, num2){
    return num1 === num2;
}

function isEqual(num1, num2){
    return num1 == num2;
}

function or(str1, str2){
    return str1 || str2;
}

function and(str1, str2){
    return str1 && str2;
}

function concat(str1, str2){
    return str1 + "" +str2;
}