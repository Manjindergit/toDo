import { createProject } from "./controller/project.js";

document.addEventListener('DOMContentLoaded', function() {
    const project1 = createProject('project1');
    project1.addTask('task1');
    project1.addTask('task2');
    project1.showTask();
    
   

});

