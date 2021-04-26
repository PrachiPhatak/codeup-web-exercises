// TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

let days = ["Monday", "Tuesday", "Wednesday"];
let remainingDays = ["Thursday", "Friday", "Saturday", "Sunday"];

remainingDays.forEach(remainingDay => {
    days.push(remainingDay);
})
console.log(days);