import { project } from "./project.js";

export const projectHandler = (() => {
  const projects = [];

  const addProject = (projectName) => {
    projects.push(project(projectName));
    localStorage.setItem(projectName, JSON.stringify(projects[0]))
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
