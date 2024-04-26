import display from "./displayManager.js"
import "./style.css"


class ToDoObj{
    // constructor(){
    //     // this.name = name
    // }
    
    
    static makeSubItemArray(){
        return []
    }
    removeSubItem(){}
    removeAllSubItems(){
    }   
}



class ToDoProject extends ToDoObj{
    static{
        this.numOfProjects = 0 //this here refers to the class, not instance
    }

    constructor(name){
        super()
        ToDoProject.numOfProjects++
        this.subItemArray = ToDoProject.makeSubItemArray()
        this.name = name
    }
}

const proj1 = new ToDoProject('test')
// console.log(proj1);


class ToDoCard extends ToDoProject{
    constructor(name){
        super()
        this.name = name || "default"
        this.cardDepthLevel = 0 
        // Printer.print(this)
        this.class
        // this.parent
    }
    static {
        this.maxCardDepthLevel = 0
    }
    
    static editableProps = ["name", "description", "dueDate", "priority", "isItComplete", "checkList", "whichProject"]

    // static editableProps = [this.name, this.description, this.dueDate, this."priority", "this"."isItComplete", this.checkList
    // ]
    set setCardProperties(propObj){
        //check argument object's properties against list
        Object.entries(propObj).forEach(([key,value]) =>{
            if(ToDoCard.editableProps.includes(key)){
                //set both key and value
                this[key] = value;

            }
        })
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



class ProjectManager{
    constructor(){
        
    }
    static {
        this.arrayOfProjects = []
        this.currentProject
    }

    static createProject(name = "Project"){
        display.addToDisplay(document.querySelector("nav ul"),name, "li")
        
        this[name] = new ToDoProject(name)
        const result = this[name]
        this.arrayOfProjects.push(result)
        return result
        this.switchCurrentProject(result)
    }

    static switchCurrentProject(projToSwitchTo){
        //if click on proj, switch to it
        //if create new proj, switch to it
        
    }
}

ProjectManager.createProject("proj 1")
ProjectManager.createProject("proj 2")
ProjectManager.createProject("proj 3")
// display.batchAdd(document.querySelector("nav ul"), ProjectManager.arrayOfProjects ,"li")


class DisplayPrinter{ //prints configured properties of an object
    static{ //configure printing options
        this.printAll = true
    }


    static printObjContents(obj){
        const toPrint = [
            obj.name,
            obj.description,
            obj.dueDate,
            obj.priority,
            obj.isItComplete,
            obj.checkList,
            obj.cardDepthLevel,
        ] 
        //TODO: consider printing everything without exceptions

        const objElem = obj.elemRef        
        const entries = Object.entries(obj)


        entries.forEach(entry =>{ 
            if(this.printAll === true){
                if(!this.checkIfShouldPrint(entry,toPrint)){
                    return
                }
            }
            const content = `${entry[0]} : ${entry[1]}`
            

            //TODO: organize this code separately
    
            const elem = display.addToDisplay(objElem,content)
            display.addClass(elem, entry[0])
            // display.addToDisplay(objElem)
            // display.addToDisplay("  ")            

        })
        objElem.classList.add(obj.name)

        objElem.classList.add("card")
        return {obj,objElem}
    }
    static checkIfShouldPrint(entry, toPrintArray){
        if(toPrintArray.includes(entry[1])){return true}
        else { return false}
        }

    static printSubItemRecurse(obj){
        if(!obj.subItemArray){
            console.log('no subArray');
            return
        }
        const container = document.querySelector(".doc-content")
        
        obj.subItemArray.forEach(item=>{
                const {objElem, obj: targetObj}  = this.printObjContents(item) //this = DisplayPrinter
                const parentElem = targetObj.parent.elemRef ? targetObj.parent.elemRef  : container
                
                parentElem.appendChild(objElem)
                this.printSubItemRecurse(item) //recursion here
        })

        function addDepthSeparator(depth,target){
            let content = "_"
            // content.concat("_".repeat(depth))
            content = content.repeat(depth * 2)
            // for(let i=0; i < depth + 1 ;i++){
            //     content.concat("-")
            // }
            display.addToDisplay(target,content)
        }   

        (function alternateColorByDepth(){
            if(!obj.cardDepthLevel)return
            if(obj.cardDepthLevel%2 ===0){obj.elemRef.style.backgroundColor = "red"}
        })()
        
    }
    
}


const card1 = new ToDoCard("card1D0")
// ToDoCard.maxCardDepthLevel
// console.log(card1);


const card3 = new ToDoCard("card3D0")
// card3.makeSubCard("card3D1") //depth max 2, current 1
// card3.makeSubCard("card3D1") //depth max 2, current 1

const card1D01S00 = card1.makeSubCard("card1D1")
const card1D02S00 = card1D01S00.makeSubCard("card1D02")
const card1D03S00 = card1D02S00.makeSubCard("card1D03") //depth max 2, current 2
const card1D02S01 = card1D02S00.makeSubCard("card1D03-1")
const card1D04S00 = card1D03S00.makeSubCard("card1D04")

DisplayPrinter.printSubItemRecurse(card1)

//Mixin for shared functionality between projects and to-do items



const testCard = new ToDoCard("testcard")
testCard.setCardProperties = {
    description:"blahblabblahblahblahblabhalbha",
    dueDate: "2/2/2024",
    eowqje: "SHOULDNT BE HERE - FAULTY PROPERTY NAME",
    priority: "high",
    isItComplete: false,
    checkList:[1,2,3,4,5],
    whichProject: "Project XYZ"
}


// Object.assign(ToDoItem, Project)
//Common methods
//delete, add