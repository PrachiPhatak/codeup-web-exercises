// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements

function allowCars(){
    let LIMIT = 30;
    do{
        console.log(`Parked 2 cars.`);
        LIMIT -= 2;
        console.log(`${LIMIT} parking lot left.`)
    }while (LIMIT > 0)

    console.log("Parking lot is now full.")
}

allowCars();