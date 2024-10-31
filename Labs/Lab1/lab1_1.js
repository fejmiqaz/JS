/* Write a JavaScript program that prompts the user for a temperature unit (C for Celsius or F for Fahrenheit) and
a temperature value. Convert the temperature based on the input and display the result in an alert. Use the formulas for conversion:
 C = (C*9/5) + 32
 F = (F-32) * 9/5
 */
let a = prompt("Enter C (Celsius) or F (Fahrenheit): ");
let b = prompt("Enter the temperature you want to conver to F or C: ");
b = parseFloat(b);
if(a == 'F'){
    alert("The temperature is: " + ((b * 9/5) + 32) + a);
}else if (a == 'C'){
    alert("The temperature is:" + ((b - 32) * 5/9) + a);
}