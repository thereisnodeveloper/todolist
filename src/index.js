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

    constructor(){
        super()
        ToDoProject.numOfProjects++
        this.subItemArray = ToDoProject.makeSubItemArray()
    }
}

const proj1 = new ToDoProject('test')
console.log('proj1.subItemArray:', proj1.subItemArray);

class ToDoCard extends ToDoProject{
    constructor(name){
        super()
        this.name = name || "default"
        this.cardDepthLevel = 0 
        // Printer.print(this)
        this.class
    }
    static {
        this.maxCardDepthLevel = 0
    }
    
    set listEditableProp(array){ //FIXME: read setter and gettter article, it may not be necessary to keep a separate array
        //also maybe I can just do listEditableProp = array
        [this.name, this.description, this.dueDate, this.priority, this.isItComplete, this.checkList
        ] = array
        return
    }
    
    listEditableProp = [
        this.name, this.description, this.dueDate, this.priority, this.isItComplete, this.checkList
    ]

    checkIfEditable(){}
    makeSubCard(name){
        const subCard = new ToDoCard(name)
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


class DisplayPrinter{ //prints configured properties of an object
    static{ //configure printing options
        this.printAll = true
    }
    static printObj(obj){
        const toPrint = [
            obj.name,
            obj.description,
            obj.dueDate,
            obj.priority,
            obj.isItComplete,
            obj.checkList,
            obj.cardDepthLevel,
            // obj.subItemArray
        ] 

        const entries = Object.entries(obj)
        const objElem = document.createElement("div")

        entries.forEach(entry =>{ 
            if(this.printAll === true){
                if(!this.checkIfShouldPrint(entry,toPrint)){
                    return
                }
            }
            const content = `${entry[0]} : ${entry[1]}`

            //TODO: organize this code separately
    
            const elem = display.addToDisplay(content, objElem)
            // display.addToDisplay(objElem)
            // display.addToDisplay("  ")            

        })
        document.querySelector(".doc-content").appendChild(objElem)
        objElem.classList.add(this.name)

        objElem.classList.add("card")
        return objElem
    }
    static checkIfShouldPrint(entry, toPrintArray){
        if(toPrintArray.includes(entry[1])){return true}
        else { return false}
        }

    static printSubItemRecurse(obj){
        console.log(obj.subItemArray);
        if(!obj.subItemArray){
            console.log('no subArray');
            return
        }
        obj.subItemArray.forEach(item=>{
            if(item.subItemArray[0]){
                const obj  = this.printObj(item)
                addDepthSeparator(item.cardDepthLevel,obj)

                this.printSubItemRecurse(item) //recursion here
                
            }
        })

        function addDepthSeparator(depth,target){
            let content = "_"
            for(let i=0; i < depth + 1 ;i++){
                content.concat("-")
            }
            display.addToDisplay(content,target)
        }   
    }
    
}


const card1 = new ToDoCard("card1D0")
// ToDoCard.maxCardDepthLevel
// console.log(card1);


const card3 = new ToDoCard("card3D0")
// card3.makeSubCard("card3D1") //depth max 2, current 1
// card3.makeSubCard("card3D1") //depth max 2, current 1
card1.makeSubCard("card1D1").makeSubCard("card1D2").makeSubCard("card1D3") //depth max 2, current 2

DisplayPrinter.printSubItemRecurse(card1)


// console.log('card1.subItemArray:', card1.subItemArray)

//Mixin for shared functionality between projects and to-do items
// Object.assign(ToDoItem, Project)
//Common methods
//delete, add