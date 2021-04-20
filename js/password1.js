(function (){
    "use strict";

    function isPwdMoreThanFiveCharacters(password){
        return password.length >= 5
    }

    function isUserNameLong(userName){
        return userName.length > 20;
    }
    function isUserNameIncluded(userName, password){
        return password.search(userName) !== -1;
    }

    function startsEndsWithSpace(str){
        return (str.startsWith(" ") || str.endsWith(" "));
    }

    function validatePassword(userName, password){
        let msg = "";
        if(!isPwdMoreThanFiveCharacters(password)) {
            msg = msg + ("The password must be at least 5 characters\n");
        }
        if(isUserNameIncluded(userName, password)){
            msg = msg + ("The password must not include the username\n");
        }
        if(isUserNameLong(userName)) {
            msg = msg + ("The username must be no more than 20 characters\n");
        }
        if(startsEndsWithSpace(password)){
            msg = msg + ("The password can not start or end with whitespace\n");
        }
        if(startsEndsWithSpace(userName)){
            msg = msg + ("The username can not start or end with whitespace\n");
        }
        if(msg === ""){
            msg = msg + ("Successfully Done!");
        }
        return msg;
    }

    console.log(validatePassword("Prachi", "password"));

})()


