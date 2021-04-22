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

})()