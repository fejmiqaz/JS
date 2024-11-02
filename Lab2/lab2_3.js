/* Write a Javascript code that will make the following changes:
1. The body tag will be set to Arial font,
2. It will fill the content of the span tags with the appropriate information: name, index, hometown,
3. Set the color to red for every list tag.*/

function displayInfo(){
    const nameInput = document.getElementById("nameInput").value;
    const indexInput = document.getElementById("indexInput").value;
    const hometownInput = document.getElementById("hometownInput").value;

    document.getElementById("name").textContent = nameInput;
    document.getElementById("index").textContent = indexInput;
    document.getElementById("hometown").textContent = hometownInput;
}

window.onload = function(){
    document.body.style.fontFamily = "Arial";

    const listItems = document.querySelectorAll("li");
    listItems.forEach(item => item.style.color = "red");
}
