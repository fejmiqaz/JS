/* Write Javascript code where two numbers are entered through text fields. The page will also contain the Add button, which will collect both numbers and as a result will write the result into the page. */

function addNumbers(){
    let firstNum = parseInt(document.getElementById("firstNum").value);
    let secondNum = parseInt(document.getElementById("secondNum").value);
    let thirdNum = parseInt(document.getElementById("thirdNum").value);
    let fourthNum = parseInt(document.getElementById("fourthNum").value);

    let result1;
    let result2;

    if(!isNaN(firstNum) && !isNaN(thirdNum) && !isNaN(secondNum) && !isNaN(fourthNum)){
        result1 = firstNum + thirdNum;
        result2 = secondNum + fourthNum;
    }

    document.getElementById("firstResult").textContent = "First result: "+  result1;
    document.getElementById("secondResult").textContent = "Second result: " + result2;

}
