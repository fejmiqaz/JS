/* Find the longest word of all three strings. */
function findLongestWord(arr){
    let longestWord = "";
    arr.forEach(word=>{
        if(word.length > longestWord.length){
            longestWord = word;
        }
    })
    return longestWord;
}

let a = [];
while(true){
    let input = prompt("Enter whatever you want, terminate by entering 'done'.");
    if(input === null || input.toLowerCase() === 'done'){
        break;
    }
    a.push(input);
}
let result = findLongestWord(a);
alert(result);