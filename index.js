// removes DOM node main#main
document.querySelector("main#main").remove();
// creates new h1 element
const newHeader = document.createElement("h1");
// sets newHeader id to "victory"
newHeader.id = "victory"
// sets the innerHTML of newHeader
newHeader.innerHTML = "Flatiron School is the champion!";
// sets class of newHeader
newHeader.className = "victory";