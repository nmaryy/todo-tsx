import type { ReactNode } from 'react';

export type Task = {
  task: string;
  id: string;
  date: string;
  completed: boolean;
};

export type DisplayProps = {
  displayState: string;
};

export type NavProps = {
  setDisplayState: React.Dispatch<React.SetStateAction<string>>;
  displayState: string;
};

export type NavBtnProps = NavProps & {
  state: string;
};

export type TaskItemProps = {
  task: Task;
};

export type ContextProviderProp = { children: ReactNode };
export type MyContextProp = {
  tasksArr: Task[];
  setTasksArr: React.Dispatch<React.SetStateAction<Task[]>>;
  addBtnHandler: (input: string) => void;
  toggleCheckbox: (id: string) => void;
  itemDeleteHandler: (id: string) => void;
  clearAll: () => void;
};
