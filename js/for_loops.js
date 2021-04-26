(function(){
    //TODO Create a function named showMultiplicationTable that accepts a number
    // and console.logs the multiplication table for that number
    // (just multiply by the numbers 1 through 10)
    // For example, showMultiplicationTable(7) should output


    function showMultiplicationTable(num){
        let result = "\nMultiplication Table:";
        for(let i= 1; i <=10; i++){
           result = result + "\n"+ `${num} * ${i} = ${num * i}`;
        }
        return result;
    }
    //Function call
    console.log(showMultiplicationTable(5))



    console.log("//---------------------------------------------------------------------------------");
    //TODO Use a for loop and the code from the previous lessons to generate 10 random numbers
    // between 20 and 200 and output to the console whether each number is odd or even.
    function randomNumber1(){
        return Math.floor(Math.random() * 200 ) + 20;
    }

    function oddOrEven(){
        for(let i = 0; i < 10; i++){
            num = randomNumber1();
            if(num % 2 === 0){
                console.log(`${num} is even`);
            }else {
                console.log(`${num} is odd`);
            }
        }
    }
    //Function call
    oddOrEven();
    console.log("//---------------------------------------------------------------------------------");
    //TODO Create a for loop that uses console.log to create the output shown below.
    // 1
    // 22
    // 333
    // 4444
    // 55555
    // 666666
    // 7777777
    // 88888888
    // 999999999
    function constructNum (num){
        let total = 0;
        for (let i = num-1; i >= 0; i--){
            total = total + num * Math.pow(10,i);
        }
        return total;
    }
    function numRepeat(num){
        console.log("New Repeat solution")
        for(let i = 1; i <= 9; i++){
            console.log(i.toString().repeat(i));
        }
    }

    function printNumber(){
        for(let i = 1; i < 10; i++){
            console.log(constructNum(i));
        }
    }
    //Function call
    numRepeat(9);

    console.log("//---------------------------------------------------------------------------------");
    //TODO Create a for loop that uses console.log to create the output shown below.
    // 100
    // 95
    // 90
    // 85
    // 80
    // 75
    // 70
    // 65
    // 60
    // 55
    // 50
    // 45
    // 40
    // 35
    // 30
    // 25
    // 20
    // 15
    // 10
    // 5
    function printNumberDecrementBy5(){
        for(let i = 100; i > 0; i-=5){
            console.log(i);
        }
    }
    //function call
    printNumberDecrementBy5();
    console.log("//---------------------------------------------------------------------------------");
    //TODO An ice cream seller can't go home until she sells all of her cones.
    // First write enough code that generates a random number between 50 and 100
    // representing the amount of cones to sell before you start your loop.
    // Inside of the loop your code should generate another random number between 1 and 5,
    // simulating the amount of cones being bought by her clients.
    // Use a do-while loop to log to the console the amount of cones sold to each person.
    // This is a way get the random numbers for this exercise.

    function numberOfCones(){
        return  Math.floor(Math.random() * 50) + 50;
    }

    function numberOfConesBought(){
        return Math.floor(Math.random() * 5) + 1;
    }

    function sellCones(){
        let totalCones = numberOfCones();
        console.log(`I have ${totalCones} cones.`)
        let perCustomer;
        do{
            perCustomer = numberOfConesBought();
            if(perCustomer <= totalCones){
                totalCones = totalCones - perCustomer;
                console.log(`${perCustomer} cones sold. ${totalCones} left.`)
            }else{
                console.log(`Cannot sell you ${perCustomer}. I only have ${totalCones}`)
            }
        }while(totalCones > 0)
        console.log('Yay! I sold all the cones!')
    }
    //Function call
    sellCones();
})()