(function (){
    "use strict";
    let isPwdLessThanFiveCharacters = false;
    let isUserNameLong = true;
    let isUserNameIncluded = false;
    let userNameStartsEndsWithSpace = true;
    let pwdStartsEndsWithSpace = true;

    function validatePassword(){
        let msg = "";
        if(isPwdLessThanFiveCharacters === true) {
            msg = msg + ("The password must be at least 5 characters\n");
        }
        if(isUserNameIncluded){
            msg = msg + ("The password must not include the username\n");
        }
        if(isUserNameLong) {
            msg = msg + ("The username must be no more than 20 characters\n");
        }
        if(pwdStartsEndsWithSpace){
            msg = msg + ("The password can not start or end with whitespace\n");
        }
        if(userNameStartsEndsWithSpace){
            msg = msg + ("The username can not start or end with whitespace\n");
        }
        if(msg === ""){
            msg = msg + ("Successfully Done!");
        }
        return msg;
    }
    console.log(validatePassword());
})()


