import { projectHandler } from "./controller/projectHandler.js";
import { updateProjectList, updateTaskList } from "./controller/updateGui.js";

document.addEventListener("DOMContentLoaded", function () {
  const addProjBtn = document.getElementById("btnAddProj");
  const projContainer = document.getElementById("projectContainer");
  const addTaskForm = document.getElementById("addTaskForm");
  const formDiv = document.getElementById("taskForm");
  const taskContainer = document.getElementById("taskContainer");
  //display all projects from projectHandler

  updateProjectList(projContainer, projectHandler);

  addProjBtn.addEventListener("click", function () {
    const projName = document.getElementById("inputProject").value;
    projectHandler.addProject(projName);
    taskContainer.style.display = "none";
    updateProjectList(projContainer, projectHandler);
  });

  projContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-card")) {
      formDiv.style.display = "block";
      document.getElementById("taskForm").setAttribute("data", e.target.id);
      const project = projectHandler.getProjectName(e.target.id);
      taskContainer.style.display = "block";
      updateTaskList(taskContainer, project);
    }
  });

  addTaskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDescription").value;
    const taskDue = document.getElementById("taskDueDate").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const taskStatus = document.getElementById("taskStatus").value;
    const notes = document.getElementById("taskNotes").value;
    //reset form
    addTaskForm.reset();
    formDiv.style.display = "none";

    const project = projectHandler.getProjectName(
      e.target.parentElement.getAttribute("data")
    );
    localStorage.removeItem(project.projectName);

    project.addTask(
      taskName,
      taskDesc,
      taskDue,
      taskPriority,
      taskStatus,
      notes
    );

    updateTaskList(taskContainer, project);
    projectHandler
      .getProjects()
      .forEach((proj) => 
        localStorage.setItem(proj.projectName,JSON.stringify(proj.getTasks()))
    
    );





  });
});
