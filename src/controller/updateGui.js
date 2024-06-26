export function updateProjectList(projContainer, projectHandler) {
  // Clear the container

  projContainer.innerHTML = "";

  // Get all projects
  let projects = projectHandler.getProjects();

  // Create and append new project elements and also add button to add new task
  projects.forEach((project) => {
    let projCard = document.createElement("div");
    projCard.className = "project-card";
    projCard.setAttribute("id", project.projectName);
    projCard.textContent = project.projectName;
    projContainer.appendChild(projCard);
    
  });

}

export function updateTaskList(taskContainer, project) {
    // Clear the container
    taskContainer.innerHTML = "";
    
    // Get all tasks
    let tasks = project.getTasks();
    
    // Create and append new task elements
    tasks.forEach((task) => {
        let taskCard = document.createElement("div");
        taskCard.className = "task-card";
        taskCard.textContent = task.title;
        taskContainer.appendChild(taskCard);
    });
    }
