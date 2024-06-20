import { project } from "./project.js";

export const projectHandler = (() => {
  const projects = [];

  const addProject = (projectName) => {
    console.log('this oline is running');
    projects.push(project(projectName));
  };

  const getProjects = () => {
    return projects;
  };

  return {
    addProject,
    getProjects,
  };
})();
