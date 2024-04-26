export default {addToDisplay, addClass, batchAdd}

const docContent=document.querySelector(".doc-content")

function addToDisplay(target = docContent, content, elemType = "div") {
  const elem = document.createElement(elemType);
  elem.textContent = content;
  target.appendChild(elem);
  return elem;
}

function addClass(target, content){
    target.classList.add(content)
    return target
}

function addEventListener(target, eventListener){
    
}

// event listeners


// document.querySelector(selectors)




function batchAdd(target, array, elemtype){ //keeps adding elements to a thing until there aren't more to add
    //define 1 batch
    array.forEach((item)=>{
        addToDisplay(target, item, elemtype)
    })
    // addClass(target,"nav li")

}
// batchAdd(document.querySelector("nav ul"), element, array,"li")

//use svg to connect elemens
function connectTree(){

}



function update(){}