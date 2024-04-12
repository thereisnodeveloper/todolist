export default {addToDisplay}


function addToDisplay(content, target=document.body){
    const elem = document.createElement("div")
    elem.textContent = content
    target.appendChild(elem)
}

function update(){}