// Write a function named cube(n) that returns n * n * n
// Write a function named cubeRoot(n) that returns the cube root of the input

function cube(num){
    return Math.pow(num, 3);
}

function cubeRoot(num){
    return Math.cbrt(num)
}

//function call
console.log(cube(3));
console.log(cubeRoot(cube(3)));