import type { Task } from './types';

export const variables = {
  all: 'ALL',
  active: 'ACTIVE',
  completed: 'COMPLETED',
};

export const tasksFilter = (tasks: Task[], state: string) => {
  if (state === variables.completed) {
    return tasks.filter((task) => task.completed);
  } else if (state === variables.active) {
    return tasks.filter((task) => !task.completed);
  } else {
    return tasks;
  }
};

export const addItem = (prevTasks: Task[], input: string) => {
  return [
    {
      task: input,
      id: crypto.randomUUID(),
      date: new Date().toLocaleString(),
      completed: false,
    },
    ...prevTasks,
  ];
};

export const toggler = (currTasks: Task[], id: string) => {
  return currTasks.map((foundTask) =>
    foundTask.id === id
      ? {
          ...foundTask,
          completed: !foundTask.completed,
        }
      : foundTask
  );
};
