export function findProject(projectHandler, projectName) {
  let projects = projectHandler.getProjects();
  let project = projects.find((project) => project.projectName === projectName);
  return project;
}