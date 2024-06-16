import { createProject } from "./controller/project.js";

document.addEventListener('DOMContentLoaded', function() {
    
    const addProjBtn  = document.getElementById('btnAddProj');
    console.log(addProjBtn);
    addProjBtn.addEventListener('click', function() {
        const projName = document.getElementById('inputProject').value;
        const project = createProject(projName);
        console.log(project);
    });
    
    
});



