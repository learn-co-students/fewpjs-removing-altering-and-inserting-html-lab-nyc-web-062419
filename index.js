// Write your code here!
const newHeader = document.createElement('h1')
newHeader.innerHTML = 'YOUR-NAME is the champion'
newHeader.id = "victory"
let main = document.getElementById("main");
main.remove()


function addElement () { 
    // create a new div element 
    var newHeader = document.createElement("h1"); 
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newHeader.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    document.body.append(newDiv); 
  }