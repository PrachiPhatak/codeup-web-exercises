(function (){

    var isClassFull = false;
    var isConflict_with_other = false;

    function enroll(){
        return  !(isClassFull || isConflict_with_other);
    }

    console.log("The student can enroll in the class " + enroll());
})()


