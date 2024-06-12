export default {addClass: addAttribute, batchAdd, createAndAddToDisplay, dispInitialize,dispAddNewProject,attachIcons,applyEventListeners,selectProject}
const docContent=document.querySelector(".doc-content")
import "./index.js"
import ProjectManager, { DisplayPrinter } from "./index.js";
// import ProjectManager from "./index.js";
import "./project-manager.js"

import TrashCan from "./img/trash.png"

const testElem = document.querySelector("div")

function createAndAddToDisplay(target = docContent, content, elemType = "div") {
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
        createAndAddToDisplay(target, item, elemtype)
    })
    // addClass(target,"nav li")

}
// batchAdd(document.querySelector("nav ul"), element, array,"li")


function dispInitialize(){
    document.querySelector("button.add-project").addEventListener("click", dispAddNewProject)
    applyEventListeners(document.querySelectorAll("nav ul li"),["click",selectProject],true)
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

/**
 * 
 * @param {*} imgSrc 
 * @param {*} target 
 * @returns the icon that was attached to the target
 */
function attachIcons(imgSrc,target){
    if(!imgSrc){imgSrc = TrashCan}
    if(!target){target =  document.querySelectorAll("nav ul li div")}
    const iconTrash = new Image(100,20)
    iconTrash.src = TrashCan
    iconTrash.style.width = "1.2em"
    iconTrash.style.height = "1.2em"

    
    const clone = iconTrash.cloneNode(false)
    applyEventListeners(clone)
    
    target.appendChild(clone)
    return clone
}

/**
 * 
 * @param {Event} evt 
 */
function deleteProject(evt){
    const liElem = evt.target.parentElement.parentElement
    //delete from UI
    
    liElem.remove()
    evt.stopPropagation()
    //delete from projects list
    ProjectManager.deleteProject(liElem)
}
function applyEventListeners(target, evtListener, isMultiple){
    if(!isMultiple){isMultiple = false}
    if(!target){target = document.querySelector("nav ul li div img")}
    if(!evtListener){evtListener = ["click", deleteProject]}

    if(!isMultiple)
        {
            target.addEventListener(...evtListener)
            return;
        }

    target.forEach(node=>{
        node.addEventListener(...evtListener)
    })
    
    return target
}
/**
 * 
 * @param {Event} evt 
 */
function selectProject(evt){
    const targetElem = evt.target
    document.querySelector(".current-project").textContent = targetElem.firstElementChild.classList
    const findResult = ProjectManager.arrayOfProjects.find(entry =>
        {
            return entry.name === targetElem.firstElementChild.classList[0]}
    )
    console.log(findResult);

    // DisplayPrinter.printSubItemRecurse(findResult)
    return evt.target.firstElementChild

}

