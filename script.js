"use strict";
// toggles background color from white to lightcoral
let color = false;
function toggleColor() {
    if(color) {
        document.querySelector("body").style.backgroundColor = "lightcoral";
        color = false;
    } else {
        document.querySelector("body").style.backgroundColor = "white";
        color = true;
    }
}
let count = 0;
document.getElementById("boxButton").addEventListener("click", function(){
    console.log("Worked");
    count++;
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.innerHTML = count;
    newDiv.setAttribute("title", "I'm a box!");
    newDiv.setAttribute("id", `removeBox${count}`);
    document.getElementById("addDiv").appendChild(newDiv);
    newDiv.addEventListener("click", e => {
        newDiv.remove();
    });
});