class ToDoObj{
    // constructor(){
    //     // this.name = name
    // }
    
    
    static makeSubItemArray(){
        return []
    }
    addSubItem(subItem){
        this.subItemArray.push(subItem)
    } //TODO:common method
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
proj1.addSubItem("ToDoProj1")
console.log('proj1.subItemArray:', proj1.subItemArray);

class ToDoCard extends ToDoProject{
    constructor(){
        super()
        this.cardDepthLevel = 0   
    }
    set listEditableProp(array){
        [this.name, this.description, this.dueDate, this.priority, this.isItComplete, this.checkList
        ] = array
        return
    }

    listEditableProp = [
        this.name, this.description, this.dueDate, this.priority, this.isItComplete, this.checkList
    ]

    // get printEditableProp(){
    //     return this.listEditableProp
    // }
    checkIfEditable(){}
    makeSubCardIterate(){
        const subCard = new ToDoCard()
        this.cardDepthLevel++
        this.subItemArray.push(subCard)
    }
}



const card1 = new ToDoCard("card1")
const card2 = new ToDoCard("card2")
console.log(card1.subItemArray);
// console.log('card1.listEditableProp:', card1.listEditableProp)
// card1.listEditableProp = ['name', 'desc' ]
// console.log('card1.listEditableProp:', card1.listEditableProp)

//Mixin for shared functionality between projects and to-do items
// Object.assign(ToDoItem, Project)
//Common methods
//delete, add

function addToDisplay(content){
    const elem = document.createElement("div")
    elem.textContent = content
    document.body.appendChild(elem)
}