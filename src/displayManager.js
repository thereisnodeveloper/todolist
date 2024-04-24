export default {addToDisplay, addClass, updateContainer}

const docContent=document.querySelector(".doc-content")

function addToDisplay(content, target=docContent, elemType = "div"){
    const elem = document.createElement(elemType)
    elem.textContent = content
    target.appendChild(elem)
    return elem
}

function addClass(target, content){
    target.classList.add(content)
    return target
}

function batchAdd(){ //keeps adding elements to a thing until there aren't more to add
    //define 1 batch

}


function updateContainer(project){
    const container = document.querySelector(".doc-content")
    container.innerHTML = ''
    
}

function attachEventListener(event, targetElem){
    target.addEventListener("click", )
}





//use svg to connect elemens
function connectTree(){

}

function update(){}
