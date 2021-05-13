function print(nums, pattern){
    for(let i = 1; i <= nums; i++){
        console.log(pattern.repeat(i));
    }
}
//function call
print(15, "*");