export default {addToDisplay, addClass}

const docContent=document.querySelector(".doc-content")

function addToDisplay(content, target=docContent, elemType="div"){
    const elem = document.createElement(elemType)
    elem.textContent = content
    target.appendChild(elem)
    return elem
}

function addClass(target, content){
    target.classList.add(content)
    return target
}

function addEventListener(target, eventListener){
    
}

// event listeners


// document.querySelector(selectors)




function batchAdd(){ //keeps adding elements to a thing until there aren't more to add
    //define 1 batch

}

//use svg to connect elemens
function connectTree(){

}

function update(){}