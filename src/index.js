// import { container } from "webpack"
import display from "./displayManager.js";
import "./style.css";
// import "./project-manager.js";
// import ProjectManagerJS from "./project_manager.js";

const projectsContainer = document.querySelector(".doc-content");
const testElem = document.querySelector(".doc-content");


class ToDoObj {
  // constructor(){
  //     // this.name = name
  // }
  static makeSubItemArray() {
    return [];
  }
  removeSubItem() {}
  removeAllSubItems() {}
}

class ToDoProject extends ToDoObj {
  static {
    this.numOfProjects = 0; //this here refers to the class, not instance
  }

  generateID(){
    const id = Math.floor(Math.random()*10000)
    return id
  }


  constructor(name) {
    super();
    ToDoProject.numOfProjects++;
    this.subItemArray = ToDoProject.makeSubItemArray();
    this.elemRef;
    this.name = name || "default";
    this.cardDepthLevel = 0;
    this.id = this.generateID()
  }
  makeSubItem(name) {
    const subItem = new ToDoCard(name);
    const objElem = document.createElement("div");
    subItem.elemRef = objElem;
    subItem.parent = this;
    subItem.cardDepthLevel = this.cardDepthLevel;
    subItem.cardDepthLevel++;
    // if(this.subItemArray.length === 0) {subCard.cardDepthLevel++};
    if (ToDoCard.maxCardDepthLevel < subItem.cardDepthLevel) {
      ToDoCard.maxCardDepthLevel = subItem.cardDepthLevel;
    }
    this.subItemArray.push(subItem);
    return subItem;
  }
}

// console.log(proj1);

class ToDoCard extends ToDoProject {
  constructor(name) {
    super();
    this.name = name;
    // Printer.print(this)
    this.class;
    // this.parent
  }
  static {
    this.maxCardDepthLevel = 0;
  }

  static editableProps = [
    "name",
    "description",
    "dueDate",
    "priority",
    "isItComplete",
    "checkList",
    "whichProject",
  ];

  // static editableProps = [this.name, this.description, this.dueDate, this."priority", "this"."isItComplete", this.checkList
  // ]
  set setCardProperties(propObj) {
    //check argument object's properties against list
    Object.entries(propObj).forEach(([key, value]) => {
      if (ToDoCard.editableProps.includes(key)) {
        //set both key and value
        this[key] = value;
      }
    });
  }

  //FIXME: read setter and gettter article, it may not be necessary to keep a separate array
  //also maybe I can just do listEditableProp = array

  // set cardProperties(propObj){
  //     array.forEach(prop){
  //         this.name, this.description, this.dueDate, this."priority", "this"."isItComplete", this.checkList
  //     }
  // }

  // listEditableProp = [
  //     this.name, this.description, this.dueDate, this."priority", "this"."isItComplete", this.checkList
  // ]

    checkIfEditable(){}
    makeSubCard(name){
        const subCard = new ToDoCard(name)

        const objElem = document.createElement("div")
        subCard.elemRef = objElem
        subCard.parent = this

        subCard.cardDepthLevel = this.cardDepthLevel
        subCard.cardDepthLevel++
        // if(this.subItemArray.length === 0) {subCard.cardDepthLevel++};
        if(ToDoCard.maxCardDepthLevel < subCard.cardDepthLevel){
            ToDoCard.maxCardDepthLevel = subCard.cardDepthLevel
        }
        this.subItemArray.push(subCard)


        return subCard
    }
}

// class ProjectManager{
//     constructor(){

//     }
//     static {
//         this.arrayOfProjects = []
//         this.currentProject
//     }

//     static switchCurrentProject(projToSwitchTo){
//         //if click on proj, switch to it
//         //if create new proj, switch to it
//         this.currentProject = projToSwitchTo
//         return this.currentProject
//     }

//     static createProject(name = "Project"){

//         //create project and put in project list
//         const elemLI = display.createAndAddToDisplay(document.querySelector("nav ul"),name, "li")

//         this[name] = new ToDoProject(name)
//         const createdProject = this[name]
//         this.arrayOfProjects.push(createdProject)
//         this.switchCurrentProject(createdProject)

//         //get project element and put it in the project object
//         const projectElem = display.createAndAddToDisplay(elemLI,"","div")
//         createdProject.projElemRef = projectElem

//         display.addClass(projectElem, name)
//         display.addClass(projectElem,"project","type")

//         // display.addClass(createdProjectname, "obj-name", );
//         // display.addClass(projectElem, name, "obj-name")
//         return projectElem
//     }

