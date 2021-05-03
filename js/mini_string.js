
//Make a function named trim(string) that removes empty spaces before and after the input,
// the returns that trimmed string

function trim(str){
    return str.replaceAll(" ","");
}

//function call
console.log(trim("    $%^&&#  "));