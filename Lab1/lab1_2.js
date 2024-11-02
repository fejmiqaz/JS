/* Create a JavaScript program that prompts the user to enter a phone number in the format XXX/YYY/ZZZ.
Based on the third digit of the input, classify the phone number into different telecom providers (Telekom, Telekabel,
A1, or Lycamobile) and display the formatted number along with the provider name in an alert. */
let a = prompt("Enter a phone number in the form XXX/YYY/ZZZ: ");
let b = a[2];
if(b == '0' || b == '1' || b == '2'){
    alert(a.slice(0,3) + "/" + a.slice(3,6) + "-" + a.slice(6) + " - Telekom" );
}else if (b == 4){
    alert(a.slice(0,3) + "/" + a.slice(3,6) + "-" + a.slice(6) + " - Telekabel");
}else if (b == 5 || b == 6 || b == 7 || b == 8){
    alert(a.slice(0,3) + "/" + a.slice(3,6) + "-" + a.slice(6) + " - A1");
}else {
    alert(a.slice(0,3) + "/" + a.slice(3,6) + "-" + a.slice(6) + " - Lycamobile")
}