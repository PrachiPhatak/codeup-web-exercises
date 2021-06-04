let arr = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "A/C", "0", "=", "+"];
$(document).ready(function () {

    acceptOnlyNumbers();
    addButtonsWithEvent()

});

function acceptOnlyNumbers() {
    $("#input").keypress(function (){
        alert($(this).val())
    })
}

function addButtonsWithEvent() {
    for (let i = 0; i < arr.length; i++) {
        $('.main').append(
            $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: arr[i],
                class: 'col-3 p-0 btn-lg'
            }).click(function () {
                let currentValue = $("#input").val();
                let newInput = $(this).text();
                let text = currentValue + newInput;

                if (newInput === "A/C") {
                    $("#input").val('');
                } else if (newInput === "=") {
                    $("#input").val(calculate(currentValue));
                } else {
                    $("#input").val(text);
                }

            })
        )
    }
}

function calculate(inputArr) {
    let op = inputArr.search(new RegExp(/[\+\*\-\/%]/gm));
    let nums = inputArr.split(new RegExp(/[\+\*\-\/%]/gm));
    let operation = inputArr[op];
    console.log("index " + op);
    console.log("nums " + nums);
    console.log("op " + operation);

    if (operation == '+') {
        return parseInt(nums[0]) + parseInt(nums[1]);
    } else if (operation == '-') {
        return nums[0] - nums[1];
    } else if (operation == '*') {
        return (nums[0] * nums[1]);
    } else if (operation == '/') {
        return nums[0] / nums[1];
    } else {
        return "ERROR";
    }
}

