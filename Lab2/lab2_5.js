/* 1. From a given string, all numbers above 32 should be replaced with the ASCII equivalent. Example: Hello32 how are you?
 -> Hello, how are you/(A static function was given: String.fromCharCode()). */

function replaceNumberWithASCII(input){
    return input.replace(/\d+/g,(match) => {
        const num = parseInt(match,10);
        return num >= 32 ? String.fromCharCode(num) : match;
    })
}

let result = replaceNumberWithASCII(prompt("Enter something: "));
alert(result);