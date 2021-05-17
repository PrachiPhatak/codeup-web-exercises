// Write a function named secondToLast(arr) that returns the data type of the second to last element of the array parameter.
// When you call the function, pass in an array of your choosing

function secondToLast(arr){
    console.log(typeof arr[arr.length-2]);
}

//function call
let strArray = ['prachi', 'corey', 'demo'];
secondToLast(strArray);

let strNumber = [ 1, 2, 3, 4, 5, 6 ];
secondToLast(strNumber);

let strMix = [ 1, 'prachi', 93.90, true, 23];
secondToLast(strMix);