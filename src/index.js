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




const card1 = new ToDoCard("card1D0")
// ToDoCard.maxCardDepthLevel
card1.makeSubCard("card1D1").makeSubCard("card1D2") //depth max 2, current 2
const card3 = new ToDoCard("card3D0")
card3.makeSubCard("card3D1") //depth max 2, current 1
card3.makeSubCard("card3D1") //depth max 2, current 1
card1.makeSubCard("card1D1").makeSubCard("card1D2").makeSubCard("card1D3") //depth max 2, current 2


// card1.makeSubCard()

// card1.makeSubCard().makeSubCard()

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