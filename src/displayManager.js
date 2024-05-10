export default {addToDisplay, addClass: addAttribute, batchAdd, createAndAddToDisplay, dispInitialize,dispAddNewProject,attachIcons}
const docContent=document.querySelector(".doc-content")
import "./index.js"
import ProjectManager from "./index.js";
// import ProjectManager from "./index.js";
import "./project-manager.js"

import TrashCan from "./img/trash.png"



function addToDisplay(target = docContent, content, elemType = "div") {
  const elem = document.createElement(elemType);
  elem.textContent = content;
  target.appendChild(elem);
  return elem;
}

/**
 * add class by default, if not add attribute
 * @param {Element} target 
 * @param {*} content 
 * @param {String} attribute 
 * @returns 
 */
function addAttribute(target, content, attribute =null){
    if(attribute){
        target.setAttribute(attribute, content)
    }
    else{
    target.classList.add(content)}
    return target
}


// event listeners


// document.querySelector(selectors)

function createAndAddToDisplay(target = docContent, content = "", elemType = "div") {
    const elem = document.createElement(elemType);
    elem.textContent = content;
    target.appendChild(elem);
    return elem;
}


/**
 * 
 * @param {Element} cardElem 
 */
function addButtons(cardElem){
    const target = cardElem;
    const elemSectionWrapper = document.createElement("section")
    elemSectionWrapper.classList.add("button-section")
    

    const elemToEmbed = doucment.createElement('button')
    elemToEmbed.classList.add('')

    //embed all the button elements
    elemSectionWrapper.appendChild()
}



function batchAdd(target, array, elemtype){ //keeps adding elements to a thing until there aren't more to add
    //define 1 batch
    array.forEach((item)=>{
        addToDisplay(target, item, elemtype)
    })
    // addClass(target,"nav li")

}
// batchAdd(document.querySelector("nav ul"), element, array,"li")


function dispInitialize(){
    document.querySelector("button.add-project").addEventListener("click", dispAddNewProject)
}

function dispAddNewProject(evt){
    // evt.target.preventDefault()

    const projButtonElem = document.querySelector("#project-name")
    //call add new project from Project Manager
    console.log(projButtonElem.value);

    
    ProjectManager.createProject(projButtonElem.value)
    // console.log(ProjectManager.arrayOfProjects);


    //change UI
    
    return {projButtonElem}
}

function attachIcons(imgSrc,target){
    if(!imgSrc){imgSrc = TrashCan}
    if(!target){target =  document.querySelectorAll("nav ul li div")}
    const iconTrash = new Image(100,20)
    iconTrash.src = TrashCan
    iconTrash.style.width = "1.2em"
    iconTrash.style.height = "1.2em"

    
    const clone = iconTrash.cloneNode(false)
    target.appendChild(clone)

}

