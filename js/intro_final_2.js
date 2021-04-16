"use strict";
var sample = "Hello Codeup";
console.log("\"Hello Codeup\" length is " + sample.length);
sample += " "+"Students";
console.log("Sample is :"+ sample);
sample = sample.replace("Students", "Class");
console.log("Sample is :"+ sample);
console.log("index of c :"+ sample.indexOf("c"));
console.log("index of C :"+ sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"),
            sample.indexOf("C") + 6));
