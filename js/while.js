(function (){

    function whileLoop() {
        console.log("************* One way ***************");
        let i = 1;
        while(i <= 16){
            console.log(Math.pow(2, i));
            i++;
        }
    }

    function whileLoop1(){
        console.log("************* Other way ***************");
        let total = 1;
        while (total !== 65536){
            console.log(total = total * 2);

        }
    }

    function whileLoop2(){
        console.log("************* Another way ***************");
        let number = 1;
        while (number !== 65536){
            number += number;
            console.log(number);
        }
    }


    whileLoop();
    whileLoop1();
    whileLoop2();
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