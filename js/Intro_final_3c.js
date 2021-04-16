    "use_strict";

    var class1;
    class1 = {
        id: 1,
        name: "Computer Science",
        capacity: 4,
        enrolled_students: [],
        start_time: new Date().setTime(10),
        end_time: new Date().setTime(12),
        isEnrolled: function (student) {
            for (var i = 0; i < this.enrolled_students.length; i++) {
                var tempStudent = this.enrolled_students[i];
                console.log("here: "+tempStudent.id)
                // if(this.enrolled_students[i].id === student.id){
                //     console.log(student.id)
                //     return true;
                // }else {
                //     console.log("In else")
                //     return false;
                // }
            }
            return false;
        },
        enroll: function (student) {
            if (this.enrolled_students.length >= this.capacity) {
                console.log(this.name + " Class is full.")
                console.log("Apologies, "+ student.name + " will not be enrolled.");
                return false;
            } else {
                if (this.isEnrolled(student)) {
                    console.log(student.name +" is already enrolled in "+ this.name);
                    return false;
                } else {
                    this.enrolled_students.push(student);
                    console.log(student.name + " is enrolled in " + this.name);
                    return true;
                }
            }
        },

        info: function () {
            console.log("***********   "+ this.name + "    ************");
            console.log("Capacity: " + this.capacity);
            console.log("Time: " + this.start_time + " - " + this.end_time);
            console.log("Student enrolled: " + this.enrolled_students.length)
            this.enrolled_students.forEach(student1 => console.log("--"+student1.name))
            console.log("****************************************")
        }
    };
    var student1 = {
        id: 1,
        name: "Prachi"
    };
    var student2 = {
        id: 2,
        name: "xyz"
    };
    var student3 = {
        id: 3,
        name: "abc"
    };
    class1.enroll(student1)
    class1.enroll(student2)
    class1.enroll(student2)
    class1.enroll(student3)
    class1.info();