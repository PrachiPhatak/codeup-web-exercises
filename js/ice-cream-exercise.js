(function (){

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