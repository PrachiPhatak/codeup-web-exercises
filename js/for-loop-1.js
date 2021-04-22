(function (){
    function randomNumber(){
        return Math.floor(Math.random() * 200 ) + 20;
    }

    function oddOrEven(){
        for(let i = 0; i < 10; i++){
            num = randomNumber();
            if(num % 2 === 0){
                console.log(`${num} is even`);
            }else {
                console.log(`${num} is odd`);
            }
        }

    }

    //function call
    oddOrEven();
})()