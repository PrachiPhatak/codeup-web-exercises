(function (){
    function breakContinue(){
        let num = 0;
        do{
            num = prompt(`Enter an odd number between 1 - 50.`);
            if((num < 50 && num > 1) && (num % 2 !== 0)){
                break;
            }
        }while( 1 < num < 50 )
        return num;
    }

    function printOddNumbers(num){
        for(let i = 1; i < 50; i += 2 ){
            if(i == num){
                console.log(`Skipping ${i}`)
                continue
            }
            console.log(`Here is an odd number: ${i}`)
        }
    }

    printOddNumbers(breakContinue());
})()