// TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
//  -> Let's augment our getToDestination() function
//  -> Create a function called canGetRideShare() which will *RETURN* a boolean
//      -> It will determine if there are drivers nearby and the person has enough money for the ride
//  -> Now, when you call getToDestination(), your canGetRideShare parameter will be an argument that is
//  -> fulfilled by a call to canGetRideShare() (yes, I know, the whole parameter name vs argument name thing)
//  -> Be sure to log to the user if they can or cannot get a rideShare
// TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
//  -> Consider this: What if mileage determined:
//      -> If the rider has enough funds?
//      -> If there is a driver close enough to service the rider?

(function () {

        function getToDestination(isLegalDriver, hasCar){
            if (isLegalDriver && hasCar){
                alert("Let's get in and go!");
            } else if(!isLegalDriver && canGetRideShare()){
                alert("Let's call a rideShare!");
            } else{
                alert("I think my friend can give us a lift!");
            }
        }

        function canGetRideShare(){
            var hasMoney = confirm("Do you have enough money for the ride?");
            if(!hasMoney){

            }
            var isDriverNearBy = confirm("Is there any driver nearby? ");

            return isDriverNearBy && hasMoney;
        }

        function isLegalDriver(){
            var age = 0;
            var hasLicences = false;
            var isInsured = false;
            var message = "";
            var shareRideMessage = "\n Please consider RideShare option.";

            age = prompt("what's your age?");
            if(age < 16) {
                message = "You are too young to drive." + shareRideMessage;
            }else{
                hasLicences = confirm("Do you have licence?");
                if(!hasLicences){
                    message = message + "\n You need licence." + shareRideMessage;
                }else{
                    isInsured = confirm("Do you have insurance?");
                    if(!isInsured){
                        message = message + "\nYou are not insured. " + shareRideMessage;
                    }
                }
            }

            if (! (message==='')) alert(message);
            return (age >= 16) && hasLicences && isInsured;
        }

        getToDestination( isLegalDriver(), true);

 }

)()