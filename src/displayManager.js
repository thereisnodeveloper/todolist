<<<<<<< HEAD
import {ProjectManager} from "./index.js"

export default {addToDisplay, addClass, updateContainer}

const docContent=document.querySelector(".doc-content")

function addToDisplay(content, target=docContent, elemType = "div"){
    const elem = document.createElement(elemType)
    elem.textContent = content
    target.appendChild(elem)
    return elem
=======
export default {addToDisplay, addClass, batchAdd}

const docContent=document.querySelector(".doc-content")

function addToDisplay(target = docContent, content, elemType = "div") {
  const elem = document.createElement(elemType);
  elem.textContent = content;
  target.appendChild(elem);
  return elem;
>>>>>>> 5b2edbdbe577ed16717f09516272320ad729437e
}

function addClass(target, content){
    target.classList.add(content)
    return target
}

<<<<<<< HEAD
function batchAdd(){ //keeps adding elements to a thing until there aren't more to add
=======
function addEventListener(target, eventListener){
    
}

// event listeners


// document.querySelector(selectors)




function batchAdd(target, array, elemtype){ //keeps adding elements to a thing until there aren't more to add
>>>>>>> 5b2edbdbe577ed16717f09516272320ad729437e
    //define 1 batch
    array.forEach((item)=>{
        addToDisplay(target, item, elemtype)
    })
    // addClass(target,"nav li")

}
// batchAdd(document.querySelector("nav ul"), element, array,"li")


function updateContainer(project){
    const container = document.querySelector(".doc-content")
    container.innerHTML = ''
    
}


class ModalManager{
    static modal = document.querySelector(".card-modal")
    static showModal(){
        this.modal.show()
        // document.querySelector(".card-modal").show()
    };

    static closeModal(){
        this.modal.close()
    }

    static clearModal(){
    }

    static preventDefaultModal(){
        const form = document.querySelector(".card-modal")
        form.addEventListener("submit", (evt)=>{
            evt.preventDefault()
        })
    }
}
ModalManager.showModal() //FIXME: modal not showing up
ModalManager.preventDefaultModal()

function attachEventListenerTarget(target){
    target.addEventListener("click", ProjectManager.switchCurrentProject(project))
}


(function attachEventListenerBulk(){
    document.querySelector(".close-modal").addEventListener("click",ModalManager.closeModal)
    document.querySelector(".add-project").addEventListener("click", ProjectManager.createProject)
})();

//use svg to connect elemens
function connectTree(){

}

<<<<<<< HEAD
function update(){}
=======


function update(){}
>>>>>>> 5b2edbdbe577ed16717f09516272320ad729437e
