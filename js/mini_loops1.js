//TODO: loop through numbers 1 - 40.
// Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.


    function marcoPolo(num) {
        for (let i = 1; i < 40; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(`${i} marco polo`);
            } else if (i % 3 === 0) {
                console.log(`${i} marco`)
            } else if (i % 5 === 0) {
                console.log(`${i} polo`);
            } else {
                console.log(`${i} I'm not playing.`)
            }
        }
    }

    //Function call
    marcoPolo();


