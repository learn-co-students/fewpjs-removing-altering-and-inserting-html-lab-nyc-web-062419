// Write your code here!

document.querySelector("main#main").remove()

var newHeader = document.createElement("h1")

document.body.appendChild(newHeader)

newHeader.className = 'victory'

newHeader.id =  'victory'



newHeader.innerHTML = "Ian is the champion"