user clicks add ToDoCard
calls displayManager
displayManager gets projectInfo(title, index#)

store card in a project
store project in a data


class Project{
    static{
        this.numOfProjects = 0
    }
    index
    

    //editables
    editableProp = {
        title, 
    }

    //self methods
    removeSelf()
    duplicate()
    changeEditable(title){
    }

    cardArray = [
        card1,
        card2
    ]


}

class ToDoCard {
    constructor(name){}
    index
    
    //self methods
    changeEditable(title, description, ...[editable]){
    }

    whichProject//to which project does it belong

    listEditableProp = {
        title, description, dueDate, priority, isItComplete, checkList
    }

    thingType
}

class projectDataManager{
    // receiveUserInput()
    // identifyThing()
    addThing()
    deleteThing()
    resetThingContents()
    duplicateThings

    dataBank{
        Array projectList[]    
    }
}

function thingTypeChecker(){

}



//////////////////////
function validator(){

}


class dataManager{}

addItemToProject{}




//Mixin for shared functionality between projects and to-do items

//Common methods
//delete, add