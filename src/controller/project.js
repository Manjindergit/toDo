import { createTasks } from './task.js';

/* {createTasks}
//export a module from this file

export function createTasks(title, description, dueDate, priority, notes) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
  };
}


*/

export const project = (projectName) => {
  const tasks = [];
console.log('this line is alsoo running');
  const addTask = (title, description, dueDate, priority, notes) => {
    tasks.push(createTasks(title, description, dueDate, priority, notes))};

  const getTasks = () => {
    return tasks;
  }

  return {
    projectName,
    addTask,
    getTasks
  };
};

