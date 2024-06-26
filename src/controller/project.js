import { createTasks } from './task.js';

export const project = (projectName) => {
  const tasks = [];
  const addTask = (title, description, dueDate, priority, notes) => {
    tasks.push(createTasks(title, description, dueDate, priority, notes));
    
  };
 

  const getTasks = () => {
    return tasks;
  }

  return {
    projectName,
    addTask,
    getTasks
  };
};

