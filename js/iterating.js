(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Donald", "Barak", "George", "Franklin"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("Length of the array: "+ names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Names by index: " +names[0]);
    console.log("Names by index: " +names[1]);
    console.log("Names by index: " +names[2]);
    console.log("Names by index: " +names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for( let i = 0; i < names.length; i++){
        console.log("For loop: " + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name){
        console.log("For each: "+ name)
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
        //          [0, 1, 2, 3, 4]
    let arrNumber = [1, 2, 3, 4, 5]

    function first(arrNumber){
        return arrNumber[0];
    }
    function second(arrNumber){
        return arrNumber[2];
    }
    function last(arrNumber){
        return arrNumber[ arrNumber.length - 1 ];
    }

    console.log("First Number: " + first(arrNumber));
    console.log("Second Number: " + second(arrNumber));
    console.log("Last Number: " + last(arrNumber));

})();