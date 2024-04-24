export default

class ProjectManager{
    static{
        this.projectsArray = []
        this.projNum = ToDoProject.numOfProjects
        this.currentProject
    }
        
    
    static createProject(name = "Project"){
        const elemLI = display.addToDisplay(name, document.querySelector("ul"),"button")
        const newProj = new ToDoProject(name)
        this.projectsArray.pop(newProj)
        //add eventlistener to li
        elemLI.addEventListener("click", this.switchCurrentProject(newProj)) //clicking the project buttonswitch to this project 
        //FIXME:
        
        
        console.log(elemLI);
    
        this.switchCurrentProject(newProj,elemLI) //immediately switch to this project upon creation
        return(newProj)
    }
    
    static switchCurrentProject(project){
        this.currentProject = project
        //if click on proj, switch to it
        //if create new proj, switch to it
        //swap out content with project content
        display.updateContainer(project)
    }
    
    static callDisplayProjArray(){ //calls display manager and displays the projArray
    }
    }
    