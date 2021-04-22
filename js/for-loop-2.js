(function (){

    function constructNum (num){
        let total = 0;
        for (let i = num-1; i >= 0; i--){
            total = total + num * Math.pow(10,i);
        }
        return total;
    }

    function printNumber(){
        for(let i = 1; i < 10; i++){
            console.log(constructNum(i));
        }
    }

    printNumber();
})()