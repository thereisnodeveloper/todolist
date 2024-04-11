class Project{
    static{
        this.numOfProjects = 0
    }

    constructor(name){
        this.name = name
        Project.numOfProjects++
        console.log(Project.numOfProjects);
    }
    
    //
    removeItem(){
        console.log('removed item');
    }
    

}

class ToDoItem extends Project{
}
// Object.assign(ToDoItem, Project)

const instanceToDoItem = new ToDoItem()
// const newProj = new Project('bla')
