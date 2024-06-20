import { projectHandler } from "./controller/projectHandler.js";
import { updateProjectList } from "./controller/updateGui.js";

document.addEventListener('DOMContentLoaded', function() {
    
    const addProjBtn  = document.getElementById('btnAddProj');
    const projContainer = document.getElementById('projectContainer');
    const addTaskForm = document.getElementById('addTaskForm');
    //display all projects from projectHandler

    updateProjectList(projContainer, projectHandler);

    addProjBtn.addEventListener('click', function() {
        const projName = document.getElementById('inputProject').value;
        projectHandler.addProject(projName);
        updateProjectList(projContainer, projectHandler);
       
    });
    
    projContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-card')) {
            document.getElementById('taskForm').style.display = 'block';
            document.getElementById('taskForm').setAttribute('data', e.target.id);
            console.log(`THIS FUNCTION IS RUNNING TOO ${e.target.id}`);

        }
    });

    addTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(e.target.parentElement);
        const taskName = document.getElementById('taskName').value;
        const taskDesc = document.getElementById('taskDescription').value;
        const taskDue = document.getElementById('taskDueDate').value;
        const taskPriority = document.getElementById('taskPriority').value;
        const taskStatus = document.getElementById('taskStatus').value;
        const notes = document.getElementById('taskNotes').value;
        
        const project  = projectHandler.getProjects().find((proj) => proj.projectName === e.target.parentElement.getAttribute('data'));
        project.addTask(taskName, taskDesc, taskDue, taskPriority, taskStatus, notes);

        console.log(projectHandler.getProjects()[0].getTasks());
        projectHandler.getProjects().forEach((proj) => console.log(proj.getTasks()));
       
    });


});






