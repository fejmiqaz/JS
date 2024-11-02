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