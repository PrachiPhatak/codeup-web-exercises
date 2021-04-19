(function (){
    var isMoreThanTwoItems = true;
    var isOfferExpired = false;
    var isPremiumMember = false;

    function applyOffer(){
        console.log("Apply Offer: "+ (!(isOfferExpired) &&
            (isMoreThanTwoItems || isPremiumMember)));
    }
    applyOffer();
}
)()