//     /**
//      *
//      * @param {Element} elem
//      */
//     static deleteProject(elem){
//             const projIndex = ProjectManager.arrayOfProjects.findIndex(item => {
//                 item.name === elem.className
//             })
//             ProjectManager.arrayOfProjects.splice(projIndex,1)
//     }

// }
// testElem.parentElement
// display.batchAdd(document.querySelector("nav ul"), ProjectManager.arrayOfProjects ,"li")

class DisplayPrinter {
  //prints configured properties of an object
  static {
    //configure printing options
    this.printAll = true;
  }

  static printObjContents(obj) {
    const toPrint = [
      obj.name,
      obj.description,
      obj.dueDate,
      obj.priority,
      obj.isItComplete,
      obj.checkList,
      obj.cardDepthLevel,
    ];
    //TODO: consider printing everything without exceptions

    const objElem = obj.elemRef;
    const entries = Object.entries(obj);

    entries.forEach((entry) => {
      if (this.printAll === true) {
        if (!this.checkIfShouldPrint(entry, toPrint)) {
          return;
        }
      }
      const content = `${entry[0]} : ${entry[1]}`;

      //TODO: organize this code separately

      const elem = display.createAndAddToDisplay(objElem, content);
      display.addClass(elem, entry[0]);
      // display.addToDisplay(objElem)
      // display.addToDisplay("  ")
    });
    objElem.classList.add(obj.name);

    objElem.classList.add("card");
    return { obj, objElem };
  }
  static checkIfShouldPrint(entry, toPrintArray) {
    if (toPrintArray.includes(entry[1])) {
      return true;
    } else {
      return false;
    }
  }

  static printSubItemRecurse(obj) {
    if (!obj.subItemArray) {
      console.log("no subArray");
      return;
    }

    obj.subItemArray.forEach((item) => {
      const { objElem, obj: targetObj } = this.printObjContents(item); //this = DisplayPrinter
      const parentElem = targetObj.parent.elemRef
        ? targetObj.parent.elemRef
        : projectsContainer;
      // parentElem.innerHTML = ""
      parentElem.appendChild(objElem);
      this.printSubItemRecurse(item); //recursion here
    });

    function addDepthSeparator(depth, target) {
      let content = "_";
      // content.concat("_".repeat(depth))
      content = content.repeat(depth * 2);
      // for(let i=0; i < depth + 1 ;i++){
      //     content.concat("-")
      // }
      display.createAndAddToDisplay(target, content);
    }

    (function alternateColorByDepth() {
      if (!obj.cardDepthLevel) return;
      if (obj.cardDepthLevel % 2 === 0) {
        obj.elemRef.style.backgroundColor = "red";
      }
    })();
  }
}

(function initialize() {
  display.dispInitialize();

  ProjectManager.createProject("proj1");
  ProjectManager.createProject("proj2");
  ProjectManager.createProject("proj3");

  ProjectManager.arrayOfProjects
  ProjectManager.arrayOfProjects[0].makeSubItem("card1D01").makeSubItem("card1D02")
  ProjectManager.arrayOfProjects[0].makeSubItem("test_proj1")

  ProjectManager.arrayOfProjects[1].makeSubItem("card2D01").makeSubItem("card2D02")

  console.log(ProjectManager.arrayOfProjects[0]);

  // proj1.makeSubItem("card1D01").makeSubItem("card1D02");
  // proj1.makeSubItem("test");
  // console.log(proj1);

  DisplayPrinter.printSubItemRecurse(ProjectManager.arrayOfProjects[0]);
})();

const testCard = new ToDoCard("testcard");
testCard.setCardProperties = {
  description: "blahblabblahblahblahblabhalbha",
  dueDate: "2/2/2024",
  eowqje: "SHOULDNT BE HERE - FAULTY PROPERTY NAME",
  priority: "high",
  isItComplete: false,
  checkList: [1, 2, 3, 4, 5],
  whichProject: "Project XYZ",
};

import ProjectManager from "./project-manager.js";

// function deleteProject(evt){
//     const liElem = evt.target.parentElement.parentElement
//     //delete from UI

//     liElem.remove()
//     //delete from projects list
//     ProjectManager.deleteProject(liElem)
// }

// function applyEventListeners(){
//     document.querySelectorAll("nav ul li div img").forEach(elem =>{
//         elem.addEventListener("click",deleteProject)
//     })
// }
// applyEventListeners()

export default ProjectManager;
export { ToDoObj, ToDoCard, ToDoProject, DisplayPrinter };


// export default {ToDoProject}
