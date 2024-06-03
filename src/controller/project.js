import { createTasks } from './task.js';

export const createProject=(name)=> {
  const tasksArr = [];

  const addTask = (task) => {
    tasksArr.push(task);
  };

  const showTask = () => {
    console.log(tasksArr);
  };

  return {
    title: `@${name}`,
    addTask,
    showTask,
  };
}



