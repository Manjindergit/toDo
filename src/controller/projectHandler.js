import { project } from "./project.js";

export const projectHandler = (() => {
  const projects = [];

  const addProject = (projectName) => {

    console.log(`NAme of project: ${projectName}`);

    if (projects.find((project) => project.projectName === projectName)) {
      alert("Project already exists");
      return;
    }

    else if(projectName === "default"){
      projects.push(project(projectName));
      return;
    }

    projects.push(project(projectName));
    localStorage.setItem(projectName, '[]');
  };

  const getProjects = () => {
    
    return projects;
  };

  const getProjectName = (projectName) => {
    return projects.find((project) => project.projectName === projectName);
  }

  return {
    addProject,
    getProjects,
    getProjectName
  };
})();
