// Write your code here!
let main = document.querySelector("main");
main.remove();

let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "BEN-BRAUNSTEIN is the champion";
