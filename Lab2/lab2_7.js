/* First, you enter 2 characters separated by ; example a;e, then you enter a string
* with a prompt and if you find any of the separators (example a or e) you should put a blank line
* instead of them. Example: 'I am extraordinarily happy' => 'I  m  xtr ordin rily h ppy' */

let chars = prompt("Enter 2 characters separated by ; :");

let charsArray = chars.split(';');
let char1 = charsArray[0].trim();
let char2 = charsArray[1].trim();

let str = prompt("Enter something: ");

let modifiedStr = str.replace(char1, ' ').replace(char2, ' ');

alert(modifiedStr);
