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

})()