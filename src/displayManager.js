export default {createAndAddToDisplay, addClass, batchAdd}
// import "./project_manager.js"
import {ToDoProject} from "./index.js"


const docContent=document.querySelector(".doc-content")

function createAndAddToDisplay(target = docContent, content, elemType = "div") {
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


//TODO: when obj, create and embed these buttons:

//expand/collapse

//break down (new sublist)

//clear card

//delete card

//create new card(as sibling)

//moveto / change parent


function batchAdd(target, array, elemtype){ //keeps adding elements to a thing until there aren't more to add
    //define 1 batch
    array.forEach((item)=>{
        createAndAddToDisplay(target, item, elemtype)
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
// ModalManager.showModal() //FIXME: modal not showing up
// ModalManager.preventDefaultModal()


// function attachEventListenerTarget(target){
//     target.addEventListener("click", ProjectManager.switchCurrentProject(project))
// }


// (function attachEventListenerBulk(){
//     document.querySelector(".close-modal").addEventListener("click",ModalManager.closeModal)
//     document.querySelector(".add-project").addEventListener("click", ProjectManager.createProject)
// })();




