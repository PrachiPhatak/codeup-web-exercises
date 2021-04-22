(function(){
    function randomNumber(){
        return Math.floor(Math.random() * 10) + 1;
    }

    function showMultiplicationTable(num){
        let i = 1;
        do{
            console.log(`${num} * ${i} = ${num * i}`);
            i++
        }while(i <= 10)
    }

    showMultiplicationTable(randomNumber());
})()