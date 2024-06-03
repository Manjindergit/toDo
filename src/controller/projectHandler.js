import { createProject } from "./project.js";

export const projectHandler = (() => {
    const projects = [];
    
    const addProject = (project) => {
        projects.push(project);
    };
    
    const showProjects = () => {
        console.log(projects);
    };
    
    return {
        addProject,
        showProjects,
    };
    })();

