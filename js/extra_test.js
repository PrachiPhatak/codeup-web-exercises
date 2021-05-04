function getSecondLargestNumber(nums){
    nums.sort(function (a,b){
        return a-b;
    })
    console.log(nums)
    let len = nums.length;
    for(let i = len - 2; i >= 0; i--){
        if(nums[len-1] > nums[i])
           return (nums[i]);
    }
}

console.log(getSecondLargestNumber([0,6,100,6,6]))