import { useEffect, useMemo, useState } from 'react';
import TaskItem from './components/TaskItem';
import Header from './components/Header';
import ItemAdder from './components/ItemAdder';
import Progress from './components/Progress';
import Nav from './components/Nav';
import Displays from './components/Displays';
import { variables, lengthMeasure } from './store/store';
import useItem from './hooks/useItem';
import type { Task } from './store/types';

const App = () => {
  const [displayState, setDisplayState] = useState(variables.all);
  const [tasksArr, setTasksArr] = useState<Task[]>(() => {
    const initialTasks = localStorage.getItem('tasks');
    return initialTasks ? JSON.parse(initialTasks) : [];
  });

  const { addItem, toggler } = useItem();

  const displayedTasks = useMemo(
    () =>
      displayState === variables.all
        ? tasksArr
        : tasksArr.filter((task) => task.state === displayState),
    [tasksArr, displayState]
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
  }, [tasksArr]);

  function addBtnHandler(input: string): void {
    if (input) {
      setTasksArr((prevTasks) => addItem({ prevTasks, input }));
    }
  }

  function toggleCheckbox(id: string): void {
    setTasksArr((currTasks) => toggler({ currTasks, id }));
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
    <main
      className="pt-4 flex flex-col justify-evenly
       w-full items-center min-h-screen
       bg-slate-100"
    >
      <Header />
      <div className=" max-md:w-3/5 min-md:w-3/5 min-lg:w-3/5 flex flex-col justify-evenly">
        <ItemAdder addBtnHandler={addBtnHandler} />

        <Nav
          tasksArr={tasksArr}
          setDisplayState={setDisplayState}
          displayState={displayState}
          clearAll={clearAll}
        />

        {<Displays tasksArr={tasksArr} displayState={displayState} />}

        {displayedTasks.length > 0 && (
          <ul
            className=" bg-white 
        border-slate-200 border-[1px]
        rounded-xl flex flex-col     
         my-4 max-sm:my-2 "
          >
            {displayedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleCheckbox={toggleCheckbox}
                itemDeleteHandler={itemDeleteHandler}
              />
            ))}
          </ul>
        )}
        <Progress tasksArr={tasksArr} />
        <footer
          className="text-[0.6rem] my-4 self-center
      max-sm:my-2 "
        >
          {lengthMeasure(tasksArr, variables.active)} of {tasksArr.length} tasks
          remaining
        </footer>
      </div>
    </main>
  );
};

export default App;
