/* Write a JavaScript program that prompts the user to choose between calculating the Mean or the Median of three numbers.
The program should then ask for the three numbers, compute the requested value, and display the result in an alert.
Use the formula for the mean (sum of numbers / 3) and the median by sorting the numbers and selecting the middle value. */
let x = prompt("Enter whether you want the Mean or the Median: ")
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");
a = parseInt(a)
b = parseInt(b)
c = parseInt(c)

function calculateMedian(a,b,c){
    let numbers = [a,b,c];
    numbers.sort((num1,num2) => num1-num2);
    return numbers[1];
}

let mean = (a + b + c) / 3;

if(x === "Mean"){
    alert("Mean: " + mean)
}else if (x === "Median"){
    let median = calculateMedian(a,b,c);
    alert("Median: " + median);
}