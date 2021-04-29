function reverseString(str){
    try{
        let arrayStr = str.split("");
        console.log(str.split(""))
        console.log(arrayStr.reverse())
        return arrayStr.join("");
    }catch (e){
        console.log(e.message)
        console.log(str)
    }finally {

    }
}

console.log(reverseString("1234"))