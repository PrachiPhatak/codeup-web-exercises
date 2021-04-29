//
// let re = /^([a-z]).*\1$/;
//
// 1- ^ asserts position at start of the string
//
// 2- 1st Capturing Group ([a-z])
//
// 3- .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy)
//
// 4- \1 matches the same text as most recently matched by the 1st capturing group
//
// 5- $ asserts position at the end of the string

let re = /^([aeiou]).*\1$/;

console.log(re.test("apksfsdji"));