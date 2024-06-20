//export a module from this file

export function createTasks(title, description, dueDate, priority, notes) {
  console.log('it was also in tasks');
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
  };
}



