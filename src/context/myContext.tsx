import { createContext, useState, useEffect } from 'react';
import type { ContextProviderProp } from '../store/types';
import type { MyContextProp } from '../store/types';
import type { Task } from '../store/types';
import { addItem, toggler } from '../store/util';

export const MyContext = createContext<MyContextProp>({
  tasksArr: [],
  setTasksArr: () => {},
  addBtnHandler: () => {},
  toggleCheckbox: () => {},
  itemDeleteHandler: () => {},
  clearAll: () => {},
});

const ContextProvider = ({ children }: ContextProviderProp) => {
  const [tasksArr, setTasksArr] = useState<Task[]>(() => {
    const initialTasks = localStorage.getItem('tasks');
    return initialTasks ? JSON.parse(initialTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
  }, [tasksArr]);

  function addBtnHandler(input: string): void {
    if (input) {
      setTasksArr((prevTasks) => addItem(prevTasks, input));
    }
  }

  function toggleCheckbox(id: string): void {
    setTasksArr((currTasks) => toggler(currTasks, id));
  }

  function itemDeleteHandler(id: string) {
    setTasksArr((currTasks) =>
      currTasks.filter((delTask) => delTask.id !== id)
    );
  }
  function clearAll() {
    setTasksArr([]);
    localStorage.removeItem('tasks');
  }

  return (
    <MyContext.Provider
      value={{
        tasksArr,
        setTasksArr,
        addBtnHandler,
        toggleCheckbox,
        itemDeleteHandler,
        clearAll,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
