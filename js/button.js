var COUNTER = 0;
let btn = document.getElementById("btn");
btn.innerHTML = COUNTER;
btn.onclick = function (){
    COUNTER ++;
    btn.innerHTML = COUNTER;
}