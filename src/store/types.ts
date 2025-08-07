export type Task = {
  task: string;
  id: string;
  date: string;
  state: string;
};

export type DisplayProps = {
  displayState: string;
  tasksArr: Task[];
};

export type ItemAdderProps = {
  addBtnHandler: (input: string) => void;
};

export type NavProps = {
  setDisplayState: (state: string) => void;
  displayState: string;
  tasksArr: Task[];
  clearAll: () => void;
};

export type NavBtnProps = Omit<NavProps, 'clearAll'> & {
  state: string;
};

export type TaskItemProps = {
  task: Task;
  toggleCheckbox: (id: string) => void;
  itemDeleteHandler: (id: string) => void;
};
