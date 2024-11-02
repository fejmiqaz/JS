/* Wrote a function removeColor() that prints in the consolve the currently selected element from the list and will delete it. */

function removeColor(){
    const colorSelect = document.getElementById("colorSelect")
    if(colorSelect.selectedIndex !== -1){
        const selectedColor = colorSelect.options[colorSelect.selectedIndex].text;
        console.log("Removing color:", selectedColor);
        colorSelect.remove(colorSelect.selectedIndex);
    }
}
