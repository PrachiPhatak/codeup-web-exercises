function remainder(number, divisor){
    if(typeof number !== 'number')
        return "Number is not a number"
    else if(typeof divisor !== 'number')
        return "Divisor is not a number."
    return "Remainder is " + number % divisor;
}

//function call
console.log(remainder("23", ""));