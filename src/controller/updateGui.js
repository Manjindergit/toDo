

export function updateProjectList(projContainer, projectHandler) {
    // Clear the container
    console.log('UPDATE FUNCTION');
    projContainer.innerHTML = '';

    // Get all projects
    let projects = projectHandler.getProjects();

    // Create and append new project elements and also add button to add new task
    projects.forEach((project) => {
        let projCard = document.createElement('div');
        projCard.className = 'project-card';
        projCard.setAttribute('id', project.projectName);
        projCard.textContent = project.projectName;
        projContainer.appendChild(projCard);
        console.log(projContainer);
    });

     // Update the current project handler


   

    //get form data

    
}


   

