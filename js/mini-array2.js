// TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

let weekDays = ["Monday", "Tuesday", "Wednesday"];
let remainingDays = ["Thursday", "Friday", "Saturday", "Sunday"];

remainingDays.forEach( day => {
    weekDays.push(day);
})
console.log(weekDays);

// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array

let reversedWeekDays = [];
weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday", "Sunday"]
console.log(" 'weekDays' -- " + weekDays);
console.log("reversedWeekDays' -- " + reversedWeekDays+ "\n");


// for (let i = weekDays.length-1 ; i >= 0;  i--){
//     reversedWeekDays.unshift(weekDays.pop());
// }

weekDays.forEach( ()=> {
    reversedWeekDays.push(weekDays.splice(0))
})

console.log("Final 'weekDays' -- " + weekDays);
console.log("Final 'reverseWeekDays' -- " + reversedWeekDays);