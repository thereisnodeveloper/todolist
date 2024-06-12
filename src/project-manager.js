import display from "./displayManager"
import { ToDoObj,ToDoCard,ToDoProject, attachIcons } from "./index"

function test(){
    console.log("test");
}


class ProjectManager{
    constructor(){
    }
    static {
        this.arrayOfProjects = []
        this.currentProject
    }


    static switchCurrentProject(projToSwitchTo){
        //if click on proj, switch to it
        //if create new proj, switch to it
        
        this.currentProject = projToSwitchTo


        // display current project
        const currentProjectElem = document.querySelector(".current-project")
        currentProjectElem.textContent= this.currentProject.name


        return this.currentProject        
    }

    static createProject(name = "Project"){
        //create project and put in project list
        const elemLI = display.createAndAddToDisplay(document.querySelector("nav ul"),name, "li")

        this[name] = new ToDoProject(name)
        const createdProject = this[name]
        this.arrayOfProjects.push(createdProject)
        this.switchCurrentProject(createdProject)

        //get project element and put it in the project object
        const projectElem = display.createAndAddToDisplay(elemLI,"","div")
        createdProject.projElemRef = projectElem

        display.addClass(projectElem, name)
        display.addClass(projectElem,"project","type")

        
        display.attachIcons(null,projectElem)
        

        //Clicking switches project
        display.applyEventListeners(elemLI,["click",display.selectProject])

        // console.log('ProjectManager.arrayOfProjects:', ProjectManager.arrayOfProjects)


    


        
        // display.addClass(createdProjectname, "obj-name", );
        // display.addClass(projectElem, name, "obj-name")
        return projectElem
    }

    /**
     * 
     * @param {Element} elem 
     */
    static deleteProject(elem){
            const projIndex = ProjectManager.arrayOfProjects.findIndex(item => {
                item.name === elem.className
            })      
            ProjectManager.arrayOfProjects.splice(projIndex,1)
    }

    
}

export default ProjectManager
