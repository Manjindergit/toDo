import { createProject } from "./project.js";

export const projectHandler = (() => {
  const projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => {
    return projects;
  }

  const showProjects = () => {
    console.log(projects);
  };

  return {
    addProject,
    showProjects,
    getProjects
  };
})();

//
projectHandler.addProject(createProject('project1'));
projectHandler.addProject(createProject('project2'));
const p1 = projectHandler.getProjects().find(project => project.title === '@project2');
p1.addTask('task1');
p1.addTask('task2');

