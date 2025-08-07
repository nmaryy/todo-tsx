import type { Task } from '../store/types';
import { variables } from '../store/store';

type addItemType = {
  prevTasks: Task[];
  input: string;
};
type togglerType = {
  currTasks: Task[];
  id: string;
};
const useItem = () => {
  const addItem = ({ prevTasks, input }: addItemType) => {
    return [
      {
        task: input,
        id: crypto.randomUUID(),
        date: new Date().toLocaleString(),
        state: variables.active,
      },
      ...prevTasks,
    ];
  };

  const toggler = ({ currTasks, id }: togglerType) => {
    return currTasks.map((foundTask) =>
      foundTask.id === id
        ? {
            ...foundTask,
            state:
              foundTask.state === variables.compeleted
                ? variables.active
                : variables.compeleted,
          }
        : foundTask
    );
  };

  return { addItem, toggler };
};

export default useItem;
