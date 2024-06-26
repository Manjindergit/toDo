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

export function loadStoredProjects(projectHandler){
  // Get all keys from local storage


  //add dummy project with tasks to avoid error
  localStorage.setItem("default", JSON.stringify([{title: "Task 1", description: "Task 1 description", dueDate: "2021-12-12", priority: "High", notes: "Task 1 notes"}]));

  let keys = Object.keys(localStorage);
  // Iterate over all keys
  keys.forEach((key) => {
    // Get the value of the key
    let value = JSON.parse(localStorage.getItem(key));
    console.log(value);
    // Create a new project
    projectHandler.addProject(key);
    // Get the project
    let project = projectHandler.getProjectName(key);
    // Iterate over all tasks
    value.forEach((task) => {
      // Add the task to the project
      project.addTask(task.title, task.description, task.dueDate, task.priority, task.notes);
    });
  
  });
}
