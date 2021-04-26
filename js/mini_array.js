// TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements

let movies = ["Harry potter 1","Harry potter 2","Harry potter 3","Harry potter 4","Harry potter 5"];

function printMovies(movies){
    for(let i = 0; i < movies.length; i++){
        console.log(movies[i]);
    }
}

movies.forEach(function (movie) {
    console.log("From for each :" + movie);
})
// function call
// printMovies(movies);