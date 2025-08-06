import { useEffect, useState } from 'react';
import TaskItem from './components/TaskItem';
import Header from './components/Header';
import ItemAdder from './components/ItemAdder';
import Progress from './components/Progress';
import Nav from './components/Nav';
import Displays from './components/Displays';

export type Task = {
  task: string;
  id: string;
  date: string;
  state: 'Active' | 'Completed';
};

const App = () => {
  const [displayState, setDisplayState] = useState<
    'All' | 'Active' | 'Completed'
  >('All');

  const [tasksArr, setTasksArr] = useState<Task[]>(() => {
    const initialTasks = localStorage.getItem('tasks');
    return initialTasks ? JSON.parse(initialTasks) : [];
  });

  const completedCount = tasksArr.filter(
    (task) => task.state === 'Completed'
  ).length;
  const activeCount = tasksArr.filter((task) => task.state === 'Active').length;
  const allCount = tasksArr.length;

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
  }, [tasksArr]);

  function addBtnHandler(input: HTMLInputElement): void {
    if (input) {
      const newTask = input.value.trim();
      if (newTask) {
        setTasksArr((prevTasks) => {
          return [
            {
              task: newTask,
              id: crypto.randomUUID(),
              date: new Date().toLocaleString(),
              state: 'Active',
            },
            ...prevTasks,
          ];
        });
      }
      input.value = '';
    }
  }

  function toggleCheckbox(id: string) {
    setTasksArr((currTasks) =>
      currTasks.map((foundTask) =>
        foundTask.id === id
          ? {
              ...foundTask,
              state: foundTask.state === 'Completed' ? 'Active' : 'Completed',
            }
          : foundTask
      )
    );
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

  function handleRender() {
    let filteredTasks;
    if (displayState === 'All' && allCount > 0) {
      filteredTasks = tasksArr;
    } else if (displayState === 'Active' && activeCount > 0) {
      filteredTasks = tasksArr.filter((task) => task.state === 'Active');
    } else if (displayState === 'Completed' && completedCount > 0) {
      filteredTasks = tasksArr.filter((task) => task.state === 'Completed');
    } else {
      return [];
    }

    return (
      <ul
        className=" bg-white 
        border-slate-200 border-[1px]
        rounded-xl flex flex-col     
         my-4 max-sm:my-2 "
      >
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task.task}
            id={task.id}
            date={task.date}
            state={task.state}
            toggleCheckbox={toggleCheckbox}
            itemDeleteHandler={itemDeleteHandler}
          />
        ))}
      </ul>
    );
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
          completedCount={completedCount ?? 0}
          activeCount={activeCount ?? 0}
          allCount={allCount ?? 0}
          setDisplayState={setDisplayState}
          displayState={displayState}
          clearAll={clearAll}
        />

        {
          <Displays
            completedCount={completedCount}
            activeCount={activeCount}
            allCount={allCount}
            displayState={displayState}
          />
        }

        {allCount > 0 && handleRender()}
        <Progress
          completedCount={completedCount ?? 0}
          activeCount={activeCount ?? 0}
          allCount={allCount ?? 0}
        />
        <footer
          className="text-[0.6rem] my-4 self-center
      max-sm:my-2 "
        >
          {activeCount} of {allCount} tasks remaining
        </footer>
      </div>
    </main>
  );
};

export default App;
